
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
  data() {
    return {
      showUserModal: false,
      showUserTimer: null
    }
  },
  computed: {
    authorRef() {
      let tmpObj = {
        username: '',
        nickname: '匿名',
        blog_link: ''
      };
      this.userList.map((item, index) => {
        if (item.username === this.articleItem.author) {
          tmpObj = item;
        }
      });
      return tmpObj;
    }
  },
  methods: {
    hoverUserInfoHandler(e) {
      if (e) {
        clearTimeout(this.showUserTimer);
        this.showUserModal = true;
      } else {
        this.showUserTimer = setTimeout(() => {
          this.showUserModal = false;
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
      HOST: '/data',
      GET_ARTICLES: '/article.json',
      GET_USERS: '/users.json'
    },
    userList: [],
    chatList: []
  },
  methods: {
    groupBy( array , f ) {
      let groups = {};
      array.forEach( function( o ) {
        let group = f(o);
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
    ajax(path, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open('get', path, true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            let resBody = {};
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
    getArticleData() {
      this.loading = true;
      this.ajax(`${this.apiPath.HOST}${this.apiPath.GET_ARTICLES}`, (data) => {
        let tmpArr = data;
        tmpArr.sort((a, b) => {
          let aTime = typeof a.time === 'number' ? a.time * 1000 : new Date(a.time.replace('-', '/')).getTime();
          let bTime = typeof b.time === 'number' ? b.time * 1000 : new Date(b.time.replace('-', '/')).getTime();
          return -(aTime - bTime);
        });
        let tmpGroup = this.groupBy(tmpArr, (item) => {
          let tmpDate = typeof item.time === 'number' ? new Date(item.time * 1000) : new Date(item.time.replace('-', '/'));
          let formatDate = `${tmpDate.getFullYear()}-${tmpDate.getMonth() + 1}`;
          return formatDate;
        });
        this.chatList = tmpGroup.map((item) => {
          return {
            date: item.key,
            articleList: item.value
          }
        });
        this.loading = false;
      });
    },
    getUsersData() {
      this.ajax(`${this.apiPath.HOST}${this.apiPath.GET_USERS}`, (data) => {
        this.userList = data;
      });
    }
  },
  created() {
    this.getUsersData();
    this.getArticleData();
  }
})