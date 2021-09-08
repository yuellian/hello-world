import { html, css, LitElement } from 'lit';

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
      enable: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    if(this.counter == 10){
      this.shadowRoot.querySelector('#inc').style.backgroundColor="pink";
    }
    else{
      this.shadowRoot.querySelector('#inc').style.backgroundColor="#EFEFEF";
    }
  }

  __decrement(){
    if(this.counter > 0){
      this.counter -= 1;
    }

    if(this.counter == 10){
      this.shadowRoot.querySelector('#dec').style.backgroundColor="pink";
    }
    else{
      this.shadowRoot.querySelector('#dec').style.backgroundColor="#EFEFEF";
    }
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button id="inc" @click=${this.__increment}>increment</button>
      <button id="dec" @click=${this.__decrement}>decrement</button>
    `;
  }
}
