<script setup lang="ts">
import SidebarHeader from "./components/SidebarHeader.vue";
import MainSidebarHeader from "./components/MainSidebarHeader.vue"
import { ref } from "vue";
</script>

<template >
  <div class="bg-black p-2 md:p-5">
    <div class="max-w-[1240px] mx-auto h-screen flex flex-col gap-3 sm:flex-row">
      <!-- sidebar  -->
      <div class="bg-[#0E0E10] rounded-sm h-full flex-1 md:flex-[0.3] border border-white/20">
        <SidebarHeader />
      </div>
      <!-- navbar  -->
      <div class="flex-[0.7] hidden md:block bg-[#0E0E10] runded-sm border border-white/20">
        <MainSidebarHeader />
      </div>
    </div>
  </div>
</template>
