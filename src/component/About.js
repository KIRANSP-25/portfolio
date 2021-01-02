import React from 'react';

export default function About() {
    return (
        <section id="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 well well-lg">
                    <h2>About</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-xs-12">
                            <img src="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg" alt="person" className="img-responsive"/>
                        <div className="well well-lg">

                        </div>
                </div>

                <div className="col-md-8 col-xs-12">
                    <div className="well well-lg">
                        <h3>Personal Information</h3>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus accusamus incidunt </p>

                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Name: </strong> <span className="pull-right">Kiran</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Email: </strong> <span className="pull-right">kiran@gmail.com</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Mobile: </strong> <span className="pull-right">9988774455</span>
                            </li>
                        </ul>

                        <a href="/contact" className="btn btn-info">Reach Me</a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    );
}