import classNames from "classnames";
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import "./Style.scss";
import useOnOutsideClick from "../../hooks/onOutsideClick";
import { SelectOption, SelectProps } from "../Select";

interface MultipleSelectProps
  extends Omit<SelectProps, "value" | "renderValue" | "onChange"> {
  value?: (string | number)[];
  renderValue?: (value: SelectOption[]) => ReactNode;
  onChange?: (value: (string | number)[], option: SelectOption[]) => void;
}

const MultipleSelect: FC<MultipleSelectProps> = ({
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
  const [localValue, setLocalValue] = useState<(string | number)[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnOutsideClick(menuRef, () => {
    showMenu(false);
  });

  useEffect(() => {
    if (value === undefined) {
      setLocalValue([]);
    }
  }, [value]);

  const getValue = () => {
    if (value === undefined) return localValue;
    if (Array.isArray(value)) return value;
    if (typeof value === "string" || typeof value === "number") return [value];
    return [];
  };

  const showMenu = (val?: boolean) => {
    if (open === undefined) setLocalOpen(val ?? !localOpen);
    else onDropdownVisibleChange && onDropdownVisibleChange(val ?? !open);
  };

  const removeItem = (index: number) => {
    let selectedValue = [...getValue()];
    selectedValue.splice(index, 1);

    const listOption = selectedValue.length
      ? options!.filter((x) => selectedValue.includes(x.value))
      : [];

    if (value === undefined) {
      setLocalValue(selectedValue);
    }
    onChange && onChange(selectedValue, listOption);
  };

  const displaySelectValue = useMemo(() => {
    if (getValue() === undefined) {
      return (
        placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )
      );
    } else {
      if (getValue() !== null && options?.length) {
        const listItemSelected: SelectOption[] = getValue().map(
          (value) =>
            options.find((item) => item.value === value) || {
              value,
              label: value,
            }
        );
        if (listItemSelected?.length)
          return (
            <span className="select__value-text">
              {renderValue
                ? renderValue(listItemSelected)
                : listItemSelected.map((item, index) => (
                    <span className="select__item-text" key={item.value}>
                      {item.label}
                      <span
                        className="select__item-remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(index);
                        }}
                      >
                        X
                      </span>
                    </span>
                  ))}
            </span>
          );
      }
      return (
        placeholder && (
          <span className="select__placeholder">{placeholder}</span>
        )
      );
    }
  }, [value, localValue]);

  const handleClickOption = (option: SelectOption) => {
    if (disabled) return;
    let selectedValue = [...getValue()];

    const index = selectedValue.indexOf(option.value);
    if (index > -1) {
      selectedValue.splice(index, 1);
    } else {
      selectedValue.push(option.value);
    }

    const listOption = selectedValue?.length
      ? options!.filter((x) => selectedValue.includes(x.value))
      : [];

    if (value === undefined) {
      setLocalValue(selectedValue);
    }
    onChange && onChange(selectedValue, listOption);
  };

  return (
    <div
      className={classNames("select", classes, { disabled, invalid })}
      ref={menuRef}
    >
      <div className="select__value" onClick={() => showMenu()}>
        {displaySelectValue}
      </div>
      {(open || localOpen) && (
        <div className="select__menu">
          {options!.map((option) => (
            <div
              className={classNames("select__menu-option", {
                "is-active": getValue()?.includes(option.value),
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

export default MultipleSelect;
