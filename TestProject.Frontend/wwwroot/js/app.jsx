class Phone extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.phone };
    }

    render() {
        return <div className="col-lg-4">
            <h4>{this.state.data.name}</h4>
            <p>{this.state.data.os}</p>
        </div>;
    }
}

class PhonesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { phones: [] };
    }

    loadData() {
        let request = new XMLHttpRequest();
        request.open("get", this.props.apiUrl, true);
        request.onload = function () {
            if (request.response) {
                let data = JSON.parse(request.responseText);
                if (data.length) {
                    this.setState({ phones: data });
                } else {
                    let element = <div className="container mt-5"><h2 className="text-center">Phone List is empty.</h2></div>;
                    ReactDOM.render(element, document.getElementById('reactContent'));
                }
            } else {
                let element = <div className="container mt-5"><h2 className="text-center">The server is not responding. Sorry for the inconvenience.</h2></div>;
                ReactDOM.render(element, document.getElementById('reactContent'));
            }
        }.bind(this);
        request.send();
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return <div className="container mt-5">
            <h1 className="text-center">Phones List got by React</h1>
            <div className="row mt-5 mb-2 ">
                {
                    this.state.phones.map(function (phone) {
                        return <Phone key={phone.id} phone={phone} />
                    })
                }
            </div>
        </div>;
    }
}

ReactDOM.render(
    <PhonesList apiUrl="https://localhost:44355/phone/" />,
    document.getElementById("reactContent"));
