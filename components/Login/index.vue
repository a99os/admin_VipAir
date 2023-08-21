<template>
  <div class="w-screen h-screen grid md:grid-cols-2">
    <div class="py-[110px] px-3 md:px-[68px]">
      <div class="w-full h-full">
        <h1 class="">VIP AIR ASSIST</h1>
        <h2 class="mt-[15px]">Login to your account</h2>

        <label
          for="email"
          class="block mt-[12px] text-[#858383] text-[14px] leading-[19px]"
          >Email</label
        >
        <div class="relative">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            :class="
              true
                ? 'focus:ring-0'
                : 'ring-[#FF0000] ring-1 focus:ring-1 focus:ring-[#FF0000]'
            "
            class="text-[#858383] mt-[6px] bg-[#EFEFEF] border-none w-full py-4 px-6"
          />
          <p
            v-if="false"
            class="absolute text-[14px] leading-[16px] mt-2 font-['Railway'] text-[#FF0000]"
          >
            Sorry, we don’t recognize this email
          </p>
        </div>

        <label
          for="password"
          class="block mt-[35px] text-[#858383] text-[14px] leading-[19px]"
          >Password</label
        >
        <input
          id="password"
          :type="show_password ? 'text' : 'password'"
          placeholder="Enter your password"
          class="text-[#858383] mt-[6px] bg-[#EFEFEF] focus:ring-0 border-none w-full py-4 px-6"
        />
        <div class="flex justify-around">
          <button
            @click="showPassword"
            type="button"
            class="flex gap-[14px] items-center mt-6"
          >
            <div
              class="border border-[#D9D9D9] flex justify-center items-center w-5 h-5 rounded-[2px]"
            >
              <i
                v-if="show_password"
                class="bx bxs-check-square text-[#858383] text-[20px]"
              ></i>
            </div>
            <p class="block text-[#858383] text-[14px] leading-[19px]">
              Show Password
            </p>
          </button>
          <!-- <button
            @click="rememberMe"
            type="button"
            class="flex gap-[14px] items-center mt-6"
          >
            <div
              class="border border-[#D9D9D9] flex justify-center items-center w-5 h-5 rounded-[2px]"
            >
              <i
                v-if="remember_me"
                class="bx bxs-check-square text-[#858383] text-[20px]"
              ></i>
            </div>
            <p class="block text-[#858383] text-[14px] leading-[19px]">
              Remember me
            </p>
          </button> -->
          <button
            type="button"
            class="flex hover:underline duration-300 gap-[14px] items-center mt-6"
          >
            <p class="block text-[#858383] text-[14px] leading-[19px]">
              Forgot password?
            </p>
          </button>
        </div>

        <button
          class="hvr-bounce-to-right-white w-full bg-black text-[#FFFFFF] group downToUp py-[16px] mt-10 items-center justify-center flex gap-[10px] px-[26px] text-[16px] md:text-[20px] font-semibold leading-[21px] md:leading-[27px] border border-black"
        >
          <p>Create Account</p>
        </button>
      </div>
    </div>
    <div
      class="hidden md:block bg-[url('/assets/images/loginsection.jpg')] bg-cover bg-no-repeat bg-center"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let show_password = ref(false);
let remember_me = ref(false);
function showPassword() {
  show_password.value = !show_password.value;
}
function rememberMe() {
  remember_me.value = !remember_me.value;
}
</script>

<style lang="css" scoped>
h1 {
  color: #000;
  font-family: Playfair Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
h2 {
  color: #285689;
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
