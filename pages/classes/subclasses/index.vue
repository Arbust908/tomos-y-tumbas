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
      Sub-Classes
    </h1>
    <ul>
      <li v-for="subClass in subClasses" :key="subClass.index">
        {{ subClass.name }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      subClasses: [],
    }
  },
  async fetch() {
    const apiUrl = this.$config.DND_API + 'subclasses/'
    this.subClasses = await this.$axios
      .get(apiUrl)
      .then((res) => res.data)
      .then((data) => data.results || [])
  },
}
</script>
