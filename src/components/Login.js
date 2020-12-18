import React from 'react';

const Login = ({ authenticate }) => {
    return (
        <div className={'login'}>
            <h2>Connecte toi pour cree tes recettes</h2>
            <button onClick={authenticate} className={'facebook-button'}>
                Me connecter avec Facebook
            </button>
        </div>
    );
};

export default Login;