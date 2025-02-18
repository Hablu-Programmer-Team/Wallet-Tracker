<script setup lang="ts">
defineProps<{ className?: string }>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    :class="className"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5M11 6a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2v6a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-1h.5a3 3 0 0 0 1.955-5.275A3 3 0 0 0 14 7V6a1 1 0 1 0-2 0v1h-1zm2 9h-3v-2h4.5a1 1 0 1 1 0 2zm0-6h-3v2h4a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
</template>
