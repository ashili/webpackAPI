import axios from 'axios'

export default function getJSON(url, callback) {

    axios({
        method: 'get',
        url: url,
    }).then(res => callback(null,res.data)).catch(err => console.log(err))

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.responseType = 'json';
    // xhr.onload = function () {
    //     var status = xhr.status;
    //     if (status === 200) {
    //         callback(null, xhr.response);
    //     } else {
    //         callback(status, xhr.response);
    //     }
    // };
    // xhr.send();
};
