import '../../styles/ui-components/dialog.css';

import React from 'react';

export const DialogHeader = ({ type, children }) => {
    return (
        <div className={`dialogHeader dialogHeader${type}`}>
            {children}
        </div>
    )
}

export const DialogContent = ({ extraСlass, children }) => {
    return (
        <div className={`dialogContent ${extraСlass || ''}`}>
            {children}
        </div>
    )
}

export const DialogActions = ({ children }) => {
    return (
        <div className="dialogActions">
            <div className="dialogActions__buttons">
                {children}
            </div>
        </div>
    )
}

export const DialogScreen = ({ children, open, onClose }) => {
    return (
        <div className="dialogScreen">
            <div className="dialogScreen__veil" onClick={() => onClose()}></div>
            <div className="dialogWindow">
                { children }
            </div>
        </div>
    )
}
