<script setup lang="ts">
import Close from "../icons/icon.vue";
</script>
<template>
  <button
    class="flex gap-1 bg-[#295A41] text-slate-300 font-bold items-center px-1.5 rounded-md cursor-pointer"
  >
    <slot></slot>
    <Close />
  </button>
</template>
