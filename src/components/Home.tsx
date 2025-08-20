import GestionScolaire from "./GestionScolaire";

export const Home = () => {
    return (<>
        <div className='container'>
            <strong>Exercice 1</strong>
            <GestionScolaire />
        </div>
        <br />
        <div className='container'>
            <strong>Exercice 2</strong>
            <GestionScolaire />
        </div></>)

};

export default Home;
