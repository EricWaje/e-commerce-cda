//import Counter from './components/Counter/Counter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Main from './components/Main/Main';

function App() {
    /*     const onAdd = () => {
        console.log('Paso de función por prop');
    }; */
    return (
        <>
            <Header />
            <Main />
            {/* <Counter stock={10} initial={1} onAdd={onAdd} /> */}
            <Footer />
        </>
    );
}

export default App;
