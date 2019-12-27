import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import BottomNav from './bottomNav'
import Appbar from './appbar'


export default function HomeLayout({ children, people, concepts, memories, bestRecords }) {

  const useStyles = makeStyles(theme => ({
    layout: {
      margin: "0 auto",
      width: "400px",
      [theme.breakpoints.down('sm')]: {
        width: "calc(100vw - 50px)"
      }
    }
  }))
  const regex = new RegExp('.+?\/')
  const slug = window.location.href.split('').reverse().join('').match(regex)[0].split('').reverse().join('');
  localStorage.setItem('slug', slug);
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Appbar />
      <div  className={classes.layout}>
        {children}
      </div>
      <BottomNav people={people} concepts={concepts} memories={memories} bestRecords={bestRecords} />
    </div>
  )
}
