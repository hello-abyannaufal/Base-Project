<template>
  <nav :class="themeNav">
    <!--  Col 1 / 2 -->
    <div class="flex flex-row w-full lg:w-1/6">
      <router-link to="/">
        <div class="flex text-white items-center my-5">
          Hello World
        </div>
      </router-link>
      <button :class="themeToggle" type="button" v-on:click="toggleNavbar()">
        <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="active = true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <!-- Col 2 / 2 -->
    <div class="lg:flex lg:flex-row lg:justify-end lg:w-5/6 lg:space-x-11 flex-col items-center text-white"
      :class="{ hidden: !showMenu, flex: showMenu }">
      <div v-for="(link, index) in importData" :key="index">
        <div class="lg:py-0 py-3">
          <router-link :to="{ path: link.route }" :class="themeText">
            {{ link.title }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="js">
import LinkNavbar from "@/misc/navbar";
export default {
  data() {
    return {
      importData: LinkNavbar,
      showMenu: false,
      themeNav: "effect-glass fixed mb-0 md:pb-0 md:pt-0 flex lg:flex-row flex-col w-full items-center px-10 py-4 shadow-2xl z-50",
      themeToggle: "text-white ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:opacity-75",
      themeText: "text-white text-sm active:bg-white hover:text-green-500",
      mobile: "flex flex-row w-full",
      desktop: "flex flex-row w-1/6",
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.effect-glass {
  background: rgba(7, 9, 12, 0.75);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.9px);
  -webkit-backdrop-filter: blur(7.9px);
}
</style>