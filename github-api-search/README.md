Instructions
    To run this project, run npm i to install all dependencies followed by npm start to run the application. To compile the scss, run sass App.scss App.css.

Implementation Thoughts

    I have created the majority of the small application in the App.js file and one component Repo.js which contains the cards which display each of the repo details. 

    In App.js, there are 2 functions. FetchRepos connects to the API and returns repositories on GitHub based on the user input. HandleSubmit triggers the FetchRepo function when the user submits their form. 

    There is also a form to accept user input for a search term for the repo, and the option to filter by language.

    Once the user has submitted their form, the data is returned via a card grid to represent each result with a dropdown to show the specific details for each repo.

Struggles

    I struggled to find out how to access readme details from the object returned from the API and therefore was unable to display this as part of the detailed card view.

With More Time
    I did not have time to add testing to my solution. However, I would add unit tests to ensure the form is displayed on the page and that the appropriate results are displayed on submission of the form. Also, I would test that there is a helpful message where the search returns no results or that the search term is empty (neither of which has been implemented yet).

    The design is very simplistic but functional and given more time I would like to make this more aesthetically pleasing - perhaps with a more exciting colour scheme, adding user avatar's to the card, hover states etc. It would be nice to create a custom theme using Material UI to implement this.

    Currently, the cards have a standard minimum height on the description so for most descriptions the cards are reasonably uniform. This shows a few lines of description, where the descriptions are really long the cards to unaligned and there are whitespaces on the page, it would be nice to set a character length for the descriptions to see just a preview where they are really long which could be expanded into a pop-up if a user chooses.

    I could add further filtering and sorting options for the user such as sorting by date created or most stars.
