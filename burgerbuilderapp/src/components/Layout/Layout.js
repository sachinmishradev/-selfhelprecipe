import React from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import clsasses from './Layout.module.css';
const Layout = (props) => {
    return (
        <Auxiliry>
            <div>
                Toolbar,SideDrawer,Backdrop
            </div>
            <main className={clsasses.content}>
                {props.children}
            </main>

        </Auxiliry>
    )
}

export default Layout;