import React,{Component} from 'react';
import config from './config.json';
import styles from './index.css';

class Greeter extends Component{
	render(){
		return (
				<div className={styles.root}>
					{config.text}
				</div>
				);
	}
}

export default Greeter;
