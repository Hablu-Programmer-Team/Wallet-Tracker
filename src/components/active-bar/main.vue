<script setup lang="ts">
import { ref } from "vue";
import Gear from "../icons/Gear.vue";
import Link from "../icons/Link.vue";
import Search from "../icons/Search.vue";
import User from "../icons/User.vue";
import { SidebarDatas } from "./data";

let active = ref<number>(1);
const MyFunc = (idx: number): number => (active.value = idx);
</script>

<template>
  <aside
    class="p-4 max-w-20 text-slate-300 border-e border-gray-400/80 flex flex-col justify-between h-screen"
  >
    <div
      class="flex flex-col items-center gap-4 pb-4 border-b border-slate-200/40"
    >
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
        v-for="item in SidebarDatas"
        :key="item.id"
        v-on:click="MyFunc(item.id)"
        class="flex flex-col items-center cursor-pointer gap-1"
        :class="{ 'text-green-400': item.id === active }"
      >
        <component v-if="item.icon" :is="item.icon" class="size-5.5" />
        <p class="text-xs text-center">{{ item.label }}</p>
      </div>
    </div>

    <div class="space-y-4">
      <div class="flex flex-col items-center cursor-pointer gap-1">
        <component v-if="Gear" :is="Gear" />
        <p class="text-xs text-center">Settings</p>
      </div>
      <div class="flex flex-col items-center cursor-pointer gap-1">
        <component v-if="User" :is="User" />
        <p class="text-xs text-center">Accounts</p>
      </div>
    </div>
  </aside>
</template>
