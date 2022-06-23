let characters = [];
const cardContainer = document.querySelector('.card-container')
const searchCharacter = document.querySelector('.search')

let URL = 'https://rickandmortyapi.com/api/character';

const getLastEpisode = (lastEpURL) =>{
    fetch(lastEpURL)
        .then(response => response.json())
        /** MODIFICAR */
        // .then(response => console.log(response.name))
        .catch(error => console.error(error))
};

const getData = ()=>{
    fetch(URL)
        .then(response => response.json())
        .then(data => normalizeData(data))
        /**
         * MODFICAR THEN CHARACTERS
         */
        // .then(characters => {
        //     characters.forEach(character => {
        //         let lastEpURL = character.last_episode
        //         getLastEpisode(lastEpURL)
        //     });
        // })
        .then(characters => characters.forEach(renderCard))
        .catch(error => console.error(error))
};


const normalizeData = (data) => {
    data.results.forEach(element => {
        const { image, name, status, species, type, gender, origin, episode, id} = element;
        const character = {
            photo: image,
            name: name,
            status: status,
            specie: species,
            tipo: type,
            gender: gender,
            origin: origin.name,
            last_episode: episode[episode.length-1],
            id : id,
        }
        characters.push(character);
    });
    // console.log(characters);
    return characters
};

const renderCard = (element) => {
    
    // console.log(element.last_episode);
    //Creamos todos los elementos de la tarjeta
    const divCard = document.createElement('div')
    const divImage = document.createElement('div')
    const img = document.createElement('img')
    const divInfo = document.createElement('div')
    const divName = document.createElement('div')
    const h1Name = document.createElement('h1')
    const divStateSpecie = document.createElement('div')
    const divStatus = document.createElement('div')
    const h3Status = document.createElement('h3')
    const divSpecie = document.createElement('div')
    const h3Specie = document.createElement('h3')
    const divTypeGender = document.createElement('div')
    const divType = document.createElement('div')
    const h4Type = document.createElement('h4')
    const divGender = document.createElement('div')
    const h4Gender = document.createElement('h4')
    const divOrigin = document.createElement('div')
    const h5Origin = document.createElement('h5')
    const h4Origin = document.createElement('h4')
    const divLastEpisode = document.createElement('div')
    const h5LastEpisode = document.createElement('h5')
    const h4LastEpisode = document.createElement('h4')
    const divID = document.createElement('div')
    const h4IdLabel = document.createElement('h4')
    const h4IdNumber = document.createElement('h4')

    //Definimos que elemento es hijo de que otro elemento
    cardContainer.appendChild(divCard)
    divCard.appendChild(divImage)
    divImage.appendChild(img)
    divCard.appendChild(divInfo)
    divInfo.appendChild(divName)
    divName.appendChild(h1Name)
    divInfo.appendChild(divStateSpecie)
    divStateSpecie.appendChild(divStatus)
    divStatus.appendChild(h3Status)
    divStateSpecie.appendChild(divSpecie)
    divSpecie.appendChild(h3Specie)
    divInfo.appendChild(divTypeGender)
    divTypeGender.appendChild(divType)
    divType.appendChild(h4Type)
    divTypeGender.appendChild(divGender)
    divGender.appendChild(h4Gender)
    divInfo.appendChild(divOrigin)
    divOrigin.appendChild(h5Origin)
    divOrigin.appendChild(h4Origin)
    divInfo.appendChild(divLastEpisode)
    divLastEpisode.appendChild(h5LastEpisode)
    divLastEpisode.appendChild(h4LastEpisode)
    divInfo.appendChild(divID)
    divID.appendChild(h4IdLabel)
    divID.appendChild(h4IdNumber)

    //Agregamos clases de estilos a los elementos 
    divCard.classList.add('card')
    divImage.classList.add('image-div')
    img.classList.add('image')
    divInfo.classList.add('info-div')
    divName.classList.add('name-div')
    h1Name.classList.add('name-h1')
    divStateSpecie.classList.add('state-specie-div')
    divStatus.classList.add('status-div')
    //h3Status despues del destructuring
    divSpecie.classList.add('specie-div')
    divTypeGender.classList.add('type_gender-div')
    divType.classList.add('type-div')
    divGender.classList.add('gender-div')
    divOrigin.classList.add('origin-div')
    h5Origin.classList.add('label')
    divLastEpisode.classList.add('last-episode-div')
    h5LastEpisode.classList.add('label')
    divID.classList.add('id-div')

    // Destructuring de los elementos a utilizar del arreglo characters
    // (Para no escribir el prefijo element. en cada elemento del arreglo)
    const { photo, name, status, specie, tipo, gender, origin, last_episode, id} = element;
    // const lastEpisode = characters.lastEpisode

    //Asignación de atributos html
    img.setAttribute('src', photo)

    //Se añade una clase distinta de acuerdo al status 
    if (status === 'Dead'){
        h3Status.classList.add('status-dead')
    } else if (status === 'Alive'){
        h3Status.classList.add('status-alive')
    }else if (status === 'unknown'){
        h3Status.classList.add('status-unknown')
    }

    //Agregamos texto a los elementos que lo requieren sin usar la api
    h5Origin.innerHTML = 'Origin: '
    h5LastEpisode.innerHTML = 'Last Episode: '
    h4IdLabel.innerHTML = 'ID: '

    //Se pinta cada card con los elementos dinámicos
    img.innerHTML = photo
    h1Name.innerHTML = name
    h3Status.innerHTML = status
    h3Specie.innerHTML = specie
    h4Type.innerHTML = tipo
    h4Gender.innerHTML = gender
    h4Origin.innerHTML = origin
    h4LastEpisode.innerHTML = last_episode
    h4IdNumber.innerHTML = id
}

const cleanView = () => {
    cardContainer.innerHTML ='';
};

searchCharacter.addEventListener('keyup', (event) => {
    const inputText = event?.target?.value.toLocaleLowerCase() || '';
    cleanView();
    const charactersFounded = searchingWithFilter(inputText);
    charactersFounded.forEach(renderCard);
});

const searchingWithFilter = (searchingText) => {
    const charactersFounded = characters.filter(character => {
        const nombre = character.name;
        return (nombre.toLocaleLowerCase()).includes(searchingText)
    });
    return charactersFounded;
};

getData();
