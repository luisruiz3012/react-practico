import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
	return (
		<div className="container">
			<section>
				<h1>Error 404</h1>
				<h2>Page not found</h2>
			</section>
			<section className="message">
				<p><b>Whoops!</b></p>
				<p>Looks like the page that you are trying to reach does not exists</p>
				<p>Press <a href="/">here</a> to return to the home page.</p>
			</section>
		</div>
	);
}

export default NotFound;
