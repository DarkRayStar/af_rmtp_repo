import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Message extends React.Component {
  render() {
    return <p style={{ color: 'red' }}>
      Seems you are currently not belongs to any group.First, Submit a group according to register the research topic.
    </p>;
  }
}

class Message2 extends React.Component {
  render() {
    return <p style={{ color: 'red' }}>
      Research topic is not accepted yet.
    </p>;
  }
}


export default class studentHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // groups: [],
      topics: [],
      stdid: 'Thar',
      grp: 'Warriors',
      flag: '0',
      flagcosup: '0',
      component: '',
      component2: '',
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/groups/')
    //   .then(response => {
    //     this.setState({ groups: response.data })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    axios.get('http://localhost:5000/supervisor/topic')
      .then(response => {
        this.setState({ topics: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    // console.log('mount',this.state.topics)
    console.log('mount =>', this.state.flagcosup)

  }

  componentDidUpdate() {

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
        if (this.state.topics[i].state === 'Accepted') {
          this.state.flagcosup = '1'
        }
      }
    }

    console.log('update =>', this.state.flagcosup)
  }

  RegTopic() {
    // if (this.state.flag === '1') {
    //   console.log("Done")
    //   this.setState({
    //     component: <Message />
    //   })
    // } else {
    window.location = '/reg-topic'
    // }
  }

  ReqCosup() {
    if (this.state.flagcosup === '1') {
      window.location = '/req-cosupervisor'
    } else {
      this.setState({
        component2: <Message2 />
      })
    }
  }

  submitDoc() {
    window.location = '/stu-submission1'
  }

  RegGroup() {
    window.location = '//add-group'
  }

  render() {

    return (
      <div className='container'>

        <center><h2> STUDENT HOME </h2> </center>

        <div className=''>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-3 col-md-auto'>
                <button style={{ width:'300px', margin:'10px'}} onClick={this.RegGroup.bind(this)} type="button" class="btn btn-secondary col-16"> Submit the student group </button>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-3 col-md-auto'>
                <button style={{ width:'300px', margin:'10px'}} onClick={this.RegTopic.bind(this)} type="button" class="btn btn-success "> Register the research topic </button>
                {this.state.component}
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-3 col-md-auto'>
                <button style={{ width:'300px', margin:'10px'}} type="button" onClick={this.ReqCosup.bind(this)} class="btn btn-danger"> Request Co-Supervisor  </button>
                {this.state.component2}
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-3 col-md-auto'>
                <button style={{ width:'300px', margin:'10px'}} onClick={this.submitDoc.bind(this)} type="button" class="btn btn-warning"> Submit documents </button>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-3 col-md-auto'>
                <button style={{ width:'300px', margin:'10px'}} type="button" class="btn btn-success btn-info"> Download templates </button><br></br>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
