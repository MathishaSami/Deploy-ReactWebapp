import  Axios  from "axios";
import { Component } from "react/cjs/react.production.min";


class Candidates extends Component{

    state = { error : null, isLoaded : false, data : []}

    componentDidMount(){

        //ES6 Promise
        //ES6 Arrow Functions
        Axios.get("https://vaccination-nfc.herokuapp.com/web/nfc")
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    data : result.data
                })
            },
            (error) => {
                this.setState({
                    isLoaded : true,
                    error : error
                })
            }
           
        )
    }

    render(){
        const {error, isLoaded, data} = this.state

        if(error){
            return(
                <div>
                    <h2>ERROR : {error.message} </h2>
                </div>
            )
        } else if(!isLoaded){
            return(
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                         <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }else {

        
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>NIC No</th>
                            <th>Age</th>
                            <th>Dose Of Vaccine</th>
                            <th>Vaccine</th>
                            <th>Place Of Vaccination</th>
                            <th>Date Of Vaccination</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(candidates => (
                            <tr key={candidates.nic_no}>
                                <td>{candidates.nic_no}</td>
                                <td>{candidates.age}</td>
                                <td>{candidates.dose_of_vaccine}</td>
                                <td>{candidates.vaccine}</td>
                                <td>{candidates.place_of_vaccination}</td>
                                <td>{candidates.date_of_vaccination}</td>
                                <td>{candidates.remarks}</td>
                            </tr>
                        ))}

                        
                    </tbody>
                </table>
            </div>
        )
        }
    }

}

export default Candidates;