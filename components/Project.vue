<template>
  <div id="project">
    <h3 class="text-2xl text-center mt-32 dark:text-light">My Project</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
      <ListProject v-for="(x, y) in list" :key="y" 
      :title="x[1]" :desc="x[2]" :tech="x[3]" :scan="x[4]"
      :url="x[0]" :github="x[5]" />
    </div>
    <!-- <div class="flex justify-center mt-3">
      <button class="btn-outline-secondary">Show More</button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        ['ankasa.png', 'Ankasa Ticketing', 'Ankasa Ticketing is a team project, which to facilitate users in booking flight ticket transactions. This application equipped with search and ticket booking features.', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap'], 'bit.ly/37FifFw', 'https://github.com/shofira/ankasa'],
        ['arkachat.png', 'ArkaChat', 'ArkaChat is a chat application to make it easier for users to communicate with others. This application equipped with real-time chat features, and manage profiles for users.', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap', 'Socket.Io'], 'bit.ly/37FifFw', 'https://github.com/shofira/arkaChat'],
        ['arkahire.png', 'ArkaHire', 'This application is a project team that aims to make it easier for communication between the Company and job seekers in terms of hire jobs. Equipped with sort, search, and chat features.', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap', 'Socket.Io'], 'bit.ly/37FifFw', 'https://github.com/shofira/peworld-frontend'],
        ['arkapos.png', 'ArkaPos', 'It is a Point Of Sale application that aims to assists users in carrying out buying and selling transactions. This application is equipped with sort and crud products.', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap'], 'bit.ly/37FifFw', 'https://github.com/shofira/ArkaPos'],
      ]
    }
  },
}
</script>