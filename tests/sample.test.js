const request = require('supertest');
const app = require('../api_test')

describe('Sample Status', () => {
    it('tests 1', async() => {
        let response = await request(app).get("/");
        let parsingHasilJson = JSON.parse(response.text);
        // console.log(parsingHasilJson);
        expect(response.statusCode).toBe(200);
    });
})

describe('Sample Nama Negara', () => {
    it('tests 2', async() => {
        let response = await request(app).get("/");
        let parsingHasilJson = JSON.parse(response.text);
        // console.log(parsingHasilJson[0].name);
        expect(parsingHasilJson[0].name).toEqual("Indonesia");
    });
})

describe('Sample Nama Ibu Kota', () => {
    it('tests 3', async() => {
        let response = await request(app).get("/");
        let parsingHasilJson = JSON.parse(response.text);
        expect(parsingHasilJson[0].capital).toEqual("Jakarta");
    });
})

describe('Sample Alternatif Pengucapan', () => {
    it('tests 4', async() => {
        let response = await request(app).get("/");
        let parsingHasilJson = JSON.parse(response.text);
        expect(parsingHasilJson[0].altSpellings).toEqual(["ID", "Republic of Indonesia", "Republik Indonesia"]);
    });
})

describe('Sample Populasi Indonesia', () => {
    it('tests 5', async() => {
        let response = await request(app).get("/");
        let parsingHasilJson = JSON.parse(response.text);
        expect(parsingHasilJson[0].population).toBe(273523621);
    });
})

describe('Sample Mata Uang', () => {
    it('tests 6', async() => {
        let response = await request(app).get("/");
        let parsingHasilJson = JSON.parse(response.text);
        expect(parsingHasilJson[0].currencies[0].code).toEqual("IDR");
        expect(parsingHasilJson[0].currencies[0].name).toEqual("Indonesian rupiah");
        expect(parsingHasilJson[0].currencies[0].symbol).toEqual("Rp");
    });
})

// Cara running program
// di terminal arahkan pada project dan ketik
// npm test