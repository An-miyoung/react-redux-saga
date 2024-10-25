import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import errorMessageToKorean from "../../utils/errorMessageToKorean";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
      navigate("/");
    } catch (error) {
      error.code && alert(errorMessageToKorean(error.code));
      console.log("사용자계정 먼들기에 실패했씁니다.", error.message);
    }
  };

  return (
    <SignUpContainer>
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

        <Button type="submit" buttonType={BUTTON_TYPES_CLASSES.base}>
          회원가입
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
