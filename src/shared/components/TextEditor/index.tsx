import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import "./Style.scss";

interface TextEditorProps {
  classes?: string;
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
  onBlur?: (e: any) => void;
}

const TextEditor: FC<TextEditorProps & ReactQuillProps> = ({
  classes,
  name,
  disabled,
  invalid,
  onBlur,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const ref = useRef<ReactQuill>(null);
  useEffect(() => {
    if (!name || !ref.current) return;
    const el = ref.current.getEditingArea().querySelector(".ql-editor");
    if (el) el.id = name;
  }, [name]);

  return (
    <div
      className={classNames("text-editor", classes, {
        disabled,
        invalid,
        focus: isFocus,
      })}
      onBlur={onBlur}
    >
      <ReactQuill
        id={name}
        theme="snow"
        {...props}
        ref={ref}
        readOnly={disabled}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};

export default TextEditor;
