const vm = new Vue({
  el: '#app',

  data: {
    message: 'Hello world'
  },
  template: `
    <main class="profile">
      <div class="profile_photo"></div>
      <h1 class="profile_title">Arthur Ussuy Ferrari</h1>
      <h2 class="profile_subtitle">Front-end Developer</h2>
    </main>
  `
})  