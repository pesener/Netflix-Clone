import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const HomeScreen = () => {
  return (
    <div>
      <Main />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
};

export default HomeScreen;
