export default () => {
  

// quando a página for carregada, mostrar primeiro item do array
setTimeout(() => {
  const HTMLElements = getHTMLElements()
  turnFirstElementActive(HTMLElements)
}, 2000);

// pegar elementos e colocar em um Array 

  function getHTMLElements() {

    const getElements = (element) => {
      console.log('element: ', element)
      return element.innerText !== undefined
    }

    return Object.values(document.getElementById('main')
    .childNodes)
    .filter(getElements)
  }

// colocar classe active no primeiro element

  function turnFirstElementActive(elements) {
    const [ firstHTMLElement ] = elements
    return firstHTMLElement.className += ' active'
  }


// quando o usuario rolar a pagina chamar funcao

  window.addEventListener('wheel', wheeling, false)

  function wheeling() {
  }

// tirar active do elemento atual
  
  let counter = 0
  function removeActiveFromHTMLElement(elements) {
    const activeElement = elements[counter]
    const removedActiveClassName = activeElement.className.replace('active', '')
    return activeElement.className = removedActiveClassName
  }

// colocar active no proximo element


}