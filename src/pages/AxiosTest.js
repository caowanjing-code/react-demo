import React from 'react';
import axios from '../axios/index';

export default class AxiosTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        axios.get('/mock.json', {})
            .then(res => {
                if(res.code === 200){
                    this.setState({data: res.data})
                }
            })
    }

    render(){
        return(
            <div>
                {this.state.data ?
                    this.state.data.map(el => {
                        return (<p key={el.id}>{el.name} ----- {el.grade}</p>)
                    })
                 : null}
            </div>
        )
    }
}