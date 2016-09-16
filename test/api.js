let assert = require('chai').assert;
let request = require('supertest-as-promised');

let app = require('../index');
let apiKey = 'AIzaSyCDogEcpeA84USVXMS471PDt3zsG-caYDM', 
    string = 'Hello', 
    sourceLanguage = 'en', 
    targetLanguage = 'es', 
    to = 'to';

describe('/translate function', () => {
    it('should translate a sting of text from one language to another', () => {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/translate')
        .send({args: { apiKey, string, sourceLanguage, targetLanguage, to }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.contextWrites[to], 'Hola');
            assert.equal(data.body.callback, 'success');
        });
    });
});

describe('/translateAutomatic function', () => {
    it('should translate a sting of text to target language automatic', () => {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/translateAutomatic')
        .send({args: { apiKey, string, targetLanguage, to }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.contextWrites[to], 'Hola');
            assert.equal(data.body.callback, 'success');
        });
    }); 
});

describe('/detectLanguage function', () => {
    it('should detect language of string', () => {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/detectLanguage')
        .send({args: { apiKey, string, targetLanguage, to }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.contextWrites[to], 'en');
            assert.equal(data.body.callback, 'success');
        });
    }); 
});