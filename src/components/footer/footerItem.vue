<script setup lang="ts">
import { type Component, type PropType } from "vue";

defineProps({
  alertBadge1: String,
  twitterBadge: String,
  amount: String,
  amount2: String,
  lang: String,
  country: String,
  iconOne: { type: Object as PropType<Component>, required: false },
  iconTwo: { type: Object as PropType<Component>, required: false },
  iconThree: { type: Object as PropType<Component>, required: false },
  iconFour: { type: Object as PropType<Component>, required: false },
  iconFive: { type: Object as PropType<Component>, required: false },
  iconSix: { type: Object as PropType<Component>, required: false },
  iconSeven: { type: Object as PropType<Component>, required: false },
});
</script>

<template>
  <footer
    class="flex justify-between items-center px-3 bg-[#131112] py-1.5 border border-[#2d2d2d]"
  >
    <div class="flex gap-3.5 md:gap-5 xl:gap-7">
      <div class="flex sm:gap-1 items-center">
        <component v-if="iconOne" :is="iconOne" class="w-5" :fill="'#319b64'" />
        <p class="text-[#319b64] font-semibold text-sm hidden sm:block">
          Alert
        </p>
        <p
          class="bg-red-400/60 rounded-full text-[11.5px] flex justify-center items-center px-1 text-center text-white font-bold"
        >
          {{ alertBadge1 || "0" }}
        </p>
      </div>
      <div class="flex sm:gap-1 items-center">
        <component v-if="iconTwo" :is="iconTwo" class="w-5" :fill="'#319b64'" />
        <p
          class="font-semibold hidden sm:block text-sm text-gray-400 text-nowrap"
        >
          Twitter Tracker
        </p>
        <p
          class="bg-red-400/60 rounded-full text-[11.5px] flex justify-center items-center px-1 text-center text-white font-bold"
        >
          {{ twitterBadge || "0" }}
        </p>
      </div>
      <div class="flex gap-1 items-center">
        <component
          v-if="iconThree"
          :is="iconThree"
          class="w-5"
          :fill="'#ffffff'"
        />
        <p class="font-semibold hidden sm:block text-sm text-gray-400">
          Notifications
        </p>
      </div>
      <div class="hidden sm:flex gap-4 items-center">
        <div class="flex gap-1.5 items-center">
          <div class="w-3 h-3 bg-blue-300 border-2 border-black"></div>
          <p class="text-gray-400 font-semibold text-[12px]">
            {{ amount || "0" }}
          </p>
        </div>
        <div class="flex gap-1.5 items-center">
          <div class="w-3 h-3 bg-red-300 rounded-full"></div>
          <p class="text-gray-400 font-semibold text-[12px]">
            {{ amount2 || "0" }}
          </p>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex gap-6">
      <div class="flex gap-1 items-center">
        <img src="/flag.png" class="w-5 h-5" alt="Flag" />
        <p class="text-[#319b64] font-semibold text-sm">{{ lang || "EN" }}</p>
      </div>
      <div class="flex gap-1 items-center">
        <div class="w-4 h-4 rounded-full bg-red-400"></div>
        <p class="font-semibold text-sm text-gray-600">{{ country }}</p>
      </div>
      <div class="flex gap-1 items-center">
        <component v-if="iconFive" :is="iconFive" />
        <p class="text-gray-400 font-semibold text-sm text-nowrap">
          Live Bribe
        </p>
      </div>
      <div class="flex gap-1 items-center">
        <component v-if="iconFour" :is="iconFour" />
        <p class="text-gray-400 font-semibold text-sm">Academy</p>
      </div>
      <div class="flex gap-1 items-center">
        <p class="text-gray-400 font-semibold text-sm">About</p>
      </div>
    </div>
  </footer>
</template>
