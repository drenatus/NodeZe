const { TestScheduler } = require("jest");
const urlcurrent = 'https://api.openweathermap.org/data/2.5/weather?q='
const urlforecast = 'http://api.openweathermap.org/data/2.5/forecast?q='
const appid = '&appid=5b088a316d8b105237e0f02954c97942'
const request = require('supertest')

// example: api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}



    it('Valida tempo atual informando nome da cidade', function() {
      return request(urlcurrent + 'brasilia' + appid)
        .get('')
        .expect(200)
        .then(response => {
            expect(response.body.sys.country).toBe('BR')
            expect(response.body.sys)
        })
    });


    





     
    // it('Valida cidade Sample', function() {
    //   return request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02')
    //     .get('')
    //     .expect(200)
    //     .then(response => {
    //         expect(response.body.sys.country).toBe('GB')
    //     })
    // });


    // it('Acessar Openweather', function() {
    //  return request('https://openweathermap.org')
    //  .get('')
    //  .expect(200)
    //  })     


  
// 




// test('Acessar Openweather com endereço inválido', () => {
// return request.get('/erro').then(res => expect(res.status).toBe(404));     
// });




// describe('GET /users', function() {
//   it('Valida país GB', function() {
//     return request('http://api.openweathermap.org/data/2.5/weather?q=london&appid=5b088a316d8b105237e0f02954c97942')
//       .get('/users')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .then(response => {
//           expect(response.body.sys.country).toBe('GB')
//       })
//   });
// });








// test('Retornar cidade de Londres', () => {
//  const obj = [ {country: 'GB', name: 'London'} ]; 
// return request.get('/weather?q=London,uk&APPID=5b088a316d8b105237e0f02954c97942').then(res => expect(res.status).toBe(200).json(obj))
// });



// test('teste dog', () => {
//       return request.get('/weather?q=London,uk&APPID=5b088a316d8b105237e0f02954c97942')
//         .set('Accept', 'application/json')
//         // .expect('Content-Type', /json/)
//         .expect(200)
//         .expect(response.body.country).toBe('GB')
//         }
//     );
  








// test('Acessar Openweather com endereço inválido', () => {
// return request.get('/erro').then(res => expect(res.status).toBe(404));     
// });


// test('teste 222', () => {
//     const obj = {name: 'ze', mail: 'ze@mail.com'}
//     expect(obj).toHaveProperty('name');
// });  

// test('test 111', () => {
//    let number = null;
//    expect(number).toBeNull();
//    number = 10;
//    expect(number).not.toBeNull();
//    expect(number).toBe(10);
//    expect(number).toEqual(10);
// });




