
function renderABeer(beer){
    const beerList = document.querySelector('#beer-list')
    const beerName = document.querySelector('#beer-name')
    const beerDescription = document.querySelector('#beer-description')
    const beerReview = document.querySelector('#review-list')

    beerList.innerHTML =` 
        <div class="content"> <h4>${beer.name}</h4> 
        <div class="content"> <h4>${beername1}</h4> 
        <div class="content"> <h4>${beername2}</h4> `
    beerName.innerHTML = `<div class="content"> <h4>${beer.name}</h4> `
    beerDescription.innerHTML = ` <p>  $<span class="beer.description">${beer.description}</span> </p> `
    beerReview.innerHTML =  ` <p>${beer.reviews}</p> `
}

function getAllBeer(){
    fetch('http://localhost:3000/beers')
    .then(response => response.json())
    .then(beers => beers.forEach(beer => renderABeer(beer)[0]))
    //.then(beers => beers.forEach(beer => renderABeer(beer)))
}

function initialize(){
    getAllBeer();
}
initialize()

const reviewList = document.getElementById('review-list');
const reviewForm = document.getElementById('review-form');
const ButtonSubmitReview = document.getElementById('submitBtn');
const beername1 = "Pilsen Lager"
const beername2 = "Avery Brown Dredge"

document.addEventListener('DOMContentLoaded', () => {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault()
        buildReview(e.target.review.value)
        reviewForm.reset()
    })
})

function buildReview(review) {
    let p = document.createElement('p')

    p.addEventListener('click', handleDelete)
    p.textContent = `       ${review}   `
    p.style.backgroundColor = '#fff3a9'
    p.style.height = "70px"

    document.querySelector('#review-list').appendChild(p)
}

function handleDelete (e){
    e.target.remove()
}