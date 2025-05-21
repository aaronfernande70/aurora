import React, { useEffect, useRef } from "react";
import { ModalProps } from "./index.types";
import "./index.css";

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const titleId = title
    ? `modal-title-${Math.random().toString(36).substr(2, 9)}`
    : undefined;

  useEffect(() => {
    if (isOpen && !modalRef.current?.open) {
      modalRef.current?.showModal();
    } else if (!isOpen && modalRef.current?.open) {
      modalRef.current?.close();
    }
  }, [isOpen, onClose]);

  const onModalClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={modalRef}
      className="Aurora_Modal"
      aria-labelledby={titleId || "modal"}
      role="dialog"
      aria-modal="true"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
        if (event.key === "Tab") {
          const focusableElements = modalRef.current?.querySelectorAll(
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements?.[0];
          const lastElement =
            focusableElements?.[focusableElements.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              (lastElement as HTMLElement)?.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              (firstElement as HTMLElement)?.focus();
              event.preventDefault();
            }
          }
        }
      }}
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
