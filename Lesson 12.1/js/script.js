
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function curentCourse(elem) {
    elem.addEventListener('input', (e)=> {
       // e.preventDefault();
        let formData = new FormData(elem);
        let data;
        let request;
        function  postCourse(data) {
            return new Promise(function(resolve, reject) {
                request = new XMLHttpRequest();

                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                //request.send();

                request.onreadystatechange = function() {
                    if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();                       
                    }
                };
                request.send(data);
            });
        }

        postCourse(formData)
            .then(()=> {
                data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            });
            //.catch(()=> inputUsd.value = "Что-то пошло не так!");       
    });
}

curentCourse(inputRub);