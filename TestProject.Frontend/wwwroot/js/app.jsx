class Phone extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.phone };
    }

    render() {
        return <div className="col-lg-3">
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
        var request = new XMLHttpRequest();
        request.open("get", this.props.apiUrl, true);
        request.onload = function () {
            var data = JSON.parse(request.responseText);
            this.setState({ phones: data });
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
