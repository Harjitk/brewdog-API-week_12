var app = function(){
  const url = 'https://api.punkapi.com/v2/beers';

  makeRequest(url, requestComplete);

}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}
//
// Display a list of the names of the beers
// one function- looping through all the data,
// create and render each item into the list

const populateList = function(beers){
  let ul = document.getElementById('beer-list');
  beers.forEach(function(beer, index){
    let li = document.createElement('li');
    li.innerText = beer.name;
    let beerImage = document.createElement('img');
    beerImage.src = beer.image_url;
    console.log(beer.image_url);
    ul.appendChild(li);
    ul.appendChild(beerImage);

  })
}
    const requestComplete = function(){
      if(this.status != 200) return;
      const jsonString = this.responseText;
      console.log(jsonString);
      const beers = JSON.parse(jsonString);
      console.log(beers);
      populateList(beers);
    }









window.addEventListener('load', app);
