import inMemoryJwt from "./inMemoryJwt";

// src/authProvider.js
const authProvider = {
    login: async ({ username, password }) => {
        const request = new Request('https://farmersmarketapi-e0c4d5dpc7e7fwbd.northeurope-01.azurewebsites.net/api/v1/Authenticate/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        const response = await fetch(request);
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        const auth = await response.json();
        if (auth.roles.includes("Administrator"))
            inMemoryJwt.setToken(auth)
    },
    logout: () => {
        inMemoryJwt.ereaseToken();
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            inMemoryJwt.ereaseToken();
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return inMemoryJwt.getToken() ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        return inMemoryJwt.getToken() ? Promise.resolve() : Promise.reject();
    }
};

export default authProvider;
