const getApiData = () => {
  return (
    fetch("https://rickandmortyapi.com/api/character")
      /*Hay que retornar el fecth para que no salga undefined
       */
      .then((response) => response.json())
      .then((data) => {
        /*Tenemos los datos de la api y los limpiamos
         */
        const cleanData = data.results.map((user) => {
          return {
            id: user.id,
            img: user.image,
            name: user.name,
            specie: user.species,
            origin: user.location.name,
            episode: user.episode,
            status: user.status,
          };
        });
        return cleanData;
      })
  );
};
export default getApiData;
