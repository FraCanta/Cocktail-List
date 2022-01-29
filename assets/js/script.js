
// chiamata api da cocktails db e creazione card cocktails in div cards con i dati ricevuti


function getCocktails(option) {
  var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status == 200) {
      var cocktails = data.drinks;
      console.log(cocktails);
      var cards = document.getElementById("cards");
      cards.innerHTML = "";
      for (var i = 0; i < cocktails.length; i++) {
          var card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML =
            '<img src="' + cocktails[i].strDrinkThumb + '" alt="' + cocktails[i].strDrink + '">' +
            '<h2>' + cocktails[i].strDrink + '</h2>' 
          cards.appendChild(card);
      
      }
      var select = document.getElementById("filter-nome");
      var button = document.querySelector("#filter-btn");
      button.addEventListener("click", function (e) {
        e.preventDefault();
        var option = select.value;
        console.log(option);
        var filtered = cocktails.filter(function (cocktail) {
          return cocktail.strCategory.toLowerCase().includes(option.toLowerCase());
        });
        console.log(filtered);

      var option = document.querySelectorAll("option");
      // display cards filtered
      cards.innerHTML = "";
      for (var i = 0; i < filtered.length; i++) {
        var card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML =
          '<img src="' + filtered[i].strDrinkThumb + '" alt="' + filtered[i].strDrink + '">' +
          '<h2>' + filtered[i].strDrink + '</h2>' +
          '<p>' + filtered[i].strInstructions + '</p>';
        cards.appendChild(card);
      }
      var search = document.getElementById("search");
      var button = document.querySelector("#search-btn");
      button.addEventListener("click", function (e) {
        e.preventDefault();
        var option = search.value;
        console.log(option);
        var filtered = cocktails.filter(function (cocktail) {
          return cocktail.strDrink.toLowerCase().includes(option.toLowerCase());
        });
        console.log(filtered);
        cards.innerHTML = "";
        for (var i = 0; i < filtered.length; i++) {
          var card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML =
            '<img src="' + filtered[i].strDrinkThumb + '" alt="' + filtered[i].strDrink + '">' +
            '<h2>' + filtered[i].strDrink + '</h2>' +
            '<p>' + filtered[i].strInstructions + '</p>';
          cards.appendChild(card);
        }
      });
    });
    }
  };

  xhr.send();
}

getCocktails();




