import { ErrorMessage, useField } from "formik";
import "./Style.scss";

interface InputProps {
  label?: string;
  description?: string;
}

const Input = ({...props}: any) => {
  const { label, description } = props;
  const [field] = useField(props);
  return (
    <div className="form-field">
      {label && (
        <label className="form-field__label" htmlFor={props.id || props.name}>
          {label}
        </label>
      )}
      <div className="form-field__input">
        <input {...field} {...props} />
      </div>
      {description && (
        <div className="form-field__description">{description}</div>
      )}
      {/* <ErrorMessage name={props.name} className="form-field__error-message" /> */}
    </div>
  );
};

export default Input;
