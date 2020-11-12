import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={classes.image}>
				<img src='https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' alt='Image' />
			</div>
			<div className={classes.descriptionBlock} >
				<img src={props.profile.photos.large} />
				Avatar + Description
			</div>
		</div>
	);
}

export default ProfileInfo;