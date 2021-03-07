<template>
  <div>
    <div class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white has-text-centered">Farm to Mesa</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <section class="section">
            <figure class="image">
              <img src="@/assets/IMG_2506.jpg" alt="Students Learning">
            </figure>
          </section>
        </div>
        <div class="column">
          <section class="section">
            <h1 class="title">Our Mission</h1>
            <p class="is-size-5">
              Our Mission is to server the students of High Tech High and the patrons of Feeding San Diego through the transformative expierience of growing nutritous food and building lasting relationships.
            </p>
          </section>
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column">
          <section class="section">
            <h1 class="title">Our Question</h1>
            <p class="is-size-5">How can we build our community around food in a way that makes us and the earth healthier?</p>
          </section>
        </div>
        <div class="column">
          <section class="section">
            <img src="@/assets/IMG_1837.jpg" alt="Students Working">
          </section>
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column">
          <section class="section">
            <img src="@/assets/IMG_0837.jpg" alt="Students Working">
          </section>
        </div>
        <div class="column">
          <section class="section">
            <h1 class="title">Our Vision</h1>
            <p class="is-size-5">We can flourish together by sharing our product, our table, and our stories.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
.hero {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("../assets/IMG_7556.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>