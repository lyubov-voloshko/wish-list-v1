import '../../styles/ui-components/dialog.css';

import React, { Component } from 'react';

import Button from './button';
import { Redirect } from 'react-router-dom';
import TextBox from './text-box';
import { connect } from 'react-redux';

export const DialogHeader = ({ children }) => {
    return (
        <div class="dialogHeader">
            {children}
        </div>
    )
}

export const DialogContent = ({ children }) => {
    return (
        <div class="dialogContent">
            {children}
        </div>
    )
}

export const DialogActions = ({ children }) => {
    return (
        <div class="dialogActions">
            {children}
        </div>
    )
}

export const DialogScreen = ({ children, open, onClose }) => {
    return (
        <div class="dialogScreen">
            <div class="dialogScreen__veil" onClick={() => onClose()}></div>
            <div class="dialogWindow">
                { children }
            </div>
        </div>
    )
}
