import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
	const [form, setForm] = useState({
		username: ''
	});

	useEffect(() => {

	}, []);

	const handleChange = (input) => e => {
		setForm({...form, [input] : e.target.value });
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		setForm({ ...form, username: form.username });
		console.log("new username: ", form.username);
		const res = await axios.post('http://localhost:5000/users/add', form);
		console.log("res.data: ", res.data);
		// catch
	}

	return (
		<div>
			<h3>Create New User</h3>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Username: </label>
					<input required className='form-control' type='text' value={form.username} onChange={handleChange('username')} />
				</div>

				<div className='form-group'>
					<input type='submit' value='Register' />
				</div>
			</form>
		</div>
	)
}

export default CreateUser;
