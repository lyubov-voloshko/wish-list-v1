import '../styles/wish-card.css';

import Button from '../components/ui-components/button';
import { Link } from 'react-router-dom'
import React from 'react';

const WishCard = ({ wish }) => {
    return (
        <div className="wishCard">
            <div id="grantedMark" className="granted">granted</div>
            <div class="wishImage" role="img" style={{ backgroundImage: `url(${wish.imageURL})` }}></div>
            <div className="wishInfo">
                <div className="info">
                    <span className="category">{wish.category}</span>
                    <h2 className="wishTitle">{wish.title}</h2>
                    <div className="description">
                        <p>{wish.description}</p>
                        <div className="description__veil"></div>
                    </div>
                </div>
                <div id="controls" className="actions">
                    <div id="actions__notGranted" className="actions__notGranted">
                        <Button type="button" appearance="primary" caption="grant" />
                        <Button type="button" appearance="secondary" caption="edit"/>
                    </div>
                    <Button type="button" appearance="secondary" caption="remove"/>
                </div>
                <div id="gratitude" className="gratitude">
                    The wish was granted 
                    <slot name="grantHelper"></slot>
                    <slot name="grantPerson"></slot>
                    <slot name="grantDate"></slot>
                </div>
            </div>
        </div>
    )
}

export default WishCard;