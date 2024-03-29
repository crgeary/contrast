import React from 'react';

import './swatch.scss';

const crossIcon = <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>;
const checkIcon = <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>;

export default function Swatch ({ color, isSaved = false, doColorSwatchClick }) {
    const contrast = Math.floor(color.contrast * 100) / 100;
    let score = null, scoreLarge = null;
    
    if (contrast >= 4.5 && contrast < 7) {
        score = `AA`;
    } else if (contrast >= 7) {
        score = `AAA`;
    }

    if (contrast >= 3 && contrast < 4.5) {
        scoreLarge = `AA`;
    } else if (contrast >= 4.5) {
        scoreLarge = `AAA`;
    }

    return (
        <button className="swatch" onClick={() => doColorSwatchClick(color)}>
            <span className="swatch__preview" style={{ backgroundColor: color.backgroundColor.toHexString(), color: color.textColor.toHexString() }}>
                <span className={`swatch__text swatch__text--small${score ? `` : ` swatch__text--strike`}`}>Abc</span>
                <span className={`swatch__text swatch__text--large${scoreLarge ? `` : ` swatch__text--strike`}`}>Abc</span>
                <span className="swatch__scores">
                    <span className={`swatch__score swatch__score--${score ? `pass` : `fail`}`}>
                        {score ? checkIcon : crossIcon}
                        <span>Small</span>
                        <strong>{score || `Fail`}</strong>
                    </span>
                    <span className={`swatch__score swatch__score--${scoreLarge ? `pass` : `fail`}`}>
                        {scoreLarge ? checkIcon : crossIcon}
                        <span>Large</span>
                        <strong>{scoreLarge || `Fail`}</strong>
                    </span>
                </span>
            </span>
            <div className="swatch__body">
                <div className="swatch__contrast">
                    Contrast
                    <strong>{contrast}:1</strong>
                </div>
                
                <svg className="swatch__info" aria-hidden="true" width="20" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                
            </div>
        </button>
    );
}
