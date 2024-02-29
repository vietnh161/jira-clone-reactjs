import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import "./Style.scss";

interface SelectOption {
  label: React.ReactNode;
  value: string | number;
}

interface SelectProps {
  classes?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  open?: boolean;
  value?: string | number;
  options?: SelectOption[];
  renderValue?: (value: SelectOption) => ReactNode;
  onDropdownVisibleChange?: (open: boolean) => void;
  onChange?: (value: string | number) => void;
}

const Select: FC<SelectProps> = ({
  disabled,
  invalid,
  classes,
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

  const displaySelectValue = () => {
    if (value === undefined) {
      return (
        placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )
      );
    } else {
      const itemSelected = options?.find((item) => item.value === value);
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
    onChange && onChange(option.value);
  };

  return (
    <div className={classNames("select", classes, { disabled, invalid })}>
      <div className="select__value" onClick={() => showMenu()}>
        {displaySelectValue()}
      </div>

      {(open || localOpen) && (
        <div className="select__menu">
          {options?.map((option) => (
            <div
              className={classNames("select__menu-option", {
                "is-active": option.value === value,
              })}
              key={option.value}
              onClick={() => handleClickOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
