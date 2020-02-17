import "../styles/dialog-grantWish.css";
import "../styles/ui-components/select.css";

import {
	DialogActions,
	DialogContent,
	DialogHeader,
	DialogScreen
} from "./ui-components/dialog";
import React, { Component, useState } from "react";
import { closeGrantDialog, grantWish } from "../store/actions/wish-list";

import Button from "./ui-components/button";
import TextBox from "./ui-components/text-box";
import { connect } from "react-redux";
import headerImage from "../assets/images/grant.jpg";

const mapStateToProps = state => {
	return {
		wishToGrantId: state.wishList.wishToGrantId,
		wishToGrant: state.firestore.data.wishes
			? state.firestore.data.wishes[state.wishList.wishToGrantId]
			: null
	};
};

const mapDispatchToProps = {
	closeGrantDialog,
	grantWish
};

const GrantWish = ({ wishToGrantId, wishToGrant, grantWish, closeGrantDialog }) => {
		const [grantHelper, setGrantHelper] = useState("me");
		const [grantPerson, setGrantPerson] = useState("");
		const [grantOccasion, setGrantOccasion] = useState("");
		const [grantDate, setGrantDate] = useState("");

		const handleSubmit = (e) => {
			e.preventDefault();
        	grantWish(wishToGrantId, {grantHelper, grantPerson, grantOccasion, grantDate});
		}

		return (
			<DialogScreen onClose={() => closeGrantDialog()}>
				<DialogHeader type="Grant">
					<div class="illustration">
						<img src={headerImage} />
						<div class="illustration__frame"></div>
					</div>
					<h1 class="headerCaption">
						<span class="headerCaption__highlighted">
							Congrats!
						</span>
						Your wish came true!
					</h1>
				</DialogHeader>
				<form onSubmit={e => handleSubmit(e)}>
					<DialogContent extraСlass="grantForm">
						<p className="dialogContent__message">
							Your wish "{wishToGrant && wishToGrant.title}" was
							granted
						</p>
						<div>
							<select
								id="grantHelper"
								className="select grantForm__select"
								value={grantHelper}
								onChange={e => setGrantHelper(e.target.value)}>
								<option value="me" className="selectOption">
									by me
								</option>
								<option value="by" className="selectOption">
									by
								</option>
								<option value="helper" className="selectOption">
									thanks to
								</option>
							</select>
							{grantHelper !== "me" ? (
								<TextBox
									label="Name"
									id="grant-person"
									extraСlass="grantForm__textBox"
									value={grantPerson}
									onChange={e => setGrantPerson(e.target.value)}
								/>
							) : null}
						</div>
						<div>
							on the occasion of{" "}
							<TextBox
								type="text"
								label="occasion"
								id="grant-occasion"
								extraСlass="grantForm__textBox"
								value={grantOccasion}
								onChange={e => setGrantOccasion(e.target.value)}
							/>
							on
							<TextBox
								type="date"
								label="date"
								id="grant-date"
								extraСlass="grantForm__textBox"
								value={grantDate}
								onChange={e => setGrantDate(e.target.value)}
							/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button
							type="button"
							appearance="primary"
							outlined
							caption="cancel"
							onClick={() => closeGrantDialog()}
						/>
						<Button
							appearance="primary"
							caption="grant"
						/>
					</DialogActions>
				</form>
			</DialogScreen>
		);
	}


export default connect(mapStateToProps, mapDispatchToProps)(GrantWish);
