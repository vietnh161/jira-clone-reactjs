import classNames from "classnames";
import { useField } from "formik";
import React, { FC, ReactNode } from "react";
import "./Style.scss";

interface FormFieldProps {
  name: string;
  children: ReactNode;
  label?: string;
  description?: string;
  classes?: string;
}

const FormField: FC<FormFieldProps> = ({
  name,
  children,
  label,
  description,
  classes,
}) => {
  const [field, meta, helper] = useField(name);
  const props: any = {
    value: field.value,
    name: name,
    invalid: meta.touched && meta.error,
    onChange: (val: any) => helper.setValue(val),
    onBlur: (val: any) => field.onBlur(val),
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...props,
      });
    }
    return child;
  });

  return (
    <div
      className={classNames("form-field", classes, {
        invalid: !!meta.touched && meta.error,
      })}
    >
      {label && <label className="form-field__label">{label}</label>}
      <div className="form-field__control">{childrenWithProps}</div>
      {description && (
        <div className="form-field__description">{description}</div>
      )}
      {meta.touched && meta.error && (
        <div className="form-field__error-message">{meta.error}</div>
      )}
    </div>
  );
};

export default FormField;
