/****************************************************************************************************
 Część 5 Kolekcje:

 Do wykonania tego zadania musisz wykonać pobrania zawartości pliku data.json

 5.1 Wykonaj funkcje, która zwróci jedynie osoby z podaną rasą w argumencie.
 Input: showOnlypersonsWithRace('Cambodian')
 Output: '5.1: [{id: 8, first_name: "Garvey", last_name: "Islep", email: "gislep7@nps.gov", gender: "Male", …}]'
 Input: showOnlypersonsWithRace(1)
 Output: '5.2: taka rasa nie istnieje'
 Input: showOnlypersonsWithRace('Polish')
 Output: '5.3: []' */

    function showOnlypersonsWithRace(race){
        return typeof race === 'string' ? 
            persons.filter(person => person.race === race) : 'taka rasa nie istnieje';
    };

    console.log('5.1.1: ', showOnlypersonsWithRace('Cambodian'));
    console.log('5.1.2: ', showOnlypersonsWithRace(1));
    console.log('5.1.3: ', showOnlypersonsWithRace('Polish'));


 /* 5.2 Wyświetl każdego z userów w konwencji: title first_name last_name work as job_title in company.
 Output:
 Rev Kaylil Hovey work as Recruiting Manager in Browseblab
 Rev Cesare Caroline work as Computer Systems Analyst II in Wordtune
 Mr Xaviera Danilchenko work as Statistician IV in Rhynyx
 Honorable Shandy Sanford work as Data Coordiator in Topdrive
 Honorable Muire Pothecary work as Executive Secretary in Realbridge
 Ms Mano Gwatkins work as Automation Specialist IV in InnoZ
 Honorable Frederica Shackleton work as Help Desk Operator in Yoveo
 Mr Garvey Islep work as Internal Auditor in Livefish
 Rev Aristotle Gozard work as Software Test Engineer IV in Feedspan
 Honorable Bryon Boulder work as Senior Editor in Kazu */

    const personInfo = persons.reduce(function (acc, person) {
    // const personInfo = persons.reduce((acc, person) => {
        return acc + person.title + ' ' + person.first_name + ' ' + person.last_name + ' works as ' + person.job_title + ' in ' + person.company + ". \n \n";
    }, '');
        
    console.log('5.2: ', personInfo);


 /* 5.3 Skróć zawartość kolekcji do kluczy id, first_name, last_name i dodaj nowy klucz full_name
 składający się z first_name i last_name.
 Output:
 [
 {id:1, first_name: "Kaylil", last_name: "Kaylil", full_name: "Kaylil Hovey"}
 {id:2 ,first_name: "Cesare", last_name: "Cesare", full_name: "Cesare Caroline"}
 {id:3 ,first_name: "Xaviera", last_name: "Xaviera", full_name: "Xaviera Danilchenko"}
 {id:4 ,first_name: "Shandy", last_name: "Shandy", full_name: "Shandy Sanford"}
 {id:5 ,first_name: "Muire", last_name: "Muire", full_name: "Muire Pothecary"}
 {id:6 ,first_name: "Mano", last_name: "Mano", full_name: "Mano Gwatkins"}
 {id:7 ,first_name: "Frederica", last_name: "Frederica", full_name: "Frederica Shackleton"}
 {id:8 ,first_name: "Garvey", last_name: "Garvey", full_name: "Garvey Islep"}
 {id:9 ,first_name: "Aristotle", last_name: "Aristotle", full_name: "Aristotle Gozard"}
 {id:10 ,first_name: "Bryon", last_name: "Bryon", full_name: "Bryon Boulder"} */


    const personNameInfo = persons.map(person => {
        return {
            id: person.id,
            first_name: person.first_name,
            last_name: person.last_name,
            full_name: `${person.first_name} ${person.last_name}`
        }
    });

    console.log('5.3: ', personNameInfo);


 /* 5.4 Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji 'imię ma X lat'
 i na koniec wyświetl sumę ich lat.
 Output:
 Kaylil ma 33 lat
 Xaviera ma 55 lat
 Shandy ma 76 lat
 Frederica ma 89 lat
 Razem mają: 253 lat */

    const womenOver30 = persons.filter(person => {
        return person.gender === 'Female' && person.age > 30;
    });
    const womanAge = womenOver30.reduce((acc, person) => {
        return acc + `\n ${person.first_name} ma ${person.age} lat.`;
    }, '');
    const sumWomenOver30 = womenOver30.reduce((acc, person) => {
        return acc + person.age;
    }, 0);

    console.log('5.4: ',womanAge,`\n \n Razem mają: ${sumWomenOver30} lat.`);


 /* 5.5  Dodaj do kolekcji dodatkowe klucze:
 height: wiek + 100
 weight: wiek + 10
 bmi: weight / (height/100) ^ 2
 Następnie zwróc tablie imion tych osób, które mają BMI w zakresie 18,5–24,99.
 Output: ["Kaylil", "Muire", "Aristotle", "Mano", "Bryon"] */

    const personsWithGoodBmi = persons
        .map(person => {
            const height = person.age + 100;
            const weight = person.age + 10;
            return {
                ...person,
                height,
                weight,
                bmi: weight / Math.pow(height / 100, 2),
            }
        })
        .filter(person => {
            return person.bmi >= 18.5 && person.bmi <= 24.99;
        })
        .map(person => {
            return person.first_name;
        });

    console.log('5.5: ', personsWithGoodBmi);