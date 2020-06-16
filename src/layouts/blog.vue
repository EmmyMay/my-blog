/* eslint-disable vue/script-indent */
<template>
  <v-app style="background-image: linear-gradient(to right, #8C857B, #F2EBDF);">
    <v-app-bar
      v-show="$vuetify.breakpoint.xsOnly"
      id="xs-bar"
      collapse-on-scroll
      app
      color="#262523"
      fixed
    >
      <v-toolbar-title>
        <span class="pin">Pin</span>
        <span class="blog">Blog</span>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon color="#D9CDBF" dark @click.stop="drawer = !drawer" />
    </v-app-bar>
    <!--  -->
    <!--  -->
    <!--  -->
    <v-app-bar
      id="deskbar"
      v-show="$vuetify.breakpoint.smAndUp"
      hide-on-scroll
      app
      color="#262523"
      dark
    >
      <v-toolbar-title>
        <span class="pin">Pin</span>
        <span class="blog">Blog</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="item in items"
        :key="item.title"
        class="ma-3"
        text
        color="#F2EBDF"
      >{{item.title}}</v-btn>
    </v-app-bar>
    <slot></slot>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#D9CDBF"
      fixed
      temporary
      style="position:fixed; top:0px; overflow-y:scroll;
    left:0;"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
    </v-navigation-drawer>
  </v-app>
</template>




<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      drawer: null,
      items: [
        { title: "Posts", icon: "mdi-dots-vertical" },
        { title: "Rants", icon: "mdi-question_answer" },
        { title: "About", icon: "mdi-avatar" }
      ]
    };
  }
};
</script> 
