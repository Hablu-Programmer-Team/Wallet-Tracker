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
    <circle
      cx="12"
      cy="9"
      r="3"
      stroke="currentColor"
      stroke-width="1.5"
      opacity=".5"
    />
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="1.5"
      d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"
      opacity=".5"
    />
  </svg>
</template>
