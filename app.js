import Router from "./router.js"

const app = {}
app.router = Router
window.addEventListener("DOMContentLoaded", () => {
    app.router.init()
})
