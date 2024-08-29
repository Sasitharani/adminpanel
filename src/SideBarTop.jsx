import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faChartPie, faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import data from "./data";
import iconMapping from './iconMapping';
import SideBar from "./SideBar";

import React from 'react'

export default function 
() {
  return (
    <div>
        <li>
              <a
                href="#"
                className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={ faChartPie } className="me-2" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={ faUser } className="me-2" />
                <span className="ms-3">Profile</span>
              </a>
            </li>
            <h2 className="mb-4 flex items-center p-2 font-bold text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              ECOMMERCE COMPONENT
            </h2>
            <SideBar />

    </div>
  )
}
