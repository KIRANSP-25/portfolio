import React from 'react';

export default function Resume() {
    return (
        <section id="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 well well-lg">
                        <h2>Resume</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="well well-lg">
                            <h3 className="text-center">Skills</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum accusantium, libero debitis porro dicta ut totam laboriosam quos magni, ipsam qui facere aspernatur provident fugit a cumque, in aperiam repellendus.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="well well-lg">
                           <h6>HTML</h6>
                            <div className="progress">
                                <div className="progress-bar html">
                                </div>
                            </div>
                            
                            <h6>Css</h6>
                            <div className="progress">
                                <div className="progress-bar css">
                                </div>
                            </div>

                            <h6>JavaScript</h6>
                            <div className="progress">
                                <div className="progress-bar js">
                                </div>
                            </div>

                            <h6>Jquery</h6>
                            <div className="progress">
                                <div className="progress-bar js">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="well well-lg">
                    <h6>NodeJS</h6>
                     <div className="progress">
                         <div className="progress-bar node">
                         </div>
                     </div>
                     
                     <h6>React JS</h6>
                     <div className="progress">
                         <div className="progress-bar react">
                         </div>
                     </div>

                     <h6>Angular 10</h6>
                     <div className="progress">
                         <div className="progress-bar angular">
                         </div>
                     </div>

                     <h6>REST API</h6>
                     <div className="progress">
                         <div className="progress-bar rest">
                         </div>
                     </div>
                 </div>
                    </div>
                </div>

            </div>
        </section>
    );
}