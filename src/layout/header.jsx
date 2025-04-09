import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom"; //為了顯示出巢狀路由
import { AlternateEmailOutlined } from "@mui/icons-material";
import "/src/index.css";
import "../assets/css/header.css";
// import another layout
import Footer from "./footer";



const Layout = () => {
  const [open, setOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSystemMenu, setShowSystemMenu] = useState(false);
  const [showHardwareMenu, setShowHardwareMenu] = useState(false);

  return (
    <div>
      <header>
        <div className="header-wrap">
          <div className="container mx-auto">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="w-60 max-w-full px-4">

                <Link to="/" className="block w-full py-5">
                  <img
                    src="../src/assets/images/logo/bizlution_ai_primary.png"
                    alt="logo"
                    className="hidden dark:block"
                  />
                </Link>
                {/* <a href="#" className="block w-full py-5">
                  <img
                    src="../src/assets/images/logo/bizlution_ai_primary.png"
                    alt="logo"
                    className="hidden dark:block"
                  />
                </a> */}
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  {/*hamburger */}
                  <button
                    onClick={() => setOpen(!open)}
                    id="navbarToggler"
                    className={`  ${open && "navbarTogglerActive"
                      } absolute right-4 top-1/2 block rounded-lg px-3 py-[6px] lg:hidden`}
                  >
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  </button>

                  <nav
                    id="navbarCollapse"
                    className={`absolute right-4 top-full w-full max-w-[300px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent ${!open && "hidden"}`}
                  >
                    <ul className="block lg:flex">

                      <li>
                        <button
                          href="#" onClick={() => setShowSystemMenu(!showSystemMenu)}
                          className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-8 lg:inline-flex text-white dark:hover:text-yellow-dark"
                        >
                          系統方案
                          <span
                            className={`${showSystemMenu ? "-scale-y-100" : ""
                              } duration-200`}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`w-full lg:absolute lg:left-0 lg:top-full lg:w-[850px] lg:rounded-xl lg:shadow-lg ${showSystemMenu ? "block" : "hidden"
                            }`}
                        >
                          <div className="rounded-xl bg-white p-2 lg:p-8 dark:bg-dark">
                            <div className="">
                              <a
                                href="#"
                                className="hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-6">
                                    CMS 播放器管理系統
                                  </p>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-6">
                                    FMS
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={() => setShowHardwareMenu(!showHardwareMenu)}
                          className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-8 lg:inline-flex text-white dark:hover:text-yellow-dark"
                        >
                          硬體規格
                          <span
                            className={`${showHardwareMenu ? "-scale-y-100" : ""
                              } duration-200`}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`w-full lg:absolute lg:left-0 lg:top-full lg:w-[850px] lg:rounded-xl lg:shadow-lg ${showHardwareMenu ? "block" : "hidden"
                            }`}
                        >
                          <div className="rounded-xl bg-white p-2 lg:p-8 dark:bg-dark">
                            <div className="">
                              <a
                                href="#"
                                className="hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-6">
                                    BXP-PC
                                  </p>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                              >
                                <div>
                                  <p className="py-4 text-sm text-body-color dark:text-dark-6">
                                    NPU Card
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-8 lg:inline-flex text-white dark:hover:text-yellow-dark"
                        >
                          客戶案例
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-8 lg:inline-flex text-white dark:hover:text-yellow-dark"
                        >
                          服務支援
                        </a>
                      </li>
                      {/* 下拉選單 */}

                      {/* 下拉選單 */}
                    </ul>
                  </nav>
                </div>

                <div className="hidden justify-end gap-3 pr-16 sm:flex lg:pr-0 ">
                  <div>
                    {/* <a
                      href="#"
                      className="contactbutton px-5 py-2.5 text-base font-medium text-white"
                    >
                      Contact Us
                    </a> */}
                    <Link to="/contact" className="contactbutton px-5 py-2.5 text-base font-medium text-white">
                      Contact Us  <AlternateEmailOutlined />
                    </Link>
                  </div>

                  {/* 切換語系 */}
                  <ul>
                    <li className="relative">
                      <button
                        onClick={() => setShowLangMenu(!showLangMenu)}
                        className=
                        "flex w-full py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center text-white dark:hover:text-yellow-dark"
                      >
                        選擇語系
                        <span
                          className={`${showLangMenu ? "-scale-y-100" : ""
                            } duration-200`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`w-full lg:absolute lg:left-0 lg:top-full lg:w-[850px] lg:rounded-xl lg:shadow-lg ${showLangMenu ? "block" : "hidden"
                          }`}
                      >
                        <div className="rounded-xl bg-white p-2 lg:p-8 dark:bg-dark">
                          <div className="">
                            <a
                              href="#"
                              className="hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                            >

                              <div>
                                <p className="py-4 text-sm text-body-color dark:text-dark-6">
                                  繁體中文
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="hover:bg-gray-1 lg:flex-row dark:hover:bg-white/5"
                            >
                              <div>
                                <p className="py-4 text-sm text-body-color dark:text-dark-6">
                                  英語
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>


              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>

  );
};
export default Layout;
