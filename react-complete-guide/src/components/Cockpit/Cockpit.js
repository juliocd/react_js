// ### FUNCTIONAL COMPONENT ###
import React, {useContext, useRef, useEffect} from 'react';
// useEffect is the second most important React hook after State, becuse it basically combine all these class lifecycle hooks in one React hoook.

import classes from './Cockpit.css';
import AuthContext from './../../context/auth-context';

const cockpit = (props) =>{
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log("Fun Aut:" + authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // Http request... Only run the component runs the first time
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [props.persons]); // Only execute when persons have changed | for an empty array [] it just runs when the component is render and unmounted | It's possible to add many variables separated by comma

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    }); // It hasn't second argument, therfore it runs always

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2){
        assignedClasses.push(classes.Red);
    }
    if(props.personsLength <= 1){
        assignedClasses.push(classes.Bold);
    }

    return(
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}
                >Toggle Person</button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Login User</button>}
            </AuthContext.Consumer>
        </div>
    )
}

export default React.memo(cockpit); // React memo allows only re-render when the props changed, grat optimization for functional components