import React from 'react'
import Layout from '../component/layout'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => { console.log(theme); return {
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    fontSize: "2rem"
  },
  linkcont: {
    width:"60%",
    display:"flex",
    justifyContent:"space-around"
  }
}});


const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <h2>About</h2>
      <p>This is a litle fun app I made, just for the season.</p>
      <h3>Connect with me</h3>
      <div className = {classes.linkcont}>
        <a  href='https://www.linkedin.com/in/chukwujama-osinachi/'>
          <i className={`fa fa-linkedin ${classes.link}`}></i>
        </a>
        <a href='https://mobile.twitter.com/ChukwujamaV/'>
          <i className={`fa fa-twitter ${classes.link}`}></i>
        </a>
        <a href='vicraph7@gmail.com/'>
          <i className={`fa fa-envelope ${classes.link}`}></i>
        </a>
        <a href='https://www.github.com/vicradon/'>
          <i className={`fa fa-github ${classes.link}`}></i>
        </a>
        <a href='https://dev.to/vicradon/'>
          <i className={`fa fa-dev ${classes.link}`}></i>
        </a>
      </div>
    </Layout>
  )
}

export default About;