import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home';
import Faq from '../components/Faq'
import Feedback from '../components/feedback/Feedback'
import Dashboard from '../components/dashboard/Dashboard'
import Payments from '../components/payments/Payments'
import Achievements from '../components/achievements/Achievements'
import VipStatus from '../components/vip/Vip'
import Settings from '../components/settings/Settings'
import settingsMain from '../components/settings/settingsMain'
import settingsName from '../components/settings/name'
import settingsPhone from '../components/settings/phone'
import settingsEmail from '../components/settings/email'
import settingsPassword from '../components/settings/password'
import settingsFa from '../components/settings/twoFa'
import settingsDebetCard from '../components/settings/debetCard'
import addWallet from '../components/settings/addWallet'
import exchangeRates from '../components/exchangeRates/ExchangeRates'
import Mining from '../components/Mining/Mining'
import authGuard from "./auth-guard";
import Support from '../components/support/Support'

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq
  },
  {
    path: "/feedback",
    name: "feedback",
    component: Feedback
  },
  {
    path: "/exchange-rates",
    name: "exchangeRates",
    component: exchangeRates
  },
  {
    path: "/dashboard",
    name: "dashboard",
    props: true,
    component: Dashboard,
    beforeEnter: authGuard
  },
  {
    path: "/payments",
    name: "payments",
    props: true,
    component: Payments,
    beforeEnter: authGuard
  },
  {
    path: "/achievements",
    name: "achievements",
    props: true,
    component: Achievements,
    beforeEnter: authGuard
  },
  {
    path: "/vip",
    name: "vipStatus",
    props: true,
    component: VipStatus,
    beforeEnter: authGuard
  },
  {
    path: "/prizm-mining",
    name: "Mining",
    props: true,
    component: Mining,
    beforeEnter: authGuard
  },
  {
    path: "/support",
    name: "Support",
    props: true,
    component: Support,
    beforeEnter: authGuard
  },
  {
    path: "/settings",
    name: "Settings",
    props: true,
    component: Settings,
    beforeEnter: authGuard,
    children: [
      {
        path: 'main',
        component: settingsMain,
        beforeEnter: authGuard
      },
      {
        path: 'name',
        name: 'Name',
        component: settingsName,
        beforeEnter: authGuard
      },
      {
        path: 'phone',
        component: settingsPhone,
        name: 'Phone',
        beforeEnter: authGuard
      },
      {
        path: 'email',
        component: settingsEmail,
        name: 'Email',
        beforeEnter: authGuard
      },
      {
        path: 'password',
        component: settingsPassword,
        name: 'Password',
        beforeEnter: authGuard
      },
      {
        path: 'twofa',
        component: settingsFa,
        name: '2FA',
        beforeEnter: authGuard
      },
      {
        path: 'debet-card',
        component: settingsDebetCard,
        name: 'Debet Card',
        beforeEnter: authGuard
      },
      {
        path: 'add-wallet',
        component: addWallet,
        name: 'Add Wallet',
        beforeEnter: authGuard
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
