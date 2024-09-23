import { Group, FormInputLabel, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        // <FormInputLabel shrink={otherProps.value.length}> 가능.
        // otherProps.value.length >0 이면 truthy 라서 shrink 는 true
        <FormInputLabel shrink={otherProps.value.length ? `shrink` : null}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
