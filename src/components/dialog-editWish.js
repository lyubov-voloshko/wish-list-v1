import "../styles/dialog-editWish.css";
import "../styles/ui-components/select.css";

import {
    DialogActions,
    DialogContent,
    DialogHeader,
    DialogScreen
} from "./ui-components/dialog";
import React, { Component, useState } from "react";
import { closeEditDialog, editWish } from "../store/actions/wish-list";

import Button from "./ui-components/button";
import TextBox from "./ui-components/text-box";
import { connect } from "react-redux";
import headerImage from "../assets/images/edit.jpg";

const mapStateToProps = state => {
    return {
        wishToEditId: state.wishList.wishToEditId,
        wishToEdit: state.firestore.data.wishes
            ? state.firestore.data.wishes[state.wishList.wishToEditId]
            : null
    };
};

const mapDispatchToProps = {
    closeEditDialog,
    editWish
};

const EditWish = ({ wishToEditId, wishToEdit, editWish, closeEditDialog }) => {
	const [title, setTitle] = useState(wishToEdit.title);
	const [category, setCategory] = useState(wishToEdit.category);
	const [description, setDescription] = useState(wishToEdit.description);
	const [imageURL, setImageURL] = useState(wishToEdit.imageURL);

	const handleSubmit = (e) => {
		e.preventDefault();
        editWish(wishToEditId, {title, category, description, imageURL});
	}

	return (
		<DialogScreen onClose={() => closeEditDialog()}>
			<DialogHeader type="Edit">
				<div class="illustration">
					<img src={headerImage} />
					<div class="illustration__frame"></div>
				</div>
				<h1 class="headerCaption">
					<span class="headerCaption__highlighted">Specify!</span>
					It's important
				</h1>
			</DialogHeader>
			<form onSubmit={e => handleSubmit(e)}>
				<DialogContent extraСlass="editForm">
					<div className="editForm__topLine">
						<TextBox
							label="Title"
							id="edit-title"
							extraСlass="editForm__textBox"
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
						<select
							id="edit-category"
							className="select"
							value={category}
							onChange={e => setCategory(e.target.value)}>
							<option value="book">book</option>
							<option value="clothes">clothes</option>
							<option value="food">food</option>
							<option value="item">item</option>
							<option value="job">job</option>
							<option value="travelling">travelling</option>
						</select>
					</div>
					<TextBox
						label="Put some description"
						id="edit-description"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<TextBox
						label="Add image URL"
						id="edit-imageURL"
						value={imageURL}
						onChange={e => setImageURL(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						type="button"
						appearance="primary"
						outlined
						caption="cancel"
						onClick={() => closeEditDialog()}
					/>
					<Button
						appearance="primary"
						caption="edit"
					/>
				</DialogActions>
			</form>
		</DialogScreen>
	);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditWish);
