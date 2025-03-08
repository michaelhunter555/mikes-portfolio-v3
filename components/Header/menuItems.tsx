"use client";
import React from "react";

interface MenuItemsProps {
  text: string;
  icon?: React.ReactNode;
  component?: string;
  route?: string;
}

export const mainMenuItems: MenuItemsProps[] = [
  {
    text: "Home",
    component: "HOME",
    route: "/",
  },
  {
    text: "Profile",
    component: "PROFILE",
    route: "/profile",
  },
  {
    text: "Projects",
    component: "PROJECTS",
    route: "/projects",
  },
  {
    text: "Education",
    component: "EDUCATION",
    route: "/education",
  },
  {
    text: "Contact",
    component: "CONTACT",
    route: "/contact-me",
  },
  {
    text: "Blog",
    component: "BLOG",
    route: "/blog",
  },
];
