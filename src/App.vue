<script setup lang="ts">
import ActiveBar from "./components/active-bar/main.vue";
import DataTable from "./components/data-table/main.vue";
import FooterItem from "./components/footer/footerItem.vue";
import AcademyIcon from "./components/icons/AcademyIcon.vue";
import Bell from "./components/icons/Bell.vue";
import LiveBribe from "./components/icons/LiveBribe.vue";
import Twitter from "./components/icons/Twitter.vue";
import Navbar from "./components/navbar/main.vue";
import Sidebar from "./components/sidebar/main.vue";
</script>

<template>
  <main class="bg-[#0E0E10]">
    <div class="mx-auto flex flex-col h-screen max-h-screen overflow-hidden">
      <div class="flex h-full gap-x-1.5">
        <ActiveBar class="shrink-0" />
        <div class="flex-1 flex flex-col space-y-1.5 h-full overflow-hidden">
          <Navbar />

          <div class="flex w-full gap-1.5 pe-3.5 flex-1 overflow-hidden">
            <Sidebar class="shrink-0" />

            <div class="flex-1 overflow-hidden">
              <div class="w-full h-full overflow-x-auto">
                <DataTable />
              </div>
            </div>
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
        :iconFive="LiveBribe"
      />
    </div>
  </main>
</template>

<style>
::-webkit-scrollbar {
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #1e1e1e;
}

::-webkit-scrollbar-thumb {
  background: #424242;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
