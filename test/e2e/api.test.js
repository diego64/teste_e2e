import { jest, expect, test, describe } from "@jest/globals";
import superTest from 'supertest';
import Server from '../../src/server.js'

describe('API E2E Test Suite', () => {
    test('GET / - Should return an array', async () => {
        const response = await superTest(Server)
            .get('/')

        const data = JSON.parse(response.text);

        expect(data).toBeInstanceOf(Array);

        console.log('text', response.text)
    });
    test('POST / - Should save an item and return OK', async () => {
        const response = await superTest(Server)
            .post('/')
            .send({
                nome: 'Diego Ferreira',
                age: 25
            });

        const expectResponse = { ok: 1 };
        expect(JSON.parse(response.text)).toStrictEqual(expectResponse);
    });
    test.todo('DELETE / - Should save an item and return OK');
});