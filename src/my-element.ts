import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

const userNav = localStorage.getItem('LOCAL_STORAGE_USER_KEY');
const passNav = localStorage.getItem('LOCAL_STORAGE_PASS_KEY');

@customElement("login-component")
export class LoginComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
      font-family: sans-serif;
      flex-direction: column;
      justify-content: center;
      align-content: space-around;
    }

    h2 {
      justify-content: center;
      color: #333;
      margin-bottom: 20px;
      display: flex;
    }

    label {
      justify-content: center;
      display: flex;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }

    input {
      background-color: rgb(255, 255, 255);
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      color: black;
    }
    input:focus {
      outline: none;
      border-color: rgb(255, 0, 0);
      background-color: rgb(255, 255, 255);
      box-shadow: 0 0 0 0.2rem rgba(255, 81, 0, 0.25);
      display: flex;
      color: black;
    }
    button {
      width: 100%;
      padding: 10px 15px;
      background-color: rgb(255, 0, 0);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      display: flex;
      margin-top: 16px;
      justify-content: center;
    }

    button:hover {
      background-color: rgb(238, 124, 124);
    }
  `;

  @state()
  private email = "";

  @state()
  private pass = "";

  private getEmailInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  private getPassInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.pass = input.value;
  }
  private enviarBoton(event: Event) {
    event.preventDefault();

    if (!this.email || !this.pass) {
      alert("Por favor, ingresa tu correo y contraseña.");
      return;
    }

    try {
      const storedEmail = userNav;
      const storedPassword = passNav;

      if (!storedEmail || !storedPassword) {
        alert(
          'No hay credenciales guardadas.'
        );
        return;
      }

      if (this.email === storedEmail && this.pass === storedPassword) {
        alert("¡Inicio de sesión exitoso!");
        console.log("Login exitoso para:", this.email);
        // Aquí podrías redirigir al usuario o actualizar el estado de la aplicación
      } else {
        alert("Correo o contraseña incorrectos.");
        console.log("Fallo de login para:", this.email);
      }
    } catch (e) {
      alert("Error al leer de localStorage.");
      console.error("Error leyendo de localStorage:", e);
    }
  }
  render() {
    return html`
      <h2>LOGIN</h2>
      <form @submit=${this.enviarBoton}>
        <div>
          <label for="email">Correo:</label>
          <input
            type="text"
            id="username"
            .value=${this.email}
            @input=${this.getEmailInput}
          />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            .value=${this.pass}
            @input=${this.getPassInput}
          />
        </div>
        <div>
          <button type="submit" ?disabled=${!this.email || !this.pass}>
            Acceder
          </button>
        </div>
      </form>
    `;
  }
}
