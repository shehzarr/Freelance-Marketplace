import React, { Component } from "react";
import "./component2.css";
import "bootstrap/dist/css/bootstrap.css";
import guru from "./Images/guru.png";
import down from "./Images/down.svg";
import category from "./Images/category.svg";
import search from "./Images/search.svg";
import location from "./Images/location.png";
import filtr from "./Images/filtr.png";

class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      isExpandedFilter: false,
      isExpandedLocation: false,
      category: "Any Category",
      SelectedCategory: "",
      Location: "Any Location",
      SelectedLocation: "",
      Earning: 0,
      EarningSelected: 0,
      Invoices: 0,
      InvoicesSelected: 0,
      Employeers: 0,
      EmployeersSelected: 0,
      Largest: 0,
      LargestSelected: 0,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeFilterEarning = this.onChangeFilterEarning.bind(this);
    this.onChangeFilterEmployeers = this.onChangeFilterEmployeers.bind(this);
    this.onChangeFilterInvoices = this.onChangeFilterInvoices.bind(this);
    this.onChangeFilterLargest = this.onChangeFilterLargest.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
    var x = event.target.value;

    this.setState({
      category: x,
    });

    if (x == "Any Category") {
      this.setState(
        {
          SelectedCategory: " ",
        },
        () => {
          console.log(this.state.SelectedCategory);
        }
      );
    } else {
      this.setState(
        {
          SelectedCategory: x,
        },
        () => {
          console.log(this.state.SelectedCategory);
        }
      );
    }
  }

  onChangeLocation(event) {
    console.log("Event Value Location =", event.target.value);
    var x1 = event.target.value;

    this.setState({
      Location: x1,
    });

    if (x1 == "Any Location") {
      this.setState(
        {
          SelectedLocation: " ",
        },
        () => {
          console.log(this.state.SelectedLocation);
        }
      );
    } else {
      this.setState(
        {
          SelectedLocation: x1,
        },
        () => {
          console.log(this.state.SelectedLocation);
        }
      );
    }
  }

  onChangeFilterEarning(event) {
    console.log("Event Value Earning =", event.target.value);
    var x2 = event.target.value;

    this.setState({
      Earning: x2,
    });

    if (x2 == 0) {
      this.setState(
        {
          SelectedEarning: 0,
        },
        () => {
          console.log(this.state.SelectedEarning);
        }
      );
    } else {
      this.setState(
        {
          SelectedEarning: x2,
        },
        () => {
          console.log(this.state.SelectedEarning);
        }
      );
    }
  }

  onChangeFilterEmployeers(event) {
    console.log("Event Value Employeers =", event.target.value);
    var x3 = event.target.value;

    this.setState({
      Employeers: x3,
    });

    if (x3 == 0) {
      this.setState(
        {
          SelectedEmployeers: 0,
        },
        () => {
          console.log(this.state.SelectedEmployeers);
        }
      );
    } else {
      this.setState(
        {
          SelectedEmployeers: x3,
        },
        () => {
          console.log(this.state.SelectedEmployeers);
        }
      );
    }
  }

  onChangeFilterInvoices(event) {
    console.log("Event Value Invoices =", event.target.value);
    var x4 = event.target.value;

    this.setState({
      Invoices: x4,
    });

    if (x4 == 0) {
      this.setState(
        {
          SelectedInvoices: 0,
        },
        () => {
          console.log(this.state.SelectedInvoices);
        }
      );
    } else {
      this.setState(
        {
          SelectedInvoices: x4,
        },
        () => {
          console.log(this.state.SelectedInvoices);
        }
      );
    }
  }

  onChangeFilterLargest(event) {
    console.log("Event Value Invoices =", event.target.value);
    var x5 = event.target.value;

    this.setState({
      Largest: x5,
    });

    if (x5 == 0) {
      this.setState(
        {
          SelectedLargest: 0,
        },
        () => {
          console.log(this.state.SelectedLargest);
        }
      );
    } else {
      this.setState(
        {
          SelectedLargest: x5,
        },
        () => {
          console.log(this.state.SelectedLargest);
        }
      );
    }
  }

  handleToggle(e) {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  handleToggleFilter(e) {
    this.setState({
      isExpandedFilter: !this.state.isExpandedFilter,
    });
  }

  handleToggleLocation(e) {
    this.setState({
      isExpandedLocation: !this.state.isExpandedLocation,
    });
  }

  onTrigger = (event) => {
    console.log("Category Child = ", this.state.SelectedCategory);
    this.props.parentCallBack(this.state.SelectedCategory);
    event.preventDefault();
  };

  onTriggerLocation = (event) => {
    console.log("Location Child = ", this.state.SelectedLocation);
    this.props.parentLocationCallBack(this.state.SelectedLocation);
    event.preventDefault();
  };

  onTriggerFilterAll = (event) => {
    //console.log("Employeer in Trigger = ",this.state.EmployeersSelected);
    this.props.parentFilterCallBack(
      this.state.Earning,
      this.state.Employeers,
      this.state.Invoices,
      this.state.Largest
    );
    event.preventDefault();
  };

  render() {
    const { isExpanded } = this.state;
    const { isExpandedFilter } = this.state;
    const { isExpandedLocation } = this.state;
    return (
      <div>
        <div style={{backgroundColor: "#f5f5f5"}} className="container-fluid" >


<nav className="navbar navbar-default" style={{backgroundColor: "#f5f5f5", borderLeftColor: "#f5f5f5", borderRightColor: "#f5f5f5"}}>
    <div className="container">
        <div className="navbar-header">
            <img className="main-logo" src={guru} alt="main-logo"></img>
        </div>
        <form className="navbar-form navbar-left" action="/action_page.php">
            <div className="form-group">
                <input style={{backgroundColor: "#fafafa", borderColor: "#fafafa"}}  className="search-input" type="text" placeholder=" Search Jobs" name="search"></input>
            </div>
            <button style={{backgroundColor: "#fafafa"}} type="submit " className="btn btn-default "><span className="glyphicon glyphicon-search "></span></button>
        </form>
        <div className="dropdown ">
            <button className="dropbtn "><i style={{fontSize: "12px"}} className="fa ">&#xf03e;</i> <i className="fa fa-caret-down "></i></button>
            <button className="dropbtn "><i style={{fontSize: "12px"}} className="fa ">&#xf0a2;</i> <i className="fa fa-caret-down "></i></button>
            <button className="dropbtn "><i style={{fontSize: "11px"}} className="material-icons ">&#xe0cb; </i> <i className="fa fa-caret-down "></i></button>
        </div>

    </div>
</nav>

<div className="container ">
    <ul className="nav nav-tabs">
        <li><a href="/some/valid/uri">Dashboard</a></li>
        <li className="active"><a href="/some/valid/uri">Find Work</a></li>
        <li><a href="/some/valid/uri">Jobs</a></li>
        <li><a href="/some/valid/uri">Payment</a></li>
    </ul>
</div>
</div>
<div className="container-fluid">
<div className="container">
    <ul className="nav nav-tabs">
        <li><a href="/some/valid/uri">Find a Job</a></li>
        <li><a href="/some/valid/uri">Leads</a></li>
        <li><a href="/some/valid/uri">Quotes</a></li>
        <li><a href="/some/valid/uri">Freelance Listings</a></li>
        <li><a href="/some/valid/uri">My Employers</a></li>
    </ul>
<br></br>
    <strong style={{fontSize: "20px"}}>Browse Freelancer Listings</strong>
    <p>We found 270,936 Freelancers offering 572,620 freelancing services online.</p><br></br>
</div>
</div>


        {/* Filter Layout */}
        <div className="container">
          <div className="FilterLayout">
            <div className="InputDiv">
              <div className="DropdownCategory1">
                <button
                  className="CategoryButton"
                  onClick={(e) => this.handleToggle(e)}
                >
                  <img className="CategoryLogo" src={category} alt=" "></img>
                  <strong className="CategoryText">
                    {this.state.category}
                  </strong>
                  <img className="Arrow1" src={down} alt=" "></img>
                </button>

                {/* Drop down category */}
                <div
                  className={`DropdownCategory ${
                    isExpanded ? "" : "HiddenClass"
                  }`}
                >
                  <div className="DropdownCategoryWrap">
                    <div className="DropdownComboBox">
                      <div className="CategoryFilter">
                        <div className="CategoryFilterGroup">
                          <div>
                            <div>
                              <p className="Expand">Select a Category</p>
                            </div>
                            <div className="ExpandableControls">
                              <div>
                                <ul
                                  className="ModuleList NoBorder Tighter"
                                  onChange={this.onChangeValue}
                                >
                                  <li>
                                    <input
                                      type="radio"
                                      name="Category"
                                      value="Any Category"
                                    ></input>
                                    <label className="StyleCategory">
                                      &nbsp; Any Category
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      name="Category"
                                      value="Web Development"
                                    ></input>
                                    <label className="StyleCategory">
                                      &nbsp; Web Development
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      type="radio"
                                      name="Category"
                                      value="Algorithm"
                                    ></input>
                                    <label className="StyleCategory">
                                      &nbsp; Algorithm
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="RespDropdrownAction">
                    <button className="ModuleBtn2" onClick={this.onTrigger}>
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <span className="InputGroup">
                <label className="TypeHead">
                  <div className="TypeHeadContainer">
                    <div className="TypeHeadContainerInput">
                      <span className="Search">Search Freelancers</span>
                    </div>
                  </div>
                </label>
              </span>

              <span className="InputClassBtn">
                <button className="SearchBtn">
                  <img
                    className="SearchBtnLogo"
                    src={search}
                    alt="
                  "
                  ></img>
                </button>
              </span>
            </div>

            <div className="DropdownLocation">
              <button
                className="LocationBtn"
                onClick={(e) => this.handleToggleLocation(e)}
              >
                <img className="LocationLogo" src={location} alt=" "></img>
                <span>Location</span>
                <img className="Arrow1" src={down} alt=" "></img>
              </button>

              {/* Filter for Loaction dropdown */}
              <div
                className={`dropdowncheck ${
                  isExpandedLocation ? "" : "HiddenClass"
                }`}
              >
                <div className="DropDownFilterWrapper">
                  <div className="RespDropdownContent">
                    <div className="FilterGroup">
                      {/* 1st column */}
                      <div className="FilterGroupFifths">
                        <div>
                          <div className="ExpandableToggle">
                            <p className="FilterGroupHeading">Location</p>
                          </div>
                          <div className="ExapandableControl">
                            <div>
                              <ul
                                className="ModuleListFilter"
                                onChange={this.onChangeLocation}
                              >
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Location"
                                    value="Any Location"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Any</label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Location"
                                    value="Chennai"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>
                                    &nbsp; &nbsp;Chennai, Tamil Nadu, India
                                    (25,115){" "}
                                  </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Location"
                                    value="Bangalore"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>
                                    &nbsp; &nbsp;Bangalore, Karnataka, India
                                    (18,420){" "}
                                  </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Location"
                                    value="Puna"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>
                                    &nbsp; &nbsp;Pune, Maharashtra, India
                                    (23,190)
                                  </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Location"
                                    value="Lahore"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>
                                    &nbsp; &nbsp;Lahore, Punjab, Pakistan
                                    (27,127)
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="RespDropdownAction">
                    <button type="button" className="LinkBtnFilter">
                      Clear All
                    </button>
                    <button
                      type="button"
                      className="ModuleBtnApply"
                      onClick={this.onTriggerLocation}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="LocationBtn"
                onClick={(e) => this.handleToggleFilter(e)}
              >
                <img className="LocationLogofiltr" src={filtr} alt=" "></img>
                <span>Filters</span>
                <img className="Arrow1" src={down} alt=" "></img>
              </button>

              {/* Filter drop down box */}
              <div
                className={`DropDownFilter ${
                  isExpandedFilter ? "" : "HiddenClass"
                }`}
              >
                <div className="DropDownFilterWrapper">
                  <div className="RespDropdownContent">
                    <div className="FilterGroup">
                      {/* 1st column */}
                      <div className="FilterGroupFifths">
                        <div>
                          <div className="ExpandableToggle">
                            <p className="FilterGroupHeading">
                              All Time Earnings
                            </p>
                          </div>
                          <div className="ExapandableControl">
                            <div>
                              <ul
                                className="ModuleListFilter"
                                onChange={this.onChangeFilterEarning}
                              >
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="earning"
                                    value="0"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Any </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="earning"
                                    value="25000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above $25,000 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="earning"
                                    value="50000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above $50,000 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="earning"
                                    value="100000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above $100,000 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="earning"
                                    value="200000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;$200,000</label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 2nd column */}
                      <div className="FilterGroupFifths">
                        <div>
                          <div className="ExpandableToggle">
                            <p className="FilterGroupHeading">Employeers</p>
                          </div>
                          <div className="ExapandableControl">
                            <div>
                              <ul
                                className="ModuleListFilter"
                                onChange={this.onChangeFilterEmployeers}
                              >
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Employeers"
                                    value="0"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Any </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Employeers"
                                    value="3"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 3 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Employeers"
                                    value="7"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 7 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Employeers"
                                    value="15"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 15 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="Employeers"
                                    value="25"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 25</label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 3rd column */}
                      <div className="FilterGroupFifths">
                        <div>
                          <div className="ExpandableToggle">
                            <p className="FilterGroupHeading">Invoices Paid</p>
                          </div>
                          <div className="ExapandableControl">
                            <div>
                              <ul
                                className="ModuleListFilter"
                                onChange={this.onChangeFilterInvoices}
                              >
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="invoices"
                                    value="0"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Any </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="invoices"
                                    value="10"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 10 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="invoices"
                                    value="25"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 25 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="invoices"
                                    value="50"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 50 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="invoices"
                                    value="100"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above 100</label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 4th column */}
                      <div className="FilterGroupFifths">
                        <div>
                          <div className="ExpandableToggle">
                            <p className="FilterGroupHeading">
                              Largest Employeer
                            </p>
                          </div>
                          <div className="ExapandableControl">
                            <div>
                              <ul
                                className="ModuleListFilter"
                                onChange={this.onChangeFilterLargest}
                              >
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="largest"
                                    value="0"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Any </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="largest"
                                    value="5000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above $5000 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="largest"
                                    value="10000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above $10,000 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="largest"
                                    value="25000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above $25,000 </label>
                                </li>
                                <li className="active">
                                  <input
                                    type="radio"
                                    name="largest"
                                    value="50000"
                                    className="g-chkradio g-chkradio--radio"
                                  ></input>
                                  <label>&nbsp; &nbsp;Above $50,000</label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="RespDropdownAction">
                    <button type="button" className="LinkBtnFilter">
                      Clear All
                    </button>
                    <button
                      type="button"
                      className="ModuleBtnApply"
                      onClick={this.onTriggerFilterAll}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Component2;
