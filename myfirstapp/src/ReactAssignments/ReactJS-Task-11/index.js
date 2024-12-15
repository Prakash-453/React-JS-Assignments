import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import Spinnerr from "./Spinner";
import axios from "axios";

class DataLoading extends Component {
  constructor() {
    super();
    this.state = { products: [], Loading: true };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({
        products: res.data,
        Loading: false,
      });
    });
  }

  render() {
    const { products, Loading } = this.state;
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {Loading ? (
            <Spinnerr />
          ) : (
            products.map((a, b) => {
              return (
                <ProfileCard
                  title={a.title}
                  description={a.description}
                  image={a.image}
                  category={a.category}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default DataLoading;
