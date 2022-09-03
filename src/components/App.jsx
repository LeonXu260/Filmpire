import { useRef } from 'react';
import { CssBaseline} from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import useStyles from './styles'

import { Navbar } from './index'

function App() {
    const classes = useStyles();
  return (
   <div className={classes.root}>
       <CssBaseline />
       <Navbar />
       <main className={classes.content}>
           <div className={classes.toolbar}>
           </div>
       </main>
   </div>
  );
}

export default App;
