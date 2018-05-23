
Vue.component('chat-block', {
  template: '#chat-block-template',
  props: {
    chatItem: Object,
    userList: Array
  }
})

Vue.component('article-block', {
  template: '#article-block-template',
  props: {
    articleItem: Object,
    userList: Array,
    itemIndex: Number
  },
  data: function () {
    return {
      showUserModal: false,
      showUserTimer: null
    }
  },
  computed: {
    authorRef: function () {
      var _this = this;
      var tmpObj = {
        username: '',
        nickname: '匿名',
        blog_link: ''
      };
      this.userList.map(function (item, index) {
        var name = typeof _this.articleItem.author === 'object' ? _this.articleItem.author.realname : _this.articleItem.author;
        if (item.nickname === name) {
          tmpObj = item;
        }
      });
      return tmpObj;
    }
  },
  methods: {
    hoverUserInfoHandler: function (e) {
      var _this = this;
      if (e) {
        clearTimeout(this.showUserTimer);
        this.showUserModal = true;
      } else {
        this.showUserTimer = setTimeout(function () {
          _this.showUserModal = false;
        }, 200)
      }
    }
  },
})

Vue.component('user-modal', {
  template: '#user-modal-template',
  props: {
    authorRef: Object
  }
})

new Vue({
  el: '#app',
  data: {
    loading: false,
    apiPath: {
      // HOST: '/data',
      // GET_ARTICLES: '/article.json',
      // GET_USERS: '/users.json'
      HOST: 'https://errfe.linghit.com',
      GET_ARTICLES: '/api/transfer/blogmanage',
      GET_USERS: '/data/users.json'
    },
    userList: [],
    chatList: []
  },
  methods: {
    groupBy: function ( array , f ) {
      var groups = {};
      array.forEach( function( o ) {
        var group = f(o);
        groups[group] = groups[group] || [];
        groups[group].push( o );
      });
      return Object.keys(groups).map( function( group ) {
        return {
          key: group,
          value: groups[group]
        };
      });
    },
    ajax: function (path, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', path, true);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            var resBody = {};
            try {
              resBody = typeof xhr.responseText === 'string' ? JSON.parse(xhr.responseText) : xhr.responseText;
              callback(resBody);
            } catch(e) {
              console.log(e);
            }
            
          }
        }
      };
    },
    getArticleData: function () {
      var _this = this;
      this.loading = true;
      this.ajax(`${this.apiPath.HOST}${this.apiPath.GET_ARTICLES}?current=1&per_page=1000`, function (d) {
        if (d.code != 1) {
          return;
        }
        var tmpArr = d.data.list;
        tmpArr.sort(function (a, b) {
          var aTime = typeof a.time === 'number' ? a.time * 1000 : new Date(a.time.replace('-', '/')).getTime();
          var bTime = typeof b.time === 'number' ? b.time * 1000 : new Date(b.time.replace('-', '/')).getTime();
          return -(aTime - bTime);
        });
        var tmpGroup = _this.groupBy(tmpArr, function (item) {
          var tmpDate = typeof item.time === 'number' ? new Date(item.time * 1000) : new Date(item.time.replace('-', '/'));
          var formatDate = `${tmpDate.getFullYear()}-${tmpDate.getMonth() + 1}`;
          return formatDate;
        });
        _this.chatList = tmpGroup.map(function (item) {
          return {
            date: item.key,
            articleList: item.value
          }
        });
        _this.loading = false;
      });
    },
    getUsersData: function () {
      var _this = this;
      this.ajax(`${this.apiPath.GET_USERS}`, function (data) {
        _this.userList = data;
      });
    }
  },
  created: function () {
    this.getUsersData();
    this.getArticleData();
  },
  mounted: function () {
    particlesJS('particles-js', {
      particles: {
        color: '#ddd',
        shape: 'triangle', // "circle", "edge" or "triangle"
        opacity: 0.3,
        size: 1,
        size_random: true,
        nb: 150,
        line_linked: {
          enable_auto: true,
          distance: 100,
          color: '#ddd',
          opacity: 1,
          width: 1,
          condensed_mode: {
            enable: true,
            rotateX: 600,
            rotateY: 600
          }
        },
        anim: {
          enable: true,
          speed: 1
        }
      },
      interactivity: {
        enable: true,
        mouse: {
          distance: 250
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
          opacity: .5
        },
        events: {
          onclick: {
            enable: true,
            mode: 'push', // "push" or "remove" (particles)
            nb: 4
          }
        }
      },
      /* Retina Display Support */
      retina_detect: true
    });
  }
})