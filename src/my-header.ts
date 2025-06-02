import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const usuario = localStorage.getItem('LOCAL_STORAGE_USER_KEY');
@customElement('my-header')
export class MyHeader extends LitElement {
  static styles = css`
    :host {
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      background-color: #333;
      color: white;
      padding: 15px 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      width: 100%; 
      box-sizing: border-box; 
    }

    .usuario {
      font-size: 1.5em;
      font-weight: bold;
      color:rgb(167, 13, 228);
      text-shadow: 1px 1px 1px rgba(32,32,32,0.3);
    }

    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex; 
      gap: 20px; 
    }

    nav a {
      color: white;
      text-decoration: none;
      font-size: 1.1em;
      transition: color 0.3s ease-in-out;
    }

    nav a:hover {
      color:rgb(145, 7, 224);
    }
  `;

  userGuardado = usuario;

  render() {
    return html`
      <div class="usuario">${this.userGuardado}</div>
      <nav>
        <ul>
          <li><a href="index.html">Cerrar sesión</a></li>
        </ul>
      </nav>
    `;
  }
}