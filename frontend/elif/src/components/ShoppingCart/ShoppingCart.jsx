import s from './ShoppingCart.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const ShoppingCart = (props) => {
    return(
        <div className={s.headerbtn}>
            <div className={s.btnShop}>
                Shops
            </div>
            <div className={s.btnShop}>
                ShoppingCart
            </div>
        </div>

    );
}

export default ShoppingCart;