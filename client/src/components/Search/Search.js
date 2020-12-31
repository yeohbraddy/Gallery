import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "react-fetch-hook";
import { ImageOverlay } from "react-image-overlay-effect";
import { FaUser } from "react-icons/fa";
import content from "../../config/content.json";
import Dexter from "../../assets/images/dexter.png";
const searchEndpoints = content.service_endpoints.search;

const Headers = styled.p.attrs(() => ({
  className: `f2 fw3 avenir `,
}))``;

const UserContainer = styled.div.attrs(() => ({
  className: `grow dim pointer`,
}))``;

const Username = styled.p.attrs(() => ({
  className: `avenir pt1 f3 fw3 my-auto`,
}))``;

const Hover = styled.div.attrs(() => ({
  className: `d-flex flex-column justify-content-center align-items-center my-auto`,
}))``;

const HoverContent = styled.div.attrs(() => ({
  className: `text-white my-auto`,
}))``;

function Search({ routeData }) {
  const searchKeyword = routeData;
  const { isLoading, data } = useFetch(
    `${searchEndpoints.search}/${searchKeyword}`
  );

  if (!isLoading) {
    console.log(data);
  }

  return (
    <Container className="mt3">
      <Row>
        <Col className="tc">
          <Headers>Images by Title</Headers>
        </Col>
      </Row>
      <Row className="mt3">
        {isLoading
          ? ""
          : data.imageResponse.imagesByTitle.searchHits.map((item, key) => {
              return (
                <Col className="tc pointer" key={key}>
                  <ImageOverlay
                    className="mw5"
                    src={Dexter}
                    description={
                      <Hover>
                        <HoverContent>
                          <p className="f3">{item.content.title}</p>
                        </HoverContent>
                        <HoverContent>{item.content.description}</HoverContent>
                        {/* <HoverContent>User</HoverContent> */}
                      </Hover>
                    }
                  />
                </Col>
              );
            })}
      </Row>
      <Row>
        <Col className="tc">
          <Headers>Images by Description</Headers>
        </Col>
      </Row>
      <Row className="mt3">
        {isLoading
          ? ""
          : data.imageResponse.imagesByDescription.searchHits.map(
              (item, key) => {
                return (
                  <Col className="tc pointer" key={key}>
                    <ImageOverlay
                      className="mw5"
                      src={Dexter}
                      description={
                        <Hover>
                          <HoverContent>
                            <p className="f3">{item.content.title}</p>
                          </HoverContent>
                          <HoverContent>
                            {item.content.description}
                          </HoverContent>
                          {/* <HoverContent>User</HoverContent> */}
                        </Hover>
                      }
                    />
                  </Col>
                );
              }
            )}
      </Row>
      <Row>
        <Col className="tc mt5">
          <Headers>Users</Headers>
        </Col>
      </Row>
      <Row className="">
        {isLoading
          ? ""
          : data.userResponse.users.searchHits.map((item, key) => {
              return (
                <Col className="tc" key={key}>
                  <UserContainer>
                    <FaUser size={100}></FaUser>
                    <Username>{item.content.username}</Username>
                  </UserContainer>

                  {/* <Card>

                    <Card.Title className="avenir fw3">Dexter</Card.Title>
                  </Card> */}
                </Col>
              );
            })}
      </Row>
    </Container>
  );
}

export default Search;
