import { useDatasStorage } from '../hooks/useDatasStorage';
import '../App.css';

export type User = {
    nom: string;
    email: string;
    prenom: string;
    statut?: string;
};

function SectionEtudiant() {
    // Gestion du nombre d'etudiants inscrits
    const [nbrEtudiant, setNbrEtudiant, removeEtudiant] = useDatasStorage<number>('nbrEtudiant', 0);

    return (


        <div className='card'>
            <h3 className='cardTitle'>Nombre d&apos;étudiants inscrits</h3>
            <p className='studentCount'>
                <strong>{nbrEtudiant}</strong> étudiant(s) inscrit(s)
            </p>
            <button
                onClick={() => setNbrEtudiant((c) => c + 1)}
                className='button'
            >
                Ajouter
            </button>
            <button
                onClick={() => setNbrEtudiant(nbrEtudiant - 1)}
                className='buttonWarning'
            >
                Retirer
            </button>
            <button
                onClick={removeEtudiant}
                className='buttonDanger'
            >
                Réinitialiser
            </button>
        </div>


    );
}

export default SectionEtudiant;
