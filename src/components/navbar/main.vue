<script setup lang="ts">
import NoteSearch from "../icons/NoteLogo.vue";
import PowerBuy from "../icons/PowerBuy.vue";
import SettingsIcon from "../icons/SettingsIcon.vue";
</script>

<template>
  <header class="p-4 font-Primary">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="flex text-[#00a63e] font-semibold"><NoteSearch /> Wallet Tracker</h1>
        <p class="text-gray-400 text-xs">Tag, track, and analyze multiple wallets</p>
      </div>
      <div class="flex space-x-4 text-sm items-center">
        <button
          class="bg-gray-800 px-3 py-2.5 cursor-pointer hover:bg-gray-700/90 duration-300 transition-all rounded flex items-center"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
        <button
          class="bg-gray-800 hover:opacity-75 hover:text-white transition-all text-gray-400 flex items-center ps-3 py-1 rounded cursor-pointer text-sm"
          aria-label="Buy Power"
        >
          <PowerBuy /> BUY
          <span class="bg-gray-900 text-slate-200 px-3 py-1 rounded ml-3 mr-1.5"
            >40 <span class="text-gray-400 ms-2">$</span></span
          >
        </button>
        <button
          class="bg-gray-800 text-slate-200 px-3 py-2 rounded cursor-pointer text-sm hover:opacity-75 transition-all"
        >
          Add Wallet +
        </button>
        <button
          class="bg-gray-800 text-slate-200 px-3 py-2 rounded cursor-pointer text-sm hover:opacity-75 transition-all"
        >
          Import/Export Wallet
        </button>
      </div>
    </div>
  </header>
</template>
