export default class Position {

  getXY(element) {
    let x = 0, y = 0;
    do {
        x += element.offsetTop  || 0;
        y += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return { x, y };
  }

  getWidthHeight(element) {
    const { width, height } = element.getBoundingClientRect();
    return { width, height };
  }

  getLocale(element) {
    const xy = this.getXY(element);
    const widthHeight = this.getWidthHeight(element);
    return {
      x: xy.x,
      y: xy.y,
      width: widthHeight.width,
      height: widthHeight.height,
    };
  }

}
