import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "../ReactJS-Task-11/ProfileCard";
import Spinnerr from "../ReactJS-Task-11/Spinner";

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Not required anymore for button-based selection but kept for decrement
      product: null,
    };
  }

  fetchProduct = (id) => {
    this.setState({ product: null });  // Show loader while fetching
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.error(err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count changed, but product fetching is manual now.");
    }
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        <center>
          <div style={{ marginBottom: "20px" }}>
            {Array.from({ length: 10 }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => this.fetchProduct(index + 1)}
                style={{
                  margin: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </center>
        <center>
          {product ? (
            <ProfileCard
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ) : (
            <Spinnerr />
          )}
        </center>
      </div>
    );
  }
}

export default Updating;
