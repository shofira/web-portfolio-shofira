<template>
  <div id="project">
    <h3 class="text-2xl text-center mt-32">My Project</h3>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <ListProject v-for="(x, y) in list" :key="y" 
      :title="x[1]" :desc="x[2]" :tech="x[3]" :scan="x[4]"
      :url="x[0]" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        ['../../static/images/ankasa.png', 'Ankasa Ticketing', 'Aplikasi ini merupakan projek tim, yang bertujuan untuk mempermudah user dalam melakukan transaksi booking tiket pesawat. Aplikasi ini dilengkapi dengan fitur search dan booking tiket', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap'], 'bit.ly/37FifFw'],
        ['../../static/images/arkachat.png', 'ArkaChat', 'ArkaChat merupakan aplikasi chatting yang bertujuan untuk mempermudah komunikasi antar user, dilengkapi dengan fitur chat realtime, dan crud data users.', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap', 'Socket.Io'], 'bit.ly/37FifFw'],
        ['../../static/images/arkahire.png', 'ArkaHire', 'Aplikasi ini merupakan project team yang bertujuan untuk mempermudah komunikasi antara Perusahaan dan job seeker dalam hal hire job. Dilengkapi dengan fitur sort, search, dan chat.', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap', 'Socket.Io'], 'bit.ly/37FifFw'],
        ['../../static/images/arkapos.png', 'ArkaPos', 'Merupakan aplikasi Point Of Sale yang bertujuan untuk membantu user dalam melakukan kegiatan transaksi jual-beli. Aplikasi ini dilengkapi dengan sort dan crud product.', ['Vue Js', 'Express Js', 'MYSQL', 'Bootstrap'], 'bit.ly/37FifFw'],
      ]
    }
  },
}
</script>