export default class MercuryHelper {

  remove(eleLists) {
    eleLists.forEach((ele) => {
      const parentNode = ele.parentNode
      parentNode.removeChild(ele)
    });
  }

  removeScriptsTags(HTMLDocument) {
    this.remove(HTMLDocument.querySelectorAll('script'))
  }

}
