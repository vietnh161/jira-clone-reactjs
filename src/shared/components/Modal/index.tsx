import { Fragment, ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Style.scss";

interface ModalProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  closeOutsideClick?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const {
    children,
    open,
    title,
    showCloseButton = true,
    closeOutsideClick = true,
    onClose,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (
      closeOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    let targetRef: HTMLDivElement | null = null;
    if (ref.current) {
      targetRef = ref.current;
      targetRef.addEventListener("click", handleClickOutside, true);
    }
    return () => {
      if (targetRef)
        targetRef.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Fragment>
      {open &&
        ReactDOM.createPortal(
          <div className="modal-wrapper" ref={ref}>
            <div className="modal" ref={modalRef}>
              {showCloseButton && (
                <i className="modal__close-btn icon-plus" onClick={onClose}></i>
              )}
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
