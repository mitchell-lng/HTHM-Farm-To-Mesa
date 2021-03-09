<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <figure class="mr-5 image">
            <img class="icon small-logo" src="@/assets/icon.jpeg">
          </figure>
          <figure class="image">
            <img class="icon" src="@/assets/F2M.png">
          </figure>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" id="burger" aria-expanded="false" data-target="navbar" v-on:click="toggleBurger()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/aboutus">About Us</a>
        <a class="navbar-item" href="/projects">Projects</a>

        <div class="navbar-end">
          <a class="navbar-item" href="/gallery">Gallery</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    toggleBurger: function () {
      document.getElementById("burger").classList.toggle("is-active");
      document.getElementById("navbar").classList.toggle("is-active");
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icon {
  max-width: 300px;
}

.small-logo {
  max-width: 100px;
}

</style>
