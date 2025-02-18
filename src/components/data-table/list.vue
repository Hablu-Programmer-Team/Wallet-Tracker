<script setup lang="ts">
import Item from "./item.vue";
const tags = [{
  id: 1,
  name: "alert"
}, {
  id: 2,
  name: "insider"
}]
</script>

<template>
  <section>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
    <Item createdAgo="7h ago" name="Mamun" address="EYu4mxpkBs" chain="solana" :tags="tags"/>
  </section>
</template>
