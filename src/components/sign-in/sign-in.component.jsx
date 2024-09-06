import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import SignUpForm from "../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="">
      <Button onClick={logGoogleUser} buttonType="google">
        Google 계정으로 로그인
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
