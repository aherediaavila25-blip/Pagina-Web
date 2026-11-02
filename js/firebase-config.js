 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCkDDgVQ_CUo1PdKFZQGWJl57004pM7GnE",
    authDomain: "luok-6bc9c.firebaseapp.com",
    projectId: "luok-6bc9c",
    storageBucket: "luok-6bc9c.firebasestorage.app",
    messagingSenderId: "453685471020",
    appId: "1:453685471020:web:1669bb424635bb814f6e89",
    measurementId: "G-B2L8M638Z8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);