# Fake Detect Front-end Codebase

This repo has the code for the front-end app of Fake Profile Detection AIML minor project. The front-end is built by `React` & `React-Bootstrap`.

[Click here to view the backend codebase for this app.](https://github.com/yashwanthSRIVAT/fake-detect-servers)

## Pages:

### `Predict`: Takes 8 numbers form users, and makes a post request to the backend, to retrieve a single predicted binary outcome.

#### Additions:

1. Edit categorical inputs (gender, location, links) etc, from numerical to categorical. The user should be able to input 'Male' or 'Female' for Gender input for instance. But the data to be sent to the backend must be 0 or 1.
2. Add another option to test with a `test.csv` file. Show predictions generated by the model at the backend.
3. Make this page as the main page. Currently, there's no main page for the app.

### `Dataset`: Displays the training dataset of the model.

### `Graph`: Displays the training-accuracy & loss graph.
