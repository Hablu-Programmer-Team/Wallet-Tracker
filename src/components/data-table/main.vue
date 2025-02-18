<script setup lang="ts">
import TableList from "./list.vue";
import TableHeader from "./table-header.vue";
</script>

<template>
  <div
    class="flex-[0.8] hidden md:block bg-[#0E0E10] rounded-sm border border-white/20"
  >
    <TableHeader />
    <TableList />
  </div>
</template>
