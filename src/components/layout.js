import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  layout: {
    width:'400px',
    margin:'0 auto',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100vw - 50px)',
    },
  }
}))

export default function Layout({children}){
  const classes = useStyles();
  return (
    <div className = {classes.layout}>
      {children}
    </div>
  )
}