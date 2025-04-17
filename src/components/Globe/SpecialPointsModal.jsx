import React from 'react';

const SpecialPointsModal = () => {
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
            <div className="modal-box bg-stone-900/80">
                <h3 className="font-bold text-lg">{"title"}</h3>
                <p className="py-4">{"content"}</p>
                <div className="modal-action">
                    <button
                        className="btn btn-dash hover:btn-warning text-white"
                        onClick={""}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default SpecialPointsModal;