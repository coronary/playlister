var app = new Vue({
  el: '#app',
  data: {
    url: '',
    songs: []
  },
  methods: {
      getSongs: async function() {
          console.log('running function with', this.url);
          fetch(`http://127.0.0.1:4000?url=${this.url}`, {headers:{'mode': "no-cors"}})
          .then(res => res.json())
          .then(data => this.songs = data)
      }
  }
})
