import React, { Component } from "react";
import * as COLORS from "../../styles/colors";
import "./style.css";
// import Post from "../../components/post";
import Footer from "../../components/footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container text-center my-5 mt-lg-5">
          <div className="row">
            <div className="col-12 col-md-1 col-lg-2"></div>
            <div className="col-12 col-md-10 col-lg-8">
              <h1
                className="display-4 text-primary align-items-center"
                style={{ fontFamilly: "Roboto, sans-serif" }}
              >
                <span role="img" aria-label="Hello">
                  👋
                </span>
                , I'm Amono
                {/* <span
              class="iconify"
              data-icon="feather:terminal"
              data-inline="false"
            ></span> */}
              </h1>
              {/* <h5>Call me mono57</h5> */}
              <p
                className="mt-5"
                style={{
                  fontSize: "18px",
                  fontFamily: "Roboto, sans-serif",
                  color: COLORS.GRAY_LIGHT
                }}
              >
                <span className="text-uppercase font-weight-bold">
                  Software developer | Freelance | Python Trainer | Entrepreneur
                </span>
                <br />
                <br />
                I write somethings about Django, React, React Native, Iot,
                Electronics and soo more... <br />
                Check my Medium posts or my opensources github repositories to
                know more about me. <br /> <br />
                To hire me, Let me a text message on{" "}
                <a href="https://twitter.com/mono57_"> Twitter !</a>
              </p>
              <p className="mt-5" style={{ textAlign: "center" }}>
                <a href="https://github.com/mono57">
                  <span
                    class="iconify mr-5"
                    style={{ fontSize: "30px" }}
                    data-icon="cib:github"
                    data-inline="false"
                  ></span>
                </a>

                <a href="https://twitter.com/mono57_">
                  <span
                    class="iconify mr-5"
                    style={{ fontSize: "30px" }}
                    data-icon="logos:twitter"
                    data-inline="false"
                  ></span>
                </a>

                <a href="https://medium.com/@mono57">
                  <span
                    class="iconify"
                    style={{ fontSize: "30px" }}
                    data-icon="cib:medium-m"
                    data-inline="false"
                  ></span>
                </a>
              </p>

              <div style={{ marginTop: "4rem" }} className="text-center">
                <a
                  href="https://medium.com/@mono57"
                  className="btn btn-outline-primary m-2"
                >
                  Posts
                </a>
                <a
                  href="https://github.com/mono57"
                  className="btn btn-outline-primary  m-2"
                >
                  OpenSources Projects
                </a>
                {/* <a href="https://medium.com/@mono57" className="btn btn-outline-primary m-2">Skills</a> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
