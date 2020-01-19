import '../../styles/ui-components/dialog.css';

import React from 'react';

export const DialogHeader = ({ children }) => {
    return (
        <div className="dialogHeader">
            {children}
        </div>
    )
}

export const DialogContent = ({ children }) => {
    return (
        <div className="dialogContent">
            {children}
        </div>
    )
}

export const DialogActions = ({ children }) => {
    return (
        <div className="dialogActions">
            {children}
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
