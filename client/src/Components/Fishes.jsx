import React, { Component } from "react";
import axios from "axios";
import FilterFishes from "./FilterFishes";
import AllFishes from "./AllFishes";
import { Route, Switch } from "react-router-dom";
import FreshWater from "./FreshWater";
import SaltWater from "./SaltWater";
import AddFish from "./AddFish";
import DeleteFish from "./DeleteFish";
import EditFish from "./EditFish";

class Fishes extends Component {
  state = {
    fishes: [],
    form: "",
  };
  componentDidMount() {
    axios.get("http://localhost:3000/fishes").then((res) => {
      let fishData = res.data;
      this.setState({ fishes: fishData });
    });
  }

  render() {
    return (
      <div className="cover">
        <div className="overlay">
          <div>
            <h1>Fishes App</h1>
            <div className="header-btn">
              <div className="form-links">
                <p
                  className="form-links-btn"
                  onClick={() => this.setState({ form: "add" })}
                >
                  Add Fish
                </p>
                <p
                  className="form-links-btn"
                  onClick={() => this.setState({ form: "edit" })}
                >
                  Edit Fish
                </p>
                <p
                  className="form-links-btn"
                  onClick={() => this.setState({ form: "delete" })}
                >
                  Delete Fish
                </p>
                <p
                  className={this.state.form === "" ? "hide" : "form-links-btn"}
                  onClick={() => this.setState({ form: "" })}
                >
                  Close
                </p>
              </div>
            </div>
          </div>
          <AddFish form={this.state.form} />
          <EditFish parentState={this.state} />
          <DeleteFish parentState={this.state} />
          <FilterFishes
            filterFishes={this.filterFishes}
            saltWater={this.saltWater}
            freshWater={this.freshWater}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <AllFishes fishes={this.state.fishes} />}
            />
            <Route
              path="/freshwater"
              component={() => <FreshWater fishes={this.state.fishes} />}
            />
            <Route
              path="/saltwater"
              component={() => <SaltWater fishes={this.state.fishes} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Fishes;
