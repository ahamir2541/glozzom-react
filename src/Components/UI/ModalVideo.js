import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'

class ModalVideo extends Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <Button
                    variant="primary"
                    onClick={() => this.handleModal()} >
                    Contact Us
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                    centered
                    size="lg"
                >
                    
                    <Modal.Body closeButton>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5j6hXI8uRcw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Modal.Body>

                </Modal>
            </div>
        );
    }
}

export default ModalVideo;