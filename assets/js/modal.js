const modal = document.getElementById('modal');
const headerModal = document.getElementById('modal-header');
const bodyModal = document.getElementById('modal-body');
const contentBodyModal = document.getElementById('content-body-modal');

const closeModal =() =>{
    modal.style.top = '-100vh';
    cleanContentModal();
}


const renderHeaderModal = (element) =>{
    const divCloseModal = document.createElement('div')
    const spanCloseModal = document.createElement('span');
    const divTitleHeader = document.createElement('div')
    const h3DivTitleHeader = document.createElement('h3');
    const divInfoHeader = document.createElement('div')
    const divCodeEpisode = document.createElement('div');
    const h5CodeEpisode = document.createElement('h5');
    const labelCodeEpisode = document.createElement('label')
    const divCreatedEpisode = document.createElement('div');
    const h5CreatedEpisode = document.createElement('h5');
    const labelCreatedEpisode = document.createElement('label')

    divCloseModal.classList.add('close-modal');
    spanCloseModal.innerHTML = "X";
    spanCloseModal.addEventListener('click', closeModal);
    
    divTitleHeader.classList.add('title');
    h3DivTitleHeader.innerHTML = element.name;

    divInfoHeader.classList.add('info');
    divCodeEpisode.classList.add('code-episode');
    h5CodeEpisode.innerHTML = "Episode: "
    labelCodeEpisode.innerHTML = element.episode;
    
    divCreatedEpisode.classList.add('created-episode');
    h5CreatedEpisode.innerHTML = "Created: ";
    labelCreatedEpisode.innerHTML = element.air_date;

    divCloseModal.appendChild(spanCloseModal);
    divTitleHeader.appendChild(h3DivTitleHeader);

    divCodeEpisode.append(h5CodeEpisode,labelCodeEpisode);
    divCreatedEpisode.append(h5CreatedEpisode, labelCreatedEpisode);
    divInfoHeader.append(divCodeEpisode,divCreatedEpisode);

    headerModal.append(divCloseModal, divTitleHeader, divInfoHeader);
    console.log(headerModal);

}

const renderBodyModal = (element)=>{
     const divCharacter = document.createElement('div'); 
     const divImagenCharacter = document.createElement('div');
     const imagenCharacter = document.createElement('img');
     const labelCharacter = document.createElement('label');

     divCharacter.classList.add('character');
     divImagenCharacter.classList.add('imagen-character');
     imagenCharacter.setAttribute('src', element.image)
     labelCharacter.innerHTML = element.name;

     divImagenCharacter.appendChild(imagenCharacter);
     divCharacter.append(divImagenCharacter,labelCharacter);
     contentBodyModal.appendChild(divCharacter);
}

const getContentEpisode = (Episode)=>{
    fetch(Episode)
    .then(response => response.json())
    .then(data =>{
        renderHeaderModal(data);
        data.characters.forEach((element, index )=> {
            if(index >=0 && index <=25){
                fetch(element)
            .then(response => response.json())
            .then(data => renderBodyModal(data))
            .catch(error => console.error(error))
            }
            
        });
    })
    .catch(error  => console.error(error))
}


const cleanContentModal = ()=>{
    headerModal.innerHTML = '';
    contentBodyModal.innerHTML = '';
}
    
const openModal =(URL)=>{
    modal.style.top = '0';
    getContentEpisode(URL);
}

