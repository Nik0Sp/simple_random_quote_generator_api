<h1 align="center">Simple Random Quote Generator</h1>

<p align="center">
  <strong>A simple React application that generates random quotes.</strong>
</p>

##  Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_random_quote_generator_api.git`
2. Change directory to the project folder: `cd simple_random_quote_generator_api`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

##  Usage

The application consists of a single component called `App`. It manages the state for the quote and author using the `useState` hook.

When the component mounts, the `useEffect` hook is used to fetch an initial random quote from the [Quotable API](https://api.quotable.io/) and update the state.

To fetch a new random quote, simply click the "Get Quote" button.

## Components

The main component of the application is `App`, which renders the quote generator functionality.

### App

The `App` component is responsible for fetching and displaying random quotes. It contains the following functionality:

- The `quote` state variable stores the content of the quote.
- The `author` state variable stores the author of the quote.
- The `getQuote` function makes an API call to the [Quotable API](https://api.quotable.io/random) to fetch a random quote. It updates the `quote` and `author` state variables with the fetched data.
- When the "Get Quote" button is clicked, the `getQuote` function is called to fetch a new random quote, and the quote and author are displayed on the screen.

##  API

The application uses the [Quotable API](https://api.quotable.io/) to fetch random quotes. The API endpoint `https://api.quotable.io/random` returns a JSON object containing the content and author of a random quote.

##  Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.