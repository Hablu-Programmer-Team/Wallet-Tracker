<script setup lang="ts">
import BitcoinIcon from "../icons/BitcoinIcon.vue";
import Dolphin from "../icons/DolphinIcon.vue";
import SnowFlakeIcon from "../icons/SnowFlakeIcon.vue";
import Card from "./card.vue";
import SidebarHeader from "./header.vue";

const items = Array.from({ length: 20 }, (_, index) => ({
  iconOne: index % 2 === 0 ? SnowFlakeIcon : Dolphin,
  iconTwo: index % 2 === 0 ? Dolphin : SnowFlakeIcon,
  username: `User ${index + 1}`,
  badgeCount: Math.floor(Math.random() * 5),
  action: index % 3 === 0 ? "Buy" : "Sell",
  amount: `$${(Math.random() * 10 + 1).toFixed(2)}K`,
  tokenIcon: BitcoinIcon,
  tokenName: ["Bitcoin", "Ethereum", "Solana", "Doge"][index % 4],
  price: `$${(Math.random() * 50000 + 1000).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })}`,
  marketCap: `$${(Math.random() * 100 + 1).toFixed(1)}B`,
  time: `${Math.floor((index * 30) / 60)}m ${(index * 30) % 60}s`,
}));
</script>

<template>
  <div
    class="rounded-sm h-full flex-1 md:flex-[0.2] border border-white/20 max-h-screen"
  >
    <SidebarHeader />
    <div
      class="py-2.5 max-h-screen overflow-y-scroll scroll-smooth scrollbar-thin pb-40"
    >
      <Card
        v-for="(item, index) in items"
        :key="index"
        :isLastItem="index === items.length - 1"
        v-bind="item"
      />
    </div>
  </div>
</template>
