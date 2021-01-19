/* Follow the author of this spinner on
Dribbble: https://dribbble.com/supahfunk
Twitter: https://twitter.com/supahfunk
Codepen: https://codepen.io/supah/ */

import React, { Fragment } from 'react';

const Spinner = () => {
	return (
		<Fragment>
			<svg className='spinner' viewBox='0 0 50 50'>
				<circle
					className='path'
					cx='25'
					cy='25'
					r='20'
					fill='none'
					strokeWidth='5'
				></circle>
			</svg>
		</Fragment>
	);
};

export default Spinner;
