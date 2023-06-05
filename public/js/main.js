const alinks=document.getElementsByClassName("nav-link");
var xhttp = new XMLHttpRequest();
function sendHttpRequest(metod, url, bodyObj, headerObj){

    const promise=new Promise((resolve, reject)=>{
        xmlHttp.open(metod, url);
        xmlHttp.setRequestHeader("Content-Type","application/json");
        xmlHttp.setRequestHeader("Authorization","Bearer 577f77730799dd70f204e0919a16feceaa54c425b94d64ff52153e3d46cf62bf");
        xmlHttp.onload=()=>{    
            if(xmlHttp.status>=400){
                const err=xmlHttp.status+ " "+ xmlHttp.response;
                reject(err);
            }
            else
            resolve(xmlHttp.response);
        }
        xmlHttp.send(JSON.stringify(bodyObj));
    });
    return promise;
}

let sendData=()=>{
    const body= {name:"selfvie", gender: "male", email:"dasdsdsdsfsfsdfd@sdas.com", status:"active"};
    const header={"Content-Type": "application/json","Accept": "application/json", "Authorization": "Bearer     "+token};
       sendHttpRequest('POST', url+endpoint, body, header).then(responseData => {
       console.table(JSON.parse(responseData))
    }).catch(err=>{throw err;});
}

let readData=()=>{
    const header={"Content-Type": "application/json", "Authorization": "Bearer "+token};
    sendHttpRequest('GET', url+endpoint, body, header).then(responseData => {
       console.table(JSON.parse(responseData));
    });
}

function submitForm(){
    let titulli = document.getElementById("titulli");
    console.log(titulli.value)
}

function fshij(id){
    fetch("http://localhost:3000/book-profile/"+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
           window.location.reload();
          } else {
            // Handle error case
            console.error('Delete request failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
}


