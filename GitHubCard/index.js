import axios from 'axios'
const promise = axios.get('https://api.github.com/users/zezima-sudo')
const promise2 = axios.get('https://api.github.com/users/maycie-morris/followers')
console.log(promise2)

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
  
  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function


    
  
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    /*
  

    

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitHubCard (obj) {

  //objects
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  const anchor = document.createElement('a')
  //classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')
 //content 
  img.src = obj.avatar_url
  h3.textContent = obj.name
  username.textContent = obj.login
  location.textContent = 'Location: ' + obj.location
  anchor.href = obj.html_url
  anchor.textContent = obj.html_url
  followers.textContent = 'Followers: ' + obj.followers
  following.textContent = 'Following: ' + obj.following
  bio.textContent = 'Bio ' + obj.bio
  //append
  profile.appendChild(anchor)
  cardInfo.append(h3,username,location,profile,followers,following,bio)
  card.appendChild(img)
  card.appendChild(cardInfo)
  
  return card
}


const entryPoint = document.querySelector('.cards')

promise.then(response => {
  entryPoint.appendChild(gitHubCard(response.data))
})
.catch()


function gitHubCard2 (obj) {

  //objects
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const profile = document.createElement('p')
  const bio = document.createElement('p')
  const anchor = document.createElement('a')
  //classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')
 //content 
  img.src = obj.avatar_url
  h3.textContent = obj.name
  username.textContent = obj.login
  anchor.href = obj.html_url
  anchor.textContent = obj.html_url
  bio.textCOntnet = 'Bio ' + obj.bio
  //append
  profile.appendChild(anchor)
  cardInfo.append(h3,username,location,profile,bio)
  card.appendChild(img)
  card.appendChild(cardInfo)
  
  return card
}


promise2.then((response => {
  response.data.forEach(i => {
      const article2 = gitHubCard2(i)
      entryPoint.appendChild(article2)
      
  })
}))





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


