export const initializeCityDatabase = () => {
    return Promise.resolve('initialized')
    //return 'initialized City Database';
}

export const initializeCityDatabaseReject = () => {
    return Promise.reject('error in initializing')
}

export const clearCityDatabase = () => {
    return Promise.resolve('cleared')
    //return "cleared City Database";
}

export const clearCityDatabaseReject = () => {
    return Promise.reject('error in clearing')
}

export function isCity(name: string): boolean {
    return true;
}
