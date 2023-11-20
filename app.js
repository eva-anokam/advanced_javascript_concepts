import Router from "./router.js"


//link pages
import { HomePage } from "./HomePage.js"


const app = {}
app.router = Router
window.addEventListener("DOMContentLoaded", () => {
    app.router.init()
})

export default app
