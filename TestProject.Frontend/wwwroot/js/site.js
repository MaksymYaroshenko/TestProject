$(document).ready(function () {
    $.ajax({
        url: 'https://localhost:44355/phone/',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            SetData(data);
        },
        error: function () {
            $('#jsContent').html('<div class="container mt-5"><h2 class="text-center">The server is not responding. Sorry for the inconvenience.</h2></div>');
        }
    });
});

function SetData(data) {
    let container = document.getElementById('jsContent');
    if (data.length) {
        let divContainer = CreateElement('DIV', 'container mt-5');
        let title = CreateElement('H1', 'text-center', 'Phone List got by native JS');
        divContainer.appendChild(title);
        container.appendChild(divContainer);
        let divRow = CreateElement('DIV', 'row mt-5 mb-2');
        divContainer.appendChild(divRow);
        for (let i in data) {
            let div = CreateElement('DIV', 'col-lg-4');
            let name = CreateElement('H4', '', data[i].name);
            let os = CreateElement('P', '', data[i].os);
            div.appendChild(name);
            div.appendChild(os);
            divRow.appendChild(div);
        }
    } else {
        container.className = 'container mt-5 text-center';
        container.appendChild(CreateElement('H2', '', 'Phone List is empty.'));
    }
}

function CreateElement(tag, className, text) {
    let element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.innerHTML = text;
    }
    return element;
}
