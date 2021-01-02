import React from 'react';

export default function Contact() {
    return (
        <section id="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 well well-lg">
                    <h2>Contact</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="well well-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6760032179636!2d77.53641741377373!3d12.99256279084212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8ad89380bd%3A0xe619385693ac1684!2sBe%20practical-Job%20guaranteed%20Full%20stack%20developer%20course%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1604747453392!5m2!1sen!2sin" className="thumbnail" height="300" frameborder="0" style={{border:0,width:'100%'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="well well-lg">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </div>

                             <div className="form-group">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name="mobile" id="mobile" className="form-control"/>
                            </div>

                             <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-info"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}