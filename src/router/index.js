import Vue from "vue";
import VueRouter from "vue-router";
import Customers from "../views/customers/index";
import CustomerView from "../views/customers/_id";

import Categories from "../views/categories/index";
import CategoryView from "../views/categories/_id";

import Products from "../views/products/index";
import ProductView from "../views/products/_id";

Vue.use(VueRouter);

const routes = [
  {
    // customer list
    path: "/",
    name: "customers",
    component: Customers,
  },
  {
    // show individual customer
    path: "/customers/:id",
    name: "customerView",
    component: CustomerView,
  },
  {
    // categories list
    path: "/categories",
    name: "categories",
    component: Categories,
  },
  {
    // show individual category
    path: "/categories/:id",
    name: "categoryView",
    component: CategoryView,
  },
  {
    // Products list
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    // show individual Product
    path: "/products/:id",
    name: "productView",
    component: ProductView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
