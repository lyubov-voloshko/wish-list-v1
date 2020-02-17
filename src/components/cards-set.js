import "../styles/cards-set.css";
import "../styles/ui-components/pagination.css";

import React, { Component } from "react";

import AddWish from "./dialog-createWish";
import DeleteWishConfirmation from "./dialog-deleteWish";
import EditWish from "./dialog-editWish";
import GrantWish from "./dialog-grantWish";
import WishCard from "./wish-card";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { openNextPage } from "../store/actions/wish-list";

const mapStateToProps = state => {
	return {
		wishes: state.firestore.ordered.wishes,
		isAuth: !state.firebase.auth.isEmpty,
		wishCreateShown: state.wishList.wishCreateShown,
		wishToGrantId: state.wishList.wishToGrantId,
		wishToEditId: state.wishList.wishToEditId,
		wishToDeleteId: state.wishList.wishToDeleteId
	};
};

const mapDispatchToProps = {
	openNextPage
};

const cardsPerPage = 4;

class CardsSet extends Component {
	render() {
		const {
			isAuth,
			wishes,
			openNextPage,
			wishCreateShown,
			wishToEditId,
			wishToGrantId,
			wishToDeleteId
		} = this.props;

		if (wishes)
            console.log(wishes);
			return (
				<React.Fragment>
					{/*<div className="pagination">
						<button>Prev</button>
						<span>{wishes.length}</span>
						<button onClick={() => openNextPage(wishes[2])}>
							Next
						</button>
                    </div>*/}
					<ul className="wishList">
						{wishes &&
							wishes.map(wish => {
								if (wish)
									return (
										<li
											className="wishList__item"
											key={wish.id}>
											<WishCard
												id={wish.id}
												wish={wish}
												isAuth={isAuth}
											/>
										</li>
									);
							})}
					</ul>

					{wishCreateShown ? <AddWish /> : null}
					{wishToGrantId ? <GrantWish /> : null}
					{wishToEditId ? <EditWish /> : null}
					{wishToDeleteId ? <DeleteWishConfirmation /> : null}
				</React.Fragment>
			);
		return null;
	}
}

export default compose(
	firestoreConnect(props => {
		if (props.isGranted !== undefined) {
			return [
				{
					collection: "wishes",
					where: [["isGranted", "==", props.isGranted]]
				}
			];
		} else {
			return [
				{
					collection: "wishes",
					orderBy: "title",
					/*startAfter: props.lastVisible,
					limit: 4*/
				}
			];
		}
	}),
	connect(mapStateToProps, mapDispatchToProps)
)(CardsSet);
