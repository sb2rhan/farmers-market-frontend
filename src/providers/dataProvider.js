// in dataProvider.js
import { fetchUtils } from 'ra-core';
import inMemoryJwt from './inMemoryJwt';

const dataProvider = (apiUrl) => {
    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const { token } = inMemoryJwt.getToken();
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };

    return {
        getList: async (resource, params) => {
            const url = `${apiUrl}/${resource}`;
            const { headers, json } = await httpClient(url);
            return {
                data: json,
            };
        },
        getOne: (resource, params) =>
            httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
                data: json,
            })),
        getMany: () => Promise.reject(),
        getManyReference: () => Promise.reject(),
        update: () => Promise.reject(),
        updateMany: () => Promise.reject(),
        create: () => Promise.reject(),
        delete: () => Promise.reject(),
        deleteMany: () => Promise.reject(),
    };
};
export default dataProvider;