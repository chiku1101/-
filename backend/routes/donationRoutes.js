import express from 'express';
import { check, validationResult } from 'express-validator';
import Donation from '../models/Donation.js';
import User from '../models/User.js';

const router = express.Router();

// Middleware to verify JWT token
import verifyToken from '../middleware/auth.js';

// @route   POST api/donations
// @desc    Create a new donation
// @access  Public (but requires phone verification)
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'Please include a valid phone number').isMobilePhone(),
    check('address', 'Address is required').not().isEmpty(),
    check('medicineName', 'Medicine name is required').not().isEmpty(),
    check('quantity', 'Quantity is required').not().isEmpty(),
    check('expiryDate', 'Expiry date is required').isDate(),
    check('condition', 'Condition must be valid').isIn(['unopened', 'sealed', 'partial'])
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
      name, 
      email, 
      phone, 
      address, 
      medicineName, 
      quantity, 
      expiryDate, 
      condition, 
      additionalInfo 
    } = req.body;

    try {
      // Check if phone is verified (if user exists)
      const user = await User.findOne({ phone });
      
      // Create new donation
      const donation = new Donation({
        name,
        email,
        phone,
        address,
        medicineName,
        quantity,
        expiryDate,
        condition,
        additionalInfo,
        status: 'pending',
        // If user exists and is verified, mark phone as verified
        phoneVerified: user ? user.phoneVerified : false
      });

      // Save donation to database
      await donation.save();

      res.status(201).json({
        success: true,
        data: donation,
        message: 'Donation submitted successfully'
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/donations
// @desc    Get all donations
// @access  Private (Admin only)
router.get('/', verifyToken, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/donations/user
// @desc    Get user's donations
// @access  Private
router.get('/user', verifyToken, async (req, res) => {
  try {
    const donations = await Donation.find({ 
      $or: [
        { email: req.user.email },
        { phone: req.user.phone }
      ]
    }).sort({ createdAt: -1 });
    
    res.json(donations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/donations/:id
// @desc    Get donation by ID
// @access  Private
router.get('/:id', verifyToken, async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    
    if (!donation) {
      return res.status(404).json({ msg: 'Donation not found' });
    }

    // Check if user is admin or the donation owner
    if (req.user.role !== 'admin' && 
        donation.email !== req.user.email && 
        donation.phone !== req.user.phone) {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    res.json(donation);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Donation not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route   PUT api/donations/:id
// @desc    Update donation status
// @access  Private (Admin only)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Not authorized' });
    }

    const { status } = req.body;
    
    // Validate status
    if (!['pending', 'approved', 'collected', 'distributed', 'rejected'].includes(status)) {
      return res.status(400).json({ msg: 'Invalid status' });
    }

    const donation = await Donation.findById(req.params.id);
    
    if (!donation) {
      return res.status(404).json({ msg: 'Donation not found' });
    }

    // Update status
    donation.status = status;
    donation.statusUpdatedAt = Date.now();
    
    await donation.save();

    res.json(donation);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Donation not found' });
    }
    res.status(500).send('Server error');
  }
});

export default router;