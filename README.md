Single Page Application (SPA) Routing Example
=============================================

This repository contains a simple demonstration of Single Page Application routing using Vanilla JavaScript.

Project Structure
-----------------

The project consists of the following files:

-   index.html: The HTML file that serves as the main entry point for the SPA.
-   app.js: Initializes the app and contains the routing logic.
-   HomePage.js: Defines the custom element for the home page content.
-   router.js: Implements the router logic for navigation within the SPA.

How It Works
------------

### HTML Structure

The `index.html` file contains a header with navigation links and an empty main content area.

### JavaScript Modules

-   app.js: Sets up the app and initializes the router. Imports the `Router` object and listens for the DOMContentLoaded event to start the app.

-   HomePage.js: Defines the custom element `home-page` for the home page content. Creates a shadow DOM and renders the HTML and styles within it.

-   router.js: Implements the router object responsible for handling page navigation. Initializes click event listeners for navigation links and listens for the `popstate` event to handle browser history changes. Based on the requested route, it dynamically creates and appends the corresponding page element to the main content area.

Usage
-----

To run the application, open the `index.html` file in a web browser. Click on the navigation links ("Home," "About," "Contact") to navigate through the SPA. The content will dynamically change based on the selected route.

How to Use/Extend
-----------------

-   To add new pages, create a new JavaScript file for each page content, define the custom element, and update the router to handle the new route.
-   Customize the HTML content and styles within each page's custom element according to the desired layout and functionality.