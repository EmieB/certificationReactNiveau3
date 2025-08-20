import { useDatasStorage } from '../../hooks/useDatasStorage';

import { useForm } from 'react-hook-form';

export type Login = {
    identifiant: string;
    mdp: string;
};

function FormulaireLogin() {

    const [login, setLogin] = useDatasStorage<Login>('login', {
        identifiant: '',
        mdp: ''
    });


    const submit = (values: { identifiant: string; mdp: string; }) => {
        setLogin({
            identifiant: values.identifiant,
            mdp: values.mdp
        });
    };

    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            identifiant: login.identifiant,
            mdp: login.mdp,
        },
    });
    const {
        handleSubmit,
    } = methods;

    return (

        <div className='card'>
            <h3 className='cardTitle'>Login </h3>
            <form
                onSubmit={handleSubmit(submit)}
                className='profileForm'
            >
                <label>
                    Identifiant :
                    <input
                        {...methods.register('identifiant')}
                        type='text'
                        onChange={e => {
                            const selectedValue = e.target.value;
                            setLogin({ ...login, identifiant: selectedValue })
                        }}
                        className='input'
                    />
                </label>
                <br />
                <label>
                    Mot de passe :
                    <input
                        {...methods.register('mdp')}
                        type='text'
                        onChange={e => {
                            const selectedValue = e.target.value;
                            setLogin({ ...login, mdp: selectedValue })
                        }}
                        className='input'
                    />
                </label>
                <br />
                <br />
                <button type='submit' className='button'>
                    Login
                </button>

            </form>
        </div>

    );
}

export default FormulaireLogin;
