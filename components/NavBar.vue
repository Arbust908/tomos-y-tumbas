<template>
  <header
    class="
      text-warmGray-600
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
          text-warmGray-900
          mb-4
          md:mb-0
          hover:text-warmGray-600
        "
      >
        <span class="ml-3 text-3xl font-title">Tomos y Tumbas</span>
      </nuxt-link>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <a class="mr-5 hover:text-warmGray-600">Que es?</a>
        <!-- <a class="mr-5 hover:text-warmGray-900">Second Link</a>
        <a class="mr-5 hover:text-warmGray-900">Third Link</a>
        <a class="mr-5 hover:text-warmGray-900">Fourth Link</a> -->
      </nav>
      <button
        class="
          inline-flex
          items-center
          bg-warmGray-100
          border-0
          py-1
          px-3
          focus:outline-none
          hover:bg-warmGray-200
          rounded
          text-base
          mt-4
          md:mt-0
        "
      >
        Registrarse
      </button>
    </div>
  </header>
</template>
