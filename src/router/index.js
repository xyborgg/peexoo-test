import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pricing from "../views/Pricing.vue";
import PricingDetails from "../views/PricingDetails.vue";
import Photo from "../views/Photo.vue"
import Availability from "../views/Availability.vue"
// import Photos from "../components/Photo"

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
    path: '/photo/:id',
    name: 'Photo',
    component: Photo,
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
