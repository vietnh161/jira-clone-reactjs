import classNames from "classnames";
import { FieldInputProps } from "formik";
import { FC, ReactNode, useEffect, useState } from "react";
import "./Style.scss";

interface SelectOption {
  label: React.ReactNode;
  value: string | number;
}

interface SelectProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  field?: FieldInputProps<any>;
  classes?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  open?: boolean;
  value?: string | number;
  options?: SelectOption[];
  renderValue?: (value: SelectOption) => ReactNode;
  onChange?: (value: SelectOption) => void;
  onDropdownVisibleChange?: (open: boolean) => void;
}

const Select: FC<SelectProps> = ({
  label,
  description,
  errorMessage,
  field,
  disabled,
  classes,
  id,
  value,
  open,
  placeholder,
  options,
  renderValue,
  onChange,
  onDropdownVisibleChange,
}) => {
  const [localOpen, setLocalOpen] = useState(false);
  const showMenu = (val?: boolean) => {
    if (open === undefined) setLocalOpen(val || !localOpen);
    else onDropdownVisibleChange && onDropdownVisibleChange(val || !open);
  };

  const getVal = () => {
    return field ? field.value : value;
  };

  const displaySelectValue = () => {
    const val = getVal();

    if (val === undefined) {
      return (
        placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )
      );
    } else {
      const itemSelected = options?.find((item) => item.value === val);
      if (!itemSelected)
        return (
          placeholder && (
            <span className="select__placeholder">{placeholder}</span>
          )
        );
      return (
        <span className="select__value-text">
          {renderValue ? renderValue(itemSelected) : itemSelected.label}
        </span>
      );
    }
  };

  const handleClickOption = (option: SelectOption) => {
    if (disabled) return;
    showMenu(false);
    onChange && onChange(option);
    field?.onChange(field.name);
  };

  return (
    <div
      className={classNames("form-field", classes, {
        invalid: !!errorMessage,
        disabled: disabled,
      })}
    >
      {label && (
        <label className="form-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="form-field__select">
        <div className="select__value" onClick={() => showMenu()}>
          {displaySelectValue()}
        </div>

        {(open || localOpen) && (
          <div className="select__menu">
            {options?.map((option) => (
              <div
                className={classNames("select__menu-option", {
                  "is-active": option.value === getVal(),
                })}
                key={option.value}
                onClick={() => handleClickOption(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        {description && (
          <div className="form-field__description">{description}</div>
        )}
        {errorMessage && (
          <div className="form-field__error-message">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Select;
