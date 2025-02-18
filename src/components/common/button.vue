<script setup lang="ts">
import Close from "../icons/icon.vue";
</script>
<template>
  <button
    class="flex gap-1 bg-[#295A41] text-slate-300 font-medium text-sm items-center px-1.5 rounded cursor-pointer py-0.5"
  >
    <slot></slot>
    <Close />
  </button>
</template>
