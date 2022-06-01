import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import profileIcon from "../userManagement-components/images/profileicon.png";

class Message extends React.Component {
  render() {
    return (
      <p style={{ color: "red" }}>
        Seems you are currently not belongs to any group.First, Submit a group
        according to register the research topic.
      </p>
    );
  }
}

class Message2 extends React.Component {
  render() {
    return <p style={{ color: "red" }}>Research topic is not accepted yet.</p>;
  }
}

export default class studentHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // groups: [],
      topics: [],
      stdid: "Thar",
      grp: "",
      status: "",
      flag: "0",
      flagcosup: "0",
      component: "",
      component2: "",
      loggedUser: [],
      groupDetails: [],
    };
  }

  async componentDidMount() {
    // axios.get('http://localhost:5000/groups/')
    //   .then(response => {
    //     this.setState({ groups: response.data })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    //get the user details from the session
    this.state.loggedUser = JSON.parse(sessionStorage.getItem("loggeduser"));

    const student = {
      stdID: this.state.loggedUser.stdID,
    };

    console.log("aaa", student.stdID);

    //get the group details according to the user
    await axios
      .post("http://localhost:5000/groups/loggedUser", student)
      .then((response) => {
        // if (response.data.user.groupname){
        this.setState({ grp: response.data.user.groupname });
        // }else {
        // alert('User does not have a group');
        // }
      })
      .catch((error) => {
        console.log(error);
      });
    window.sessionStorage.setItem("group", this.state.grp);
    console.log("groupMount => ", this.state.grp);

    //   const group1 = {
    //     groupname: this.state.grp,
    //     a: 'a'
    // }

    // console.log('A => ', this.state.group1.groupname);

    // get the topic details according to the group
    // await axios.post('http://localhost:5000/groups/loggedUserGroup', group1)
    // .then(response => {
    //   this.setState({ status: response.data.topic.state })
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // console.log('topic => ', this.state.status);

    //get all the topics
    axios
      .get("http://localhost:5000/supervisor/topic")
      .then((response) => {
        this.setState({ topics: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    // const group = this.state.grp
    // console.log('groupname => ', this.state.grp);

    //checking the group is accepted or not
    // for (var i = 0; i < this.state.groups.length; i++) {
    //   // console.log('i ', this.state.groups[i].status)
    //   if (this.state.groups[i].groupleader === this.state.stdid) {
    //     if (this.state.groups[i].status === 'Pending' || this.state.groups[i].status === 'Rejected') {
    //       // this.state.mygroup.push(this.state.groups[i]);
    //       this.state.flag = '1'
    //     }
    //   }
    // }

    // checking the researchTopic Acceptance
    for (var i = 0; i < this.state.topics.length; i++) {
      // console.log('i ', this.state.groups[i].status)
      if (this.state.topics[i].groupName === this.state.grp) {
        if (this.state.topics[i].state === "Accepted") {
          this.state.flagcosup = "1";
        } else if (this.state.topics[i].state === "Rejected") {
          this.state.flagcosup = "2";
        }
      }
    }

    console.log("update =>", this.state.flagcosup);
  }

  RegTopic() {
    if (this.state.flagcosup === "2") {
      alert("Your topic is Rejected.Register a new Topic.");
      this.props.history.push('/reg-topic');
    } else if (this.state.flagcosup === "1"){
      alert("Your topic is already Accepted");
    }else {
      // window.location = '/reg-topic'
      this.props.history.push("/reg-topic");
    }
  }

  ReqCosup() {
    if (this.state.flagcosup === "1") {
      window.location = "/req-cosupervisor";
    } else {
      this.setState({
        component2: <Message2 />,
      });
    }
  }

  submitDoc() {
    if (this.state.flagcosup === "2") {
      alert("Your topic is Rejected.");
    } else if (this.state.flagcosup === "0"){
      alert("Your topic is not yet accepted");
    }else {
      // window.location = '/reg-topic'
      this.props.history.push("/stu-submission1");
    }
  }

  RegGroup() {
    if (this.state.grp) {
      alert("You already registered for a group");
    } else {
      window.location = "/add-group";
    }
  }

  render() {
    return (
      <div className="container">
        <center>
          <h2> STUDENT HOME </h2>{" "}
        </center>

        {/* navigate to the student profile */}
        <Link
          to={"/student-profile/" + this.state.loggedUser._id}
          className="nav-link"
        >
          {" "}
          <img
            style={{ width: "40px", height: "40px" }}
            src={profileIcon}
          ></img>
        </Link>

        <div className="">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3 col-md-auto">
                <button
                  style={{ width: "300px", margin: "10px" }}
                  onClick={this.RegGroup.bind(this)}
                  type="button"
                  class="btn btn-secondary col-16"
                >
                  {" "}
                  Submit the student group{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3 col-md-auto">
                <button
                  style={{ width: "300px", margin: "10px" }}
                  onClick={this.RegTopic.bind(this)}
                  type="button"
                  class="btn btn-success "
                >
                  {" "}
                  Register the research topic{" "}
                </button>
                {this.state.component}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3 col-md-auto">
                <button
                  style={{ width: "300px", margin: "10px" }}
                  type="button"
                  onClick={this.ReqCosup.bind(this)}
                  class="btn btn-danger"
                >
                  {" "}
                  Request Co-Supervisor{" "}
                </button>
                {this.state.component2}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3 col-md-auto">
                <button
                  style={{ width: "300px", margin: "10px" }}
                  onClick={this.submitDoc.bind(this)}
                  type="button"
                  class="btn btn-warning"
                >
                  {" "}
                  Submit documents{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3 col-md-auto">
                <button
                  style={{ width: "300px", margin: "10px" }}
                  type="button"
                  class="btn btn-success btn-info"
                >
                  {" "}
                  Download templates{" "}
                </button>
                <br></br>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3 col-md-auto">
                <button
                  style={{ width: "300px", margin: "10px" }}
                  type="button"
                  class="btn btn-success btn-info"
                >
                  {" "}
                  Download Marking Schemes{" "}
                </button>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
