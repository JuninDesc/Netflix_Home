import React, { useState } from 'react';
import './MovieRow.css';

export default ({title, items }) => {
    const [scrollX, setScrollx] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollx(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW - 60);
        }
        setScrollx(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
            &lt;
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
             &gt;
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                {items && items.results &&items.results.length > 0 && 
                items.results.map((item) => (
                    <div className="movieRow--item">
                        <img key={item.id} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}