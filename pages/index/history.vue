<template>
  <div class="py-[50px] px-5">
    <h1 class="text-[28px] leading-[21px] font-['Poppins'] font-medium">
      Payments overview
    </h1>
    <h2
      class="text-[18px] leading-[21px] font-['Poppins'] text-[#BAB9B9] mt-[10px]"
    >
      Here you will find all your data and information
    </h2>

    <!-- navbars -->
    <div class="flex mt-2 lg:mt-[72px] w-full border-b">
      <button
        @click="() => (type = 'all')"
        :class="
          type == 'all'
            ? 'font-bold text-[#4A46FF] buttonTop  '
            : 'font-normal text-[#4B5563]'
        "
        class="text-[14px] px-2 duration-300 font-['Poppins'] pb-[6px] leading-[140%]"
      >
        All payments
      </button>
      <button
        @click="() => (type = 'Succeeded')"
        :class="
          type == 'Succeeded'
            ? 'font-bold text-[#4A46FF]  buttonTop '
            : 'font-normal text-[#4B5563]'
        "
        class="text-[14px] px-2 duration-300 font-['Poppins'] pb-[6px] leading-[140%]"
      >
        Succeeded</button
      ><button
        @click="() => (type = 'Refunded')"
        :class="
          type == 'Refunded'
            ? 'font-bold text-[#4A46FF]  buttonTop '
            : 'font-normal text-[#4B5563]'
        "
        class="text-[14px] px-2 duration-300 font-['Poppins'] pb-[6px] leading-[140%]"
      >
        Refunded
      </button>
    </div>

    <!-- filtres -->
    <div class="mt-2 md:mt-9 grid md:grid-cols-4 gap-2 items-center">
      <VueDatePicker v-model="date" range class="" />
      <v-select
        v-model="favorites"
        :items="['Succeeded', 'Pending', 'Declined', 'Create']"
        label="Status"
        multiple
        persistent-hint
        class="overflow-hidden w-full h-full"
      ></v-select>
      <v-select
        v-model="methods"
        :items="[
          'Visa',
          'Mastercard',
          'NuPay',
          'Mercado Pago',
          'Bank transfer',
        ]"
        label="P. Method"
        multiple
        class="overflow-hidden w-full h-full"
      ></v-select>
      <div class="relative pb-5">
        <div
          class="absolute top-5 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0"
          placeholder="Search Mockups, Logos..."
          required
        />
      </div>
    </div>

    <!-- table -->

    <div class="table_wrapper px-2">
      <table class="md:w-full font-['Poppins'] h-full overflow-auto py-4">
        <thead class="">
          <tr class="border-b h-[54px] uppercase border-[#929191]">
            <td><input type="checkbox" class="border" /></td>
            <td>Payment ID</td>
            <td>Status</td>
            <td>Amount</td>
            <td>p. method</td>
            <td>Creation date</td>
          </tr>
        </thead>

        <tbody class="">
          <tr
            v-for="item in 100"
            @click.stop="selectItem(item)"
            class="border-b h-[54px] font-['Poppins'] hover:bg-[#F0F0F0] duration-300 cursor-pointer border-[#929191]"
          >
            <td><input type="checkbox" class="border" /></td>

            <td class="">06c1774-7f3d-46ad...90a8</td>
            <td class="px-3">
              <div
                :class="statuscss[getStatus(item)]?.parent"
                class="px-[6px] py-2 rounded font-medium font-['Poppins'] items-center flex gap-[6px]"
              >
                <i :class="statuscss[getStatus(item)]?.icon"></i>
                {{ getStatus(item) }}
              </div>
            </td>

            <td><b>$19,623.00</b> USD</td>
            <td class="px-3">
              <div
                class="px-[6px] py-2 rounded font-medium font-['Poppins'] items-center flex gap-[6px]"
              >
                <img
                  :src="pMethod[getPM(item)]?.icon"
                  class="w-[23px] h-5 rounded"
                />
                {{ pMethod[getPM(item)].number }}
              </div>
            </td>
            <td>Mar 23, 2022, 13:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
let type = ref("all");
let date = ref(null);
let favorites = ref("All");
let methods = ref("All");

let pMethod = {
  visa: {
    icon: "https://static-00.iconduck.com/assets.00/visa-icon-2048x1313-o6hi8q5l.png",
    number: "•••• 4242",
  },
  mastercard: {
    icon: "https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png",
    number: "•••• 2332",
  },
  nupay: {
    icon: "https://www.authlete.com/img/news/20221121_nupay.png",
    number: "NuPay",
  },
  mercado: {
    icon: "https://getlogovector.com/wp-content/uploads/2021/09/mercado-pago-logo-vector.png",
    number: "Mercado Pago",
  },
  bank: {
    icon: "https://as1.ftcdn.net/v2/jpg/01/98/24/94/1000_F_198249439_yFuR99tdzoyocZPktmdG5lD8b0mPL6W9.jpg",
    number: "Bank transfer",
  },
};
let statuscss = {
  Succeeded: {
    parent: "text-[#165E3D] bg-[#EDFFEA]",
    icon: "bx bxs-check-circle text-lg",
  },
  Pending: {
    parent: "text-[#B5850B] bg-[#FFF6E9]",
    icon: "bx bxs-time-five text-lg",
  },
  Declined: {
    parent: "text-[#B83131] bg-[#FFEAEA]",
    icon: "bx bxs-minus-circle text-lg",
  },
  Create: {
    parent: "text-[#3D42AD] bg-[#EAECFF]",
    icon: "bx bxs-flag-alt text-lg",
  },
};

function getPM(item) {
  if (item % 6 == 0) {
    return "bank";
  } else if (item % 5 == 0) {
    return "mercado";
  } else if (item % 4 == 0) {
    return "nupay";
  } else if (item % 3 == 0) {
    return "mastercard";
  } else {
    return "visa";
  }
}
function getStatus(item) {
  if (item % 3 == 0) {
    return "Succeeded";
  } else if (item % 4 == 0) {
    return "Pending";
  } else if (item % 5 == 0) {
    return "Declined";
  } else {
    return "Create";
  }
}
</script>

<style lang="css" scoped>
.buttonTop {
  border-bottom: solid 2px #4a46ff !important;
}
.table_wrapper {
  max-height: calc(100vh - 288px) !important;
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
