const getApiData = () => {
  return (
    fetch("https://rickandmortyapi.com/api/character/?page=3")
      /*Hay que retornar el fecth para que no salga undefined
       */
      .then((response) => response.json())
      .then((data) => {
        /*Tenemos los datos de la api y los limpiamos
         sort() invoca una función que recibe dos valores y los compara*/
        const orderResults = data.results.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        const cleanData = orderResults.map((character) => {
          return {
            id: character.id,
            img: character.image,
            name: character.name,
            species: character.species,
            status: character.status,
            origin: character.origin.name,
            episode: character.episode.length,
          };
        });
        return cleanData;
      })
  );
};
export default getApiData;
