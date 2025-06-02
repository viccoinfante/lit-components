// my-footer.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-footer')
export class MyFooter extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column ; 
      align-self: flex-end;
      align-items: center; 
      background-color: rgba(0, 0, 0, 1);
      color: #aaa;
      padding: 20px;
      font-size: 0.9em;
      width: 100%; 
      box-sizing: border-box;
    }

  `;
  render() {
    return html`
      <div>
        <label> Hola, soy un footer </label>
      </div>
      
    `;
  }
}