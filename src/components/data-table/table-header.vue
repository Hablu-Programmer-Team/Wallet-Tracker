<script setup lang="ts">
import DoubleArrowSvg from "../icons/DoubleArrowSvg.vue";

import { ref } from "vue";

type sideHeaderProps = {
  id: number;
  name: string;
};

const headerId = ref<number>(2);
const sideHeader: sideHeaderProps[] = [
  { id: 1, name: "Monitor Square" },
  { id: 2, name: "Wallet Tracker(297/300)" },
  { id: 3, name: "Alerts" },
];

const defineHeaderId = (id: number) => {
  headerId.value = id;
};
</script>

<template>
  <!-- top header  -->
  <div class="flex justify-between gap-3 w-full md:gap-5 md:max-w-fit">
    <button
      class="text-[#A0A0A0] bg-[#1f1f1f] px-1 rounded-br-md cursor-pointer"
    >
      <DoubleArrowSvg class="w-3" />
    </button>
    <button
      :key="header.id"
      v-for="header in sideHeader"
      @click="defineHeaderId(header.id)"
      class="w-full py-2.5 cursor-pointer border-b-2 font-semibold text-nowrap text-xs md:text-sm px-4"
      :class="{
        ' border-[#10b981] text-[#10b981]': headerId === header.id,
        'text-[#A0A0A0] border-[#121212]': headerId !== header.id,
      }"
    >
      {{ header.name }}
    </button>
  </div>
</template>

<style></style>
