import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithWmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import errorMessageToKorean from "../../utils/errorMessageToKorean";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => await signInWithGooglePopup();

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
      await signInAuthUserWithWmailAndPassword(email, password);

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
            <Button
              type="button"
              onClick={signInWithGoogle}
              buttonType={BUTTON_TYPES_CLASSES.google}
            >
              Google 로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
