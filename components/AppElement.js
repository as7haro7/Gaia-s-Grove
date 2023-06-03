// class AppElement extends HTMLElement {

//     constructor() {
//       super();
//       this.textContent = "¡Hola, soy un app-element!";
//     }
  
//   }
  
//   customElements.define("app-element", AppElement);
class AppElement extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para el navbar-element */
          nav {
            background-color: #f2f2f2;
            padding: 10px;
          }
  
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
  
          li {
            display: inline-block;
            margin-right: 10px;
          }
  
          a {
            text-decoration: none;
            color: #333;
          }
        </style>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      `;
    }
  }
  
  customElements.define("app-element", AppElement);
  