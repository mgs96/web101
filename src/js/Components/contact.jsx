
const React = require('react');

class Contact extends React.Component {
	
	render() {
		return (<section>
					<h2>Say Hello.</h2>
					<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
					<form method="post" action="#">
						<div><input type="text" name="name" placeholder="Name" /></div>
						<div><input type="email" name="email" placeholder="Email" /></div>
						<div><textarea name="message" placeholder="Message" rows="6"></textarea></div>
						<div>
							<input type="submit" value="Send Message" />
						</div>
					</form>
				</section>);
	}
}

export default Contact;
