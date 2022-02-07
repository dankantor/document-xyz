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
    try {
      localStorage.setItem('content', this.innerHTML);
    } catch (err) {
      alert('This browser does not support saving.');
    }
  }

  get savedContent() {
    let content = localStorage.getItem('content');
    if (content === null || content === '') {
      content = `
        <div>Quickly jot down text. Close the tab, open it again and your text persists.</div>
        <br />
        <div>Text is saved locally. There is no guarantee the browser won't eventually delete it.</div>
        <br />
        <div>This is not for saving important data!</div>
      `;
    }
    return content;
  }

}

customElements.define('document-container', DocumentContainer);
