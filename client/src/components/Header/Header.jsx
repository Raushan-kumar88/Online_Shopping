import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import Search from './Search/Search'
import Cart from '../Cart/Cart';
import { Context } from '../../utils/context';
import "./Header.scss";

const Header = () => {
    const [scrolled,setScrolled]=useState(false)
    const [showCart,setshowCart]=useState(false)
    const [showSearch,setshowSearch]=useState(false)
    const { cartCount } = useContext(Context);
    const navigate = useNavigate();

    const handleScroll=()=>{
        const offeset=window.scrollY;
        if(offeset>200){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[]);
    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Categories</li>
                    </ul>
                
                <div className="center" onClick={() => navigate("/")}>
                    RG | STORE.
                </div>
                <div className="right">
                    <TbSearch onClick={()=>setshowSearch(true)} />
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={()=>setshowCart(true)}>
                        <CgShoppingCart/>
                        {!!cartCount && <span>{cartCount}</span>}
                    </span>
                </div>
                </div>
            </header>
            {showCart && <Cart setshowCart={setshowCart} />}
            {showSearch && <Search setshowSearch={setshowSearch} />}
        </>
    );
};

export default Header;
