const ContactModal = ({ open, onClose, modalContent }) => {
    if (!open) return null;

    return (
        <dialog open className="modal modal-bottom sm:modal-middle backdrop-blur-sm z-50">
            <div className="modal-box bg-stone-900/80 text-center">
                {modalContent}
                <div className="modal-action">
                    <button
                        className="btn btn-dash hover:btn-warning text-white"
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