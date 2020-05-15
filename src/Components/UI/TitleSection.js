import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import ModalVideo from '../UI/ModalVideo'

class TitleSection extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        let titleSection = null

        switch (this.props.type) {
            case ('title'):
                titleSection = <div className="TitleSection text-light text-center py-5" style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.63),rgba(0, 0, 0, 0.61)),url(${this.props.bg})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }} >
                    <Container>
                        <Row>
                            <Col>
                                <h3>{this.props.title} </h3>
                                <p className="lead mt-2">{this.props.lorem} </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                break;
            case ('video'):
                titleSection = <div className="TitleSection text-light text-center py-5" style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.63),rgba(0, 0, 0, 0.61)),url(${this.props.bg})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }} >
                    <Container>
                        <Row>
                            <Col>
                                <div style={{
                                    fontSize: '50px',
                                    color: 'red'
                                }}><FontAwesomeIcon icon={faPlay} /> </div>
                                <h2 className="mt-2">Bootstrap 4 Crash Course</h2>

                                {/* <ModalVideo/> */}

                            </Col>
                        </Row>
                    </Container>
                </div>
                break;
            default:
                titleSection = null
        }
        return titleSection
    }
}

export default TitleSection;

