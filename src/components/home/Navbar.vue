<template>
  <div class="nav-wrapper">
    <b-navbar toggleable="lg" type="dark" class="main--nav" fixed="top">
      <div class="left-side--nav">
        <b-brand href="/" class="logo--navbar">
          <img
            src="@/assets/image/logo/soca-genesist.png"
            alt="logo"
            class="img-fluid"
          />
        </b-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              v-for="(route, index) in routes"
              :key="index"
              :href="route.path"
            >
              {{ route.name }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
      <b-navbar-nav class="ml-auto right-side--nav">
        <!-- input search like netflix -->
        <b-nav-item href="#" class="wrapper--search">
          <b-icon
            :icon="isSearch ? 'x-lg' : 'search'"
            @click="isSearch = !isSearch"
          ></b-icon>
          <input
            ref="searchInput"
            type="text"
            v-model="search"
            class="netflix--search input--general"
            placeholder="Search for a title..."
            aria-label="Search for a title..."
            aria-describedby="basic-addon2"
            @input="$emit('search', search)"
          />
        </b-nav-item>
        <!-- end of input search -->
        <b-nav-item href="#">
          <b-icon icon="bell"></b-icon>
        </b-nav-item>
        <div class="avatar--nav">
          <b-nav-item href="/">
            <b-avatar :src="avatr" rounded></b-avatar>
          </b-nav-item>
          <b-dropdown
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
            menu-class="menu--dropdown--avatar--nav"
          >
            <template #button-content>
              <b-icon
                icon="caret-down-fill"
                variant="secondary"
                class="sr-only"
              ></b-icon>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Help Center</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Sign out of Soca</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import { getMe } from "@/services/movie/account.service";
import store from "@/store";
export default {
  name: "MovieNavbar",
  data() {
    return {
      search: "",
      isSearch: false,
      routes: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "TV Shows",
          path: "/",
        },
        {
          name: "Movies",
          path: "/",
        },
        {
          name: "New & Popular",
          path: "/",
        },
        {
          name: "My List",
          path: "/",
        },
        {
          name: "Browse by Language",
          path: "/",
        },
      ],
    };
  },
  watch: {
    isSearch(val) {
      if (val) {
        this.$refs.searchInput.focus();
        this.$refs.searchInput.style.width = "300px";
        this.$refs.searchInput.style.padding = "0.5rem 1rem 0.5rem 1rem";
      } else {
        // clear search input
        this.$refs.searchInput.value = "";

        this.$emit("search", "");
        this.$refs.searchInput.style.width = "0px";
        this.$refs.searchInput.style.padding = "0px";
      }
    },
  },
  computed: {
    avatr() {
      // log avatar path
      console.log(
        "https://image.tmdb.org/t/p/w500" +
          store.getters.account.avatar.tmdb.avatar_path
      );
      // end log avatar path

      // return avatar path
      // note: if avatar path is null, don't worry the ui will handle it then show the default avatar
      return (
        "https://image.tmdb.org/t/p/w500" +
        store.getters.account.avatar.tmdb.avatar_path
      );
    },
  },
  mounted() {
    this.getIndentity();
  },
  methods: {
    getIndentity() {
      getMe()
        .then((res) => {
          /*
          {
            "avatar": {
              "gravatar": {
                "hash": "098a33f4aec330e309f06e2f4fd64e00"
              },
              "tmdb": {
                "avatar_path": null
              }
            },
            "id": 16201232,
            "iso_639_1": "id",
            "iso_3166_1": "ID",
            "name": "",
            "include_adult": false,
            "username": "Leight"
          }
           */
          localStorage.setItem("account", JSON.stringify(res));
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.icon--search {
  z-index: 1;
  color: #fff;
}
.wrapper--search {
  position: relative;
}
.netflix--search {
  z-index: -1;
  position: absolute;
  top: 0;
  right: -0.5rem;
  width: 0px;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 0px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;
}
.main--nav {
  background-image: linear-gradient(to top, #1d232a00 10%, rgb(23, 23, 23) 80%);
  padding: 1rem 4rem 1rem 4rem;
  align-items: start;
  justify-content: space-between;
  gap: 10rem;
}

.left-side--nav {
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 2rem;
}

.right-side--nav {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}
.logo--navbar {
  width: 100px;
  margin-top: 4px;
}

.avatar--nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style>
.menu--dropdown--avatar--nav {
  right: 0%;
  top: 100%;
}
</style>
