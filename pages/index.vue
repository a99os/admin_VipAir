<template>
  <div v-if="false">
    <Login />
  </div>
  <div class="" v-else>
    <div class="grid grid-cols-4">
      <div class="col-span-1">
        <!-- sidebar -->
        <Sidebar />
      </div>
      <div class="col-span-3">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
