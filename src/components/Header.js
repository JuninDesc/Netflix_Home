import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-4801-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWxC9BgIZkErAFaYCyznyWd14jKpMWzvgFWWL-R5R_ykCPnldnkhhq99Kd4O6Uv8caURdsPvAADcIF0Av1pPmnuXQdIvXcE.png?r=439"></img>
                </a>
            </div>
        </header>
    )
}