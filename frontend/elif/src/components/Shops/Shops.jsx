import s from './Shops.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Shops = (props) => {
    return(
        <div className={s.shoplist}>
            <p className={s.text}>Shops :</p>
            <div className={s.btnShop}>
                Mc'Donalds
            </div>

            <div className={s.btnShop}>
                KFC
            </div>

            <div className={s.btnShop}>
                RockenRoll
            </div>
        </div>
    );
}

export default Shops;