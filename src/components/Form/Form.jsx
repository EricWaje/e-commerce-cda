import { useState } from 'react';

const Form = () => {
    // const [nombre, setNombre] = useState('');
    // const [email, setEmail] = useState('');
    // const [telefono, setTelefono] = useState('');
    //const [coord, setCoord] = useState({ x: '', y: '' });
    const [dataForm, setDataForm] = useState({
        nombre: '',
        email: '',
        telefono: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // const nombre = e.target.elements.nombre.value;
        // const email = e.target.elements.email.value;
        // const telefono = e.target.elements.telefono.value;
        // const data = {
        //     nombre,
        //     email,
        //     telefono,
        // };

        console.log(dataForm);
    };

    /* const handleChangeName = (e) => {
        setNombre(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
    }; */

    const handleChange = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    //console.log(dataForm);

    /* useEffect(() => {
        const handleMouse = (e) => {
            setCoord({
                ...coord,
                x: e.clientX,
                y: e.clientY,
            });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => {
            window.removeEventListener('mousemove', handleMouse);
        };
    }); */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    onChange={handleChange}
                    value={dataForm.nombre}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Ingresa tu email"
                    onChange={handleChange}
                    value={dataForm.email}
                />
                <input
                    type="text"
                    name="telefono"
                    placeholder="Ingresa tu telefono"
                    onChange={handleChange}
                    value={dataForm.telefono}
                />
                <button>Enviar</button>
            </form>

            {/* <h1>X: {coord.x}</h1>
            <h1>Y: {coord.y}</h1> */}
        </div>
    );
};

export default Form;
