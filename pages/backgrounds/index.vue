<template>
  <main>
    <h1
      class="
        sm:text-3xl
        text-2xl
        font-medium
        title-font
        text-center text-warmGray-900
      "
    >
      Backgrounds
    </h1>
    <ul>
      <li v-for="backgound in backgounds" :key="backgound.index">
        {{ backgound.name }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      backgounds: [],
    }
  },
  async fetch() {
    const apiUrl = this.$config.DND_API + 'backgrounds/'
    this.backgounds = await this.$axios
      .get(apiUrl)
      .then((res) => res.data)
      .then((data) => data.results || [])
  },
}
</script>
