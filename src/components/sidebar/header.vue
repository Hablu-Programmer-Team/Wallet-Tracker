<script setup lang="ts">
import FilterSvg from "../icons/FilterSvg.vue";
import SoundSvg from "../icons/SoundSvg.vue";

import { ref } from "vue";

type sideHeaderPros = { id: number; name: string };

const headerId = ref<number>(1);
const defineHeaderId = (id: number) => (headerId.value = id);

const sideHeader: sideHeaderPros[] = [
  { id: 1, name: "Following" },
  { id: 2, name: "Following Inflow" },
];
</script>

<template>
  <!-- top header  -->
  <div class="flex">
    <button
      :key="header.id"
      v-for="header in sideHeader"
      @click="defineHeaderId(header.id)"
      class="w-full h-[40px] cursor-pointer border-b-2 font-semibold text-nowrap text-xs md:text-sm"
      :class="
        headerId === header.id
          ? ' border-[#10b981] text-[#10b981]'
          : 'border-[#A0A0A0] text-[#A0A0A0]'
      "
    >
      {{ header.name }}
    </button>
  </div>
  <!-- bottom header  -->
  <div class="mt-3 px-2 flex gap-10 items-center justify-between">
    <button
      class="text-xs px-3 py-1 bg-[#1f1f1f] text-white/50 font-semibold cursor-pointer flex items-center gap-2 rounded-sm md:text-sm"
    >
      <FilterSvg className="w-4 h-4" /> Filter
    </button>
    <div class="flex gap-3">
      <button
        class="text-xs text-nowrap px-3 py-1 bg-[#1f1f1f] text-white/50 font-semibold cursor-pointer flex items-center gap-2 rounded-sm md:text-sm"
      >
        Filter +
      </button>
      <button class="cursor-pointer bg-[#1f1f1f] px-2 py-1 rounded-sm">
        <SoundSvg class="w-4" />
      </button>
    </div>
  </div>
</template>
