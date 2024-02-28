import { FieldInputProps } from "formik";
import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames";
import "./Style.scss";

interface InputProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  field?: FieldInputProps<any>;
  classes?: string;
}

const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  description,
  errorMessage,
  field,
  classes,
  disabled,
  ...props
}) => {
  return (
    <div
      className={classNames("form-field", classes, {
        invalid: !!errorMessage,
        disabled: disabled,
      })}
    >
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
      {errorMessage && (
        <div className="form-field__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
