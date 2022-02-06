class DocumentContainer extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.savedContent;
    this.addEventListener('keyup', this.debounce(this.onKeyup.bind(this)));
    this.focus();
  }

  onKeyup(e) {
    this.save();
  }

  debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  save() {
    localStorage.setItem('content', this.innerHTML);
  }

  get savedContent() {
    return localStorage.getItem('content');
  }

}

customElements.define('document-container', DocumentContainer);
