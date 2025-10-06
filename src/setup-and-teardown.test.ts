import { initializeCityDatabase, clearCityDatabase, isCity } from './cityDatabase';

//beforeEach(() => {
beforeAll(() => {
    return initializeCityDatabase();
});

//afterEach(() => {
afterAll(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
})

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
})
