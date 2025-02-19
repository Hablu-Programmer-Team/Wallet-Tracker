<script setup lang="ts">
import ActiveBar from "./components/active-bar/main.vue";
import DataTable from "./components/data-table/main.vue";
import Navbar from "./components/navbar/main.vue";
import Sidebar from "./components/sidebar/main.vue";
import FooterItem from "./components/footer/footerItem.vue";
import Bell from "./components/Icons/Bell.vue";
import Twitter from "./components/icons/Twitter.vue";
import AcademyIcon from "./components/Icons/AcademyIcon.vue";
</script>

<template>
  <main class="bg-[#0E0E10]">
    <div
      class="mx-auto h-screen overflow-y-hidden flex flex-col sm:flex-row gap-x-1.5"
    >
      <ActiveBar />
      <div class="w-full">
        <Navbar />
        <div class="flex h-screen w-full gap-1.5 pe-3.5">
          <Sidebar />
          <DataTable />
        </div>
      </div>
    </div>
    <FooterItem 
    alertBadge1="97"
    twitterBadge="99+"
    amount="189.14"
    amount2="0.243"
    lang="EN"
    country="ZH"
    :iconOne="Bell"
    :iconTwo="Twitter"
    :iconThree="Bell"
    :iconFour="AcademyIcon"
  />
  </main>
</template>
