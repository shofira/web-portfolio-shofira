<template>
<nav class="fixed w-full flex items-center justify-between flex-wrap px-12 py-6 bg-white">
  <div class="flex items-center flex-no-shrink text-secondary mr-10">
    <span class="font-semibold text-2xl tracking-wide">Shofira</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-secondary border border-secondary">
      <i class="las la-bars text-lg"></i>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto space-y-3">
    <div class="text-sm lg:flex-grow">
      <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter border-b border-transparent hover:border-secondary">
        Home
      </a>
      <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter border-b border-transparent hover:border-secondary">
        About
      </a>
      <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter border-b border-transparent hover:border-secondary">
        Project
      </a>
    </div>
    <div class="grid md:flex items-center gap-5">
      <button href="#" class="btn-outline-secondary">Download</button>
      <button href="#" class="btn-outline-secondary">Download</button>
    </div>
  </div>
</nav>
</template>