import React from "react";

import img from "../../assets/images/img.jpeg";

const Post = ({ post }) => {
  return (
    <div
      className="mt-5 text-left"
      style={{
        // height: "120px",
        width: "550px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
        // boxShadow: "3px 3px 5px 6px #000;"
      }}
    >
      <img
        src={img}
        alt=""
        style={{
          width: "200px",
          height: "120px",
          filter: "grayscale(100%)"
        }}
      />
      <a
        href=""
        style={{
          fontSize: "19px",
          fontFamilly: "Roboto",
          color: "#636363",
          margin: "1rem",
          lineHeight: "2rem"
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos?
      </a>
      {/* <div
        className="d-flex align-items-center justify-centent-center"
        style={{
          border: "1px solid #DEDEDE",
          height: "100%",
          width: "100%",
          padding: "1rem",
        }}
      > */}

      {/* </div> */}
    </div>
  );
};

export default Post;
