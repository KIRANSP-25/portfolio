// import  React from 'react';
// import { Link } from 'react-router-dom';

// export default function Menu() {
//     return (
//         <>
//         <nav className="navbar navbar-default visible-xs">
//             <div className="container-fluid">
//                 <Link to="/" className="navbar-brand">Portfolio</Link>
//             </div>
//         </nav>
//         <div className="container-fluid">
//             <div className="row content">
//                 <div className="col-sm-2 sidenav hidden-xs">
//                     <h3>Portfolio</h3>
//                     <ul className="nav nav-pills nav-stacked">
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/resume">Resume</Link>
//                         </li>
//                         <li>
//                             <Link to="/portfolio">Portfolio</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div id="menu">
        <nav className="navbar navbar-default visible-xs">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Portfolio</Link>
            </div>
        </nav>
        <div className="container-fluid">
            <div className="row content">
                <div className="col-sm-2 sidenav hidden-xs">
                    <h3>Portfolio</h3>
                    <ul className="nav nav-pills nav-stacked">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}