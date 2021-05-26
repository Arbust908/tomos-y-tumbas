<template>
  <picture>
    <img
      class="w-full h-[320px] object-cover mb-10"
      :src="formatedSorce"
      :alt="imgAlt"
    />
  </picture>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class UiHeroImg extends Vue {
  @Prop({ default: 'image' }) public imgSrc!: string
  @Prop({ default: 'Image' }) public imgAlt!: string
  get formatedSorce(): string {
    return require(`@/assets/imgs/${this.imgSrc}`)
  }
}

export default UiHeroImg
</script>
