<template>
  <button>
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class UiBtn extends Vue {
  @Prop({ default: 'button', type: String }) text!: string
}
export default UiBtn
</script>

<style lang="scss" scoped>
button {
  @apply inline-flex items-center bg-warmGray-100 border-0 py-1 px-3 focus:outline-none hover:bg-warmGray-200 rounded text-base focus:ring-2 ring-offset-gray-50 ring-indigo-200;
}
</style>
