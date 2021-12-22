async function success(position) {

    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let time = position.timestamp;
    // console.log(time)
    // console.log(lat)
    // console.log(lng)


    let data_to_send = { lat, lng, time };
    // console.log(JSON.stringify(data_to_send))

    const options = {
        method: 'POST',

        body: JSON.stringify(data_to_send),
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const response = await fetch('./api', options);
    const data = await response.json();
    console.log(data);


}
  async function submit_mood() {
    const moodData=document.getElementById('mood').value;

    // console.log(moodData);
    document.getElementById('mood').value='';
    let datatosend=({"mode":moodData});

    const options = {
        method: 'POST',

        body: JSON.stringify(datatosend),
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const respons = await fetch('./api', options);
    const userdata = await respons.json();
    console.log(userdata);


}
// trial();






function submit_geodata() {
    if ('geolocation' in navigator) {
        console.log('Geolocation available!!')
        navigator.geolocation.getCurrentPosition(success);


    }
    else {
        console.log("Sorry");
    }
}


function ISSpage() {
    // console.log('Hello')
    location.href = "./ISS.html"
}

function dataPage() {
    console.log('Hello')
    location.href = "./data.html"
}


let button = document.getElementById('ISS')
button.addEventListener('click', ISSpage)


let data_button = document.getElementById('data')
data_button.addEventListener('click', dataPage)


let submitBtn = document.getElementById('submitbtn')
submitBtn.addEventListener('click', submit_mood)


