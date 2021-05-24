<template>
  <select v-model="$colorMode.preference" class="mode_selector">
    <option :selected="$colorMode.value === 'system'" value="system">
      System
    </option>
    <option :selected="$colorMode.value === 'light'" value="light">
      Light
    </option>
    <option :selected="$colorMode.value === 'dark'" value="dark">Dark</option>
    <option :selected="$colorMode.value === 'sepia'" value="sepia">
      Sepia
    </option>
  </select>
</template>
