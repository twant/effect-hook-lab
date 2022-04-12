# This is...JEOPARDY! (useEffect & APIs Lab)

![jeopardy board](Jeopardy.png)

## The Goal

## Getting Started

* Clone this repository using `git clone`
* `cd` into the lab
* `npm install`
* `npm start`

## The Lab

1. **Render the Board** - Get sample data to render using the pre-built components & cleaning methods
1. **API Calls** - Make an API call and get data returned in console
1. **Render API Data** - Get API data to render using useEffect hook
1. **Answer Box** - Add "answer" box and submit button. When a user submits an answer, check to see if it's right (using the answer property for that clue) and update the score appropriately.
1. **New Game Button** - Add a "new game" button that refreshes the tiles to a new set of clues (by making a new call to the API) - you'll need to use the Effect hook to make this happen!

## Extensions

* **Styling** - Update the styling to be even closer to the actual jeopardy game - we leave this up to your creativity!
* **Responsiveness** - Update the styling to ensure the game is responsive on all standard screen sizes
* **Data Cleaning** - Some clues have images that are not included, rendering the clues useless. Others have `<i>` tags, and still others have parenthtical annotations. All of these make the questions difficult to answer in this format. Implement advanced data cleaning to handle these exceptions. Consider using:
  * Regex
  * Fuzzy string matching algorithms/libraries
* **One at a Time** - Currently, it is possible to open more than one clue at a time. Fix this bug so that only one clue can be open at any one time
* **Turn-based** - Convert the game to a turn-based game so that multiple people can participate and answer questions. Keep score for each team/person.
