document.getElementById("myForm").onsubmit = (e) => {
    //e.preventDefault();
    const url = "http://localhost:5000/sent";
    var data = new URLSearchParams();
    //console.log(e.target)
    for (const pair of new FormData(e.target)) {
       if(pair[1]){
        data.append(pair[0], pair[1])
       }
       else{
           console.log('Enter an item')
           return 
       }
    }
    fetch(url, {
            method: "post",
            body: data,

        })
        .then(res => res.json())
        .then(res2 => {
            location.reload();
        });
}

function deleteMe(item){
    fetch('http://localhost:5000/remove/'+item,{
    method:"delete"
    }).then(res => res)
    .then(res2 => {
        //console.log(res2)
        location.reload();
    });
}