<template>
  <section class="text-gray-600 body-font">
    <div class="mx-auto flex pb-12 items-center justify-center flex-col">
      <img
        class="w-full md:mb-10 object-cover object-center max-h-screen"
        alt="hero"
        src="@/assets/imgs/hero.jpg"
      />
      <div
        id="what"
        class="
          text-center
          lg:w-8/12
          w-10/12
          -mt-8
          md:-mt-32
          bg-white
          rounded
          p-4
          md:p-10
        "
      >
        <h1
          class="
            title-font
            sm:text-6xl
            text-5xl
            font-medium
            text-gray-900
            font-title
          "
        >
          Tomos y Tumbas
        </h1>
        <p class="leading-relaxed text-2xl">
          Un Sistema modular y narrativo de Rol.
        </p>
        <p class="leading-relaxed">
          Desde su concepcion <strong>Tomos y Tumbas</strong> es un sistema que
          facilita la narrativa sin dejar de lado los pillares de combate y
          exploracion. Basado en 5e pero altamente modificado con los que
          nosotros llamamos <strong>Tomos</strong>. Estos Tomos son
          intercambiables para personalizar su experiencia.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
div > div {
  scroll-margin-top: 100px;
  @apply space-y-4;
}
</style>
