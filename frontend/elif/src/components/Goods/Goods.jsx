import s from './Goods.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Kfc from "../Shops/Kfc/Kfc";

const Goods = (props) => {
    return(
        <div>
            <Kfc/>
        </div>
    );
}

export default Goods;