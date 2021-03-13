<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-4" dark>
      <v-spacer></v-spacer>
      <v-app-bar-title default>Bitcoin Dashboard</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Dashboard />
    </v-main>

    <v-footer app dark>
      <v-spacer></v-spacer>
      <div class="d-flex align centre">
        <v-btn>
          <span class="mr-2">Powered by Coindesk</span>
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
