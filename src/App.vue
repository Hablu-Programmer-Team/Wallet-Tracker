<script setup lang="ts">
import DataTable from "./components/data-table/main.vue";
import Sidebar from "./components/sidebar/main.vue";
import ActiveBar from "./components/active-bar/main.vue";
</script>

<template>
  <main class="bg-[#0E0E10]">
    <div class="mx-auto h-screen flex flex-col sm:flex-row gap-x-1.5">
      <ActiveBar />
      <Sidebar />
      <DataTable />
    </div>
  </main>
</template>
