import '../styles/wish-card.css';

import { openDeleteConfirmation, openEditDialog } from '../store/actions/wish-list';

import Button from '../components/ui-components/button';
import { Link } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    openDeleteConfirmation,
    openEditDialog
}

const WishCard = ({ id, wish, isAuth, openDeleteConfirmation, openEditDialog }) => {
    return (
        <div className="wishCard">
            {wish.isGranted ? <div id="grantedMark" className="granted">granted</div> : null}
            <div className="wishImage" role="img" style={{ backgroundImage: `url(${wish.imageURL})` }}></div>
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
                            <Button type="button" appearance="primary" caption="grant" />
                            <Button type="button" appearance="secondary" caption="edit" 
                                onClick={() => openEditDialog(id)}
                            />
                        </div>}
                        <Button type="button" appearance="secondary" caption="remove" onClick={() => openDeleteConfirmation(id)}/>
                    </div> : null
                }
                {wish.isGranted ? 
                    <div className="gratitude">
                        The wish was granted 
                        {wish.grantDate ? <span> on {wish.grantDate}</span> : null}
                        {wish.grantPerson ? <span> {wish.grantHelper} {wish.grantPerson}</span> : null}
                    </div> : null    
                }
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(WishCard);