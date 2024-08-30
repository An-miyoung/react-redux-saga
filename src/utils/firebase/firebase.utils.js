import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwgCyhVkncGx4RmkGYgGOBlhpsH8EdWKk",
  authDomain: "react-redux-shop-738f0.firebaseapp.com",
  projectId: "react-redux-shop-738f0",
  storageBucket: "react-redux-shop-738f0.appspot.com",
  messagingSenderId: "304693083497",
  appId: "1:304693083497:web:5804bf122821a44f8111f8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async () => {
  const userDocRef = doc(db, "users", auth.currentUser.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = auth.currentUser;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("사용자계정 먼들기에 실패했씁니다.", error.message);
    }
  }

  return userDocRef;
};
