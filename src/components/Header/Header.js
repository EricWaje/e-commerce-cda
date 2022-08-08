import style from './Header.module.css';
import Nav from './Nav';

const Header = () => {
    const prueba = () => {
        //console.log('Click');
    };
    return (
        <header className={style.header}>
            <Nav isInHedaer={true} prueba={prueba} />
        </header>
    );
};

export default Header;
