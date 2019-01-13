/* 1. Na podstawie tablicy countries Stwórz obiekt world,
który pod kluczami o nazwach kontynentów trzyma nazwy 
krajów z populacjami */

   function removeDuplicates(regions) {
      return Array.from(new Set(regions));
   }

   var duplicatedRegions = countries
   .map(function(country){
      return country.region
   });
   console.log(duplicatedRegions);

   var sortedRegions = removeDuplicates(duplicatedRegions);
   console.log(sortedRegions);

   const world = sortedRegions.reduce(function(acc, region){
      return Object.assign(acc, { 
         [region]: countries.filter(function(country){
            return country.region === region
         })
         .map(function(country){
            return {
               name: country.name,
               population: country.population,
               area: country.area,
            }
         })
      });
   }, {});
   console.log(world);


/* 2. Napisz funkcję która jako parametr przyjmuje nazwę kontynentu i z obiektu world zwraca całkowitą
populację i powierzchnię kontynentu (zwróc obiekt z kluczami population, area i nazwa kontynentu), tzn:

   getContinentInfo('Europe') zwraca poniższy obiekt
   { name: 'Europe', population: 3445646565, area: 4656556565 }
   */

   function getSum(array, key){
      return array.reduce(function(acc, element) {
         return acc + element [key];
      }, 0)
   }

   function getContinentInfo(region) {
      return {
         name: region,
         population: getSum(world[region], 'population'),
         area: getSum(world[region], 'area'),
      }
   }
   console.log(getContinentInfo('Europe'));
   console.log(getContinentInfo('Asia'));


/* 3. Napisz funkcję która jako parametr przyjmuję nazwę konentyentu i z obiektu world wyciąga średnią populację
dla tego kontynentu
 */

   function getAverageRegionData(region) {
      return {
         name: region,
         population: getSum(world[region], 'population') / world[region].length,
         area: getSum(world[region], 'area') / world[region].length,
      }
   }
   console.log(getAverageRegionData('Europe'))
   console.log(getAverageRegionData('Asia'));

/* 4. Napisz funkcję która na podstawie obiektu world zwraca tablicę nazw wszytkich krajów :

   getConturies() zwraca:
      ['Poland', 'Germany' ... etc ]
   */

   function getCountries(){
      return Object
      .keys(world)
      .map(function(region){
         return world[region];
      })
      .reduce(function(acc, countries){
         return acc.concat(countries);
      }, [])
   }
   console.log(getCountries());