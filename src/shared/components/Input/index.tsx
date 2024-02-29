import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";
import "./Style.scss";

interface InputProps {
  classes?: string;
  invalid?: boolean;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  classes,
  invalid,
  onChange,
  ...props
}) => {
  return (
    <div
      className={classNames("input", classes, {
        disabled: props.disabled,
        invalid: invalid,
      })}
    >
      <input
        {...props}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
