// FOR LOOP
// TODO.1: Przy użyciu pętli FOR, wyświetl w konsoli wszystkie napoje z listy
// UWAGA: Wyświetlone nazwy mają być wypisane wielkimi literami.

  var drinksNames = ['Vodka', 'Whisky', 'Prosseco', 'Beer', 'Vine', 'Gin'];
  
  for (var i = 0 ; i < drinksNames.length ; i++) {
    drinksNames[i] = drinksNames[i].toUpperCase();
    console.log('Jeeee dziala!!!');
  }

// TODO.2: Przy użyciu pętli FOR, przypisz do zmiennej totalPrice sumę elementów tablicy prices
// Wykorzystaj operator +=

  var totalPrice = 0;
  var prices = [19.99, 40.00, 35.99, 3.20, 16.50, 23.30];

    // totalPrice += prices[i]; // v.1
    // totalPrice = totalPrice + prices[i]; // v.2

  for (var i = 0 ; i < prices.length ; i++) {
    totalPrice = totalPrice += prices[i];
    console.log(totalPrice);
  }

// TODO.3: Napisz funkcję, która zwróci sumę cen drinków z tablicy drinks
  
  var drinks = [
    {name: '  Vodka', price: 19.99},
    {name: 'Whisky  ', price: 40.00},
    {name: 'Prosseco  ', price: 35.99},
    {name: '  Beer', price: 3.20},
    {name: '   Vine  ', price: 16.50},
    {name: '  Gin  ', price: 23.30}
  ];

  var totalCost = 0;

  function sumPrices(drinks) {
    for (var i = 0 ; i < drinks.length ; i++){
      totalCost += drinks[i].price ;
    }
    return totalCost;
  }
  console.log(sumPrices(drinks));

// TODO.4: Puść pętlę po tablicy drinks i zaokrąglij w niej ceny do całości

  for (var i = 0 ; i < drinks.length ; i++){
    console.log(Math.round(drinks[i].price));
  }

// TODO.5. Za pomocą pętli, doklej jednostkę PLN do cen, zastosuj dekremenację!

  var pricePln = 0;

  for (var i = drinks.length -1 ; i >= 0 ; i--){
    // drinks[i] = drinks[i].price + ' PLN';
    pricePln = drinks[i].price + ' PLN';
    console.log(pricePln);
  }

// TODO.6: Za pomocą pętli, oczyść nazwy drinków z white-spaces

  for (var i = drinks.length -1 ; i >= 0 ; i--){
    drinks[i].name = drinks[i].name.trim();
  }
  
// TODO.7: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *

  for (var i = 0; i < drinks.length; i++) {
    drinks[i].id = i + 1;
    drinks[i].currency = 'PLN'
  }

// TODO.8: Napisz funkcję, która policzy średnią cenę drinka w tablicy drinks
  
  /*
  function calculateAverage(pricedItems) {
      var total = 0;

      for (var i = 0; i < pricedItems.length; i++) {
        // total = total + pricedItems[i].price;
        total += Number.parseFloat(pricedItems[i].price);
      }

      return total / pricedItems.length;
    }

      console.log('average', calculateAverage(drinks));
  */

/* TODO.9: Za pomocą pętli while, wyświetl console.log z ceną i nazwą każdego drinka */
    /* 
    var i = 0;
    while (i < drinks.length) {
      console.log(drinks[i]);
      i ++;
    } 
    */




