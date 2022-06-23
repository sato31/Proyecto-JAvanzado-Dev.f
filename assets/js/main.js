let characters = [];

let URL = 'https://rickandmortyapi.com/api/character';

const getData = ()=>{
    fetch(URL)
    .then(response => response.json())
    .then(data => normalizeData(data))
    .then(characters => getLastEpisode(characters))
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
    return characters
};

const getLastEpisode = (characters) =>{
    characters.forEach(episode => {
        fetch(episode.last_episode)
        .then(response => response.json())
        .then(data => episode.last_episode = data.name)
    });
    console.log(characters);
    return characters
};

getData();