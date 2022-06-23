let URL = 'https://rickandmortyapi.com/api/character';

const getData = ()=>{
    fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

getData();
