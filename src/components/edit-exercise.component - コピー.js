import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useLocation, useParams, useMemo } from 'react-router-dom';

// new function component begins
const EditExercise = () => {
	//
	const location = useLocation();
	const id = location.pathname.split('/').slice(-1)[0];

	const [startDate, setStartDate] = useState(new Date());
	const [form, setForm] = useState({
		username: '',
		description: '',
		duration: 0,
		date: new Date()
	});

//	const result = useMemo(() => {
//		console.log('fetchUsers() executed.');
//	});

// Same as: componentDidMount()
	const didLogRef = useRef(false);

	useEffect(() => {
		const fetchExercise = async () => {
			const res = await axios.get('http://localhost:5000/exercises/'+id);
			console.log("res.data: ", res.data);
			setForm({ ...form, username: res.data.username });
		}

		if(didLogRef.current == false) {
			didLogRef.current = true;
			fetchExercise();
		}
	}, []);

	const handleChange = (input) => e => {
		setForm({...form, [input] : e.target.value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// do something
//		const exercise = {
//			username: form.username,
//			description: form.description,
//			duration: form.duration,
//			date: startDate,
//		}
		setForm({ ...form, description: form.description, duration: form.duration, date: form.date});
		console.log("new exercise: ", form);
		const res = await axios.put('http://localhost:5000/exercises/'+id, form);
		// console.log(res.data);
		
		window.location = '/';
	}

	return (
		<div>
			<h3>Edit Exercise Log</h3>
			<form onSubmit={handleSubmit}>

				<div className='form-group'>
					<label>Username: </label>
					<input readOnly required className='form-control' type="text" value={form.username} />
				</div>

				<div className='form-group'>
					<label>Description: </label>
					<input required className='form-control' type="text" value={form.description} onChange={handleChange('description')} />
				</div>

				<div className='form-group'>
					<label>Duration: </label>
					<input required className='form-control' type="text" value={form.duration} onChange={handleChange('duration')} />
				</div>

				<div className='form-group'>
					<label>Date: </label>
					<DatePicker
						className='form-control'
						selected={startDate}
						onChange={(date) => setStartDate(date)}
					/>
				</div>

				<div className='form-group'>
					<input type="submit" value="Edit" />
				</div>

			</form>
		</div>
	)
}

export default EditExercise;
