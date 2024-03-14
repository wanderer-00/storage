var content = document.getElementsByClassName("content")[0];


for( i=0; i<data.length; i++ ){
    content.innerHTML += `
    <div class="box">
        <div class="name">${data[i].NAME}</div>
        <div class="icon" style="background-image: url(IMG/${data[i].ICON})"></div>
        <div class="tags">${data[i].TAGS}</div>
        <div class="note">${data[i].NOTE}</div>
    </div>`
}