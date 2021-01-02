import React from 'react';

export default function Portfolio() {
    return (
        <section id="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 well well-lg">
                        <h2>Portfolio</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="thumbnail">
                                <img src="https://www.websitetooltester.com/wp-content/uploads/2017/08/website-setup.png" alt="p1" className="img-responsive"/>
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info ">Git Source</a>
                                    <a href="#" className="btn btn-warning">Live View</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="thumbnail">
                                <img src="https://www.websitetooltester.com/wp-content/uploads/2017/08/website-setup.png" alt="p2" className="img-responsive"/>
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info ">Git Source</a>
                                    <a href="#" className="btn btn-warning">Live View</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="thumbnail">
                                <img src="https://www.websitetooltester.com/wp-content/uploads/2017/08/website-setup.png" alt="p2" className="img-responsive"/>
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info ">Git Source</a>
                                    <a href="#" className="btn btn-warning">Live View</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}