import { JSDOM } from 'jsdom';

export default class Mmercury {

  constructor(HTML) {
    this.setupHTML(HTML)
  }

  setupHTML(HTML) {
    if (typeof HTML === 'string') {
      this.document = new DOMParser(HTML, 'text/xml')
    } else {
      this.document = HTML
    }
    console.log(this.document.querySelector('p').textContent);
  }

}
