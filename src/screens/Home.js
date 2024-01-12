import React, { useEffect, useState } from "react";
import pakflag from "../pakflag.webp";
const Home = () => {
  const [score, setScore] = useState([]);

  useEffect(() => {
    const apicall = async () => {
      let url =
        "https://api.cricapi.com/v1/cricScore?apikey=c67edf15-64d3-4e2d-93ad-e5fc1e7cb377&offset=0";
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setScore(data);
    };
    apicall();
  }, []);
function result (list) {
return (
  <>
  <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            padding: "1rem 2rem 1rem 1rem",
            borderBottom: "0.5px solid lightgray",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={list.t1img}
                alt="status"
                style={{ width: "2.5rem" }}
              />
            </div>
            <div>
              <h4>{list.t1}</h4>
              <span>{list.t2}</span>
            </div>
          </div>
          <div>
            <span>{list.status}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{list.t1s}</span>
            <span>{list.t2s}</span>
          </div>
        </div>
  </>
)
}
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
        {score.map(result())}
       {/* <div
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
            alignItems:"center",
            padding: "1rem 2rem 1rem 1rem",
            borderBottom: "0.5px solid lightgray",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={score.data[0].t1img}
                alt="status"
                style={{ width: "2.5rem" }}
              />
            </div>
            <div>
              <h4>{score.data[0].t1}</h4>
              <span>{score.data[0].t2}</span>
            </div>
          </div>
          <div>
            <span>{score.data[0].status}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{score.data[0].t1s}</span>
            <span>{score.data[0].t2s}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem 1rem 1rem",
            borderBottom: "0.5px solid lightgray",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={score.data[2].t1img}
                alt="status"
                style={{ width: "2.5rem" }}
              />
            </div>
            <div>
              <h4>{score.data[2].t1}</h4>
              <span>{score.data[2].t2}</span>
            </div>
          </div>
          <div>
            <span>{score.data[2].status}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{score.data[2].t1s}</span>
            <span>{score.data[2].t2s}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem 1rem 1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={score.data[3].t1img}
                alt="status"
                style={{ width: "2.5rem" }}
              />
            </div>
            <div>
              <h4>{score.data[3].t1}</h4>
              <span>{score.data[3].t2}</span>
            </div>
          </div>
          <div>
            <span>{score.data[3].status}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{score.data[3].t1s}</span>
            <span>{score.data[3].t2s}</span>
          </div>
        </div> */}
        
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

export default Home;
