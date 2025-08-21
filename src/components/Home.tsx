import { GestionExo2ModalOrDialog } from "./Exercice2/GestionExo2ModalOrDialog";
import GestionScolaire from "./Exercice1/GestionScolaire";
import GestionExo3ComboBox from "./Exercice3/GestionExo3ComboBox";

export const Home = () => {

    return (<>
        <div className='container'>
            <strong>Exercice 1 : Create a generic localStorage handler usable by React function component</strong>
            <GestionScolaire />
        </div>
        <br />
        <div className='container'>
            <strong>Exercice 2 : Create a generic dialog component that can be customized with any content</strong>
            <GestionExo2ModalOrDialog />
        </div>
        <br />
        <div className='container'>
            <strong>Exercice 3 : Generic auto-filter dropdown to filter any kind of data</strong>
            <GestionExo3ComboBox />
        </div>
    </>)
};

export default Home;
