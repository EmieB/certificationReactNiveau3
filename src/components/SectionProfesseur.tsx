import { useDatasStorage } from '../hooks/useDatasStorage';
import '../App.css';
import { useForm } from 'react-hook-form';

export type User = {
    nom: string;
    email: string;
    prenom: string;
    statut?: string;
};

function SectionPorfesseur() {

    const [user, setUser, removeUser] = useDatasStorage<User>('user', {
        nom: '',
        email: '',
        prenom: '',
        statut: 'professeur'
    });

    const [nom, setNom] = useDatasStorage<string>('nom', '');
    const [prenom, setPrenom] = useDatasStorage<string>('prenom', '');

    const submit = (values: { nom: string; prenom: string; email: string; }) => {
        setUser({
            nom: values.nom,
            prenom: values.prenom,
            email: values.email,
            statut: 'professeur'
        });
    };

    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            nom: user.nom || '',
            prenom: user.prenom || '',
            email: user.email || '',
        },
    });
    const {
        handleSubmit,
    } = methods;

    return (

        <div className='card'>
            <h3 className='cardTitle'>Profil professeur {nom} {prenom} </h3>
            <form
                onSubmit={handleSubmit(submit)}
                className='profileForm'
            >
                <label>
                    Nom :
                    <input
                        type='text'
                        value={user.nom}
                        onChange={e => {
                            const selectedValue = e.target.value;
                            setUser({ ...user, nom: selectedValue })
                            setNom(selectedValue)
                        }}
                        className='input'
                    />
                </label>
                <br />
                <label>
                    Prénom :
                    <input
                        type='text'
                        value={user.prenom}
                        onChange={e => {
                            const selectedValue = e.target.value;
                            setUser({ ...user, prenom: selectedValue })
                            setPrenom(selectedValue)
                        }}
                        className='input'
                    />
                </label>
                <br />
                <label>
                    Email :
                    <input
                        type='email'
                        value={user.email}
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        className='input'
                    />
                </label>
                <br />
                <br />
                <button type='submit' className='button'>
                    Enregistrer le profil
                </button>
                <button
                    type='button'
                    onClick={removeUser}
                    className='buttonDanger'
                >
                    Supprimer profil
                </button>
            </form>
        </div>

    );
}

export default SectionPorfesseur;
