/*====================================================
 OBJECT & ARRAY - GETTING VALUES
 ====================================================*/

// TODO: 1. Wyświetl w konsoli wartości elementów tablicy skills
    var skills = [
    'JavaScript', // 0
    'HTML', // 1
    'CSS' // 2
    // 3
    ];

    console.log(skills[0]);
    console.log(skills[1]);
    console.log(skills[2]);


// TODO: 2. Wyświetl w konsoli liczbę elementów w powyższej tablicy skills

    console.log(skills.length)

// TODO: 3. Wyświetl w konsoli wartości pól name / year / isDamaged z obiektu car
    var car = {
        name: 'Mazda',
        year: 1998,
        isDamaged: true
    };

    console.log(car.name);
    console.log(car.year);
    console.log(car.isDamaged);

// TODO: 4. Do tablicy users, dopisz dwóch dodatkowych userów
    var users = [
        {login: 'John', password: 'h4x'},
        {login: 'Johhny', password: 'lubie_placki'},
    ];


// TODO 4.a) Wyświetl w konsoli login i password usera na indeksie "2" w tablicy users
/* TODO 4.b) Napisz funkcję, która jako parametr przyjmuje obiekt user i zwraca stringa:
 - "USER CREDENTIALS ARE: LOGIN_USERA : PASSWORD_USERA" */

// TODO: 5. Wyśwetl w konsoli tablicę z frameworkami developera
    var developer = {
        name: 'John Doe',
        city: 'Gdansk',
        otherInfo: {
            skills: {
                frameworks: ['Angular', 'React', 'Vue'],
                tools: ['Webstorm', 'Gulp', 'GIT']
            }
        }
    };

    console.log(developer.otherInfo.skills.frameworks)

// TODO: 6. Wyśwetl w konsoli tablicę z frameworkami drugiego developera
    var developers = [
        {
            name: 'John Doe',
            otherInfo: {
                skills: {
                    frameworks: ['Angular', 'React', 'Vue'],
                    tools: ['Webstorm', 'Gulp', 'GIT']
                }
            }
        },
        {
            name: 'John Doe',
            otherInfo: {
                skills: {
                    frameworks: ['Angular', 'React', 'Vue'],
                    tools: ['Webstorm', 'Gulp', 'GIT']
                }
            }
        }
    ];

    console.log(developers[1].otherInfo.skills.frameworks)

// TODO: 7. Wyświetl w konsoli kolejno wszystkie firmy w jakich pracował drugi pracownik tablicy workers
    var workers = [
        {
            name: 'John',
            experience: [
                { years: '1998-2004', company: 'Google' },
                { years: '2004-2011', company: 'Microsoft' },
                { years: '2012-2015', company: 'Facebook' }
            ]
        }, // index = 0
        {
            name: 'Samanta',
            experience: [
                { years: '1998-2008', company: 'Infoshare' }, // index = 0
                { years: '2010-2014', company: 'Amazon' }, // index = 1
                { years: '2014-2017', company: 'Intel' } // index = 2
            ]
        }
    ]; // index = 1

    console.log(workers[1].experience[0].company);
    console.log(workers[1].experience[1].company);
    console.log(workers[1].experience[2].company);

