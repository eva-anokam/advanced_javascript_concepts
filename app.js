
const main = document.querySelector(".main")

const page = (pageDetails) => {
    const section = document.createElement("section")
    section.innerHTML = `
        <h1>${pageDetails.greet}</h1>
        <p>${pageDetails.subText}</p>
        <img src= ${pageDetails.src} alt="a beautiful woman"/>
    `
    return section

}
const homePage = page({ greet: "Hello, welcome to my Portfolio", subText: "My name is Ella, I am a graphic design artist", src: "https://cdn.pixabay.com/photo/2015/07/22/21/25/woman-856125_640.jpg" })

const aboutPage = page({ greet: "Get to know me better", subText: "Hey there, I'm a passionate graphic design artist with a fervent love for visual storytelling. I dive into the world of design with an aim to create captivating narratives that resonate. For me, design isn't just about colors and shapes; it's about emotions, connections, and the magic of transforming ideas into something tangible.", src: "https://cdn.pixabay.com/photo/2023/07/25/18/42/vector-graphic-8149677_640.jpg" })

const contactPage = page({ greet: "Let's talk 👇🏾", subText: "I would love to hear from you, you can send an email to ella@test.com", src: "" })

function changeContent(state) {
    main.innerHTML = ""
    if (state === "home") {
        main.appendChild(homePage)
    } else if (state === "about") {
        main.appendChild(aboutPage)
    } else if (state === "contact") {
        main.appendChild(contactPage)
    }
}

function navigateTo(state) {
    const url = `#${state}`
    history.pushState({ section: state }, null, url )
    changeContent(state)
}

window.navigateTo = navigateTo; // Expose navigateTo globally

window.addEventListener("popstate", (event) => {
    const section = event.state ? event.state.section : "home";
    changeContent(section)
})
window.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.hash.substring(1) || "home"
    navigateTo(currentPath)
})