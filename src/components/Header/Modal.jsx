import { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom';

export default function Modal({children, open, onClose}) {
    const dialog = useRef(null);
    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);
    

    return createPortal(
        <dialog ref={dialog} className="bg-white p-6 rounded-lg shadow-lg m-auto z-10">
            <button onClick={onClose} className="w-10 h-10 bg-gray-600 flex items-center justify-center cursor-pointer text-white float-right mb-10 hover:bg-gray-400">x</button>
            {children}
        </dialog>,
        document.getElementById('modals')
    );
}