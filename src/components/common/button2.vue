<script setup lang="ts">
import bin from "../icons/bin.vue";
import icon2 from "../icons/icon2.vue";
</script>
<template>
  <div class="flex gap-2.5 items-center cursor-pointer">
    <button
      class="bg-[#604D21] flex gap-1 text-[#DFBC57] font-bold rounded-full px-2.5 py-0.5 items-center cursor-pointer"
    >
      <icon2 /> Alert
    </button>
    <div class="bg-[#1B1B1F] px-0.5 py-1 rounded-md"><bin /></div>
  </div>
</template>
