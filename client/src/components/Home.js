import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state={
    fname:'',
    lname:'',
    hobby:'',
    mylist:[]
  }

componentDidMount(){
   this.getUpdatedData();
  }

  getUpdatedData=()=>{
    axios.get(`/home`)
    .then(res => {
      const mylist = res.data;
     this.setState({ mylist });
    })
  }

  handleSubmit =(e)=>{
    e.preventDefault();
    var data = new URLSearchParams();
    for (const pair of new FormData(e.target)) {
        if(pair[1]){
            data.append(pair[0], pair[1])
        }
        else{
            return
        }
    }
    fetch("/sent", {
            method: "post",
            body: data,
        }).then(res => res.json())
        .then(res2 => {
          this.setState({
            mywishes:[...this.state.mywishes, res2.data]})
        });
        this.getUpdatedData();
  }

  deleteMe=(item)=>{
     console.log(item)
     fetch(`/remove/${item}`, 
     {
        method: "delete"
    });
    this.getUpdatedData();
  }

  render() {
    return (
      <>
        <div className="row">
          <form className="col s12" onSubmit={(e)=>this.handleSubmit(e)}>
              <div className="row">
                <div className="col s11">
                    <div className="input-field col s4">
                        <input id="icon_prefix" type="text"
                        value={this.state.text}
                        onChange={(e)=>this.setState({fname:e.target.value})}
                        name="fname" className="validate" />
                        <label>First Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="icon_prefix" type="text"
                        value={this.state.text}
                        onChange={(e)=>this.setState({lname:e.target.value})}
                        name="lname" className="validate" />
                        <label>Last Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="icon_prefix" type="text"
                        value={this.state.text}
                        onChange={(e)=>this.setState({hobby:e.target.value})}
                        name="hobby" className="validate" />
                        <label>I like</label>
                    </div>
                  </div>

                  <div className="input-field col s1">
                      <button className="btn waves-effect waves-light" type="submit" name="action">Add
                      </button>
                  </div>
                  </div>
              </form>
          </div>

           <div className="row">
             {this.state.mylist.map(item=>(
                <div className="col s12 m4" key={item._id}>
                    <div className="card blue-grey darken-2">
                        <div className="card-content white-text">
                            <h3>{item.fname} {item.lname}</h3>
                            <h5>I like <b className="red"> { item.hobby } </b>.</h5>
                            <p>Collections allow you to group list objects together.</p>
                        </div>
                        <div className="card-action">
                            <a className="link waves-effect waves-dark">Update Item</a>
                            <a onClick={(e)=>this.deleteMe(item._id)}  className="link waves-effect waves-dark">Delete Item</a>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    </>
    );
  }}

export default Home;
