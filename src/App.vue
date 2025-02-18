<script setup lang="ts">
import DataTable from "./components/data-table/main.vue";
import Sidebar from "./components/sidebar/main.vue";
</script>

<template>
  <div class="bg-black p-2 md:p-5">
    <div
      class="max-w-screen-2xl mx-auto h-screen flex flex-col gap-3 sm:flex-row"
    >
      <Sidebar />
      <DataTable />
    </div>
  </div>
</template>
