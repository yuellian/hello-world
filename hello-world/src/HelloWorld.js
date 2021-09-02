import { html, css, LitElement } from 'lit';

function incNum(){
  var num = parseInt(document.getElementById('textbox').value, 10);
      num = isNaN(num) ? 0 : num;
      num++;
      document.getElementById('textbox').value = num;
  }
  
  function decNum(){
  var num = parseInt(document.getElementById('textbox').value, 10);
      num = isNaN(num) ? 0 : num;
      num--;
      document.getElementById('textbox').value = num;
  }
  
export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

