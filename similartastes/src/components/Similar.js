import React, { Component } from 'react';
import axios from 'axios';

export default class Similar extends Component {
	constructor(props) {
        super(props);
        this.state = {
            data: [],
            item: ''
        }
    }
    
    componentDidMount(){

    }

    getData = () => {
        axios.get()
    }

    submitHandler = (e) => {
        e.preventDefault();
        const body = {
            baseurl: "https://tastedive.com/api/similar",
            queryParams:`?k=355751-SimilarS-S4KK39KG&q=${this.state}&info=1`
        }
        axios.post('https://corsbypasser.mtrew.now.sh/api/link', body)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

	
	render() {
        console.log(this.state.data)
		return (
			<div>
                <form onSubmit={(e) => this.submitHandler(e)}>
                <input type="text" value={this.state.item} name="item" onChange={(e) => this.onChangeHandler(e)}/>
                <button disabled={!this.state.item}>Submit</button>
                </form>
			</div>
		);
	}
}
