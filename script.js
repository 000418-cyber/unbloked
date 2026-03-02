const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let snake = [];
let food = {};
let dx = 20;
let dy = 0;
let score = 0;
let gameInterval;

function startGame() {
    snake = [{x: 200, y: 200}];
    dx = 20;
    dy = 0;
    score = 0;
    createFood();
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(updateGame, 100);
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const head = {x: snake[0].x + dx, y: snake[0].y + dy};

    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
        clearInterval(gameInterval);
        alert("Game Over! Score: " + score);
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        createFood();
    } else {
        snake.pop();
    }

    ctx.fillStyle = "lime";
    snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);
}

function createFood() {
    food = {
        x: Math.floor(Math.random() * 20) * 20,
        y: Math.floor(Math.random() * 20) * 20
    };
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && dy === 0) {
        dx = 0; dy = -20;
    }
    if (e.key === "ArrowDown" && dy === 0) {
        dx = 0; dy = 20;
    }
    if (e.key === "ArrowLeft" && dx === 0) {
        dx = -20; dy = 0;
    }
    if (e.key === "ArrowRight" && dx === 0) {
        dx = 20; dy = 0;
    }
});
