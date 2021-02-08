import {getObjID} from '../avesengine/aves.js';

getObjID('saveBtn').addEventListener('click', function(){
    if (typeof(Storage) !== "undefined") {
        var valToStore = getObjID('editor').value;
        localStorage.setItem("editorVal", valToStore);
    }else{
        getObjID('disEdit').innerHTML = "Sorry, your browser does not support web storage";
    }
})
getObjID('newBtn').addEventListener('click', function(){
    if (typeof(Storage) !== "undefined") {
        var valToStore = '';
        localStorage.setItem("editorVal", valToStore);
        getObjID('editor').value = valToStore;
    }else{
        getObjID('disEdit').innerHTML = "Sorry, your browser does not support web storage";
    }
})
window.addEventListener('DOMContentLoaded', (event) => {
    getObjID('editor').value = localStorage.getItem("editorVal");
    getObjID('img2').style.display = "none";
    // setInterval(myTimer, 10000);
});
function saveFunction() {
    if (typeof(Storage) !== "undefined") {
        var valToStore = getObjID('editor').value;
        localStorage.setItem("editorVal", valToStore);
        console.log("stored");
    }else{
        getObjID('disEdit').innerHTML = "Sorry, your browser does not support web storage";
    }
}
var count = 0;
getObjID('editor').addEventListener('keydown', function(){
    if(count == 10){
        saveFunction();
        count = 0;
        getObjID('img2').style.display = "block";
        getObjID('img1').style.display = "none";
    }else{
        if(count == 2){
            getObjID('img2').style.display = "none";
            getObjID('img1').style.display = "block";
        }
        console.log("counting");
        count += 1;
    }
})
