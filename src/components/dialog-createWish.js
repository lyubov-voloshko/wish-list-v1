import "../styles/dialog-editWish.css";
import "../styles/ui-components/select.css";

import {
	DialogActions,
	DialogContent,
	DialogHeader,
	DialogScreen
} from "./ui-components/dialog";
import React, { Component, useState } from "react";
import { closeCreateDialog, createWish } from "../store/actions/wish-list";

import Button from "./ui-components/button";
import TextBox from "./ui-components/text-box";
import { connect } from "react-redux";
import headerImage from "../assets/images/add.jpg";

const mapDispatchToProps = {
	closeCreateDialog,
	createWish
};

const AddWish = ({ createWish, closeCreateDialog }) => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("book");
	const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    
    const handleSubmit = (e) => {
		e.preventDefault();
        createWish({title, category, description, imageURL});
	}

	return (
		<DialogScreen onClose={() => closeCreateDialog()}>
			<DialogHeader type="Create">
				<div class="illustration">
					<img src={headerImage} />
					<div class="illustration__frame"></div>
				</div>
				<h1 class="headerCaption">
					<span class="headerCaption__highlighted">Make a wish!</span>
					&nbsp;carefully
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
						onClick={() => closeCreateDialog()}
					/>
					<Button
						appearance="primary"
						caption="make a wish"
					/>
				</DialogActions>
			</form>
		</DialogScreen>
	);
};

export default connect(null, mapDispatchToProps)(AddWish);
