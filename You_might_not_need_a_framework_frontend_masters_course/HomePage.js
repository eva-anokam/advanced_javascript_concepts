import app  from "./app.js";

export class HomePage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });

        // Add any required styles to the shadow DOM
        const styles = document.createElement("style");
        styles.textContent = `
            /*  CSS styles for the homepage go here */
        `;
        this.root.appendChild(styles);
    }

    connectedCallback() {
        // Render the homepage content within the shadow DOM
        this.root.innerHTML = `
            <!-- HTML structure for the homepage content -->
            <h1>Welcome to My Portfolio</h1>
            <section id="about">
                <h2>About Me</h2>
                <p>Welcome to my portfolio! I'm passionate about...</p>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <div class="project-list">
                    <!-- Display your projects -->
                    <div class="project">
                        <h3>Project Title</h3>
                        <p>Description of the project...</p>
                        <!-- Add project details -->
                    </div>
                    <!-- Add more projects -->
                </div>
            </section>
        `;
    }
}

customElements.define("home-page", HomePage);
