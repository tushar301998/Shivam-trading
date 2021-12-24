import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCDUIIIlCBmiXA2ZeA49PDfKN_j6c2yOz4",
  authDomain: "shivam-trading-99fe2.firebaseapp.com",
  projectId: "shivam-trading-99fe2",
  storageBucket: "shivam-trading-99fe2.appspot.com",
  messagingSenderId: "904299079392",
  appId: "1:904299079392:web:84a4ca8d70146e093bd285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
