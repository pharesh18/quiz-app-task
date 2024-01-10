import { HashLoader } from 'react-spinners';
import { Component } from 'react';
import "../../css/other.css";
class Loader extends Component {
    render() {
        console.log("In the loader class");
        return (
            <>
                <div className="loader">
                    <center>
                        <HashLoader
                            size="90px"
                            color="purple"
                        />
                    </center>
                </div>
            </>
        );
    }
}
export default Loader;