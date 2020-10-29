import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (

		<div className={classes.item}>
			<img src='https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png' />
			{props.message}
			<div><span>Like</span> {props.likesCount}</div>
		</div>


	);
}

export default Post;