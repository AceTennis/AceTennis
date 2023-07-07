
  // Import Firebase SDKs
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Import FirebaseUI if using FirebaseUI
import * as firebaseui from 'firebaseui';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd09989D3O9QrsCOz_deiryKYO2DFB_WA",
  authDomain: "acetennis-50612.firebaseapp.com",
  projectId: "acetennis-50612",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access Firebase services
const auth = firebase.auth();
const firestore = firebase.firestore();

// Check if the current page is the login/sign-up page
const isLoginPage = (window.location.pathname === 'login.html '); // Replace '/login' with the actual login page URL

// FirebaseUI setup and configuration if using FirebaseUI
if (isLoginPage) {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
    // FirebaseUI configuration options here
  };

  // Render FirebaseUI widget
  ui.start('#firebaseui-auth-container', uiConfig);
}

// Other JavaScript code for your application
// ...
