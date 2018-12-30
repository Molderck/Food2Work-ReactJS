import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              Search recipes with{" "}
              <strong className="text-danger">Food2Work</strong>
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                type recipes separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Chicken, onion, carrots"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
