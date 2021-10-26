# Enunciado y requisitos del ejercicio

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje.

# ¿En qué consiste este proyecto? 
![image](https://user-images.githubusercontent.com/81588630/124917275-e5c6f380-dff3-11eb-9d8e-818d55bcd5e2.png)

## Listado de personajes

[API](https://rickandmortyapi.com/documentation/#get-all-characters

Foto
Nombre
Especie
Filtrado de personajes

![image](https://user-images.githubusercontent.com/81588630/124917344-00996800-dff4-11eb-9a93-cc39384540df.png)

Detalle de personajes Implementamos la funcionalidad con la que al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa usando rutas dinámicas.

## Funcionalidades Extra
La URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo debemos mostrar un mensaje del tipo "El personaje que buscas no existe"

Componentes del listado de personajes

src
├─ components
| ├─ App.js
| ├─ Card.js
| ├─ CharacterDetail.js
| ├─ CharacternotFound.js
| ├─ CharacterList.js
| ├─ FilterName.js
| ├─ Filters.js
| └─ FiltSpecies.js
|
├─ imge
| └─ logo.png
├─ imge
| └─ Api.js  
| └─ local-storage.js
|
├─ stylesheets
| └─ ...
|
└─ index.js
En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

## Tecnologías:

React / JS / SCSS

## ARRANQUE EN LOCAL

### Clona este repositorio en tu equipo.

Realiza la instalación del paquete y sus dependencias mediante:

### npm install

Una vez finalizada la instalación encontrarás que se ha añadido una carpeta denominada node_modules/.
Por último, ejecuta el siguiente comando para que cargue un servidor local y poder hacer la visualización:

### npm start

### NOTA: Es necesario tener instalado NodeJS

## ¿Consideras que puedo aplicar alguna mejora?

Si has llegado hasta aqui, y has detectado un problema o consideras que alguna cosa puede mejorarse, estaría encantada de que abras un nuevo issue y conocer tu opinión, cada mejora es importante y necesaria para mi, muchas gracias por tu tiempo.
