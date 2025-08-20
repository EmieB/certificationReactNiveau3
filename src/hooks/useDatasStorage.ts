import { useState, useEffect } from 'react';

export function useDatasStorage<T>(key: string, initialValue: T) {

    const [dataToStore, setDataToStore] = useState(() => {
        // Initialisation
        try {
            // Recupération dans le localStorage
            const item = window.localStorage.getItem(key);

            // Si la donnee existe => la parser pour récupérer un objet JavaScript manipulable
            // Sinon => retourner la valeur initiale
            return item ? JSON.parse(item) : initialValue;

        } catch (error) {
            console.log(`Erreur lors de la lecture de localStorage pour la clé "${key}":`, error);
            return initialValue;
        }

    });


    /*
    * Mettre à jour la valeur dans le localStorage
    * @param value - La nouvelle valeur à stocker, ou une fonction qui reçoit l'ancienne valeur
    * @returns void
    */
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(dataToStore) : value;

            // Mise à jour dans le localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));

            // Mise à jour de l'état
            setDataToStore(valueToStore);

        } catch (error) {
            // En cas d'erreur lors de la sauvegarde dans localStorage
            console.log(`Erreur de la sauvegarde dans le localStorage pour la clé "${key}":`, error);
        }
    };

    /*
     * Supprimer la valeur du localStorage et réinitialiser avec la donnee initiale
     * @returns void
     */
    const removeValue = () => {
        try {
            // Suppression dans le localStorage
            window.localStorage.removeItem(key);

            // Mise à jour de l'état
            setDataToStore(initialValue);
        } catch (error) {
            console.log(`Erreur lors de la suppression de localStorage pour la clé "${key}":`, error);
        }
    };

    // Synchroniser avec les changements externes dans localStorage
    useEffect(() => {

        // Méthode pour gérer les changements de localStorage
        const handleStorageChange = (event: StorageEvent) => {

            if (event.key === key) {
                if (event.newValue === null) {
                    // La clé a été supprimée du localStorage
                    setDataToStore(initialValue);
                } else {

                    setDataToStore(event.newValue);

                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Return pour le démontage du composant pour eviter les fuites de memoire
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key, initialValue]);

    return [dataToStore, setValue, removeValue] as const;
}