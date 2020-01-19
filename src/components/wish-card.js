import '../styles/wish-card.css';

import Button from '../components/ui-components/button';
import { Link } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux';
import { openDeleteConfirmation } from '../store/actions/wish-list';

const mapDispatchToProps = {
    openDeleteConfirmation
}

const WishCard = ({ id, wish, isAuth, wishToDelete, openDeleteConfirmation }) => {
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
                                //onClick={() => showEditWishForm(wisth.id)}
                            />
                        </div>}
                        {/*<Button type="button" appearance="secondary" caption="remove" onClick={() => deleteWish(id)}/>*/}
                        <Button type="button" appearance="secondary" caption="remove" onClick={() => openDeleteConfirmation(id)}/>
                    </div> : null
                }
                {wish.isGranted ? 
                    <div className="gratitude">
                        The wish was granted 
                        <slot name="grantHelper"></slot>
                        <slot name="grantPerson"></slot>
                        <slot name="grantDate"></slot>
                    </div> :null
                }
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(WishCard);