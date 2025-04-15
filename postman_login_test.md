# Testing Login API with Postman

This guide provides instructions for testing the MediShare login API endpoint using Postman and curl.

## API Endpoint Details

- **URL**: `http://localhost:5003/api/auth/login`
- **Method**: POST
- **Content-Type**: application/json

## Using Postman UI

1. Open Postman application
2. Create a new request:
   - Click the "New" button
   - Select "Request"
   - Name it "MediShare Login"
   - Save to a collection (create one if needed)

3. Configure the request:
   - Set the HTTP method to **POST**
   - Enter URL: `http://localhost:5003/api/auth/login`

4. Set Headers:
   - Click on the "Headers" tab
   - Add a new header:
     - Key: `Content-Type`
     - Value: `application/json`

5. Set Request Body:
   - Click on the "Body" tab
   - Select "raw"
   - Choose "JSON" from the dropdown
   - Enter the following JSON:

```json
{
    "email": "your-email@example.com",
    "password": "your-password"
}
```

6. Click the "Send" button

7. Expected Response (Success):
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "user-id",
        "name": "User Name",
        "email": "your-email@example.com",
        "phone": "1234567890"
    }
}
```

## Using curl Command

You can also test the login API using curl in your terminal:

```bash
curl -X POST \
  http://localhost:5003/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
}'
```

## Troubleshooting

- **400 Bad Request**: Check if your email format is valid and password is provided
- **400 Invalid credentials**: Email or password is incorrect
- **500 Server error**: Backend server issue, check server logs

## Notes

- The server runs on port 5003 as configured in the backend .env file
- The JWT token expires in 7 days
- Replace "your-email@example.com" and "your-password" with actual credentials
- The returned token should be used in subsequent authenticated requests with the Authorization header: `Bearer <token>`