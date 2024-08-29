import React from 'react';
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

function SideBar() {
  return (
    <div>
           
           {data.map((item, index) => (
                <li key={index}>
                  <a
                    data-bs-toggle="collapse"
                    href={`#dropDown${index}`}
                    role="button"
                    className="  py-2 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-stone-200 rounded-s-md dark:hover:bg-gray-700 group"
                  >
                    <div className="grid grid-cols-4 w-full">
                      <span className="col-span-1 w-34">
                        <FontAwesomeIcon icon={iconMapping[item.icon]} className="text-gray-500" />
                      </span>
                      <span className="col-span-2">{item.name}</span>
                      <span className="col-span-1 w-10 ml-auto">
                        <FontAwesomeIcon icon={ faChevronDown } className="me-auto" />
                      </span>
                    </div>
                  </a>
                  <div className="row">
                    <div className="col">
                      {item.items.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="collapse multi-collapse"
                          id={`dropDown${index}`}
                        >
                          <div className="visible m-3">
                            <a
                              href="#"
                              className="d-block flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-stone-300 rounded-s-md p-2 dark:hover:bg-gray-700 group"
                            >
                             <span><FontAwesomeIcon icon={iconMapping[item.subIcon]} className="" /></span> {subItem}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
    </div>
  )
}

export default SideBar