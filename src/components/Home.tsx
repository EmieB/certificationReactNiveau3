import { GestionExo2ModalOrDialog } from "./Exercice2/GestionExo2ModalOrDialog";
import GestionScolaire from "./Exercice1/GestionScolaire";

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
    </>)
};

export default Home;
