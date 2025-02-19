<script setup lang="ts">
import { type PropType } from "vue";
import CommonButton from "../common/button.vue";
import button2 from "../common/button2.vue";
import copy from "../icons/copy.vue";

type ITag = { id: number; name: string };
defineProps({
  createdAgo: String,
  name: String,
  address: String,
  chain: String,
  tags: { type: Array as PropType<ITag[]>, required: false, default: () => [] },
});
</script>

<template>
  <div>
    <div
      class="grid grid-cols-5 w-full bg-[#0d0d0f] py-1.5 text-white items-center ps-3 pe-2 border-b border-[#1f1f1f] min-w-2xl"
    >
      <div class="flex gap-11 items-center min-w-fit w-fit">
        <div
          class="w-4 h-4 rounded-sm bg-gray-800/80 border border-gray-600 cursor-pointer"
        ></div>
        <p class="text-[#319b64] text-xs text-nowrap md:text-sm font-semibold">
          {{ createdAgo }}
        </p>
      </div>
      <div class="flex gap-0.5 items-center text-slate-300 min-w-fit w-fit">
        <img
          src="/apple.png"
          class="h-6 w-6 border border-gray-800 rounded-md p-1"
          alt="Apple logo"
        />
        <p class="font-bold text-white/60 text-sm text-nowrap">{{ name }}</p>
        <p class="text-[#5C5C5E] font-semibold text-sm">{{ address }}</p>
        <copy />
      </div>
      <div class="bg-[#874ba8]/30 inline-block rounded-md min-w-fit w-fit">
        <p class="uppercase px-1 py-0.5 font-semibold text-[#874ba8] text-xs">
          solana
        </p>
      </div>
      <div
        class="border border-gray-800 rounded-md p-1 flex gap-1 max-w-[230px] min-w-fit w-fit"
      >
        <CommonButton v-for="tag of tags">{{ tag.name }}</CommonButton>
      </div>
      <div class="flex justify-end min-w-fit w-full">
        <button2 />
      </div>
    </div>
  </div>
</template>
