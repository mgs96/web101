
const React = require('react');

class Footer extends React.Component {
	
	render() {
		return (<footer>
		<ul>
			<li><a href="#"><span>Twitter</span></a></li>
			<li><a href="#"><span>Facebook</span></a></li>
			<li><a href="#"><span>Instagram</span></a></li>
		</ul>

		<p>&copy; Terms &amp; conditions | Design & Development: <a href="#">John Smith</a></p>
		
		</footer>);
	}
}

export default Footer;
