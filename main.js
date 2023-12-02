import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'


document.querySelector('#app').innerHTML = `
<section class="container">
    <div class="row" id="characters-card">
     
    </div>
  </section>
    
`

const getCharacters = async () => {
  try {

    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log(data.results);

    data.results.map((character) => {
      const characterCard = document.createElement('div')
      characterCard.classList.add('col-sm-12', 'col-md-4')

      let btnColor = ''

      if (character.status === 'Alive'){
        btnColor = 'btn-green'
      }else if (character.status === 'Dead'){
        btnColor = 'btn-red'
      }else{
        btnColor = 'btn-yellow'
      }

      characterCard.innerHTML += `
          <div class="card m-2" style="width: 18rem;">
            <img src="${character.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" class="btn ${btnColor}">${character.status}</a>
              </div>
          </div>
        `
      document.querySelector('#characters-card').appendChild(characterCard)

    })

  } catch (error) {

    alert("No hay respuesta de la API", error);

  }
}

getCharacters()


