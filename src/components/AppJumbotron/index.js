import React from "react";
import { Jumbotron } from 'reactstrap';

const AppJumbotron = () => {
	return (
		<Jumbotron>
			<h1 className="display-3">Appointment Scheduler</h1>
				<p className="lead">Create, read, update, and delete your appointments!</p>
		</Jumbotron>
		);
};

export default AppJumbotron;