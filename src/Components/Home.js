import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Home(props) {
  return (
    <div className={props.className}>
        <h1>TO-DO List</h1>
        <nav>
            <Link className="link" to="/todos">To-dos</Link>
            {props.isAuth ? <Link  className="link" to="/logout">Logout</Link> : <Link  className="link" to="/login">Login</Link>}
        </nav>      
    </div>
  )
}

const HomeStyle=styled(Home)`
display:flex;
justify-content:space-between;
align-items:center;
background-color:lightsteelblue;
color:white;

.link{
    margin-right:10px;
    text-decoration:none;
    color:white;
}


h1{
    margin-left:10px;
}

`


export default HomeStyle;
