import React from 'react';
import closeIcon from '../../assets/icons/icon_close.png';
import updateIcon from '../../assets/icons/icon_update.png';

export const Close = () => {
    return (
        <img src={closeIcon} alt="close"/>
    );
}

export const Update = () => {
    return (
        <img src={updateIcon} alt="update"/>
    );
}