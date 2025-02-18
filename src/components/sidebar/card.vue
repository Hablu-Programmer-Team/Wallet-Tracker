<script setup lang="ts">
import { type Component, type PropType } from "vue";
import ElectricIcon from "../icons/ElectricIcon.vue";

defineProps({
  username: String,
  isLastItem: Boolean,
  badgeCount: Number,
  action: String,
  amount: String,
  tokenName: String,
  price: String,
  marketCap: String,
  time: String,
  iconOne: { type: Object as PropType<Component>, required: false },
  iconTwo: { type: Object as PropType<Component>, required: false },
  tokenIcon: { type: Object as PropType<Component>, required: false },
});
</script>

<template>
  <div
    class="text-gray-600 p-4 shadow-lg flex flex-col space-y-2 border-gray-800 w-full"
    :class="{ 'border-t': !isLastItem, 'border-y': isLastItem }"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <div class="cursor-pointer hover:scale-110 transition-all duration-200">
          <component
            v-if="iconOne"
            :is="iconOne"
            width="24"
            height="24"
            class="text-indigo-400"
          />
        </div>
        <div class="cursor-pointer hover:scale-110 transition-all duration-200">
          <component v-if="iconTwo" :is="iconTwo" width="20" height="20" />
        </div>

        <span class="text-yellow-500/80 font-semibold">{{ username }}</span>
        <span
          class="bg-gray-800 text-slate-300 px-2.5 py-0.5 rounded text-sm font-bold"
        >
          {{ badgeCount }}
        </span>
      </div>
      <button
        class="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 cursor-pointer transition-all duration-200"
      >
        <ElectricIcon class="text-indigo-400" />
      </button>
    </div>

    <div class="flex items-center justify-start gap-2 text-sm font-bold">
      <span class="font-bold hover:text-gray-500">{{ action }}</span>
      <span :class="action === 'Buy' ? 'text-green-500/80' : 'text-red-500'">
        {{ amount }}
      </span>

      <div class="cursor-pointer hover:scale-125 transition-all duration-200">
        <component
          v-if="tokenIcon"
          :is="tokenIcon"
          width="28"
          height="28"
          class="text-amber-600/90"
        />
      </div>

      <span class="text-lg font-bold text-slate-300/80">{{ tokenName }}</span>
    </div>

    <div class="flex justify-between items-center text-sm font-bold">
      <div>
        <div class="hover:text-gray-500 inline-block">
          <span>Price: </span>
          <span>{{ price }}</span>
        </div>
        &nbsp;
        <span class="hover:text-gray-500">MC: </span>
        <span
          :class="action === 'Buy' ? 'text-slate-300/80' : 'text-yellow-400/80'"
        >
          {{ marketCap }}
        </span>
      </div>

      <div
        :class="action === 'Buy' ? 'text-green-500/80' : 'text-red-500/80'"
        class="text-xs text-right"
      >
        {{ time }}
      </div>
    </div>
  </div>
</template>
