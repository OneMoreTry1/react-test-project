import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={classes.image}>
				<img src='https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' alt='Image' />
			</div>
			<div className={classes.descriptionBlock} >Avatar + Description</div>
		</div>
	);
}

export default ProfileInfo;