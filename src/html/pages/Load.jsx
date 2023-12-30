import { HashLoader } from 'react-spinners';
import { Component } from 'react';
import "../../css/other.css";

class Load extends Component {

    render() {
        return (
            <>
                {/* {Loader.state.loader==0?null: */}
                <div className="load">
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
export default Load;