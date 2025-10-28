const ContactModal = ({ open, onClose, modalContent }) => {
    if (!open) return null;

    return (
        <dialog open className="modal modal-bottom sm:modal-middle backdrop-blur-sm z-50">
            <div className="modal-box bg-base-100/80 text-center text-base-content">
                {modalContent}
                <div className="modal-action">
                    <button
                        className="btn btn-dash hover:btn-error"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ContactModal;