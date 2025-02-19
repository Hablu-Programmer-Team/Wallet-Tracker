<script setup lang="ts">
defineProps<{ className?: string }>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    :class="className"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.469 18.476a3.496 3.496 0 1 1-4.945-4.945l3.473-3.473 4.945 4.945zm4.534-4.534 3.473-3.473a3.496 3.496 0 1 0-4.945-4.945l-3.473 3.473zm-10.54 5.595a4.996 4.996 0 0 0 7.066 0l8.008-8.008a4.996 4.996 0 0 0-7.066-7.066l-8.008 8.008a4.996 4.996 0 0 0 0 7.066"
      clipRule="evenodd"
    />
  </svg>
</template>
