import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  // Donor Information
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  phoneVerified: {
    type: Boolean,
    default: false
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  
  // Medication Information
  medicineName: {
    type: String,
    required: [true, 'Medicine name is required']
  },
  quantity: {
    type: String,
    required: [true, 'Quantity is required']
  },
  expiryDate: {
    type: Date,
    required: [true, 'Expiry date is required']
  },
  condition: {
    type: String,
    enum: ['unopened', 'sealed', 'partial'],
    default: 'unopened'
  },
  additionalInfo: {
    type: String
  },
  
  // Status tracking
  status: {
    type: String,
    enum: ['pending', 'approved', 'collected', 'distributed', 'rejected'],
    default: 'pending'
  },
  statusUpdatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the 'updatedAt' field on save
donationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;