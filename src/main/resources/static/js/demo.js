

document.addEventListener("DOMContentLoaded", domReady);


function domReady() {

    const input = document.querySelector('#listadd')
    const button = document.querySelector('#getListButton');
    const display = document.querySelector('#data');
    const deleteElementButton=document.querySelector('#deleteListElementButton');

    const deleteData = function () {
        const param = {
            headers: {'content-type':"application/json; charset=UTF-8"},
            method: "DELETE"
        }

        fetch('demo/deleteElement',param)
        .then(response => response.json())
        .then(json => display.innerHTML = json)
        .catch(error => console.log(error));


    }

    deleteElementButton.addEventListener('click', function (event) {
        event.preventDefault();

        deleteData();

    })





    const getData = function () {
                const data = {
                    element:input.value
                }
                const param = {
                    headers: {'content-type':"application/json; charset=UTF-8"},
                    method: "PUT",
                    body: JSON.stringify(data)
                }

                fetch('demo/add', param)
                .then(response => response.json())
                .then(json => display.innerHTML = json)
                .catch(error => display.innerHTML = ''+error);

            };



    button.addEventListener('click', function(event) {
                event.preventDefault();

                getData();
    });

    getData();


}



