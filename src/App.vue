<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body, html{
  height: 100%;
}
@font-face {
  font-family: "Avenir Next";
  src: url("./assets/font/AvenirNextLTPro-Regular.otf");
}
@font-face {
  font-family: "Avenir Next";
  src: url("./assets/font/AvenirNextLTPro-Bold.otf");
  font-weight: 900;
}
@font-face {
  font-family: "Avenir Next";
  src: url("./assets/font/AvenirNext-DemiBold.ttf");
  font-weight: bold;
}
@font-face {
  font-family: "Avenir Next";
  src: url("./assets/font/AvenirNext-Medium.otf");
  font-weight: 500;
}

#app {
  font-family: "Avenir Next", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.btn:active, .btn:first-child:active, button:not(:disabled), label, .btn:disabled{
  border: none !important;
}
</style>
