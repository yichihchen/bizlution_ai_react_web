import React from "react";
import "/src/index.css";
import "../assets/css/home.css";
import "../assets/css/ai_agent.css";
import "../assets/css/grid.css";
import Gotop from "../components/gotop";


const Agent = () => {
    return (

        <section className="relative agent-wrap">
            <Gotop />

            {/* <div className="mx-auto container text-center"> */}
            <div className="mx-auto">
                {/* <div className="mx-auto p-0 grid gap-0 md:grid-cols-4 bg-dark-brighter"> */}

                {/* upper space */}
                <div className="grid grid-cols-13 bg_border_b dark:bg-dark">
                    <div className="h-20 md:h-28 col-span-1 bg_border_r"></div>
                    <div className="h-20 md:h-28 col-span-2 bg_border_r p-2 flex flex-row items-center">
                        <div>
                            <span className="little_number">01</span><br />
                            <span className="text-white">Our Services</span>
                        </div>
                    </div>
                    <div className="h-20 md:h-28 col-span-3"></div>
                    <div className="h-20 md:h-28 col-span-3"></div>
                    <div className="h-20 md:h-28 col-span-3 bg_border_r"></div>
                    <div className="h-20 md:h-28 col-span-1"></div>
                </div>

                <div className="grid grid-cols-13 dark:bg-dark">
                    {/* left space */}
                    <div className="h-20 md:h-24 col-span-1 bg_border_r hidden md:block"></div>

                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 bg-dark-brighter text-center">
                        <div className="p-0">
                            <h2 className="agent_title text-2xl mb-2 font-semibold text-dark dark:text-white ">
                                代理設計與配置
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                定義 AI 代理的目標、能力與觸發條件。
                            </p>
                        </div>
                    </div>
                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 col-start-1 bg-dark-brighter text-center">
                        <div className="p-0">
                            <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                代理協作
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                建立多代理之間的協作機制
                            </p>
                        </div>
                    </div>
                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 bg-dark-brighter text-center">
                        <div className="p-0">
                            <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                代理部署
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                將代理部署到特定邊緣裝置或平台內運行
                            </p>
                        </div>
                    </div>
                    <div className="agent_subwrap_r px-4 py-24 col-span-12 md:col-span-3 bg-dark-brighter text-center">
                        <div className="p-0">
                            <h2 className="agent_title mb-2 text-2xl font-semibold text-dark dark:text-white">
                                行為監控
                            </h2>
                            <p className="text-sm font-medium text-body-color dark:text-dark-6">
                                追蹤代理行為與效能指標
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
export default Agent;