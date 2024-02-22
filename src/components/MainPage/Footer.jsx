import React from "react"
import { Col, Container } from "react-bootstrap"

export default function Footer() {
    return (
        <footer>
            <Col sm={6}>
                <ul className="listStyleNoDot">
                    <li>
                        <p>Are you an existing Web Services or FedEx Ship Manager Server Customer? If so, you can still access the <a title="DRC" href="https://www.fedex.com/en-us/developer.html">Developer Resource Center</a>.</p>
                    </li>
                    <li>© FedEx Corporate Services Inc. All rights reserved.</li>
                </ul>
        </Col>
            <Col sm={6}></Col>
        </footer>
    )
}