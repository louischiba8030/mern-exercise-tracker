import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends React.Component {
	constructor (props) {
		super (props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit(this);

		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: []
		}
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}
	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}
	onChangeDuration(e) {
		this.setState({
			duration: e.target.value
		});
	}
	onChangeDate(date) {
		this.setState({
			date: date
		});
	}
	onSubmit(e) {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		}
		console.log(exercise);
		window.lodation = '/';
	}

	render () {
		return (
			<div>
				<h3>Create New Exercise Log</h3>
			</div>
		)
	}
}