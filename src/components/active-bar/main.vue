<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Gear from "../icons/Gear.vue";
import Link from "../icons/Link.vue";
import Search from "../icons/Search.vue";
import User from "../icons/User.vue";
import { SidebarDatas } from "./data";

let active = ref<number>(1);
const MyFunc = (idx: number): number => (active.value = idx);

const updateHeight = () => {
  const vh = window.innerHeight;
  // 860px-এর কম হলে 300px কমাবো, বেশি হলে 200px কমাবো
  const subtractAmount = vh < 860 ? 450 : 200;
  const availableHeight = vh - subtractAmount;

  document.documentElement.style.setProperty(
    "--dynamic-list-height",
    `${Math.max(availableHeight, 150)}px` // ন্যূনতম 150px রাখা
  );
};

onMounted(() => {
  window.addEventListener("resize", updateHeight);
  updateHeight();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeight);
});
</script>

<template>
  <aside
    class="p-4 max-w-20 text-white/50 border-e border-[#1f1f1f] flex flex-col justify-between"
  >
    <div
      class="flex flex-col items-center gap-4 pb-4 border-b border-[#1f1f1f]"
    >
      <img src="/bullx_logo.png" alt="bullx_logo" />
      <img src="/angry-horse.png" alt="angry-horse" />
      <div
        class="text-center inline-block rounded-lg p-2 bg-white/10 cursor-pointer"
      >
        <component v-if="Search" :is="Search" class="size-5" />
      </div>
      <div
        class="text-center inline-block rounded-lg p-2.5 bg-white/10 cursor-pointer mb-2"
      >
        <component v-if="Link" :is="Link" class="size-4" />
      </div>

      <div
        class="w-full overflow-y-auto scrollbar-thin"
        :style="{ maxHeight: 'var(--dynamic-list-height)' }"
      >
        <div
          v-for="item in SidebarDatas"
          :key="item.id"
          v-on:click="MyFunc(item.id)"
          class="h-[48px] flex flex-col items-center justify-center cursor-pointer gap-1 transition-all duration-300"
          :class="{
            'text-[#10b981]': item.id === active,
            'hover:text-white/80': item.id !== active,
          }"
        >
          <component v-if="item.icon" :is="item.icon" class="size-4" />
          <p class="text-xs text-center">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <div class="flex flex-col items-center cursor-pointer gap-1">
        <component class="size-4" v-if="Gear" :is="Gear" />
        <p class="text-xs text-center">Settings</p>
      </div>
      <div class="flex flex-col items-center cursor-pointer gap-1">
        <component class="size-5" v-if="User" :is="User" />
        <p class="text-xs text-center">Accounts</p>
      </div>
    </div>
  </aside>
</template>
