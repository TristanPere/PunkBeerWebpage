# Punk Beer WebPage
This is a repository for the files of Tristan Peregrine's Punk Beer API Website

## Contents
This repo contains all relevant files used to create the webpage. A breakdown of planning as well as each pages lay out and functions logic can be found in the pdf.
The page has been developed using React in Visual Studio Code.

## Functionality
The page has a home landing page where all the beers from the API can be viewed. The beers can also be filtered by their name, alcholic percentage, brew year, and acidity. As there are a total of 325 beers, they can be viewed across different pages with the ability to change the results per page.

## Logic Notes
Webpage logic:
* getAllBeers uses the API to collect all the data from the API pages. The API fetch url is changed dependent on if ABV or Classic buttons are pressed filtering for those criteria. This is done at the App level
* allBeers is the array that is passed into Main and then CardList to be filtered there by the name-input as well as a ph-filter. It is then cut into pieces of length resultsPerPage and displayed.
* The filters to be applied are stored as a useState({object})
 * When a checkbox is click it has an attached function, that dependent on the value of the checkbox, changes the corresponding filter to the inverse of itself as all start false.
 * When a string is entered into the input box the value of the name key in filters is changed.
* Page buttons move through the allBeers array that is filtered then sliced inside of CardList
* arrayLengthFishing is a function that drills into the Main and then CardList to extract the number of elements in the array to be displayed. This means the value of finalPage can be updated dependent on what filters have been applied. Thus the page arrows cant increase passed this value. 

All filters set user back to page one.


## Website:
https://tristanpere.github.io/punkbeerwebpage/

## Setup / Installation

Within your computer's terminal:
 * Locate to a directory you wish to use as a save location
 * Copy git repo url to clone it
 ### `git clone https://github.com/TristanPere/punkbeerwebpage/`
 * Paste into terminal 
 * Change directories into /PunkBeerWebpage/
 * To pick up all the files ignored in the gitignore you can run in the project directory:
 ### `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
