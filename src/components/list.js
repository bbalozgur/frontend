import React from 'react';

export default function List(props) {
	function recursive(data) {
		return (
			data.map((item) => {
				if('children' in item) {
					return (
						<li className="">
							<a href=""> {item.Name}</a>
							<ul className="">
								{recursive(item.children)}
							</ul>
						</li>
					)	
				} else {
					return (
						<li className="">
							<span className="spanxxx"> {item.ID}</span><a href="">{item.Name} </a>
						</li>
					)
				}
				
			})
		)
	} 
	return (
		<ul>
			{recursive(props.data)}
		</ul>	
	)
}