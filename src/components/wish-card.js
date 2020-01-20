import '../styles/wish-card.css';

import { openDeleteConfirmation, openEditDialog, openGrantDialog } from '../store/actions/wish-list';

import Button from '../components/ui-components/button';
import { Link } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    openDeleteConfirmation,
    openEditDialog,
    openGrantDialog
}

const WishCard = ({ id, wish, isAuth, openDeleteConfirmation, openEditDialog, openGrantDialog }) => {
    return (
        <div className="wishCard">
            {wish.isGranted ? <div id="grantedMark" className="granted">granted</div> : null}
            <div className="wishImage" role="img" style={{ 
                backgroundImage: `${wish.imageURL ? `url(${wish.imageURL})` : 'url(http://www.mindbodyheartandsoul.org/wp-content/uploads/2016/12/Interstate-60-Episodes-of-the-Road-1.png)'}`, 
                filter: `${wish.imageURL ? null : 'saturate(2) grayscale(0.75) brightness(1.5) opacity(0.25)'}`
            }}></div>
            <div className="wishInfo">
                <div className="info">
                    <span className="category">{wish.category}</span>
                    <h2 className="wishTitle">{wish.title}</h2>
                    <div className="description">
                        <p>{wish.description}</p>
                        <div className="description__veil"></div>
                    </div>
                </div>
                { isAuth ?  
                    <div id="controls" className="actions">
                        {wish.isGranted ? null :
                            <div className="actions__notGranted">
                            <Button type="button" appearance="primary" caption="grant" onClick={() => openGrantDialog(id)}/>
                            <Button type="button" appearance="secondary" caption="edit" onClick={() => openEditDialog(id)} />
                        </div>}
                        <Button type="button" appearance="secondary" caption="remove" onClick={() => openDeleteConfirmation(id)}/>
                    </div> : null
                }
                {wish.isGranted ? 
                    <div className="gratitude">
                        The wish was granted 
                        {wish.grantPerson ? <span> {wish.grantHelper} {wish.grantPerson}</span> : null}
                        {wish.grantDate ? <span> on {wish.grantDate}</span> : null}
                    </div> : null    
                }
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(WishCard);