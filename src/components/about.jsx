import React from "react";

const About1 = () => {
  return (
    <>
      {/* <!-- ====== Gallery Section Start --> */}
      <section className="section-wrap py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden">
              <div>
              <img
                src="../src/assets/images/homepage/galleries/image-3.jpg"
                alt="gallery image"
                className="w-full object-cover object-center rounded-xl"
              />
              </div>
              <h3 className="text-white mt-5">AI 模型生命週期管理</h3>
              <p className="text-white">負責模型的下載、啟動、停止與更新，確保邊緣裝置上的 AI 應用程式始終保持最新狀態。</p>
            </div>
            <div className="overflow-hidden">
              <img
                src="../src/assets/images/homepage/galleries/image-3.jpg"
                alt="gallery image"
                className="w-full object-cover object-center rounded-xl"
              />
              <h3 className="text-white mt-5">本機數據處理與推論</h3>
              <p className="text-white">在邊緣裝置上直接執行數據處理與 AI 推論，減少對網路連接的依賴，提高響應速度。</p>
            </div>
            <div className="overflow-hidden ">
              <img
                src="../src/assets/images/homepage/galleries/image-3.jpg"
                alt="gallery image"
                className="w-full object-cover object-center rounded-xl"
              />
              <h3 className="text-white mt-5">裝置狀態監控</h3>
              <p className="text-white">持續監控 CPU、記憶體、網路及感測器數據等關鍵指標，確保裝置健康運行。</p>
            </div>
            <div className="overflow-hidden">
              <img
                src="../src/assets/images/homepage/galleries/image-4.jpg"
                alt="gallery image"
                className="w-full object-cover object-center rounded-xl"
              />
              <h3 className="text-white mt-5">安全通訊與離線操作</h3>
              <p className="text-white">使用 TLS/SSL 加密確保與平台核心的安全通訊，同時支援離線操作與數據緩存功能。</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Gallery Section End --> */}
    </>
  );
};

export default About1;
