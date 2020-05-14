import React, { Component } from "react";
import { Map } from "react-amap";
import Header from "../../components/Header";

export default class Maps extends Component<any> {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }
  render() {
    let mapCenter = { longitude: 120, latitude: 30 };
    return (
      <>
        <Header>Hello World {this.props.userAgent}</Header>
        <div id="amap" style={{ width: "100%", height: "95.9vh" }}>
          <Map zoom={5} center={mapCenter}></Map>
        </div>
      </>
    );
  }
}
