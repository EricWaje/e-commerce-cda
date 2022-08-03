import { useState } from 'react';

const Form = () => {
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    onChange={handleChangeUser}
                    value={user}
                />
                <input
                    type="text"
                    name="telefono"
                    placeholder="Ingresa tu telefono"
                    onChange={handleChangePhone}
                    value={phone}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;
