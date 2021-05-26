<template>
  <main class="">
    <UiHeroImg
      class="mb-4"
      img-src="my_rules.jpg"
      img-alt="Virgil and Dante in Hell, criticazing my rules"
    />
    <h1
      class="
        sm:text-3xl
        text-2xl
        font-medium
        title-font
        text-center text-warmGray-900
        mb-4
      "
    >
      Nuestras Reglas
    </h1>
    <section class="max-w-2xl w-8/12 py-8 mx-auto">
      <article>
        <h2>Glancing Blow</h2>
        <ul>
          <li>Para golpear a un enemigo hay que igualar o superar su AC</li>
          <li>
            Si la tirada de ataque es el mismo numero que el AC del enemigo se
            consedira un <strong>Glancing Blow</strong>. Esto significa que el
            daño se reduce a la mitad
          </li>
          <li>El AC puede ser un rango, marcado como 15-16.</li>
        </ul>
      </article>
      <article>
        <h2>Inventario</h2>
        <ul>
          <li>
            Cada Pj puede llevar <strong>Peso</strong> igual a su
            <strong>STR</strong>x2
          </li>
          <li>Por defecto todos los items tienen <strong>Peso</strong>1.</li>
          <li>
            Algunos items muy pesasos pueden tener un <strong>Peso</strong>2 o
            <strong>Peso</strong>3
          </li>
          <li>
            Los items pequeños o que se pueden agrupar y guardar juntos, como
            papel, monedas y otros, se agrupan en un
            <strong>Paquete</strong> que los contiene todos y todos los
            <strong>Paquete</strong> tienen <strong>Peso</strong>1
          </li>
        </ul>
      </article>
      <article>
        <h2>Cadena de Dados</h2>
        <ul>
          <li>
            Siempre que algo pida subir o bajar en la
            <strong>Cadena de Dados</strong> revisa la cadena de abajo y fijate
            que dados estan a la izquierda, para bajar, y hacia la derecha, para
            subir.
          </li>
          <li><strong>d4 - d6 - d8 - d10 - d12 - d20</strong></li>
        </ul>
      </article>
      <article>
        <h2>Dado de Uso</h2>
        <ul>
          <li>
            Ciertos items, en general los que tienen la propiedad
            <strong>Paquete</strong>, necesitan ser contados pero seria
            demaciado trabajo llevar la cuenta , sea en papel o con porotos, por
            ende le asignamos una <strong>Categoria</strong> de dado.
          </li>
          <li>
            La <strong>Categoria</strong> de dado simboliza la cantidad o
            abundancia de un recurso.
          </li>
          <li>
            Cada vez que se utiliza un recurso con <strong>Categoria</strong> de
            dado se tira el dado. En caso de sacar un 1 en el dado, la
            <strong>Categoria</strong> del dado baja.
          </li>
        </ul>
      </article>
    </section>
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

<style lang="scss" scoped>
h2 {
  @apply text-2xl font-bold text-orange-700 pb-1;
}
article {
  @apply mb-6;
}
ul {
  @apply space-y-2;
}
</style>
