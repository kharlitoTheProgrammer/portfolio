<script setup></script>

<template>
  <main class="relative h-screen flex items-center">
    <div
      class="absolute inset-0 bg-[url('../assets/images/tyler.png')] bg-cover bg-center opacity-25"
    ></div>

    <div class="relative flex justify-between w-full px-20">
      <div class="flex flex-col max-w-2xl gap-5">
        <h3 class="text-white text-4xl">Hey there,</h3>
        <h1 class="text-white text-7xl">I'm Kharl Aquino</h1>
        <h3 class="text-4xl text-red-400">-Software Developer</h3>
        <p class="text-white font-thin text-lg">
          I’m a passionate web and mobile developer dedicated to crafting
          modern, user-friendly digital experiences. With expertise in building
          dynamic websites and intuitive mobile applications, I focus on clean
          design, seamless functionality, and performance-driven solutions.
          Whether it's a sleek portfolio, a business platform, or an engaging
          mobile app, I bring ideas to life with precision and creativity. Let’s
          build something amazing together.
        </p>
        <div class="flex justify-center md:justify-start">
          <button
            class="bg-red-500 w-40 rounded-md text-white py-3 mt-10 cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-10">
        <div class="text-white text-4xl font-bold">
          <div class="flex justify-end items-center gap-3">
            <p class="text-6xl">1</p>
            <p class="text-red-400 text-6xl">+</p>
          </div>
          <p class="flex justify-end text-lg opacity-50">Years of experience</p>
        </div>
        <div class="text-white text-4xl font-bold">
          <div class="flex justify-end items-center gap-3">
            <p class="text-6xl">2</p>
            <p class="text-red-400 text-6xl">+</p>
          </div>
          <p class="flex justify-end text-lg opacity-50">Completed projects</p>
        </div>
        <div class="text-white text-4xl font-bold">
          <div class="flex justify-end items-center gap-3">
            <p class="text-6xl">2</p>
            <p class="text-red-400 text-6xl">+</p>
          </div>
          <p class="flex text-lg opacity-50 justify-end">Satisfied Clients</p>
        </div>
      </div>
    </div>
  </main>
</template>
