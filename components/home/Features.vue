<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-6 mx-auto">
      <h1
        class="
          sm:text-3xl
          text-2xl
          font-medium
          title-font
          text-center text-gray-900
          mb-10
        "
      >
        Algunos de nuestros Tomos <br class="hidden sm:block" >Para elegir y
        combinar
      </h1>
      <div
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
      >
        <div class="p-4 md:w-1/3 flex">
          <div
            class="
              w-12
              h-12
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-warmGray-100
              text-warmGray-500
              mb-4
              flex-shrink-0
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Vida, Heridas y Muerte
            </h2>
            <p class="leading-relaxed text-base">
              El tomo de Vida, Heridas y Muerte nos da las mecanicas de cuantos
              puntos de vida tiene cada jugador, si dependen de la clase u otra
              variable, como se manejan y clasifican la heridas y como es que
              nuestro personajes llegan a su fin.
            </p>
            <UiReadMore />
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex">
          <div
            class="
              w-12
              h-12
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-warmGray-100
              text-warmGray-500
              mb-4
              flex-shrink-0
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Equipo
            </h2>
            <p class="leading-relaxed text-base">
              El Equipo maneja como se usa y administran los items. Pesan? se
              calcula el uso de cada elemento? Las armas y armaduras se
              desgastan? Todo esto y mas se puede personalizar con el Tomo de
              Equipo.
            </p>
            <UiReadMore />
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex">
          <div
            class="
              w-12
              h-12
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-warmGray-100
              text-warmGray-500
              mb-4
              flex-shrink-0
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Personajes
            </h2>
            <p class="leading-relaxed text-base">
              Este Tomo nos da las pautas de como podemos armar nuestros
              personajes. Se usan las clases y sub-clases, se empieza con Puntos
              de XP y se compran habilidades o todos comienzan igual y se
              diversifica atravez de los items.
            </p>
            <UiReadMore />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
