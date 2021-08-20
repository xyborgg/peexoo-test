import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pricing from "../views/Pricing.vue";
import PricingDetails from "../views/PricingDetails.vue";
import Availability from "../views/Availability.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing
  },
  {
    path: "/pricingdetails",
    name: "PricingDetails",
    component: PricingDetails
  },
  {
    path: "/availability",
    name: "Availability",
    component: Availability,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
