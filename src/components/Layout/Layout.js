import React from 'react';
import classes from './Layout.module.css'

const Layout = ({children}) => (
  <React.Fragment>
    <main className={classes.Content}>
      {children}
    </main>
  </React.Fragment>
)
 
export default Layout;