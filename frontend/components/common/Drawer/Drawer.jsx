import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

// import { toggleDrawer } from '../../../store/actions/drawer'

import styles from './Drawer.module.css'

function TemporaryDrawer(props) {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   console.log(anchor)
  //   props.setDrawerState({ ...props.drawerState, [anchor]: open });
  // };

  const Label = props.label

  // console.log(props.drawerState)

  return (
    <div>
        <React.Fragment key={props.anchor}>
          <Button onClick={toggleDrawer(props.anchor, true)}>
              <Label style={{ color: props.color}} />
          </Button>
          <Drawer anchor={props.anchor} open={state[props.anchor]} onClose={toggleDrawer(props.anchor, false)}>
            <div className={styles.drawerContainer}>
              {props.children}
            </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}


export default TemporaryDrawer