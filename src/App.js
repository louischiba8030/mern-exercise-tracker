import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

export default class App extends React.Component {
	render () {
 		return (
			<BrowserRouter>
				<div className='container'>
					<Navbar />
					<Routes>
						<Route path="/" element={<ExercisesList />} />
						<Route path="/edit/:id" element={<EditExercise />} />
						<Route path="/create" element={<CreateExercise />} />
						<Route path="/user" element={<CreateUser />} />
					</Routes>
				</div>
			</BrowserRouter>
		);
	}
}

