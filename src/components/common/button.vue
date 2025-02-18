<script setup lang="ts">
import Close from "../icons/icon.vue";
</script>
<template>
  <button
    class="flex gap-1 bg-[#295A41] font-bold items-center px-1.5 py-0.5 rounded-md cursor-pointer"
  >
    <slot></slot>
    <Close />
  </button>
</template>
