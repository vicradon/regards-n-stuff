import React, { useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Appbar from './appbar'


export default function PageLayout({ children }) {
  const layoutcont = useRef(null);

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
      <Appbar />
      <div ref={layoutcont} className={classes.layout}>
        {children}
      </div>
    </div>
  )
}
