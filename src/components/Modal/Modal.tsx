import React, { useEffect, useRef } from "react";
import "./index.css";
import { ModalProps } from "./index.types";

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const titleId = title ? `modal-title-${Math.random().toString(36).substr(2, 9)}` : undefined;

  useEffect(() => {
    if (isOpen && !modalRef.current?.open) {
      modalRef.current?.showModal();
    } else if (!isOpen && modalRef.current?.open) {
      modalRef.current?.close();
    }
  }, [isOpen]);

  const onModalClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={modalRef}
      className="Aurora_Modal"
      aria-labelledby={titleId || 'modal'}
      role="dialog"
      aria-modal="true"
    >
      <div className="Aurora_Modal_Header">
        <button
          onClick={onModalClose}
          aria-label="Close modal"
          className="Aurora_Modal_Close"
        >
          X
        </button>
        {title && <h2 id={titleId}>{title}</h2>}
      </div>
      <div className="Aurora_Modal_Content">{children}</div>
    </dialog>
  );
};

export default Modal;