
import { aboutPage, contactPage, homePage } from "./Page.js";

const Router = {
    init: () => {
        //set up event listener for nav links
        const navLinks = document.querySelectorAll(".nav__link");
        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault()
                const url = link.querySelector("a").getAttribute("href")
                //by the second arg is addToHistory == true
                Router.go(url)
            })
        })
        //listen for page navigation
        window.addEventListener("popstate", (event) => {
            Router.go(event.state.route, false)
            
        })
    },
    go: (route, addToHistory = true) => {
        //update the browser history with a new route
        if (addToHistory) {
            history.pushState({ route }, null, route)
        }
        let pageElement = null
        const main = document.querySelector(".main")
        //navigate to a given route and update the page content based on the route
        switch (route) {
            case "/":
                pageElement = homePage
                break;
            case "/about":
                pageElement = aboutPage
                break;
            case "/contact":
                pageElement = contactPage
                break;
            default:
                break;
        }

        if (pageElement) {
            if (Array.from(main.children).length > 0) {
                main.children[0].remove()
            }
            main.appendChild(pageElement)
            //when a new page is loaded, the viewport starts at the very top of the page without any prior scroll position
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
}

export default Router