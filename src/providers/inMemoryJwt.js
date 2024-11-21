// inMemoryJwt.js
const inMemoryJWTManager = () => {

    const getToken = () => {
        let token = JSON.parse(localStorage.getItem('auth'));
        return token;
    }

    const setToken = (token) => {
        localStorage.setItem('auth', JSON.stringify(token));
        return true;
    };

    const ereaseToken = () => {
        localStorage.removeItem('auth');
        return true;
    }

    return {
        ereaseToken,
        getToken,
        setToken,
    }
};

export default inMemoryJWTManager();