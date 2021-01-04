<template>
<nav class="fixed w-full flex items-center justify-between flex-wrap px-12 py-6 bg-white">
  <div class="flex items-center flex-no-shrink text-secondary mr-6">
    <span class="font-semibold text-xl tracking-wide">Shofira</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-secondary border border-secondary">
      <i class="las la-bars text-lg"></i>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter border-b border-transparent hover:border-secondary">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter border-b border-transparent hover:border-secondary">
        About
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter border-b border-transparent hover:border-secondary">
        Project
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded hover:border-transparent mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
</template>