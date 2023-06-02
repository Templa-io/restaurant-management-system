// Import the necessary modules and initialize the Firebase Admin SDK
const admin = require('firebase-admin');
const express = require('express');
const app = express();

// Initialize the Firebase Admin SDK
admin.initializeApp();

// Define an endpoint to handle the authentication logic
app.post('/authenticate', (req, res) => {
  const email = 'user@admin.example.com'; // Replace with the desired email

  admin
    .auth()
    .getUserByEmail(email)
    .then((user) => {
      // Confirm user is verified.
      if (user.emailVerified) {
        // Add custom claims for additional privileges.
        // This will be picked up by the user on token refresh or next sign in on a new device.
        return admin.auth().setCustomUserClaims(user.uid, {
          admin: true,
        });
      } else {
        throw new Error('User email is not verified');
      }
    })
    .then(() => {
      res.status(200).send('User authentication and claims set successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error occurred during authentication');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});