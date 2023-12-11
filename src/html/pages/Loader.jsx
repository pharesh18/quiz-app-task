import { HashLoader } from 'react-spinners';
import { Component } from 'react';
import "../../css/other.css";
class Loader extends Component {
    // static state;
    // constructor(props){
    //     super(props);
    //     Loader.state = { loader:0};
    // }
    // static setLoader(value){
    //     Loader.setState({loader:value});
    // }

    render() {
        return (
            <>
                {/* {Loader.state.loader==0?null: */}
                <div className="loader">
                    <center>
                        <HashLoader
                            size="90"
                            color="purple"
                        />
                    </center>
                </div>
                {/* } */}
            </>
        );
    }
}
export default Loader;