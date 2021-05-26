<template>
  <section class="text-gray-600 body-font py-10">
    <div
      class="container px-5 py-8 md:py-24 mx-auto flex flex-wrap items-center"
    >
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Si queres ser parte de algo constantemente mutando y para divertirse.
          Sumate!
        </h1>
        <!-- <p class="leading-relaxed mt-4">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify
          hammock starladder roathse. Craies vegan tousled etsy austin.
        </p> -->
      </div>
      <div
        class="
          lg:w-2/6
          md:w-1/2
          bg-gray-100
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          mt-10
          md:mt-0
        "
      >
        <div class="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-600"
            >Nombre</label
          >
          <input
            id="full-name"
            type="text"
            name="full-name"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            id="email"
            type="email"
            name="email"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <button
          class="
            text-white
            bg-indigo-500
            border-0
            py-2
            px-8
            focus:outline-none
            hover:bg-indigo-600
            rounded
            text-lg
          "
        >
          Sumate
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Podes esperar reglas y sugerencias todos los meses.
        </p>
      </div>
    </div>
  </section>
</template>
