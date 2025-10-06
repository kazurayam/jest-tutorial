import { initializeCityDatabase, clearCityDatabase, isCity } from './cityDatabase';
beforeEach(() => {
    return initializeCityDatabase();
});

afterEach(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
})

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
})
