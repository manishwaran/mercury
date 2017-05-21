export default class Position {

  getXY(element) {
    let x = 0, y = 0
    do {
        x += element.offsetTop  || 0
        y += element.offsetLeft || 0
        element = element.offsetParent
    } while(element)

    return { x, y }
  }

  getWidthHeight(element) {
    const { width, height } = element.getBoundingClientRect()
    return { width, height }
  }

}
