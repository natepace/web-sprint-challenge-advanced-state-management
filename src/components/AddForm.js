import React, { useState } from 'react';
import { fetchSmurfs, addSmurf, errorMessage } from '../actions/index';
import { connect } from 'react-redux';
class AddForm extends React.Component {
    // const [state, setState] = useState({
    //     name:"",
    //     position:"",
    //     nickname:"",
    //     description:""
    // });
    constructor(props){
        super(props)
        this.state={
            name:'',
            position:'',
            nickname:'',
            description:'',

        }
    }
    
    // componentDidMount(){
    //     this.props.fetchSmurfs
    // }

    handleChange = e => {
        this.setState({...this.state,
        [e.target.name]:e.target.value
        })
    }

     handleSubmit = e => {
        e.preventDefault();
        const newSmurf = {...this.state}
        this.props.addSmurf(newSmurf);
        this.setState({...this.state,
            name:'',
            position:'',
            nickname:'',
            description:'',
        })
    }

   
render(){
    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={this.handleChange} value={this.state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={this.handleChange} value={this.state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={this.handleChange} value={this.state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={this.handleChange} value={this.state.description} name="description" id="description" />
            </div>
            {/* {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>

            } */}
              {this.state.name === ""?  <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error[0]}</div> : ""}
                {this.state.nickname === ""?  <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error[1]}</div> : ""}
                {this.state.position === ""?  <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error[2]}</div> : ""}
            <button>Submit Smurf</button>
        </form>
    </section>);
}
}
const mapStateToProps = (state) => {
  return{
    smurfs: state.smurfs,
    isLoading:state.isLoading,
    error:state.error,
}
}

export default connect(mapStateToProps, { addSmurf, fetchSmurfs, errorMessage })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.