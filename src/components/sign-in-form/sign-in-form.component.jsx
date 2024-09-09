import { useContext, useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithWmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import errorMessageToKorean from "../../utils/errorMessageToKorean";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user.uid);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithWmailAndPassword(
        email,
        password
      );
      setCurrentUser(user.uid);
      resetFormFields();
      navigate("/");
    } catch (error) {
      error.code && alert(errorMessageToKorean(error.code));
      console.log("로그인에 실패했습니다.", error.message);
    }
  };

  return (
    <div className="">
      <div className="sign-in-container">
        <h2>이미 회원이신가요?</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="이메일"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />

          <FormInput
            label="비밀번호"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
          <div className="buttons-container">
            <Button type="submit">로그인</Button>
            <Button type="button" onClick={logGoogleUser} buttonType="google">
              Google 로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
