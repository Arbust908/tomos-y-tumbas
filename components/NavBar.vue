<template>
  <header
    class="
      body-font
      bg-trueGray-200 bg-opacity-50
      backdrop-filter backdrop-blur-md
      border-b border-trueGray-300
    "
  >
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <nuxt-link
        to="/"
        class="
          flex
          title-font
          font-medium
          items-center
          text-warmGray-800
          mb-4
          md:mb-0
          hover:text-orange-700
        "
      >
        <span class="ml-3 text-3xl font-title">Tomos y Tumbas</span>
      </nuxt-link>
      <nav
        class="
          md:ml-auto
          flex flex-wrap
          items-center
          text-base
          justify-center
          text-warmGray-600
        "
      >
        <a
          v-if="$route.path === '/'"
          href="#what"
          class="mr-5 hover:text-orange-700 hover:bg-warmGray-100"
        >
          Que es?
        </a>
        <nuxt-link
          to="/my_rules"
          class="mr-5 hover:text-orange-700 hover:bg-warmGray-100"
        >
          Mis Reglas
        </nuxt-link>
      </nav>
      <UiBtn text="Registrate" />
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
class NavBar extends Vue {}
export default NavBar
</script>
