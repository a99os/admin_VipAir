<template>
  <div class="py-[50px] px-5">
    <h1 class="text-[28px] leading-[21px] font-['Poppins'] font-medium">
      Settings
    </h1>
    <!-- navbar -->
    <div
      class="flex gap-10 bg-white border-b mt-10 md:px-[57px] border-[#000033]"
    >
      <div
        @click="selectType('account')"
        :class="type == 'account' ? 'border-b-2 border-[#000033]' : ''"
        class="py-2 md:py-[30px] cursor-pointer px-5 hover:bg-slate-200 duration-300"
      >
        Account setting
      </div>
      <div
        @click="selectType('security')"
        :class="type == 'security' ? 'border-b-2 border-[#000033]' : ''"
        class="py-2 md:py-[30px] cursor-pointer px-5 hover:bg-slate-200 duration-300"
      >
        Login and security
      </div>
    </div>
    <!-- forms -->
    <form
      v-if="type == 'account'"
      action=""
      class="flex md:gap-[120px] bg-white flex-col py-9 px-[30px] md:flex-row"
    >
      <div class="">
        <h1>Your Profile Picture</h1>
        <div class="w-[300px] mt-9 h-[300px]">
          <picture-input
            ref="pictureInput"
            width="600"
            :hideChangeButton="true"
            radius="10"
            height="600"
            :removable="true"
            margin="16"
            accept="image/jpeg,image/png"
            size="10"
            button-class="btn"
            :custom-strings="{
              upload: '<h1>Bummer!</h1>',
              drag: '🌄 \n Upload your photo',
            }"
            @change="onChange"
          >
          </picture-input>
        </div>
      </div>
      <div class="flex-grow">
        <p>Full name</p>
        <input
          placeholder="Please enter your full name"
          v-model="fullname"
          required
          type="text"
          id="login"
          class="px-5 py-4 border w-full mt-[6px]"
        />
        <p class="mt-6">Username</p>
        <input
          placeholder="Please enter your full username"
          v-model="username"
          type="text"
          required
          id="username"
          class="px-5 py-4 border w-full mt-[6px]"
        />
        <p class="mt-6">Email</p>
        <input
          placeholder="Please enter your full email"
          v-model="email"
          type="email"
          required
          id="username"
          class="px-5 py-4 border w-full mt-[6px]"
        />
        <p class="mt-6">Phone</p>
        <vue-tel-input
          @country-changed="
            (data) => {
              phone = '+' + data.dialCode;
            }
          "
          id="phone"
          v-model="phone_number"
          class="py-[10px] border ring-0 focus:ring-0 outline-none mt-[6px] px-[10px]"
        ></vue-tel-input>
        <button
          class="md:col-span-2 duration-300 mt-4 py-[16px] hvr-bounce-to-right-white bg-[#000] text-white group w-full items-center justify-center flex gap-[10px] px-[26px] text-[16px] md:text-[20px] font-semibold leading-[21px] md:leading-[27px] border border-black"
        >
          <p>Update Profile</p>
          <i class="bx text-xl bx-arrow-back rotate-180 duration-300"></i>
        </button>
      </div>
    </form>
    <form
      v-else
      action=""
      class="md:gap-[120px] bg-white flex-col py-9 px-[30px] md:flex-row"
    >
      <div class="max-w-[500px] mx-auto">
        <p>Password</p>
        <input
          id="password"
          v-model="password"
          :type="show_password ? 'text' : 'password'"
          placeholder="Please enter your password"
          class="px-5 py-4 border w-full mt-[6px]"
        />
        <button
          @click="showPassword"
          type="button"
          class="flex gap-[14px] items-center"
        >
          <div
            class="border border-[#D9D9D9] flex justify-center items-center w-5 h-5 rounded-[2px]"
          >
            <i
              v-if="show_password"
              class="bx bxs-check-square text-[#858383] text-[20px]"
            ></i>
          </div>
          <p class="block text-[#858383] text-[14px] mt-2 leading-[19px]">
            Show Password
          </p>
        </button>

        <p class="mt-5">New Password</p>
        <input
          id="new_password"
          v-model="new_password"
          :type="show_new_password ? 'text' : 'password'"
          placeholder="Please enter a new  password"
          class="px-5 py-4 border w-full mt-[6px]"
        />
        <button
          @click="showNewPassword"
          type="button"
          class="flex gap-[14px] items-center"
        >
          <div
            class="border border-[#D9D9D9] flex justify-center items-center w-5 h-5 rounded-[2px]"
          >
            <i
              v-if="show_new_password"
              class="bx bxs-check-square text-[#858383] text-[20px]"
            ></i>
          </div>
          <p class="block text-[#858383] text-[14px] mt-2 leading-[19px]">
            Show Password
          </p>
        </button>

        <p class="mt-5">Confirm Password</p>
        <input
          id="confirm_password"
          v-model="confirm_password"
          :type="show_confirm_password ? 'text' : 'password'"
          placeholder="Please enter a new password"
          class="px-5 py-4 border w-full mt-[6px]"
        />
        <button
          @click="showConfirmPassword"
          type="button"
          class="flex gap-[14px] items-center"
        >
          <div
            class="border border-[#D9D9D9] flex justify-center items-center w-5 h-5 rounded-[2px]"
          >
            <i
              v-if="show_confirm_password"
              class="bx bxs-check-square text-[#858383] text-[20px]"
            ></i>
          </div>
          <p class="block text-[#858383] text-[14px] mt-2 leading-[19px]">
            Show Password
          </p>
        </button>
        <button
          class="md:col-span-2 duration-300 mt-4 py-[16px] hvr-bounce-to-right-white bg-[#000] text-white group w-full items-center justify-center flex gap-[10px] px-[26px] text-[16px] md:text-[20px] font-semibold leading-[21px] md:leading-[27px] border border-black"
        >
          <p>Update Profile</p>
          <i class="bx text-xl bx-arrow-back rotate-180 duration-300"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PictureInput from "vue-picture-input";

let type = ref("account");
let fullname = ref("");
let username = ref("");
let email = ref("");
let phone_number = ref("");

let show_password = ref(false);
let password = ref("");
let show_new_password = ref(false);
let new_password = ref("");
let show_confirm_password = ref(false);
let confirm_password = ref("");

function showPassword() {
  show_password.value = !show_password.value;
}
function showNewPassword() {
  show_new_password.value = !show_new_password.value;
}
function showConfirmPassword() {
  show_confirm_password.value = !show_confirm_password.value;
}
function selectType(el) {
  type.value = el;
}

function onChange(image) {
  console.log("New picture selected!");
  if (image) {
    console.log("Picture loaded.");
    this.image = image;
  } else {
    console.log("FileReader API not supported: use the <form>, Luke!");
  }
}
</script>

<style lang="scss" scoped></style>
