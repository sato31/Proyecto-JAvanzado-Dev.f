'use strict'

const cardContainer = document.querySelector('.card-container')

const renderCard = () => {
    
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
    const h3Type = document.createElement('h3')
    const divGender = document.createElement('div')
    const h3Gender = document.createElement('h3')
    const divOrigin = document.createElement('div')
    const h5Origin = document.createElement('h5')
    const h3Origin = document.createElement('h3')
    const divLastEpisode = document.createElement('div')
    const h5LastEpisode = document.createElement('h5')
    const h3LastEpisode = document.createElement('h3')
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
    divType.appendChild(h3Type)
    divTypeGender.appendChild(divGender)
    divGender.appendChild(h3Gender)
    divInfo.appendChild(divOrigin)
    divOrigin.appendChild(h5Origin)
    divOrigin.appendChild(h3Origin)
    divInfo.appendChild(divLastEpisode)
    divLastEpisode.appendChild(h5LastEpisode)
    divLastEpisode.appendChild(h3LastEpisode)
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
    //h3Status se queda pendiente para hacerlo con condiciones
    divSpecie.classList.add('specie-div')
    divTypeGender.classList.add('type_gender-div')
    divType.classList.add('type-div')
    divGender.classList.add('gender-div')
    divOrigin.classList.add('origin-div')
    h5Origin.classList.add('label')
    divLastEpisode.classList.add('last-episode-div')
    h5LastEpisode.classList.add('label')
    divID.classList.add('id-div')

    //Agregamos texto a los elementos que lo requieren sin usar la api
    h5Origin.innerHTML = 'Origin: '
    h5LastEpisode.innerHTML = 'Last Episode: '
    h4IdLabel.innerHTML = 'ID: '
}

renderCard()
renderCard()
renderCard()
renderCard()
renderCard()