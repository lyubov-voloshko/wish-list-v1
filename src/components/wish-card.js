import "../styles/wish-card.css";

import { format, formatDistance } from "date-fns";
import {
	openDeleteConfirmation,
	openEditDialog,
	openGrantDialog
} from "../store/actions/wish-list";

import Button from "../components/ui-components/button";
import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { defaultImage } from "../assets/images/default.jpg";

const mapDispatchToProps = {
	openDeleteConfirmation,
	openEditDialog,
	openGrantDialog
};

const WishCard = ({
	id,
	wish,
	isAuth,
	openDeleteConfirmation,
	openEditDialog,
	openGrantDialog
}) => {
	return (
		<div className="wishCard">
			{wish.isGranted ? (
				<div id="grantedMark" className="granted">
					granted
				</div>
			) : null}
			{wish.imageURL ? 
				<img className="wishImage" src={wish.imageURL} />:
				<img className="wishImage wishImage_empty" src="http://placecorgi.com/300/300" />
			}
			
			{/*<div
				className="wishImage"
				role="img"
				style={{
					backgroundImage: `${
						wish.imageURL
							? `url(${wish.imageURL})`
							: 'url("http://placecorgi.com/300/300")'
					}`,
					filter: `${
						wish.imageURL
							? null
							: "sepia(1) brightness(0.75) contrast(0.75) opacity(0.5)"
					}`
				}}></div>*/}
			<div className="wishInfo">
				<div className="info">
					<span className="category">{wish.category}</span>
					<h2 className="wishTitle">{wish.title}</h2>
					<div className="description">
						<p>{wish.description}</p>
						<div className="description__veil"></div>
					</div>
				</div>
				{isAuth ? (
					<div id="controls" className="actions">
						{wish.isGranted ? null : (
							<div className="actions__notGranted">
								<Button
									type="button"
									appearance="primary"
									caption="grant"
									onClick={() => openGrantDialog(id)}
								/>
								<Button
									type="button"
									appearance="secondary"
									caption="edit"
									onClick={() => openEditDialog(id)}
								/>
							</div>
						)}
						<Button
							type="button"
							appearance="secondary"
							caption="remove"
							onClick={() => openDeleteConfirmation(id)}
						/>
					</div>
				) : null}
				{wish.isGranted ? (
					<div className="gratitude">
						The wish was granted
						{wish.createdAt && wish.grantDate ? (
							<span>
								{" "}
								in{" "}
								{formatDistance(
									new Date(wish.createdAt.toDate()),
									new Date(wish.grantDate.toDate())
								)}
							</span>
						) : null}
						{wish.grantPerson ? (
							<span>
								{" "}
								{wish.grantHelper === "helper"
									? "thanks to"
									: wish.grantHelper}{" "}
								{wish.grantPerson}
							</span>
						) : null}
						{wish.grantOccasion ? (
							<span> on {wish.grantOccasion}</span>
						) : null}
						{wish.grantDate ? (
							<span>
								{" "}
								on{" "}
								{wish.grantDate &&
									format(wish.grantDate.toDate(), "PPP")}
							</span>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default connect(null, mapDispatchToProps)(WishCard);
