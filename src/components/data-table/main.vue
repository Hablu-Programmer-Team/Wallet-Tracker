<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import Item from "./item.vue";
import TableHeader from "./table-header.vue";

const tableItems = Array.from({ length: 40 }, (_, index) => ({
  createdAgo: `${Math.floor(index * 2.5)}m ago`,
  name: `FAWI ${index + 1}`,
  address: `EYu4...${Math.random().toString(36).substring(2, 6)}`,
  chain: ["solana", "ethereum", "polygon", "avalanche"][index % 4],
  tags: [
    { id: 1, name: ["NFT", "DeFi", "GameFi", "DAO"][index % 4] },
    { id: 2, name: ["Meme", "Stablecoin", "L2", "DEX"][index % 4] },
  ],
}));

const updateHeight = () => {
  const vh = window.innerHeight * 1;
  document.documentElement.style.setProperty(
    "--dynamic-height",
    `${vh - 210}px`
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
  <div
    class="flex-1 xl:flex-[0.8] bg-[#0E0E10] rounded-sm border border-white/20"
  >
    <TableHeader />
    <div class="overflow-hidden">
      <div
        class="grid w-full bg-[#16161a] h-[50px] text-white items-center ps-3 pe-2 border border-[#2d2d2d]"
        style="
          grid-template-columns:
            minmax(150px, 1fr) minmax(250px, 1fr) minmax(150px, 1fr)
            minmax(150px, 1fr) minmax(150px, 1fr);
        "
      >
        <div class="w-full">
          <div class="flex gap-11 items-center">
            <div
              class="w-4 h-4 rounded-sm bg-gray-800/80 border border-gray-600 cursor-pointer"
            ></div>
            <p class="text-white/50 text-sm font-semibold">Created</p>
          </div>
        </div>
        <div>
          <div class="flex gap-0.5 items-center text-white/50">
            <p class="font-bold text-sm">Name</p>
            <copy />
          </div>
        </div>
        <div>
          <div>
            <p class="text-white/50 px-1 py-0.5 font-bold text-sm">Chain</p>
          </div>
        </div>
        <div class="text-white/50 font-bold">Tags</div>
        <div class="flex justify-end">
          <button2 />
        </div>
      </div>

      <div
        class="py-2.5 max-h-[var(--dynamic-height)] overflow-y-scroll scroll-smooth scrollbar-thin"
      >
        <Item
          v-for="(item, index) in tableItems"
          :key="index"
          :createdAgo="item.createdAgo"
          :name="item.name"
          :address="item.address"
          :chain="item.chain"
          :tags="item.tags"
        />
      </div>
    </div>
  </div>
</template>
