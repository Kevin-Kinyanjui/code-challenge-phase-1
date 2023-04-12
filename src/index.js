
function renderABeer(beer){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${beer.imageUrl}">
    <div class="content">
        <h4>${beer.name}</h4>
        <p>
            $<span class="beer.description">${beer.description}</span>
        </p>
        <p>${beer.reviews}</p>
    `
    document.querySelector('#beer-description').appendChild(card)
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