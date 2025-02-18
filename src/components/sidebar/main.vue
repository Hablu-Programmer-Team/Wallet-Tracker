<script setup lang="ts">
import BitcoinIcon from "../icons/BitcoinIcon.vue";
import Dolphin from "../icons/DolphinIcon.vue";
import SnowFlakeIcon from "../icons/SnowFlakeIcon.vue";
import Card from "./card.vue";
import SidebarHeader from "./header.vue";
</script>

<template>
  <div class="rounded-sm h-full flex-1 md:flex-[0.2] border border-white/20">
    <SidebarHeader />
    <div class="py-2.5">
      <Card
        :isLastItem="false"
        :iconOne="SnowFlakeIcon"
        :iconTwo="Dolphin"
        username="Salman vai"
        :badgeCount="1"
        action="Sell Partial"
        amount="$4.85K"
        :tokenIcon="BitcoinIcon"
        tokenName="Bitcoin"
        price="$0.02338"
        marketCap="$2M"
        time="0s"
      />
    </div>
  </div>
</template>
