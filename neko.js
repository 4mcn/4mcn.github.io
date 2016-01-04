var neko = new Vue({
  el: '#neko',
  data: function () {
    return {
      hoge: ['ねこ', 'ネコ', '猫', '🐱'],
      neko: 'n'
    };
  },
  methods: {
    shuffle: function (array) {
      for (var i = array.length - 1; i >= 0; i--) {
        var r = Math.floor(i * Math.random());
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array;
    },
    set_random_neko: function () {
      this.neko = this.shuffle(this.hoge)[0];
    },
  },
  filters: {},
  created: function () { this.set_random_neko(); },
});
