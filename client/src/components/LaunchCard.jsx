import "../styles/css/LaunchCard.css";
import { Image } from "react";
import spacexlogo from "../assets/spacexlogo.jpg";
import { Badge, Col, Container, Row } from "react-bootstrap";

const LaunchCard = ({ launch }) => {
    const {
        mission_name,
        launch_date_local,
        launch_success,
        launch_year,
        flight_number,
        links: { mission_patch_small, article_link, wikipedia, video_link },
        rocket: { rocket_id, rocket_name, rocket_type },
    } = launch;

    return (
        <Container className="card-wrapper" >
            <Row className="card-row-1">
                <Col className="card-col-1" xs="6">
            
                        <h2>{mission_name}</h2>
                        <p>{launch_year}</p>
          
                    <h5>Rocket:  <Badge pill variant="primary">{rocket_name}</Badge></h5>
                    <h6>Launch: <Badge variant="info">{flight_number}</Badge></h6>
                    <h6>
                        Launch Success:{" "}
                        {launch_success ? (
                            <span
                                class="iconify"
                                data-icon="el:ok"
                                data-inline="false"
                                data-width="20"
                            data-height="20"
                                style={{ color: "green" }}
                            ></span>
                        ) : (
                            <span
                                class="iconify"
                                data-icon="akar-icons:circle-x"
                                data-inline="false"
                                data-width="20"
                                data-height="20"
                                style={{ color: "red" }}
                            ></span>
                        )}
                    </h6>
                </Col>
                <Col className='logo-col' xs="6">
                    <img
                        className="mission-logo"
                        src={
                            typeof mission_patch_small === "string"
                                ? mission_patch_small
                                : spacexlogo
                        }
                    />
                      <div className="links">
                      <a className="a_tag" href={article_link} target="_blank">
                        <span
                            className="link-icon"
                            data-width="35"
                            data-height="35"
                            class="iconify"
                            data-icon="grommet-icons:article"
                            data-inline="false"
                        ></span>
                    </a>
                    <a className="a_tag" href={wikipedia} target="_blank">
                        <span
                            className="link-icon"
                            data-width="35"
                            data-height="35"
                            class="iconify"
                            data-icon="simple-icons:wikipedia"
                            data-inline="false"
                        ></span>
                    </a>
                    <a className="a_tag" href={video_link} target="_blank">
                        <span
                            className="link-icon"
                            data-width="35"
                            data-height="35"
                            class="iconify"
                            data-icon="akar-icons:youtube-fill"
                            data-inline="false"
                        ></span>
                    </a>
                      </div>
                </Col>
                <Col className="links-col" xs="6">
                  
                </Col>
                {/* <h2>{rocket_type}</h2> */}
            </Row>
        </Container>
    );
};

export default LaunchCard;
