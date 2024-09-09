import { useContext, useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import errorMessageToKorean from "../../utils/errorMessageToKorean";
import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 서로 다릅니다.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );
      setCurrentUser(user.uid);
      await createUserDocumentFromAuth(user, {
        displayName,
      });

      resetFormFields();
      navigate("/");
    } catch (error) {
      error.code && alert(errorMessageToKorean(error.code));
      console.log("사용자계정 먼들기에 실패했씁니다.", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>아직 회원이 아니신가요?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="이름"
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          required
        />

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

        <FormInput
          label="비밀번호확인"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        />

        <Button type="submit">회원가입</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
