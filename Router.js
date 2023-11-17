//create a router object to handle navigation in the app. It has two methods, init and go.
const Router = {
    //init is a method used to add click event listeners to each navlink. then it uses event.preventDefault to prevent the default page refresh. init then gets the current url by using the current link getAttribute("href") method. it saves this url in a constant called url. finnaly it passes this url as an argument to the second router object method go i.e Router.go(url)
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault()
                const url = link.getAttribute("href")
                Router.go(url)

            })
        })
        //this event listener updates the page content when the url is changed by listening for the popstate event.
        window.addEventListener("popstate", event => {
            //calls the go method of the router object and passes the v
            Router.go(event.state.route, false)
        })
        //check the initial URL
        Router.go(location.pathname)
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ route }, null, route)
        }
        let pageElement = null
        switch (route) {
            case "/":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Menu"
                break;
            case "/order":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Your Order"
                break;
            default:
                if (route.startsWith("/product-")) {
                    pageElement = document.createElement("h1")
                    pageElement.textContent = "Details"
                    const paramId = route.subString(route.lastIndexOf("-") + 1)
                    pageElement.dataset.id = paramId
                }
                break;
        }
        if (pageElement) {
            const cache = document.querySelector("main")
            if (Array.from(cache.children).length > 0) {
                cache.children[0].remove()
            }
            cache.appendChild(pageElement)
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
}

export default Router