import s from './Kfc.module.css';

const Kfc = (props) => {
    return(
        <div className={s.main}>
           <div className={s.content}>
               <img src="https://www.kfc-ukraine.com/admin/files/medium/medium_4093.png" alt="KFC"/>
               <button className={s.btnCart}>Add to cart</button>
           </div>

            <div className={s.content}>
                <img src="https://www.kfc-ukraine.com/admin/files/medium/medium_4179.png" alt="KFC"/>
                <button className={s.btnCart}>Add to cart</button>
            </div>
        </div>
    );
}

export default Kfc;