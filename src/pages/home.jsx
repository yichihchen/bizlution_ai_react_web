import React from "react";
import Agent from "../components/ai_agent";
import Brand1 from "../components/brand";

import PageTitle4 from "../components/pagetitle";
import CaseStudies from "../components/casestudies";


import "/src/index.css";
import "../assets/css/home.css";

const Home = () => {
  return (
    <div>
      {/* bg fixed */}
      <div className="section-bg">
      </div>

      <div className="section p-20 container flex-row md:flex h-[600px] md:h-[660px]">
        {/* white line */}
        <div className="section_title_border w-[60px] md:w-[100px] md:mr-20 shrink-0"></div>

        <div className="pt-10 md:pt-1 w-full md:w-7/12">
          <h1 className="section-title mb-8 text-6xl font-bold text-dark dark:text-white text-3xl sm:text-4xl md:text-6xl">Secure Edge AI solutions</h1>
          <p className="section-content text-white leading-7">
            Secure Edge AI 管理平台是一個專為部署、監控和管理邊緣裝置上運行的 AI
            應用程式而設計的綜合解決方案。本平台以安全性、可擴展性和易用性為核心，提供完整的Edge
            AI agent 生命週期管理。
            平台採用分層架構，包括邊緣層、平台核心層以及介面與整合層，確保從裝置到雲端的無縫連接與管理。透過強大的功能模組，使組織能夠充分發揮邊緣
            AI 的潛力，同時維持高度的安全標準。
          </p>
        </div>


      </div>
   
      <Agent />
      <CaseStudies />
      <PageTitle4 />
      <Brand1 />
    </div>
  );
};

export default Home;
