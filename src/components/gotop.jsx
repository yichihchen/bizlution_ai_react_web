import React from 'react';
import {
    KeyboardArrowUpOutlined,
} from "@mui/icons-material";

import "/src/index.css";
import "../assets/css/gotop.css";

const Gotop = () => {
    return (
        <div className="absolute arrowup flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
            <a href="#" className=""><KeyboardArrowUpOutlined /></a>
        </div>
    )
}

export default Gotop;