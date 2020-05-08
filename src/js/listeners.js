export default () => {
  window.addEventListener('wheel', wheeling, false)

  function wheeling() {
    const HTMLElements = getHTMLElements()
    HTMLElements.map(element => {
      // trocar classe TODO
    })
  }

  function getHTMLElements() {

    const getElements = (element) => {
      return element.innerText !== undefined
    }

    return Object.values(document.getElementById('main')
    .childNodes)
    .filter(getElements)
  }
  


  
}