import { useState } from "react";

type ComboboxProps = {
    elementFiltered: string;
    label: string;
    optionsList: Object[];
    miseAjourValueChange?: (value: any) => void;
};

export const Combobox = ({ elementFiltered, label, optionsList, miseAjourValueChange }: ComboboxProps) => {

    // Fonction pour naviguer dans un objet avec un chemin de profondeur arbitraire
    const getValueFiltered = (obj: any, path: string): string => {
        const chemins = path.split('.');
        let result = obj;

        for (const chemin of chemins) {
            // Ce bloc s'exécute si la valeur de chemin est une clé de l'objet result
            if (result && typeof result === 'object' && chemin in result) {
                // On change result pour naviguer dans l'objet
                result = result[chemin];
            } else {
                return ''; // Retourne vide si le chemin n'existe pas
            }
        }

        return result;
    };

    const initialList = optionsList.map(item => getValueFiltered(item, elementFiltered));

    const [inputValue, setInputValue] = useState('');
    const [filteredList, setFilteredList] = useState<string[]>(initialList);

    return (
        <div className="bloc-combobox">
            <div className="sous-bloc-combobox" >
                <label style={{ color: "white", display: "block", marginBottom: "8px", fontWeight: "bold", fontSize: "15px" }}>{label}</label>
                <input
                    id='combobox-input'
                    type="text"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value);
                        setFilteredList(
                            initialList.filter(item =>
                                item.includes(e.target.value)
                            )
                        );
                    }}
                    placeholder="Rechercher"
                    className="input-combobox"
                    onFocus={e => e.currentTarget.style.borderColor = "#000000ff"}
                />
                {/* Gestion de la liste deroulante */}
                {inputValue && filteredList.length > 0 && (
                    <ul className="combobox-liste-deroulante">
                        {filteredList.map(option => {

                            // Trouver toutes les occurrences de inputValue dans option
                            // inputValue est la chaine de caractère recherché
                            // g (global) : Trouve toutes les occurrences, pas seulement la première.
                            // i (insensitive) : Ignore la casse (majuscules/minuscules).
                            const regex = new RegExp(inputValue, "gi");

                            // On coupe la chaine de caracteres pour avoir un array de mots non correspondant à la regex
                            const parts = option.split(regex);

                            // On recupere un tableau de match
                            const matches = option.match(regex);

                            return (
                                <li
                                    key={option}
                                    style={{
                                        padding: "8px",
                                        cursor: "pointer",
                                        borderBottom: "1px solid #eee"
                                    }}
                                    onClick={() => {
                                        setInputValue(option);
                                        setFilteredList([]);

                                        // Trouver l'objet original et l'envoyer au parent
                                        const originalItem = optionsList.find(item =>
                                            getValueFiltered(item, elementFiltered) === option
                                        );
                                        if (miseAjourValueChange && originalItem) {
                                            miseAjourValueChange(originalItem);  // On renvoie l'objet complet
                                        }

                                    }}
                                >
                                    {parts.map((part, i) => (
                                        <span key={i}>
                                            {part}
                                            {matches && matches[i] && <strong>{matches[i]}</strong>}
                                        </span>
                                    ))}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Combobox;
