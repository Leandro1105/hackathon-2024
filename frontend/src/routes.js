import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdLogout,
  MdGroup,
  MdAttachMoney,
  MdOutlineReceiptLong,
  MdLogin,
} from "react-icons/md";

import { RiQuestionnaireFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { TiSocialAtCircular } from "react-icons/ti";

// Admin Imports
import MainDashboard from "views/admin/default";
import Questionnaire from "views/admin/questionnaire/questionnaire";
import RegisterQuestionnaire from "views/admin/questionnaire/index";
import Activity from "views/admin/activities/activity";
import RegisterActivity from "views/admin/activities/index";
import Social from "views/admin/social/index";
import Communities from "views/admin/social/communities/community";
import RegisterCommunity from "views/admin/social/communities/index";
import Events from "views/admin/social/events/event";
import RegisterEvent from "views/admin/social/events/index";
import Benefits from "views/admin/benefits/index";
import SignIn from "views/auth/signIn/index.jsx";
import SignUp from "views/auth/signUp/index.jsx";

const userId = JSON.parse(localStorage.getItem("userId"));

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Formulário",
    layout: "/admin",
    path: "/questionnaire",
    icon: <Icon as={RiQuestionnaireFill } width='20px' height='20px' color='inherit' />,
    component: Questionnaire,
  },
  {
    name: "Formulário",
    layout: "/admin",
    path: "/registerquestionnaire",
    icon: <Icon as={RiQuestionnaireFill} width='20px' height='20px' color='inherit' />,
    component: RegisterQuestionnaire,
    hide: true
  },
  {
    name: "Atividades",
    layout: "/admin",
    path: "/activity",
    icon: <Icon as={FiActivity } width='20px' height='20px' color='inherit' />,
    component: Activity,
  },
  {
    name: "Registrar atividade",
    layout: "/admin",
    path: "/registeractivity",
    icon: <Icon as={FiActivity } width='20px' height='20px' color='inherit' />,
    component: RegisterActivity,
    hide: true
  },
  {
    name: "Social",
    layout: "/admin",
    path: "/social",
    icon: <Icon as={TiSocialAtCircular} width='20px' height='20px' color='inherit' />,
    component: Social,
  },
  {
    name: "Comunidades",
    layout: "/admin",
    path: "/groups",
    icon: <Icon as={TiSocialAtCircular} width='20px' height='20px' color='inherit' />,
    component: Communities,
    hide: true
  },
  {
    name: "Registrar comunidades",
    layout: "/admin",
    path: "/registergroup",
    icon: <Icon as={TiSocialAtCircular} width='20px' height='20px' color='inherit' />,
    component: RegisterCommunity,
    hide: true
  },
  {
    name: "Eventos",
    layout: "/admin",
    path: "/events",
    icon: <Icon as={TiSocialAtCircular} width='20px' height='20px' color='inherit' />,
    component: Events,
    hide: true
  },
  {
    name: "Registrar eventos",
    layout: "/admin",
    path: "/registerevent",
    icon: <Icon as={TiSocialAtCircular} width='20px' height='20px' color='inherit' />,
    component: RegisterEvent,
    hide: true
  },
  {
    name: "Benefícios",
    layout: "/admin",
    path: "/benefits",
    icon: <Icon as={TiSocialAtCircular} width='20px' height='20px' color='inherit' />,
    component: Benefits,
  },
  {
    name: "Entrar",
    layout: "/auth",
    path: "/sign-in",
    icon: (
      <Icon as={MdLogin} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
    hide: true
  },
  {
    name: "Entrar",
    layout: "/auth",
    path: "/sign-up",
    icon: (
      <Icon as={MdLogin} width='16px' height='16px' color='inherit' />
    ),
    component: SignUp,
    hide: true
  },
];

export const Logout = [
  {
    name: "Sair",
    layout: "/auth",
    path: "/sign-out",
    icon: (
      <Icon as={MdLogout} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
  }
];
export default routes;
