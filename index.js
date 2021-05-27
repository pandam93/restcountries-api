const cardTemplate = function (country) {
  return `<div class="card ${country.region}">
              <img id="flag-image" src="${country.flag}" alt="flag" />
              <h1 class="center">${country.name}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");



fetch("https://restcountries.eu/rest/v2/all")
  .then(function (response) {
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()

    return response.json();
  })
  .then(function (countries) {
    // Here is where you'll need to add into the DOM all the countries received from API 
    countriesNode.innerHTML = countries.map(function(el){
      return cardTemplate(el);
    });

    return countriesNode;
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  }).then(function (){

    let cards = document.querySelectorAll(".card");
    
    document.getElementsByName('region').forEach(function(el){
      el.addEventListener('click',function(e){
        cards.forEach(function(card){
          if(!card.classList.contains(e.target.value)){
            card.style.display = "none"
          }
          else{
            card.style.display = ''
          }
        })
      })
    })
  });
