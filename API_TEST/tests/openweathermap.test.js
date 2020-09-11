const { TestScheduler } = require("jest");
const urlcurrent = 'https://api.openweathermap.org/data/2.5/weather?'
const appid = '&appid=5b088a316d8b105237e0f02954c97942'
const request = require('supertest')

// example: api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}



    it('Valida tempo atual informando nome da cidade', function() {
      return request(urlcurrent + 'q=brasilia' + appid)
        .get('')
        .expect(200)
        .then(response => {
            expect(response.body.sys.country).toBe('BR')
            expect(response.body.name).toBe('Brasília')
        })
    });


    it('Valida tempo atual informando nome da cidade e código do país', function() {
      return request(urlcurrent + 'q=curitiba' + ',BR' + appid)
      .get('')
      .expect(200)
      .then(response => {
          expect(response.body.sys.country).toBe('BR')
          expect(response.body.name).toBe('Curitiba')
      })
       });


    it('Valida erro enviando nome da cidade e código de país inconsistente', function() {
      return request(urlcurrent + 'q=curitiba' + ',GB' + appid)
      .get('')
      .expect(404)
  
         });
  

    it('Valida tempo atual informando id da cidade', function() {
      return request(urlcurrent + 'id=3448439' + appid)
      .get('')
      .expect(200)
      .then(response => {
          expect(response.body.sys.country).toBe('BR')
          expect(response.body.name).toBe('São Paulo')
      })
       });



    it('Valida tempo atual por coordenada geográfica', function() {
      return request(urlcurrent + 'lat=-22.902234&lon=-43.169884' + appid)
      .get('')
      .expect(200)
      .then(response => {
          expect(response.body.sys.country).toBe('BR')
          expect(response.body.name).toBe('Rio de Janeiro')
      })
    });


    it('Valida resposta por ZIP Code', function() {
      return request(urlcurrent + 'zip=09000-000,br' + appid)
      .get('')
      .expect(200)
      .then(response => {
          expect(response.body.sys.country).toBe('BR')
          expect(response.body.name).toBe('Santo André')
      });
    });


    it('Valida resposta informando token inválido', function() {
      return request(urlcurrent + 'q=curitiba&appid=1111222233334445556666' )
      .get('')
      .expect(401)
      });


