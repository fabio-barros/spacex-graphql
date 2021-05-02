import { Col, Container, Row } from "react-bootstrap";
import LaunchCard from "./LaunchCard";
import "../styles/css/Launches.css";
import Spinner from "./Spinner";
import { useState, useEffect, Fragment, useContext } from "react";
import { LaunchesContext } from "../contexts/LaunchesContext";

const Launches = () => {
    const { loading, error, data } = useContext(LaunchesContext);

    return (
        <Fragment>
            {!loading ? (
                <Container className="main" fluid>
                    <Container>
                        <Row className="title-row">
                            <Col className="title-col">
                                <h1>SpaceX Launches</h1>
                            </Col>
                        </Row>
                        <Row className="cards-row">
                            {[...data.launches].reverse().map((launch) => (
                                // console.log(launch)
                                <Col className="cards-col" lg={4}>
                                    <LaunchCard
                                        key={launch.launch_date_local}
                                        launch={launch}
                                    ></LaunchCard>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>
            ) : (
                <Spinner className="spinner" />
            )}
        </Fragment>
    );
};

export default Launches;
