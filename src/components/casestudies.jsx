import React from "react";
import More from "../components/more";
import "/src/index.css";
import "../assets/css/home.css";
import "../assets/css/casestudies.css";
import "../assets/css/border.css";
import "../assets/css/grid.css";


// Our Accomplishments
const CaseStudies = () => {
    return (
        <section className="casetitle dark:bg-dark bg_border_tb">
            {/* upper space */}
            <div className="grid grid-cols-13 bg_border_b">
                <div className="h-20 col-span-1 bg_border_r"></div>
                <div className="h-20 col-span-2 bg_border_r"></div>
                <div className="h-20 col-span-3 bg_border_r"></div>
                <div className="h-20 col-span-3 bg_border_r"></div>
                <div className="h-20 col-span-3 bg_border_r"></div>
                <div className="h-20 col-span-1"></div>
            </div>

            <div className="grid grid-cols-13 bg_border_b">
                {/*標題  */}
                <div className="col-span-1 bg_border_r"></div>
                <div className="col-span-2 bg_border_r p-2">
                    <span className="little_number">02</span><br />
                    <span className="text-white">About Us</span>
                </div>
                <div className="col-span-9 bg_border_r px-4">
                    <h4 className="py-8 text-6xl font-bold text-dark dark:text-white text-2xl sm:text-3xl md:text-6xl">
                        Our Accomplishments
                    </h4>
                </div>
                <div className="col-span-1"></div>

                {/*內容  */}
                <div className="col-span-1 bg_border_r"></div>
                <div className="col-span-2 bg_border_r"></div>
                <div className="col-span-9 bg_border_r bg-dark-brighter">

                    <div className="grid grid-cols-3 bg_border_tb">
                        <div className="col-span-3 sm:col-span-1 mr-6 w-full overflow-hidden">
                            <img
                                src="../src/assets/images/homepage/casestudies/square1.jpg"
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-2 flex items-center justify-center px-8 py-4 sm:py-0">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-lg font-bold">2009年起 嵌入式電腦系統設計</p>
                                <p className="dark:text-gray-5">晁碁科技開始使用ARM架構，提供低能耗、系統穩定且高度集成的電腦系統，取代複雜指令集之X86電腦系統，更適合24小時運作之商業應用環境。</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 bg_border_b">
                        <div className="col-span-3 sm:col-span-2 flex items-center justify-center px-8 order-last sm:order-1 py-4 sm:py-0">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-lg font-bold">2021年案例：數位看板受眾分析</p>
                                <p className="dark:text-gray-5">這個概念驗證(POC)項目展示了晁碁科技如何將AI技術應用於實際商業環境，為零售業提供數據驅動的行銷解決方案。</p>
                            </div>
                        </div>
                        <div className="col-span-3 sm:col-span-1 mr-6 w-full overflow-hidden order-1 sm:order-last">
                            <img
                                src="../src/assets/images/homepage/casestudies/square3.jpg"
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 bg_border_b">
                        <div className="col-span-3 sm:col-span-1 mr-6 w-full overflow-hidden">
                            <img
                                src="../src/assets/images/homepage/casestudies/square3.jpg"
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-2 flex items-center justify-center px-8 py-4 sm:py-0">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-lg font-bold">2022年案例：VIP客戶到店系統</p>
                                <p className="dark:text-gray-5">這個系統結合了晁碁科技的影像辨識和多媒體應用技術，為直銷企業打造了獨特的VIP客戶體驗，提升了品牌形象和客戶滿意度。</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 bg_border_b">
                        <div className="col-span-3 sm:col-span-2 flex items-center justify-center px-8 order-last sm:order-1 py-4 sm:py-0">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-lg font-bold">2022年案例：軌道異物偵測警示</p>
                                <p className="dark:text-gray-5">1. 軌道監控</p>
                                <p className="dark:text-gray-5">2. 邊坡監測</p>
                                <p className="dark:text-gray-5">3. 號誌狀態辨識</p>
                                <p className="dark:text-gray-5">4. 即時反饋機制</p>
                            </div>
                        </div>
                        <div className="col-span-3 sm:col-span-1 mr-6 w-full overflow-hidden order-1 sm:order-last">
                            <img
                                src="../src/assets/images/homepage/casestudies/square4.jpg"
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 bg_border_b">
                        <div className="col-span-3 sm:col-span-1 mr-6 w-full overflow-hidden">
                            <img
                                src="../src/assets/images/homepage/casestudies/square1.jpg"
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-2 flex items-center justify-center px-8 py-4 sm:py-0">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-lg font-bold">2023年案例：智慧工廠應用</p>
                                <p className="dark:text-gray-5">晁碁科技的智慧工廠解決方案能夠辨識設備運作狀態，監控產品之產能與良率，分析操作人員之作業影像，作為作業程序安全與產能評估用途。
                                    透過AI技術，系統可以即時發現生產線上的異常情況，提高生產效率，降低不良品率，同時確保工作環境的安全性，為製造業客戶創造實質的經濟價值。</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3">
                        <div className="col-span-3 sm:col-span-2 flex items-center justify-center px-8 order-last sm:order-1 py-4 sm:py-0">
                            <div className="text-body-color text-white leading-8">
                                <p className="text-lg font-bold">2024年案例：實境遊戲與AI教練</p>
                                <p className="dark:text-gray-5">這個創新項目將晁碁科技的AI技術應用於體育和娛樂領域，打造了一個能夠提供專業指導和即時反饋的智能系統，為用戶提供個性化的訓練體驗。</p>
                            </div>
                        </div>
                        <div className="col-span-3 sm:col-span-1 mr-6 w-full overflow-hidden order-1 sm:order-last">
                            <img
                                src="../src/assets/images/homepage/casestudies/square2.jpg"
                                alt="page title"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-20 col-span-1"></div>
                {/* </div> */}
            </div>

            {/* 底部空格 #2f3742*/}
            <div className="grid grid-cols-13 relative">
                <More />
                <div className="h-20 md:h-24 col-span-1 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-2 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-3 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-3 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-3 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-1"></div>
            </div>

        </section>
    );
};

export default CaseStudies;
