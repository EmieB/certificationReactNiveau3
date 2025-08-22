import { useState } from "react";

interface DialogModalKitProps {
    isModal?: boolean;
    header?: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    dialogOrModalOpenButton?: React.ReactNode;
    // props pour contrôle externe
    externalIsOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}

export default function DialogModalKit({
    isModal,
    header,
    content,
    footer,
    dialogOrModalOpenButton,
    externalIsOpen,
    onClose,
    onOpen,
}: DialogModalKitProps) {

    const [internalIsOpen, setInternalIsOpen] = useState(false);

    // Utiliser l'état externe si fourni, sinon l'état interne
    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

    const handleClose = () => {
        if (onClose) {
            onClose(); // Utiliser le callback externe
        } else {
            setInternalIsOpen(false); // Utilisation de l'état interne
        }
    };

    const handleOpen = () => {
        if (onOpen) {
            onOpen(); // Utiliser le callback externe
        } else {
            setInternalIsOpen(true); // Utilisation de l'état interne
        }
    };

    return (
        <div>
            {/* Personnalisation du bouton de déclenchement de la modal ou du dialog*/}
            {dialogOrModalOpenButton ? (
                <div onClick={handleOpen}>
                    {dialogOrModalOpenButton}
                </div>
            ) : (
                <button className='button' onClick={handleOpen}>
                    Open {isModal ? 'Modal' : 'Dialog'}
                </button>
            )}

            {isOpen && (
                <div
                    className={isModal ? "modal" : "dialog"}
                >
                    <div className="modal-dialog-content" >
                        {/* Header personnalisable */}
                        {header && (
                            <header> {header}</header>
                        )}

                        {/* Contenu personnalisable */}
                        {content && (
                            <> {content}</>
                        )}

                        {/* Footer personnalisable */}
                        {footer && (
                            <footer>
                                {footer}
                            </footer>
                        )}

                        <button
                            onClick={handleClose}
                            className="close"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}