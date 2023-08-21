<template>
  <div class="py-[50px] px-5">
    <h1 class="text-[28px] leading-[21px] font-['Poppins'] font-medium">
      List of registered people
    </h1>
    <h2
      class="text-[18px] leading-[21px] font-['Poppins'] text-[#BAB9B9] mt-[10px]"
    >
      Here you will find all your data and information
    </h2>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          temporary
          location="right"
          width="405"
        >
          <div class="w-[405px] h-full bg-[#F0F0F0] px-[30px] py-10">
            <div class="flex items-center justify-between">
              <h1 class="text-[20px] font-medium border-b-black border-b-2">
                Customers
              </h1>
              <v-btn @click="closeDrawer" color="#F0F0F0">
                <i class="bx bx-x text-3xl"></i>
              </v-btn>
            </div>
            <h2
              class="text-[28px] pb-6 font-medium leading-[144%] mt-[46px] text-[#000] border-[#000] border-b"
            >
              {{ id }} {{ name }}
            </h2>
            <h3 class="text-[20px] mt-[46px] text-[#000]">General</h3>
            <p class="text-[14px] mt-[22px] font-medium text-[#898888]">
              Email
            </p>
            <h4
              class="text-[14px] mt-[5px] pb-2 border-b font-medium text-[#000]"
            >
              {{ email }}
            </h4>
            <p class="text-[14px] mt-[22px] font-medium text-[#898888]">
              Phone
            </p>
            <h4
              class="text-[14px] mt-[5px] pb-2 border-b font-medium text-[#000]"
            >
              {{ phone }}
            </h4>
            <p class="text-[14px] mt-[22px] font-medium text-[#898888]">
              Adress
            </p>
            <h4
              class="text-[14px] mt-[5px] pb-2 border-b font-medium text-[#000]"
            >
              {{ address }}
            </h4>

            <h3 class="text-[20px] mt-[46px] text-[#000]">
              Additional information
            </h3>
            <h4 class="text-[14px] mt-[18px] font-medium text-[#898888]">
              Quantity of trips: <b class="text-[#000]">{{ quantity }}</b>
            </h4>
            <h4 class="text-[14px] mt-[12px] font-medium text-[#898888]">
              Spent money: <b class="text-[#000]">${{ spend_money }}</b>
            </h4>
            <h4 class="text-[14px] mt-[12px] font-medium text-[#898888]">
              Card: activated: <b class="text-[#000]">{{ card }}</b>
            </h4>
          </div>
        </v-navigation-drawer>
      </v-layout>
    </v-card>

    <div class="table_wrapper">
      <table class="md:w-full h-full overflow-auto mt-[30px] py-4">
        <thead class="">
          <tr class="border-b h-[54px] border-[#929191]">
            <td>Customer name</td>
            <td>Date of request</td>
            <td>Type of service</td>
            <td>Status</td>
          </tr>
        </thead>

        <tbody class="">
          <tr
            v-for="item in 100"
            @click.stop="selectItem(item)"
            class="border-b h-[54px] hover:bg-[#F0F0F0] duration-300 cursor-pointer border-[#929191]"
          >
            <td>Donyor Yusupov</td>
            <td>14.02.2021</td>
            <td>Meet & Greet - Fast track</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";

let drawer = ref(false);
let name = ref("Donyor Yusupov");
let email = ref("donyor@gmail.com");
let phone = ref("+1 587 969 8903");
let address = ref("Germany, Calgary 3st.");
let quantity = ref(1);
let spend_money = ref(150);
let card = ref("activated");
let id = ref(null);

function selectItem(item) {
  id.value = item;
  drawer.value = true;
}
function closeDrawer(item) {
  drawer.value = false;
}
onMounted(() => {
  initFlowbite();
});
</script>

<style lang="css" scoped>
.table_wrapper {
  max-height: calc(100vh - 168px) !important;
  overflow: auto !important;
  border-spacing: 30px;
}
thead {
  color: #929191;
  font-family: Playfair Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
