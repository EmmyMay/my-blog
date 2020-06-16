/* eslint-disable vue/script-indent */
/* eslint-disable no-multiple-empty-lines */
<template>
  <Layout>
    <v-container fluid>
      <div class="home">
        <v-row v-if="$vuetify.breakpoint.xsOnly" id="card-wrapper" class="d-flex">
          <v-form>
            <v-text-field id="id" name="name" label="label" />
          </v-form>
          <v-col v-for="detail in details" :key="detail.id" cols="12" sm="6">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 16 : 2"
                color="#BFB5A8"
                max-width="344"
                class="mx-auto mb-8"
              >
                <v-list-item>
                  <v-list-item-avatar id="avatar" outlined color="#F2E3B6">
                    <v-img :src="detail.src" height="194" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                    <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img :src="detail.src" height="194" />

                <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row v-if="$vuetify.breakpoint.smAndUp" id="d-box">
          <v-col class="display" cols="10">
            <v-card
              :key="key"
              v-model="hover"
              color="#8C857B"
              class="d-flex display-card"
              height="390px"
            >
              <div class="image-wrap">
                <v-responsive :aspect-ratio="16/9">
                  <blurimage
                    :src="hover.src"
                    src-placeholder="https://cdn-images-1.medium.com/max/30/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
                  />
                </v-responsive>
              </div>
              <div class="display-text">
                <v-card-text class="display-title">{{ hover.title.toUpperCase() }}</v-card-text>
                <v-card-text class="display-author">by {{ hover.author }}</v-card-text>
                <v-btn class="display-btn" width="100px" small outlined color="black">Read</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!--  -->
        <!--  -->
        <!--  -->

        <v-row v-if="$vuetify.breakpoint.smAndUp">
          <v-col v-for="detail in details" :key="detail.id" lg="4" @mouseover="log(detail)">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 16 : 2"
                color="#BFB5A8"
                max-width="295"
                class="mx-auto mb-8 blog-cards"
              >
                <v-list-item>
                  <v-list-item-avatar id="avatar" outlined color="#F2E3B6">
                    <v-img :src="detail.src" height="194" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline card-title">{{ detail.title }}</v-list-item-title>
                    <v-list-item-subtitle>by {{ detail.author }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-text class="card-text">{{ detail.text }}</v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </Layout>
</template>

<script>
import blurimage from "@/components/BlurImage";
export default {
  metaInfo() {
    return {
      title: "Hello, world !",
      meta: [{ name: "description", content: "Landing page" }]
    };
  },
  name: "Home",
  components: {
    blurimage
  },
  data() {
    return {
      details: [
        {
          title: "Who Gets The Billions",
          author: "Kurt Wagner",
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          id: 0,
          src:
            "https://pixabay.com/get/52e6d7454354ad14f6d1867dda29327d1036dde4514c704c7c2e7fd2934ac25b_960.jpg"
        },
        {
          title: "Days of Our Lives",
          author: "Nara Marko",
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          id: 1,
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        },
        {
          title: "Our Changing Planet",
          author: "James Charles",
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          id: 2,
          src:
            "https://pixabay.com/get/53e2d04b4956ad14f6da8c7dda29327d1036dde4514c704c7c2e7fd29249c35c_1280.jpg"
        },
        {
          title: "Our Changing Planet",
          author: "Kurt Weller",
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          id: 3,
          src: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        }
      ],
      hovered: {},
      key: 0
    };
  },

  computed: {
    hover: {
      get() {
        return this.hovered;
      }
    }
  },
  created() {
    Object.assign(this.hovered, this.details[0]);
  },
  methods: {
    log(e) {
      if (this.hovered.id !== e.id) {
        Object.assign(this.hovered, e);
        this.key++;
      }
      console.log(this.hovered);
      setTimeout(() => {
        console.clear();
      }, 7000);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Parisienne&family=Piedra&display=swap");

#card-wrapper {
  margin-top: 14%;
  max-width: 100vw;
  margin-left: 0 auto;
  margin-right: 0 auto;
}
.home {
  display: grid;
  place-self: center;
}
#d-box {
  display: flex;
  margin-top: 5rem;
}
.display {
  /* border: 5px solid black; */
  margin: 0 auto;
}
.display-text {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  /* border: 2px solid black; */
  padding: 0.3rem;
  padding-top: 5rem;
  width: 20rem;
  font-stretch: expanded;
  margin-left: 3rem;
}
.display-author {
  color: #262523;
  margin-top: -1rem;
  font-size: 0.6em;
  font-family: "Parisienne", cursive;
  font-weight: 800;
}
.display-title {
  margin-top: 1rem;
  font-size: 2.3vw;
  line-height: 0.9em;
  font-family: "Piedra", cursive;
  color: #262523;
}

.display-card {
  column-gap: 8%;
  /* background-image: linear-gradient(
    to right,
    rgba(216, 159, 125, 1),
    rgba(216, 145, 119, 1),
    rgba(165, 114, 96, 1),
    rgba(114, 83, 76, 1),
    rgba(63, 54, 54, 1)
  ); */
}

.display-btn {
  margin-left: 1rem;
}
.blog-cards {
  border-top-left-radius: 3rem !important;
  border-top-right-radius: 3rem !important;
}
.image-wrap {
  max-height: 100vh;
  height: 100vh;
}

.v-lazy-image {
  width: auto;
  height: 390px;
  border-radius: 0.2rem;
}
#avatar {
  background: none !important;
  border: 3px solid;
}
.card-title {
  color: #404040;
}
.card-text {
  color: #404040 !important;
}
@media only screen and (max-width: 960px) {
  .v-lazy-image {
    width: 50vw;
    height: 390px;
    border-radius: 0.2rem;
  }
}
</style>
