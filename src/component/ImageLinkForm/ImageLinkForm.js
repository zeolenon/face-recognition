import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () =>{
	return (
		<div>
			<p className = 'p3'> 
				{ 'This magic website, is designed to recognize faces on the pictures!'}
			</p>
			<div className='center'>
				<div className = 'center form pa4 br4 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text'/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red'> Detect </button>
				</div>
			</div>
		</div>
	);

}

export default ImageLinkForm;