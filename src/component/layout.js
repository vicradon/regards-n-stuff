import React, { useState, useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import MemoryOutlinedIcon from '@material-ui/icons/MemoryOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { Link } from 'gatsby'
import { handleShare } from './utils'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    right: 0,
    justifyContent: "flex-end",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  list: {
    width: "15rem",
  },
  link: {
    textDecoration: 'none',
    color: "inherit"
  }
  // searchCont: { 
  //   display: "flex", 
  //   justifyContent: "flex-end" 
  // }
}));

function SearchAppBar() {
  const classes = useStyles();

  const [inputvalue, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const [open, setOpen] = useState(false)


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <List className={classes.list}  >
              <Link className={classes.link} to="/">
                <ListItem button>
                  <ListItemIcon><PeopleOutlineIcon /></ListItemIcon>
                  <ListItemText primary={'People'} />
                </ListItem>
              </Link>
              <Link className={classes.link} to='/concepts'>
                <ListItem button>
                  <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={'Concepts'} />
                </ListItem>
              </Link>
              <Link className={classes.link} to='/best-records'>
                <ListItem button>
                  <ListItemIcon><MicOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={'Best Records'} />
                </ListItem>
              </Link>
              <Link className={classes.link} to='/memories/'>
                <ListItem button>
                  <ListItemIcon><MemoryOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={'Memories'} />
                </ListItem>
              </Link>
              <Link className={classes.link} to='/about/'>
                <ListItem button>
                  <ListItemIcon><InfoOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={'About'} />
                </ListItem>
              </Link>

              <ListItem onClick={handleShare} button>
                <ListItemIcon><ShareOutlinedIcon /></ListItemIcon>
                <ListItemText primary={'Share'} />
              </ListItem>
              <ListItem onClick={handleShare} button>
                <ListItemIcon><i className='fa fa-paint-brush'></i></ListItemIcon>
                <ListItemText primary={'Create Yours'} />
              </ListItem>

              {/* <Link className={classes.link} to='/auth/'>
                <ListItem button>
                  <ListItemIcon><LockOpenOutlinedIcon /></ListItemIcon>
                  <ListItemText primary={'Login/Logout'} />
                </ListItem>
              </Link> */}
            </List>
          </SwipeableDrawer>
          <Typography className={classes.title} variant="h6" noWrap>
            Regards n Stuff (2019)
          </Typography>
          <div>


            <div className={classes.search}>
              <div className={classes.searchCont}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleChange}
                  value={inputvalue}
                />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default function Layout({ children }) {
  const layoutcont = useRef(null);

  // const x = window.matchMedia("(max-width: 450px)")
  // function myFunction(x) {
  //   if (x.matches) {
  //     layoutcont.current.style.width = "calc(100vw - 50px)";
  //   }
  // }
  const useStyles = makeStyles(theme => ({
    layout: {
      margin: "0 auto",
      width: "400px",
      [theme.breakpoints.down('sm')]: {
        width: "calc(100vw - 50px)"
      }
    }
  }))
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <SearchAppBar />
      <div ref={layoutcont} className={classes.layout}>
        {/* <h2>2019 - Regards n Stuff</h2> */}
        {children}
      </div>
    </div>
  )
}
