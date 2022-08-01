import { createContext, useState } from 'react';

export const FavContext = createContext();

export const FavProvider = (props) => {
    const [fav, setFav] = useState([]);

    console.log(fav);

    const addToFav = (item) => {
        if (isInFav(item.id)) {
            const filterFavorites = fav
                .map((favo) =>
                    favo.id === item.id ? { ...favo, favorite: false } : favo
                )
                .filter((favo) => favo.id !== item.id);

            setFav(filterFavorites);
        } else {
            setFav([...fav, { ...item, favorite: true }]);
        }
    };

    const isInFav = (id) => {
        return fav.some((favorite) => favorite.id === id);
    };

    return (
        <FavContext.Provider value={{ fav, addToFav }}>
            {props.children}
        </FavContext.Provider>
    );
};
