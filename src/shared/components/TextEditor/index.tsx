import classNames from "classnames";
import { FieldInputProps } from "formik";
import { FC } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "./Style.scss";

interface TextEditorProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  field?: FieldInputProps<any>;
  classes?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextEditor: FC<TextEditorProps & ReactQuillProps> = ({
  label,
  description,
  errorMessage,
  field,
  classes,
  id,
  disabled,
  ...props
}) => {
  const value = field ? field.value : (props.value || props.defaultValue);
  const onChangeFn = field ? field.onChange(field.name) : props.onChange;
  return (
    <div
      className={classNames("form-field", classes, {
        invalid: !!errorMessage,
        disabled: !!disabled,
      })}
    >
      {label && (
        <label className="form-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="form-field__text-editor">
        <ReactQuill
          theme="snow"
          id={id}
          value={value}
          onChange={onChangeFn}
          {...props}
        />
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

export default TextEditor;
