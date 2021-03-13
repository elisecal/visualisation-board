<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-4" dark>
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
      <v-btn dark icon
        ><v-icon size="24px">
          {{ icon }}
        </v-icon></v-btn
      >
    </v-footer>
  </v-app>
</template>

<script>
import Dashboard from "./components/Dashboard"

export default {
  name: "App",

  components: {
    Dashboard
  },

  data: () => ({
    icon: "mdi-linkedin"
  })
}
</script>
