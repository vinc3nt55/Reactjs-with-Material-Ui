import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconBtn from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatBtn from 'material-ui/FlatButton';


class ImgResults extends Component {
	state = {
		open: false,
		currentImg: ''
	}

	handleOpen = img => {
		this.setState({ open: true, currentImg: img });
	}

	handleClose = () => {
		this.setState({ open: false });
	}

	render() {
		let imageListContent;
		const { images } = this.props;
		if(images) {
			imageListContent = (
				<GridList cols={3}>
					{ images.map(img => (
						<GridTile
							title={img.tags}
							key={img.id}
							subtitle={
								<span>
									by <strong>{img.user}</strong>
								</span>
							}
							actionIcon={
								<IconBtn onClick={ () => this.handleOpen(img.largeImageURL) }>
									<ZoomIn color="white" />
								</IconBtn>
							}
						>
							<img src={img.largeImageURL} />
						</GridTile>
					 ))}
				</GridList>
			);
		}else{
			imageListContent = null;
		}
		const actions = [
			<FlatBtn label="Close" promary={true} onClick={this.handleClose} />
		]

		return <div>
			{imageListContent}
			<Dialog 
				actions={actions}
				modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
			>
				<img src={this.state.currentImg} alt="" style={{ width: '1000' }} />
			</Dialog>
		</div>;
	}
}
ImgResults.PropTypes = {
	images: PropTypes.array.isRequired
}

export default ImgResults;