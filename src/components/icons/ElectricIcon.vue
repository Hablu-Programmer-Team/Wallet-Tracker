<script setup lang="ts">
defineProps<{ className?: string }>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    :class="className"
  >
    <path d="M12 10h7L8 22l3-9H5l8-11Z" fill="currentColor" />
  </svg>
</template>
