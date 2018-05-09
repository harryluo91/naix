import React from 'react';
import { Grid, CardMedia, withStyles } from 'material-ui'
import PropTypes from 'prop-types';

import SectionDivider from '../sectionDivider/sectionDivider';
import PlaceHolderImg from '../../static/module-card.jpeg';

const style = {
  outerContainer: {
    height: '100%'
  },
  mediaItem: {
    height: '150px'
  },
  cardMedia: {
    height: '100%',
  },
  contentItem: {
    margin: '20px 10px',
    textAlign: 'center'
  }
}

const ModuleCard = ({ heading, classes }) => {
  return (
    <div className="module-card">
      <Grid container justify="center" alignItems="center" className={classes.outerContainer}>
        <Grid item xs={12} className={classes.mediaItem}>
          <CardMedia
            image={PlaceHolderImg}
            title="Module Card"
            className={classes.cardMedia}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={12} className={classes.contentItem}>
              {heading}
            </Grid>
            <SectionDivider width={60}/>
            <Grid item xs={12} className={classes.contentItem}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper lectus orci</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

ModuleCard.prototypes = {
  heading: PropTypes.string.isRequired
}

export default withStyles(style)(ModuleCard);
