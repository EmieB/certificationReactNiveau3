import { useState } from "react";
import DialogModalKit from "./DialogModalKit";
import FormulaireLogin from "./FormulaireLogin";

export const GestionExo2ModalOrDialog = () => {
    /////// Controle Externe ////// 

    // États pour contrôler les dialogs et modals
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Fonctions pour contrôler les dialogs et modals
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const openDialog = () => {
        setIsDialogOpen(true);
    };
    //////////////////////////////// 

    return (<>
        <div>
            <h2>Controle Interne</h2>
            <DialogModalKit
                isModal={false}
                dialogOrModalOpenButton={
                    <button className="button" style={{ backgroundColor: '#004b9bff' }}>
                        Ouvrir Boite Dialogue - Login
                    </button>
                }
                header={
                    <p>
                        Login dans la boite de dialogue
                    </p>
                }
                content={
                    <FormulaireLogin />
                }
                footer={
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        Mot de passe oublié ? Envoyez un email à xxxx.xxxxx@gmail.com
                    </div>
                }
            />
        </div>
        <div >
            <h2>Controle Externe</h2>
            <DialogModalKit
                isModal={true}
                externalIsOpen={isModalOpen}
                onClose={closeModal}
                onOpen={openModal}
                dialogOrModalOpenButton={
                    <button className="button" style={{ backgroundColor: '#107063ff' }}>
                        Ouvrir Modal - Login
                    </button>
                }
                header={
                    <p>
                        Login dans la modal
                    </p>
                }
                content={
                    <FormulaireLogin />
                }
                footer={
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        Mot de passe oublié ? Appelez le 06 XX XX XX XX
                    </div>
                }
            />
            <br />
            <DialogModalKit
                isModal={false}
                externalIsOpen={isDialogOpen}
                onClose={closeDialog}
                onOpen={openDialog}
                dialogOrModalOpenButton={
                    <button className="button" style={{ backgroundColor: '#004b9bff' }}>
                        Ouvrir Boite Dialogue - Login
                    </button>
                }
                header={
                    <p>
                        Login dans la boite de dialogue
                    </p>
                }
                content={
                    <FormulaireLogin />
                }
                footer={
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        Voici notre email : xxxx.xxxxx@gmail.com
                    </div>
                }
            />

            <h3>
                États actuels : Modal = {isModalOpen ? 'Ouvert' : 'Fermé'} | Dialog = {isDialogOpen ? 'Ouvert' : 'Fermé'}
            </h3>

            <button
                className="button"
                style={{ backgroundColor: '#107063ff', marginRight: '10px' }}
                onClick={openModal}
            >
                Ouvrir Modal
            </button>
            <button
                className="button"
                style={{ backgroundColor: '#004b9bff', marginRight: '10px' }}
                onClick={openDialog}
            >
                Ouvrir Dialog
            </button>
            <button
                className="button"
                style={{ backgroundColor: '#dc3545' }}
                onClick={closeDialog}
                disabled={!isDialogOpen}
            >
                Fermer Dialog
            </button>
        </div></>
    );
};
