import SectionEtudiant from "./SectionEtudiant";
import SectionPorfesseur from "./SectionProfesseur";

export const GestionScolaire = () => {
    return (<div>

        <h2 >
            Gestion scolaire
        </h2>

        <SectionEtudiant />
        <SectionPorfesseur />
    </div>)

};

export default GestionScolaire;
