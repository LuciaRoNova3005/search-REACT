const getApiData = () => {
  return (
    fetch("https://rickandmortyapi.com/api/character")
      /*Hay que retornar el fecth para que no salga undefined
       */
      .then((response) => response.json())
      .then((data) => {
        /*Tenemos los datos de la api y los limpiamos
         */
        const cleanData = data.results.map((character) => {
          return {
            id: character.id,
            img: character.image,
            name: character.name,
            species: character.species,
            origin: character.location.name,
            episode: character.episode,
            status: character.status,
          };
        });
        return cleanData;
      })
  );
};
export default getApiData;
