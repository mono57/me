import React, { Component } from "react";
import "./style.css";
import Post from "../../components/post";
import Footer from "../../components/footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container padding text-center">
          <h1
            className="display-3 text-primary align-items-center"
            style={{ fontFamilly: "Roboto, sans-serif" }}
          >
            Hi, I'm AMONO{" "}
            <span
              class="iconify"
              data-icon="feather:terminal"
              data-inline="false"
            ></span>
          </h1>
          <p
            className="mt-5 lead"
            style={{ fontSize: "18px", fontFamily: "Roboto, sans-serif" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            ducimus eos dolore? Incidunt odio explicabo illum quasi numquam
            facere.
          </p>
          <p className="mt-5" style={{ textAlign: "center" }}>
            <span
              class="iconify mr-5"
              style={{ fontSize: "30px" }}
              data-icon="cib:github"
              data-inline="false"
            ></span>

            <span
              class="iconify mr-5"
              style={{ fontSize: "30px" }}
              data-icon="logos:twitter"
              data-inline="false"
            ></span>
            <span
              class="iconify"
              style={{ fontSize: "30px" }}
              data-icon="cib:medium-m"
              data-inline="false"
            ></span>
          </p>

          <div style={{ marginTop: "4rem" }} className="text-center">
            <button className="btn btn-outline-primary mr-4">Posts</button>
            <button className="btn btn-outline-primary  mr-4">Projects</button>
            <button className="btn btn-outline-primary mr-4">Skills</button>
          </div>

          <hr style={{ margin: "5rem 0 5rem 0" }} className="text-primary" />

          <div
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h3>Medium: Recents Posts</h3>

            <Post />
            <Post />

            <p className="mt-5">
              <span
                class="iconify"
                style={{ fontSize: "30px" }}
                data-icon="ic:round-expand-more"
                data-inline="false"
              ></span>
            </p>
          </div>
        </div>

            <Footer />

      </React.Fragment>
    );
  }
}

export default Home;
