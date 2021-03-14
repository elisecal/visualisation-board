<template>
  <v-app>
    <v-app-bar app color="#354551" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title default>Bitcoin Price Index Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Dashboard />
    </v-main>

    <v-footer app dark absolute>
      <v-spacer></v-spacer>
      <div class="d-flex align centre">
        <v-btn
          href="https://www.coindesk.com/price/bitcoin"
          target="_blank"
          text
        >
          <span class="mr-2">Powered by Coindesk</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        dark
        icon
        href="https://github.com/elisecal/visualisation-board"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github-square']" size="2x" />
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import Dashboard from "./components/Dashboard"
import "./assets/styles/App.css"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
  name: "App",

  components: {
    Dashboard,
    FontAwesomeIcon
  },

  data: () => ({
    icon: "fa github-square"
  })
}
</script>
