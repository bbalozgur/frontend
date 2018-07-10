import React, { Component } from 'react';
import List from './components/list.js';
import Data from './data/data.json';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			handledData: []
		}
	}

	createNestedData(data) {
		let newArray = [];
		let recursiveData = (data, item) => {
			data.map(function(parentItem) {
				if(item.parentID == parentItem.ID) {
					if('children' in parentItem) {
						parentItem.children.push(item);
					} else {
						parentItem.children = []
						parentItem.children.push(item);
					}
				} else {
					if('children' in parentItem) {
						recursiveData(parentItem.children, item)
					}
				}
			})
		}

		data.map(function(item) {
			if(!('parentID' in item)) {
				newArray.push(item)
			} else {
				if(newArray.length > 0) {
					recursiveData(newArray, item)
				}
			}
		})

		this.setState({
			handledData: newArray
		});

	}

	componentDidMount() {
		this.createNestedData(Data);
	}

	render() {
		return (
		    <div className="page-container">
		    	<List data={this.state.handledData}/>
		    </div>
	    )
	}


  
}



export default App;
