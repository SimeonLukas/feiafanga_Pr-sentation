class IphoneComponent extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
      <div class="phone-container" style="transform: ${this.getAttribute('data-transform-container')};">
        <div class="iphone" data-id="${this.getAttribute('data-id')}" style="transform: ${this.getAttribute('data-transform')};">
          <div class="iphone-front">
            <div class="screen">
              <div class="notch">
                <div class="camera"></div>
                <div class="speaker"></div>
              </div>
              <div class="screen-content" style="background-image: url('images/${this.getAttribute('data-img')}.png');">
                <h3>${this.getAttribute('data-h3')}</h3>
                <p>${this.getAttribute('data-p')}</p>
              </div>
              <div class="home-indicator"></div>
            </div>
          </div>
          <div class="iphone-back">
            <div class="back-camera">
              <div class="camera-lens"></div>
              <div class="camera-lens"></div>
              <div class="camera-lens"></div>
              <div class="camera-lens"></div>
            </div>
            <div class="apple-logo">●</div>
          </div>
          <div class="iphone-left"></div>
          <div class="iphone-right"></div>
          <div class="iphone-top"></div>
          <div class="iphone-bottom"></div>
        </div>
      </div>
    `;
  }
}
class IframeMockup extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `
    <div  class="iframe-mockup">
      <img style="border: 5px dashed white;" src="${this.getAttribute('data-src')}" alt="Logo">
    </div>
  `;
  }
} 





customElements.define('iphone-component', IphoneComponent);
customElements.define('iframe-mockup', IframeMockup);