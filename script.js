let url = 'http://universities.hipolabs.com/search?name=';
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ol = document.querySelector("ol");

btn.addEventListener("click",async function(){
    let arr = await getdata(inp.value);
    inp.value = '';
    listdata(arr)
})

function listdata(arr){
    ol.innerHTML = '';
    for(getarr of arr){
        let list = document.createElement("li")
        list.innerHTML = getarr.name;
        ol.insertAdjacentElement("beforeend",list)
    }
}

async function getdata(inp){
    let res = await axios.get(url+inp);
    return res.data;
}

