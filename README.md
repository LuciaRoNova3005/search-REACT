# Enunciado y requisitos del ejercicio

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty.

# ¿En qué consiste este proyecto? 
![image](https://user-images.githubusercontent.com/81588630/139122729-965e29e9-38ce-46ee-9598-3762e7b119be.png)

### INDICE

1. [Estructura de datos](##Estructura-de-datos)
2. [Listado de personajes](##Listado-de-personajes)
3. [Filtrado de personajes](##Filtrado-de-personajes)
4. [Detalle de personajes](##Detalle-de-personajes)


### 1. Estructura de datos

```
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

```

---

 ### 2. Listado de personajes
Vamos a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
información sobre los primeros 20 personajes de la serie. <br>
[API](https://rickandmortyapi.com/documentation/#get-all-characters
Foto  <br>
Nombre  <br>
Especie <br>
Filtrado de personajes 

  ### 3. Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un `input` a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

![image](https://user-images.githubusercontent.com/81588630/139126555-9438a0ee-709c-4dbd-920e-cfdb9a3ccb26.png)

Además el usuario debe por filtrar por tipo de especie

> **NOTA:** El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.

## 4. Detalle de personajes <br>
![image](https://user-images.githubusercontent.com/81588630/139125044-544127de-7ea7-46e3-90ac-ed8265ada4aa.png)
Implementamos la funcionalidad con la que al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa usando rutas dinámicas.

> **NOTA:** Si buscamos por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se muestra un mensaje de error que dice: _"No hay ningún personaje que coincida con tu búsqueda

![image](https://user-images.githubusercontent.com/81588630/139126733-277f9d69-66db-4d69-9278-13ab401de713.png)

#### BONUS: se ha añadido un botón de reset que elimina las búsqueda incluído en el localstorage

####  BONUS: Usar algún sistema de grid para pintar el listado de personajes.

#### BONUS: Ordenar el listado de personajes alfabéticamente por nombre.

#### EXTRA: Guardamos y recogemos los datos al LocalStorage para mantener la última búsqueda que hayamos realizado.


## Funcionalidades Extra
La URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo debemos mostrar un mensaje del tipo "El personaje que buscas no existe"

Componentes del listado de personajes


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

### `npm run build`
Construye la aplicación para producción en la carpeta `build`. \ <br>
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### NOTA: Es necesario tener instalado NodeJS

## ¿Consideras que puedo aplicar alguna mejora?

Si has llegado hasta aqui, y has detectado un problema o consideras que alguna cosa puede mejorarse, estaría encantada de que abras un nuevo issue y conocer tu opinión, cada mejora es importante y necesaria para mi, muchas gracias por tu tiempo.
