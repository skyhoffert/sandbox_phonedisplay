
let elm = document.getElementById("div_output");

document.addEventListener("click", function (evt)
{
    elm.requestFullscreen();
});

function Log(msg)
{
    let now = new Date();
    let newp = document.createElement("p");
    newp.innerHTML = "[" + 
    now.getHours().toString().padStart(2, "0")   + ":" +
    now.getMinutes().toString().padStart(2, "0") + ":" + 
    now.getSeconds().toString().padStart(2, "0") + "] " +
    msg;

    elm.appendChild(newp);

    // window.scroll({top:10000000});
    elm.scrollTop = elm.scrollHeight;
}

setTimeout(function ()
{
    Log("Started.");
}, 500);

setTimeout(function ()
{
    Log("An updated <span style='color:#ff0000'>output message</span> that is longer than the screen width, what happens with wrapping?");
}, 1000);

setTimeout(function ()
{
    Log("How about now?");
}, 2000);

for (let i = 0; i < 50; i++)
{
    setTimeout(function ()
    {
        Log("Log number " + i);
    }, 3000 + i*20);
}
