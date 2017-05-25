import Position from './position';
import COS from 'css-optimum-selector';

export default class LocaleTree {

  constructor(HTMLDocument, screenWidth, screenHeight) {
    this.HTMLDocument = HTMLDocument;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.position = new Position();
    this.tree = null;
    this.cos = new COS();
  }


  constructLocaleTree(tree) {
    const position = this.position.getLocale(tree);
    const selector = this.cos.getUniqueCssSelector($(tree))
  }

}
