import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const HomeScreen = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID="5" title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
};

export default HomeScreen;
