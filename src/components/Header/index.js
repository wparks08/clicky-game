import React from "react";
import Row from "../Row";
import Col from "../Col";
import Jumbotron from "../Jumbotron";
import PropTypes from "prop-types";

function Header(props) {
    return (
        <Row className="mt-4">
            <Col size="sm-12">
                <Jumbotron>{props.children}</Jumbotron>
            </Col>
        </Row>
    );
}

Header.propTypes = {
    children: PropTypes.any
};

export default Header;
