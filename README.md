# CCServices Web Application

## Overview
Embark on a virtual world tour with the CCServices web application. This feature-rich application leverages technologies such as React, React Router DOM, Material-UI, Axios, and Redux Toolkit. It integrates with the GeoDB Cities API, Currency Conversion and Exchange Rates API, and WeatherAPI.com to deliver users a seamless and informative experience.

## Key Features

### 1. City Exploration
- **Search and Explore:** Utilize the GeoDB Cities API to search and discover detailed information about cities worldwide.
- **Detailed Insights:** Users can explore cities, view their geographical locations, and access essential details such as population, country, and time zone.

### 2. Weather Updates
- **Real-Time Weather:** Integrated with the WeatherAPI.com API, the application provides real-time weather updates for cities of interest.
- **Meteorological Data:** Users can access current weather conditions, temperature, humidity, and other key meteorological details.

### 3. Currency Conversion
- **Easy Conversions:** The Currency Conversion feature, customized with exchange rate APIs, allows users to effortlessly convert currencies.
- **Real-Time Rates:** Real-time exchange rates are provided, enabling users to perform accurate currency conversions based on the latest market data.

### 4. Responsive Design
- **Device Compatibility:** The application is designed with a responsive layout using Material-UI, ensuring a smooth experience across various devices, including desktops, tablets, and mobile phones.

### 5. Redux State Management
- **Centralized State:** Redux Toolkit is utilized to provide a centralized and predictable state for managing complex application logic.
- **Global State Management:** Redux is used for managing global states such as user preferences and mode selection (light/dark).

## Project Structure
|--node_modules
|--src/
|-- Assets/
|     |-- city.jpg
|	|-- currencies.jpg
|-- Components/
|   |-- AdminMainButton/
|       |-- AdminMainButton.jsx
|   |-- CustomModal/
|       |-- CustomModal.jsx
|   |-- CustomDrawer/
|       |-- CustomDrawer.jsx
|   |--AppCard.jsx
|   |--CityCard.jsx
|   |--CityDetailsCard.jsx
|   |--ContentComponent.jsx
|   |--Links.jsx
|   |--LocationSection.jsx
|   |--MainMenuList.jsx
|   |--NearCities.jsx
|   |--NearCitiesPopover.jsx
|   |--SearchSection.jsx
|   |--SettingsDrawer.jsx
|   |--WeatherCard.jsx
|
|-- Helpers/
|   |-- countriesName.json
|   |-- DateHelpers.js
|
|-- Pages/
|   |-- MainPage/
|   |  |--MainPage.jsx
|   |-- CitiesPage/
|   |  |--CitiesPage.jsx
|   |-- ErrorPage/
|   |  |--ErrorPage.jsx
|   |-- MainPage/
|   |  |--MainPage.jsx
|   |-- NotFoundPage/
|   |  |-- NotFoundPage.jsx
|   |-- index.jsx
|-- Redux/
|   |-- Slices/
|       |-- langSlice.js
|       |-- modeSlice.js
|   |-- Store.js
|
|-- Routers/
|   |-- Links/
|   |   |--MainMenu.jsx
|   |-- CustomRouterProvider.jsx
|
|-- Services/
|   |-- citiesService.js
|   |-- currencyService.js
|   |-- weatherService.js
|
|-- Theme/
|   |-- CustomThemeProvider.jsx
|-- App.jsx
|-- App.css
|-- main.jsx
|-- index.html
|-- vite.config.js
|-- package.json
|-- package-lock.json
|-- README.md
|-- config.json 


## Installation and Setup

1. **Clone the repository from GitHub:**
   ```bash
   git clone <repository-url>

2. **Navigate to the project directory:**
    ```bash
    cd CCServices

3. **Install the dependencies:**
    ```bash
    npm install

4. **Add config.json file with the following:**
    ```json
    {
        "api_key": {your_GeoDB_Cities_API_KEY},
        "weather_api_key": {your_weather_api_key}
    }

5. **Start the development server:**
    ```bash
    npm run dev



This README file includes an overview of the project, key features, the project structure, installation, and setup instructions.

