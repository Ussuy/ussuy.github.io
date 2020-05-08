export default () => {
  window.addEventListener('wheel', wheeling, false)

  function wheeling() {
    console.log('wheeling...')
  }



}