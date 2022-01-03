# Statement and requirements of the exercise

The exercise consists of developing a web page with a list of Rick and Morty characters.

![image](https://user-images.githubusercontent.com/81588630/139122729-965e29e9-38ce-46ee-9598-3762e7b119be.png)

### INDEX 

1. [Data structure](#Data-structure)
2. [List of characters](#List-of-characters)
3. [Character filtering](#Character-filtering)
4. [Character detail](#Character-detail)
5. [Pagination](#Pagination)

### 1. Data Structure

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
| └─ Pagination.js
|
├─ imge
| └─ logo.png
|
├─ Services
| └─ local-storage.js
|
├─ stylesheets
| └─ ...
|
└─ index.js

```

### 2. List of Characters

We will use the service https://rickandmortyapi.com/documentation/#get-all-characters <br>
[API](https://rickandmortyapi.com/documentation/#get-all-characters
Photo <br>
Name <br>
Species <br>
Character filtering

### 3. Character Filtering

Now that we have the list of characters on the screen, the second part consists of being able to search for them by name. To do this, we add an `input` to the interface, so that when we write a name, only the characters whose name contains the written letters remain in the interface.

![image](https://user-images.githubusercontent.com/81588630/139126555-9438a0ee-709c-4dbd-920e-cfdb9a3ccb26.png)

In addition, the user must filter by type of species

> **NOTE:** The filter must filter regardless of whether the user enters the text in uppercase or lowercase.

## 4. Character Detail <br>

![image](https://user-images.githubusercontent.com/81588630/139125044-544127de-7ea7-46e3-90ac-ed8265ada4aa.png)<br>
We implemented the functionality with which when clicking on a character's card, its information will appear in full screen using dynamic routes.

> **NOTE:** If we search for a text for example "XXX" and there is no character that matches that text, an error message is displayed that says: \_ "There is no character that matches your search<br>

In the detail screen it will appear in addition to the photo, name and species, the planet of origin, the number of episodes in which it appears and if it is alive or dead.

## 5. Pagination <br>

You can also go through the pages with the different results.

![image](https://user-images.githubusercontent.com/81588630/147592667-01755c9d-9aec-466e-8174-913ea777e5c0.png)<br>


## Extra Functionalities

The URL of the character detail is shareable, that is, if we visit that URL directly in the browser, the character detail will be seen. <br> If we refresh the browser in the detail of a character, it should show the detail of the character again.<br>
And in the event that the user navigates to a non-existent URL, such as for example, we must show a message such as "The character you are looking for does not exist."

![image](https://user-images.githubusercontent.com/81588630/139126733-277f9d69-66db-4d69-9278-13ab401de713.png)

#### BONUS: a reset button has been added that eliminates the searches included in the localstorage

#### BONUS: Use a grid system to paint the list of characters. 

### EXTRA: We save and collect the data at the LocalStorage to keep the last search we have made.

---

## Technologies  🛠️ <br> 
React / JS / SCSS <br>

## STAR IN LOCAL 🚀

### Clone this repository on your computer.

Install the package and its dependencies using:

### npm install

Once the installation is complete you will find that a folder named node_modules / has been added.<br>
Finally, run the following command to load a local server and be able to do the visualization:

### npm start

### `npm run build`

Build the production app in the `build` folder.<br>
Correctly bundles React in production mode and optimizes build for best performance.

### NOTE: It is necessary to have NodeJS installed

## Do you think I can apply any improvement?

If you have come this far, and you have detected a problem or consider that something can be improved, I would be delighted if you open a new issue and get your opinion, each improvement is important and necessary for me, thank you very much for your time.
