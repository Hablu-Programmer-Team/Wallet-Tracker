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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m3.5 13-.204-.952C2.629 8.935 5.002 6 8.185 6H19m0 0-3 3m3-3-3-3m4.5 8 .204.952C21.371 15.065 18.998 18 15.815 18H5m0 0 3-3m-3 3 3 3"
    />
  </svg>
</template>
