import classNames from "classnames";
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import "./Style.scss";
import useOnOutsideClick from "../../hooks/onOutsideClick";

export interface SelectOption {
  label: React.ReactNode;
  value: string | number;
}

export interface SelectProps {
  classes?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  open?: boolean;
  value?: string | number;
  options?: SelectOption[];
  renderValue?: (value: SelectOption) => ReactNode;
  onDropdownVisibleChange?: (open: boolean) => void;
  onChange?: (value: string | number, option: SelectOption) => void;
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
  const [localValue, setLocalValue] = useState<string | number>();
  const menuRef = useRef<HTMLDivElement>(null);

  useOnOutsideClick(menuRef, () => {
    showMenu(false);
  });

  useEffect(() => {
    if (value === undefined) {
      setLocalValue(undefined);
    }
  }, [value]);

  const getValue = () => {
    if (value === undefined) return localValue;
    return value;
  };

  const showMenu = (val?: boolean) => {
    if (open === undefined) setLocalOpen(val ?? !localOpen);
    else onDropdownVisibleChange && onDropdownVisibleChange(val ?? !open);
  };

  const displaySelectValue = () => {
    if (getValue() === undefined) {
      return (
        placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )
      );
    } else {
      const itemSelected = options?.find((item) => item.value === getValue());
      if (itemSelected)
        return (
          <span className="select__value-text">
            {renderValue ? renderValue(itemSelected) : itemSelected.label}
          </span>
        );
    }

    return (
      placeholder && <span className="select__placeholder">{placeholder}</span>
    );
  };

  const handleClickOption = (option: SelectOption) => {
    if (disabled) return;
    showMenu(false);
    if (value === undefined) {
      setLocalValue(option.value);
    }
    onChange && onChange(option.value, option);
  };

  return (
    <div
      className={classNames("select", classes, { disabled, invalid })}
      ref={menuRef}
    >
      <div className="select__value" onClick={() => showMenu()}>
        {displaySelectValue()}
      </div>

      {(open || localOpen) && (
        <div className="select__menu">
          {options?.map((option) => (
            <div
              className={classNames("select__menu-option", {
                "is-active": option.value === getValue(),
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
