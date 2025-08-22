
import { useEffect, useState } from "react";
import Combobox from "./ComboBox";

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

export const GestionExo3ComboBox = () => {

    const [etudiant, setEtudiant] = useState<User>();
    const [professeur, setProfesseur] = useState<{ nomPrenom: string }>();

    const [optionList, setOptionList] = useState([]);

    const miseAjourEtudiant = (selectedUser: User) => {
        setEtudiant(selectedUser);
    }

    const miseAjourProfesseur = (selectedUser: { nomPrenom: string }) => {
        setProfesseur(selectedUser);
    }


    const fetchData = async () => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const apiUserResponse = await fetch(url);
            if (apiUserResponse.ok) {
                const data = await apiUserResponse.json();
                setOptionList(data);
            }
            else {
                console.error('Erreur lors de la récupération des données:', apiUserResponse.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const listNomProfesseur = [{ 'nomPrenom': 'Benjamin Benolus' }, { 'nomPrenom': 'Paul DUPUIS' }, { 'nomPrenom': 'Jacques MORIN' }, { 'nomPrenom': 'Marie PIERRE' }, { 'nomPrenom': 'Pierre LACHAISE' }, { 'nomPrenom': 'Gabin ROULARD' }, { 'nomPrenom': 'Pauline CHAISE' }]
    return (<>
        <Combobox optionsList={optionList} label='Filtre Adresse Etudiant' elementFiltered={'address.street'} miseAjourValueChange={miseAjourEtudiant} />
        <Combobox optionsList={optionList} label='Filtre Nom Etudiant' elementFiltered={'name'} miseAjourValueChange={miseAjourEtudiant} />

        {etudiant && (
            <div className="bloc-presentation-element-selected">
                <div><strong>Nom:</strong> {etudiant.name}</div>
                <div><strong>Adresse:</strong> {etudiant.address.street}, {etudiant.address.city}</div>
                <div><strong>Téléphone:</strong> {etudiant.phone}</div>
                <div><strong>Email:</strong> {etudiant.email}</div>
            </div>
        )}

        <Combobox optionsList={listNomProfesseur} label='Nom Professeur' elementFiltered={'nomPrenom'} miseAjourValueChange={miseAjourProfesseur} />
        {professeur && (
            <div className="bloc-presentation-element-selected">
                <div><strong>Nom Prenom:</strong> {professeur.nomPrenom}</div>
            </div>
        )}


    </>)
};

export default GestionExo3ComboBox;
