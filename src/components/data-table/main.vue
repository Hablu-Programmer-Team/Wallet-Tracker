<script setup lang="ts">
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
</script>

<template>
  <div
    class="flex-[0.8] hidden md:block bg-[#0E0E10] rounded-sm border border-white/20"
  >
    <TableHeader />
    <div
      class="py-2.5 max-h-screen overflow-y-scroll scroll-smooth scrollbar-thin pb-[120px]"
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
</template>
