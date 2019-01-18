import React from 'react';
import loaderSrc from '../../assets/lg.dual-ring-loader.gif'

const Loader = props => (
    <div>
        <img 
        style={ { width: 50 } }
        src={loaderSrc}
        alt="loading-gif" 
        ></img>
    </div>
);

export default Loader;