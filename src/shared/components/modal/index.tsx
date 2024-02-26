import {
    Fragment,
    FunctionComponent,
    ReactNode,
    useEffect,
    useRef,
} from "react";
import "./Style.scss";

interface Props {
  open: boolean;
  title?: string;
  children?: ReactNode;
  closeOutsideClick?: boolean;
  onClose?: () => void;
}

const Modal: FunctionComponent<Props> = (props) => {
  const { children, open, title, closeOutsideClick, onClose } = props;
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    console.log(123);
    
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose && onClose();
    }
  };

  useEffect(() => {
    ref.current?.addEventListener("click", handleClickOutside, true);
    return () => {
      ref.current?.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <Fragment>
      {open && (
        <div className="modal-wrapper" ref={ref}>
          <div className="modal"  ref={modalRef}>
            <i className="modal__close-btn icon-plus" onClick={onClose}></i>
            {title && <div className="modal__title">{title}</div>}
            {children && <div className="modal__body">{children}</div>}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
