import React from 'react'
import '../styles/home.css';
import SearchCalmer from './SearchCalmer'
import Header from '../images/Header.jpg'

const divStyle = {
  width: '100%',
  height: '700px',
  backgroundImage: `url(${Header})`,
  backgroundSize: 'cover'
};

class CalmerLanding extends React.Component{
	render(){
		return(
			<div>
				<div className="imagebox" style={divStyle} >


						<SearchCalmer/>


				</div>


			</div>
		)
	}
}

class CalmerPartners extends React.Component{
	render(){
		return(
			<div id="thisDFlexBox" className="d-flex c-flex justify-content-sm-around">
				<ul>
					<li>
						<p><small>Item 1</small></p>
					</li>
					<li>
						<p><small>item 2</small></p>
					</li>
					<li>
						<p><small>item 3</small></p>
					</li>
					<li>
						<p><small>item 4</small></p>
					</li>
					<li>
						<p><small>item 5</small></p>
					</li>
					<li>
						<p><small>item 6</small></p>
					</li>
					<li>
						<p><small>item 7</small></p>
					</li>
				</ul>
			</div>
		)
	}
}

export default CalmerLanding
