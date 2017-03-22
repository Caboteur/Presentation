import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import Carte from '../components/card.js';
import Logo from '../components/logo.scss';

export default class Article extends Component {
  render(){
    $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
	});
    return (
<div className="Body">
      <section id="screen1">

	<div className="bb" />

	<nav>
		 <ul>
   <li><a href="#">Home</a></li>
		 	  <li><a href="#">About</a></li>
		 	  <li><a href="#">Services</a></li>
		 	  <li><a href="#">Team</a></li>
		 	  <li><a href="#">Contact</a></li>
		 </ul>
	</nav>

</section>

<section id="screen2"><div><Carte /></div></section>
<section id="screen3"></section>
</div>

    );
  }
}
