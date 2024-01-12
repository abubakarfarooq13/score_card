import React, { useEffect, useState } from "react";
import pakflag from "../pakflag.webp";
const Card2 = () => {
  const [score, setScore] = useState([]);

  useEffect(() => {
    const apicall = async () => {
      let url =
        "https://api.cricapi.com/v1/currentMatches?apikey=c67edf15-64d3-4e2d-93ad-e5fc1e7cb377&offset=0";
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setScore(data);
    };
    apicall();
  }, []);

  return (
    <div>
      <div
        className="cardContainer"
        style={{
          backgroundColor: "#fff",
          margin: "0.5rem",
          border: "0.5px solid lightgray",
          borderRadius: "0.3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src={pakflag} alt="flag" style={{ width: "2.5rem" }} />
            <span>Pakistan</span> - <span>League</span>
          </div>
          <span
            style={{ color: "#059e07", fontWeight: "500", fontSize: "1.5rem" }}
          >
            ☆
          </span>
        </div>

         <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem 1rem 1rem",
            borderBottom: "0.5px solid lightgray",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={score.data[0].teamInfo[0].img}
                alt="status"
                style={{ width: "2.5rem" }}
              />
            </div>
            <div>
              <h4>{score.data[0].teamInfo[0].name}</h4>
              <span>{score.data[0].teamInfo[1].name}</span>
            </div>
          </div>
          <div>
            <span>{score.data[0].status}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <h4>
                {score.data[0].score[0].r}/{score.data[0].score[0].w}
              </h4>
              <span>{score.data[0].score[0].o}</span>
            </div>
            <div>
              <h4>
                {score.data[0].score[1].r}/{score.data[0].score[1].w}
              </h4>
              <span>{score.data[0].score[1].o}</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem 1rem 1rem",
            borderBottom: "0.5px solid lightgray",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={score.data[1].teamInfo[0].img}
                alt="status"
                style={{ width: "2.5rem" }}
              />
            </div>
            <div>
              <h4>{score.data[1].teamInfo[0].name}</h4>
              <span>{score.data[1].teamInfo[1].name}</span>
            </div>
          </div>
          <div>
            <span>{score.data[1].status}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <h4>
                {score.data[1].score[0].r}/{score.data[1].score[0].w}
              </h4>
              <span>{score.data[1].score[0].o}</span>
            </div>
            <div>
              <h4>
                {score.data[1].score[1].r}/{score.data[1].score[1].w}
              </h4>
              <span>{score.data[1].score[1].o}</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem 1rem 1rem",
            borderBottom: "0.5px solid lightgray",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={score.data[2].teamInfo[0].img}
                alt="status"
                style={{ width: "2.5rem" }}
              />
            </div>
            <div>
              <h4>{score.data[2].teamInfo[0].name}</h4>
              <span>{score.data[2].teamInfo[1].name}</span>
            </div>
          </div>
          <div>
            <span>{score.data[2].status}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <h4>
                {score.data[2].score[0].r}/{score.data[2].score[0].w}
              </h4>
              <span>{score.data[2].score[0].o}</span>
            </div>
            <div>
              <h4>
                {score.data[2].score[1].r}/{score.data[2].score[1].w}
              </h4>
              <span>{score.data[2].score[1].o}</span>
            </div>
          </div>
        </div> 
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "2rem",
          marginTop: "-0.5rem",
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            border: "1px solid lightgray",
            padding: "0.4rem",
            color: "#059e07",
            fontWeight: "600",
            height: "2.5rem",
          }}
        >
          See the competition
        </span>
      </div>
      </div>
    </div>
  );
};

export default Card2;
