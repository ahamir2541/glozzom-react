import React from 'react';
import { Card } from 'react-bootstrap'

const GetTuch = () => {
    return (
        <div className="GetTuch">
            <Card>
                <Card.Body>
                    <div>
                        <h4>Get In Touch</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequuntur.
                    </div>
                    <div className="mt-3">
                        <h4>Address</h4>
                        House #100, Uttara, Dhaka
                    </div>
                    <div className="mt-3">
                        <h4>Email</h4>
                        test@gmail.com
                    </div>
                    <div className="mt-3">
                        <h4>Phone</h4>
                        <div>+434 3434 3433</div>
                        <div>+434 3434 3433</div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GetTuch;