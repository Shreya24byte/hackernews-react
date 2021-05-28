import * as React from "react"
import {Link, Router, Switch} from 'react-router-dom';
import { Typography, makeStyles, List, ListItem, ListItemText, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
  navBar: {
    background: `#ff6600`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  title: {
    flexGrow: 1,
  },
  listItemText: {
    textUnderlineOffset: `none`,
    color: `black`,
  }
});

const navLinks = [
  { title: `welcome`, path: `/welcome` },
  { title: `news`, path: `/newest` },
  { title: `past`, path: `/past` },
  { title: `show`, path: `/show` },
  { title: `jobs`, path: `/jobs` },
  { title: `submit`, path: `/submit` },
  { title: `login`, path: `/login` },
]
export  function Header() {
  const classes = useStyles(); 
  
  return (
      <AppBar position="static" className={classes.navBar}>
        <Toolbar maxWidth="md" className={classes.navDisplayFlex}>
        <Typography variant="h5" className={classes.title}>
           Hacker News
          </Typography>
          <List
  component="nav"
  aria-labelledby="main navigation"
  className={classes.navDisplayFlex} 
>
  {navLinks.map(({ title, path }) => (
    <a href={path} key={title} className={classes.linkText}>
      <Link to={path} >
      <ListItem button>
        <ListItemText primary={title} className={classes.listItemText} />
      </ListItem>
      
      </Link>
    </a>
  ))}
</List>
        </Toolbar>
      </AppBar>
  );
}
