import React, {Component} from 'react';

class AddItem extends Component{
    state={
        name:"",
        age:""
    }

    handelChange = (e) =>{
     this.setState({
        [e.target.id]:e.target.value
     })
    }


    handelSubmit = (e) =>{
        e.preventDefault();
       if (e.target.name.value ==="") {
           return false;
       } else {
        this.props.addItem(this.state)
        this.setState({
            name:"",
            age:""
        })
       }
    }

    render(){
        return( 
            <div>
              <form onSubmit={this.handelSubmit}>
                  <input type="text" paceholder="Enter Name..." id="name" onChange={this.handelChange} value={this.state.name}/>
                  <input type="number" paceholder="Enter Name..." id="age" onChange={this.handelChange} value={this.state.age}/>
                  <input type="submit" value="Add"/>
              </form>
            </div>
        )
    }
}

export default AddItem