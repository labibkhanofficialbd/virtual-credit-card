window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

document.getElementById('close').addEventListener('click', function(){

    const nameInput = document.getElementById('input-text');

    const newName = nameInput.value;

    const setName = document.getElementById('yourName');

    setName.innerText = newName;
})

document.getElementById('input-text').addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("close").click();
       }
})