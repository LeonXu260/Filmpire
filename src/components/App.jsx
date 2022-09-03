import { useRef } from 'react';
import { CssBaseline} from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import useStyles from './styles';
import useAlan from './Alan';

import { Navbar } from './index'

function App() {
    const classes = useStyles();
    const alanBtnContainer = useRef();

    useAlan();

  return (
   <div className={classes.root}>
       <CssBaseline />
       <Navbar />
       <main className={classes.content}>
           <div className={classes.toolbar}>
           </div>
       </main>
       <div ref={alanBtnContainer}/>
   </div>
  );
}

export default App;
