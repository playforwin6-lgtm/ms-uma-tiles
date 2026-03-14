import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


const firebaseConfig = {
apiKey: "AIzaSyDl2itMcZuynH-oIS0Jn_fDnMSd-ZdP-So",
    authDomain: "ms-uma-tiles.firebaseapp.com",
    projectId: "ms-uma-tiles",
    storageBucket: "ms-uma-tiles.firebasestorage.app",
    messagingSenderId: "103744240101",
    appId: "1:103744240101:web:785e968d6904f79731970c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
