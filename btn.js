
let btn_test = document.getElementById("btn_test");

btn_test.addEventListener("click", function (evt)
{
    document.body.requestFullscreen();
});

// const app = new PIXI.Application({ background: '#253652', width: 800, height: 200 });
// document.body.appendChild(app.view);

// const bg = new PIXI.Container();

// app.stage.addChild(bg);

// const container = new PIXI.Container();

// app.stage.addChild(container);
