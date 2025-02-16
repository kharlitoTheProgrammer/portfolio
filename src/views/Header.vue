<script setup>
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram-white-icon.png";
import linkedInIcon from "../assets/images/linkedin-app-white-icon.png";
import githubIcon from "../assets/images/images.png";
import { ref } from "vue";

const activeNav = ref("home");
const isMenuOpen = ref(false);

const setActive = (id) => {
  activeNav.value = id;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navs = ref([
  { id: "home", text: "Home", route: "#home" },
  { id: "about", text: "About", route: "#about" },
  { id: "projects", text: "Projects", route: "#projects" },
]);

const socials = ref([
  {
    id: 0,
    text: "Facebook",
    src: facebookIcon,
    route: "https://www.facebook.com/khrlaquino/",
  },
  {
    id: 1,
    text: "Instagram",
    src: instagramIcon,
    route: "https://www.instagram.com/khrlaquino/",
  },
  {
    id: 2,
    text: "LinkedIn",
    src: linkedInIcon,
    route: "https://www.linkedin.com/in/kharl-chris-an-aquino-b6617625b",
  },
  {
    id: 3,
    text: "Github",
    src: githubIcon,
    route: "https://github.com/kharlitoTheProgrammer",
  },
]);
</script>

<template>
  <div
    class="flex justify-between items-center px-6 md:px-8 py-5 pl-8 pr-8 pt-5"
  >
    <nav class="hidden md:flex gap-10 text-white text-xl">
      <ul class="flex text-2xl gap-10 p-8">
        <li
          v-for="nav in navs"
          :key="nav.id"
          :class="[
            activeNav === nav.id
              ? 'text-red-400 underline'
              : 'hover:text-red-400',
            'cursor-pointer transition duration-300',
          ]"
          @click="setActive(nav.id)"
        >
          <a :href="nav.route">
            {{ nav.text }}
          </a>
        </li>
      </ul>
    </nav>

    <button class="md:hidden text-white" @click="toggleMenu">☰</button>

    <div
      v-if="isMenuOpen"
      class="absolute top-16 left-0 w-full bg-black p-4 flex flex-col items-center gap-4"
    >
      <ul class="text-white text-lg">
        <li v-for="nav in navs" :key="nav.id" class="py-2 text-center">
          <a :href="nav.route" @click="toggleMenu">{{ nav.text }}</a>
        </li>
      </ul>
    </div>

    <div class="flex gap-4">
      <ul class="flex text-2xl gap-10 p-8">
        <li v-for="social in socials" :key="social.id" class="text-white">
          <a :href="social.route" target="_blank">
            <img :src="social.src" alt="" class="w-6 h-6 text-black" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
