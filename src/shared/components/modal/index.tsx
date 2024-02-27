import {
  Fragment,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import "./Style.scss";
import ReactDOM from "react-dom";

interface ModalProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  closeOutsideClick?: boolean;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const { children, open, title, closeOutsideClick = true, onClose } = props;
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (closeOutsideClick && modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
      {open &&
        ReactDOM.createPortal(
          <div className="modal-wrapper" ref={ref}>
            <div className="modal" ref={modalRef}>
              <i className="modal__close-btn icon-plus" onClick={onClose}></i>
              {title && <div className="modal__title">{title}</div>}
              {children && <div className="modal__body">{children}</div>}
            </div>
          </div>,
          document.body
        )}
    </Fragment>
  );
};

export default Modal;
