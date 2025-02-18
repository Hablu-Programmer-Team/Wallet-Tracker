<script setup lang="ts">
import CommonButton from "../common/button.vue";
import button2 from "../common/button2.vue";
import copy from "../icons/copy.vue";
</script>

<template>
  <div
    class="grid grid-cols-5 w-full bg-[#0d0d0f] h-[54px] text-white items-center ps-3 pe-2 border border-[#2d2d2d]"
  >
    <div>
      <div class="flex gap-11 items-center">
        <input type="checkbox" class="checkbox" />
        <p class="text-[#319b64] font-bold">7h ago</p>
      </div>
    </div>
    <div>
      <div class="flex gap-1 items-center">
        <img
          src="/apple.png"
          class="h-6 w-6 border-2 border-[#2d2d2d] rounded-md p-1"
          alt="Apple logo"
        />
        <p class="text-[#CCCCCE] font-bold">Mamun</p>
        <copy />
      </div>
    </div>
    <div>
      <div class="bg-[#483252] inline-block rounded-md">
        <p class="uppercase p-1 font-bold text-[#84589B]">solina</p>
      </div>
    </div>
    <div>
      <div
        class="border-2 border-[#2d2d2d] rounded-md p-1 flex gap-1 max-w-[200px]"
      >
        <CommonButton>alert</CommonButton>
        <CommonButton>insider</CommonButton>
      </div>
    </div>
    <div class="flex justify-end">
      <button2 />
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  accent-color: green;
}

.checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}
</style>
