import {
	DialogActions,
	DialogContent,
	DialogHeader,
	DialogScreen
} from "./ui-components/dialog";
import React, { Component } from "react";
import {
	closeDeleteConfirmation,
	deleteWish
} from "../store/actions/wish-list";

import Button from "./ui-components/button";
import { connect } from "react-redux";
import headerImage from "../assets/images/delete.jpg";

const mapStateToProps = state => {
	return {
		wishToDeleteId: state.wishList.wishToDeleteId,
		wishToDelete: state.firestore.data.wishes
			? state.firestore.data.wishes[state.wishList.wishToDeleteId]
			: null
	};
};

const mapDispatchToProps = {
	closeDeleteConfirmation,
	deleteWish
};

class DeleteWishConfirmation extends Component {
	render() {
		const {
			wishToDeleteId,
			wishToDelete,
			closeDeleteConfirmation,
			deleteWish
		} = this.props;
		return (
			<DialogScreen onClose={() => closeDeleteConfirmation()}>
				<DialogHeader type="Delete">
					<div class="illustration">
						<img src={headerImage} />
						<div class="illustration__frame"></div>
					</div>
					<h1 class="headerCaption">
						<span class="headerCaption__highlighted">Delete?</span>
						Are you sure?
					</h1>
				</DialogHeader>
				<DialogContent>
					<p class="dialogContent__message">
						You are going to delete "
						{wishToDelete && wishToDelete.title}" wish.
						<br />
						It will be deleted for good.
					</p>
				</DialogContent>
				<DialogActions>
					<Button
						type="button"
						appearance="primary"
						outlined
						caption="cancel"
						onClick={() => closeDeleteConfirmation()}
					/>
					<Button
						type="button"
						appearance="primary"
						caption="delete"
						onClick={() => deleteWish(wishToDeleteId)}
					/>
				</DialogActions>
			</DialogScreen>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeleteWishConfirmation);
