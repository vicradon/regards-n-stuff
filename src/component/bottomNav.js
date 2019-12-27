import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import MemoryOutlinedIcon from '@material-ui/icons/MemoryOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ marginBottom: "3rem" }}
    >
      {value === index && <Box pt = {0} p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles(theme => ({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  content: {
    margin: "0 auto",
    width: "400px",
    [theme.breakpoints.down('sm')]: {
      width: "calc(100vw - 50px)"
    }
  }
}))

export default function SimpleBottomNavigation({ people, concepts, memories, bestRecords }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <TabPanel value={value} index={0}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: people }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: concepts }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: memories }}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: bestRecords }}
        />
      </TabPanel>


      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.stickToBottom}
      >
        <BottomNavigationAction label="people" icon={<PeopleOutlineIcon />} />
        <BottomNavigationAction  label="memories" icon={<MemoryOutlinedIcon />} />
        <BottomNavigationAction  label="concepts" icon={<EmojiObjectsOutlinedIcon />} />
        <BottomNavigationAction label="best records" icon={<MicOutlinedIcon />} />
      </BottomNavigation>
        {/* <BottomNavigationAction index = {0} value = "people" label="people" icon={<PeopleOutlineIcon />} />
        <BottomNavigationAction index = {1} value = "memories" label="memories" icon={<MemoryOutlinedIcon />} />
        <BottomNavigationAction index = {2} value = "concepts" label="concepts" icon={<EmojiObjectsOutlinedIcon />} />
        <BottomNavigationAction index = {3} value = "records" label="records" icon={<MicOutlinedIcon />} />
      </BottomNavigation> */}

    </>
  );
}
