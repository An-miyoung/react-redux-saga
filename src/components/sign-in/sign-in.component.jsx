import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    // const { user } = await signInWithGooglePopup();
    // createUserDocumentFromAuth(user);
    await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth();
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Google 계정으로 로그인</button>
    </div>
  );
};

export default SignIn;
