import React from "react";

const ContactList = React.lazy(() => import("pages/ContactList"));

const routes = [
  
  {
    enabled: true,
    path: "/contact-list",
    component: ContactList,
    navbar: "Contact List App",
    child: null,
  },
  
];

export default routes.filter((route) => route.enabled);
