<script setup lang="ts">
import ActiveBar from "./components/active-bar/main.vue";
import DataTable from "./components/data-table/main.vue";
import Navbar from "./components/navbar/main.vue";
import Sidebar from "./components/sidebar/main.vue";
</script>

<template>
  <main class="bg-[#0E0E10]">
    <div
      class="mx-auto flex flex-col sm:flex-row gap-x-1.5 overflow-hidden max-h-screen"
    >
      <ActiveBar />
      <div class="w-full">
        <Navbar />
        <div class="flex w-full gap-1.5 pe-3.5">
          <Sidebar />
          <DataTable />
        </div>
      </div>
    </div>
  </main>
</template>
