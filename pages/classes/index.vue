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
      Classes
    </h1>
    <ul>
      <li
        v-for="characterClasse in characterClasses"
        :key="characterClasse.index"
      >
        {{ characterClasse.name }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      characterClasses: [],
    }
  },
  async fetch() {
    const apiUrl = this.$config.DND_API + 'classes/'
    this.characterClasses = await this.$axios
      .get(apiUrl)
      .then((res) => res.data)
      .then((data) => data.results || [])
  },
}
</script>
