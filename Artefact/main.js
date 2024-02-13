function renderStatsTable(data) {
    let statshtml = `
    <h2 style="margin-bottom: 20px;">Last 3 games stats</h2>
    <h4 style="margin-bottom: 20px;">Ordered from newest to oldest</h4>
    <table style="margin: auto; border: 1px solid black; border-collapse: collapse; text-align: center;">
        <thead>
            <tr>
                <th style="border: 1px solid black; padding: 5px;">Who won?</th>
                <th style="border: 1px solid black; padding: 5px;">Game duration</th>
            </tr>
        </thead>
    <tbody>
    `;

    data.forEach(
        (s) =>
            (statshtml += `
    <tr>
        <td style="border: 1px solid black; padding: 5px;">Player ${s.player}</td>
        <td style="border: 1px solid black; padding: 5px;">${s.time} s</td>
    </tr>
    `)
    );

    statshtml += `
    </tbody>
    </table>
    <h4 id="TaverageTime"></h4>
`;
    document.getElementById("statsTable").innerHTML = statshtml;
}

if (!localStorage.getItem("GameStats")) {
    const gamestats = JSON.stringify([
        {
            player: "-",
            time: "-",
        },
        {
            player: "-",
            time: "-",
        },
        {
            player: "-",
            time: "-",
        },
    ]);

    localStorage.setItem("GameStats", gamestats);
}

// Card deck
const airplanesX = [
    {
        name: "Boeing 747",
        firstflight: 1969,
        speed: 933,
        range: 14225,
        wingspan: 64.4,
        seats: 416,
        payload: 149875,
        img: "images/b747.jpg",
    },
    {
        name: "Airbus A380",
        firstflight: 2005,
        speed: 903,
        range: 15200,
        wingspan: 79.8,
        seats: 853,
        payload: 151000,
        img: "images/a380.jpg",
    },
    {
        name: "Boeing 777",
        firstflight: 1995,
        speed: 905,
        range: 12000,
        wingspan: 64.8,
        seats: 396,
        payload: 136074,
        img: "images/b777.jpg",
    },
    {
        name: "Airbus A350",
        firstflight: 2013,
        speed: 905,
        range: 18000,
        wingspan: 64.75,
        seats: 350,
        payload: 141000,
        img: "images/a350.jpg",
    },
    {
        name: "Boeing 787",
        firstflight: 2011,
        speed: 904,
        range: 13770,
        wingspan: 60.1,
        seats: 290,
        payload: 113400,
        img: "images/b787.jpg",
    },
    {
        name: "Airbus A320",
        firstflight: 1987,
        speed: 840,
        range: 6100,
        wingspan: 35.8,
        seats: 150,
        payload: 42600,
        img: "images/a320.jpg",
    },
    {
        name: "Bombardier CRJ700",
        firstflight: 1999,
        speed: 829,
        range: 2553,
        wingspan: 28.7,
        seats: 65,
        payload: 20000,
        img: "images/bombardier-crj-700.jpg",
    },
    {
        name: "Embraer E195",
        firstflight: 2004,
        speed: 832,
        range: 4260,
        wingspan: 33.2,
        seats: 122,
        payload: 23450,
        img: "images/embraer_E195.jpg",
    },
    {
        name: "Sukhoi Superjet 100",
        firstflight: 2008,
        speed: 828,
        range: 3048,
        wingspan: 28.8,
        seats: 98,
        payload: 16000,
        img: "images/sukhoi-superjet-100.jpg",
    },
    {
        name: "ATR 72",
        firstflight: 1989,
        speed: 510,
        range: 1370,
        wingspan: 27,
        seats: 70,
        payload: 12000,
        img: "images/ATR72.jpg",
    },
    {
        name: "Cessna 172",
        firstflight: 1955,
        speed: 226,
        range: 1185,
        wingspan: 11,
        seats: 4,
        payload: 454,
        img: "images/Cessna_172.jpg",
    },
    {
        name: "Piper PA-28",
        firstflight: 1960,
        speed: 237,
        range: 967,
        wingspan: 10.8,
        seats: 4,
        payload: 413,
        img: "images/Piper_PA-28.jpg",
    },
    {
        name: "Beechcraft Bonanza G36",
        firstflight: 1947,
        speed: 322,
        range: 920,
        wingspan: 10.2,
        seats: 6,
        payload: 554,
        img: "images/beechcraft_G36.jpg",
    },
    {
        name: "Airbus A340",
        firstflight: 1991,
        speed: 871,
        range: 14450,
        wingspan: 63.5,
        seats: 295,
        payload: 150000,
        img: "images/a340.jpg",
    },
    {
        name: "Cirrus SR22",
        firstflight: 2001,
        speed: 339,
        range: 1943,
        wingspan: 12.5,
        seats: 4,
        payload: 567,
        img: "images/Cirrus_SR-22.jpg",
    },
    {
        name: "Embraer Phenom 100",
        firstflight: 2008,
        speed: 750,
        range: 2182,
        wingspan: 13.1,
        seats: 7,
        payload: 1360,
        img: "images/Embraer-Phenom-100.jpg",
    },
    {
        name: "Gulfstream G550",
        firstflight: 2003,
        speed: 904,
        range: 12500,
        wingspan: 28.5,
        seats: 19,
        payload: 13228,
        img: "images/gulfstream-g550.jpg",
    },
    {
        name: "Dassault Falcon 7X",
        firstflight: 2007,
        speed: 900,
        range: 11000,
        wingspan: 28.7,
        seats: 12,
        payload: 13752,
        img: "images/Dassault_Falcon_7X.jpg",
    },
    {
        name: "Bombardier Challenger 605",
        firstflight: 2006,
        speed: 870,
        range: 7400,
        wingspan: 20.4,
        seats: 9,
        payload: 5443,
        img: "images/Bombardier_Challenger_605.jpg",
    },
    {
        name: "Hawker 850XP",
        firstflight: 1998,
        speed: 745,
        range: 4893,
        wingspan: 20.1,
        seats: 8,
        payload: 12701,
        img: "images/Hawker_850XP.png",
    },
    {
        name: "Learjet 60",
        firstflight: 1990,
        speed: 778,
        range: 4478,
        wingspan: 16.5,
        seats: 8,
        payload: 3082,
        img: "images/Learjet_60.jpg",
    },
    {
        name: "Pilatus PC-12",
        firstflight: 1991,
        speed: 500,
        range: 2804,
        wingspan: 16.3,
        seats: 9,
        payload: 2722,
        img: "images/PilatusPC12.jpg",
    },
    {
        name: "de Havilland Canada DHC-8",
        firstflight: 1983,
        speed: 667,
        range: 2963,
        wingspan: 24.1,
        seats: 50,
        payload: 7720,
        img: "images/De_Havilland_Canada_DHC-8.jpg",
    },
    {
        name: "Antonov An-225",
        firstflight: 1988,
        speed: 800,
        range: 15400,
        wingspan: 88.4,
        seats: 20,
        payload: 250000,
        img: "images/an225.jpg",
    },
    {
        name: "Lockheed L-1011 TriStar",
        firstflight: 1970,
        speed: 890,
        range: 7410,
        wingspan: 50.4,
        seats: 366,
        payload: 120000,
        img: "images/Lockheed_L-1011_Tristar.jpg",
    },
    {
        name: "McDonnell Douglas DC-10",
        firstflight: 1970,
        speed: 908,
        range: 9600,
        wingspan: 50.4,
        seats: 380,
        payload: 147000,
        img: "images/McDonnell_Douglas_DC-10.jpg",
    },
    {
        name: "Convair CV-580",
        firstflight: 1954,
        speed: 483,
        range: 4612,
        wingspan: 24.4,
        seats: 44,
        payload: 8907,
        img: "images/convair-cv580.jpg",
    },
    {
        name: "Boeing 737-800",
        firstflight: 1997,
        speed: 842,
        range: 4200,
        wingspan: 36.5,
        seats: 162,
        payload: 41000,
        img: "images/b737.jpg",
    },
    {
        name: "Boeing 757",
        firstflight: 1982,
        speed: 850,
        range: 7222,
        wingspan: 44.5,
        seats: 239,
        payload: 42000,
        img: "images/b757.jpg",
    },
    {
        name: "Boeing 717",
        firstflight: 1998,
        speed: 811,
        range: 3815,
        wingspan: 28,
        seats: 110,
        payload: 14500,
        img: "images/b717.jpg",
    },
];

// let airplanes = airplanesX.slice(0, 10); // Used to test game with less cards (always even number)
let airplanes = airplanesX;

class State {
    static Idle = new State("Idle");
    static SinglePlayer = new State("SinglePlayer");
    static MultiPlayer = new State("MultiPlayer");
    static Simulation = new State("Simulation");
    static GameOver = new State("GameOver");
    constructor(name) {
        this.name = name;
    }
}

class Input {
    static BtnSinglePlayer = new Input("singleplayer");
    static BtnMultiPlayer = new Input("multiplayer");
    static BtnSimulation = new Input("simulation");
    static BtnReset = new Input("reset");
    constructor(name) {
        this.name = name;
    }

    static from(value) {
        const input = Object.keys(Input)
            .map((key) => Input[key])
            .find((i) => i.name === value);
        if (input != null) return input;
        return new Input(value);
    }
}

const BtnSinglePlayer = document.querySelector("#singleplayer");
const BtnMultiPlayer = document.querySelector("#multiplayer");
const BtnSimulation = document.querySelector("#simulation");
const p1buttons = document.querySelectorAll("#p1stats button");
const p2buttons = document.querySelectorAll("#p2stats button");
const p1won = document.getElementById("p1won");
const p2won = document.getElementById("p2won");
const canvas = document.getElementById("myChart");
const statsContainer = document.getElementById("statsContainer");
const mean = document.getElementById("mean");
const mode = document.getElementById("mode");
const median = document.getElementById("median");

let p1Cards, p2Cards, elapsedTime;

// Chart for analysing gameplay
const data = {
    firstflight: 0,
    speed: 0,
    range: 0,
    wingspan: 0,
    seats: 0,
    payload: 0,
};

const chart = new Chart(canvas, {
    type: "pie",
    data: {
        labels: Object.keys(data),
        datasets: [
            {
                data: Object.values(data),
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 205, 86)",
                    "rgb(54, 162, 235)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                    "rgb(255, 159, 64)",
                ],
            },
        ],
    },
    options: {
        responsive: false,
    },
});

function shuffleDeck(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function pickRandom(items) {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}

// Changes the game state, manages the card decks, calls function to check the round winner, checks if player has won the game, performs statistical analysis.
function stateMachine(input) {
    console.log("Before---------------------------------");
    console.log(input);
    console.log(`currentState: ${currentState.name}`);
    console.log(`currentPlayer: ${currentPlayer}`);

    if (currentState == State.Idle && input == Input.BtnSinglePlayer) {
        currentState = State.SinglePlayer;
        elapsedTime = performance.now();
        BtnSinglePlayer.disabled = true;
        BtnMultiPlayer.disabled = true;
        BtnSimulation.disabled = true;
    }

    if (currentState == State.Idle && input == Input.BtnMultiPlayer) {
        currentState = State.MultiPlayer;
        elapsedTime = performance.now();
        BtnSinglePlayer.disabled = true;
        BtnMultiPlayer.disabled = true;
        BtnSimulation.disabled = true;
    }

    if (currentState == State.Idle && input == Input.BtnSimulation) {
        currentState = State.Simulation;
        elapsedTime = performance.now();
        BtnSinglePlayer.disabled = true;
        BtnMultiPlayer.disabled = true;
        BtnSimulation.disabled = true;
    }

    if (input == Input.BtnReset) {
        currentState = State.Idle;
        minResponseTime = 1000; // Adjust response time for singleplayer and simulation
        maxResponseTime = 3000;
        speedFactor = 1.08;
        currentPlayer = 1;
        p1won.style.display = "none";
        p2won.style.display = "none";
        statsContainer.classList.add("hide");
        resetDataValues(data);
        shuffleDeck(airplanes);
        const middleIndex = Math.ceil(airplanes.length / 2);
        p1Cards = airplanes.slice(0, middleIndex);
        p2Cards = airplanes.slice(middleIndex, airplanes.length);
        p1Card = pickRandom(p1Cards);
        p2Card = pickRandom(p2Cards);
        BtnSinglePlayer.disabled = false;
        BtnMultiPlayer.disabled = false;
        BtnSimulation.disabled = false;
    }

    if (currentState == State.GameOver && input == Input.BtnReset) {
        currentState = State.Idle;
    }

    if (
        (input.name.startsWith("p1") || input.name.startsWith("p2")) &&
        (currentState == State.SinglePlayer ||
            currentState == State.MultiPlayer ||
            currentState == State.Simulation)
    ) {
        const stat = input.name.substring(2);
        console.log(`stat: ${stat}`);

        const winner = whoWins(p1Card, p2Card, stat);
        console.log("Winner: " + winner);

        if (winner === "p1") {
            p1Cards.push(p2Card); // Add card to winner
            p2Cards = p2Cards.filter((card) => card !== p2Card); // Remove card from loser
            currentPlayer = 1;
        } else if (winner === "p2") {
            p2Cards.push(p1Card); // Add card to winner
            p1Cards = p1Cards.filter((card) => card !== p1Card); // Remove card from loser
            currentPlayer = 2;
        }

        if (p1Cards.length === 0 || p2Cards.length === 0) {
            currentState = State.GameOver;
            setTimeout(() => {
                statsContainer.classList.remove("hide");
                statsContainer.classList.add("show");

                const averageclicks = (data) => {
                    let sum = 0;
                    for (let key in data) {
                        sum += data[key];
                    }
                    return (sum / 6).toFixed(2);
                };
                mean.textContent = `Average clicks per stat: ${averageclicks(
                    data
                )}`;

                const getMode = (data) => {
                    let maxKey = null;
                    let maxValue = -Infinity;

                    for (const key in data) {
                        if (data[key] > maxValue) {
                            maxValue = data[key];
                            maxKey = key;
                        }
                    }

                    return maxKey;
                };

                mode.textContent = `Most clicked stat (mode): ${getMode(data)}`;

                const getMedian = (data) => {
                    const values = Object.values(data).sort((a, b) => a - b);
                    console.log("values:", values);

                    const medianIndex = Math.floor(values.length / 2);
                    console.log("medianIndex:", medianIndex);

                    const medianValue =
                        values.length % 2 === 0
                            ? (values[medianIndex - 1] + values[medianIndex]) /
                              2
                            : values[medianIndex];
                    console.log("medianValue:", medianValue);

                    return medianValue;
                };

                median.textContent = `Median: ${getMedian(data)}`;

                const gamestats = JSON.parse(localStorage.getItem("GameStats"));
                gamestats.unshift({
                    player: currentPlayer,
                    time: ((performance.now() - elapsedTime) / 1000).toFixed(2),
                });
                gamestats.pop();
                renderStatsTable(gamestats);
                let c = 0;
                gamestats.forEach((x) => console.log(x.time));
                gamestats.forEach((x) => (c = c + parseFloat(x.time)));
                let avtime = c / 3;
                console.log(avtime);
                const TaverageTime = document.getElementById("TaverageTime");
                TaverageTime.textContent = `Average game duration: ${avtime.toFixed(
                    2
                )} seconds`;

                localStorage.setItem("GameStats", JSON.stringify(gamestats));
            }, 1500);
        } else {
            p1Card = pickRandom(p1Cards);
            p2Card = pickRandom(p2Cards);
        }

        if (p1Cards.length === 0) {
            p2won.style.display = "block";
        } else if (p2Cards.length === 0) {
            p1won.style.display = "block";
        }
    }

    processState(currentState, currentPlayer, p1Card, p2Card);

    console.log("After---------------------------------");
    console.log(`currentState: ${currentState.name}`);
    console.log(`currentPlayer: ${currentPlayer}`);

    const responseTime = Math.round(
        Math.random() * (maxResponseTime - minResponseTime) + minResponseTime
    );

    minResponseTime = minResponseTime / speedFactor;
    maxResponseTime = maxResponseTime / speedFactor;

    if (
        (currentState == State.SinglePlayer && currentPlayer === 2) ||
        (currentState == State.Simulation && currentPlayer === 2)
    ) {
        const button = pickRandom(p2buttons);
        setTimeout(() => {
            button.style.background = "green";
        }, responseTime / 2);
        setTimeout(() => {
            button.click();
            button.style.background = "";
        }, responseTime);
    }

    // USE FOR NORMAL FUNCTIONING
    if (currentState == State.Simulation && currentPlayer === 1) {
        const button = pickRandom(p1buttons);
        setTimeout(() => {
            button.style.background = "green";
        }, responseTime / 2);
        setTimeout(() => {
            button.click();
            button.style.background = "";
        }, responseTime);
    }

    // USE TO TEST HYPOTHESIS (PLAYER 1 CHOOSES PAYLOAD IF CARD IS AIRBUS OR BOEING)
    // if (currentState == State.Simulation && currentPlayer === 1) {
    //     const Tcard = p1Card.name.split(" ").shift();
    //     console.log(Tcard);
    //     let button;
    //     if (Tcard == "Airbus" || Tcard == "Boeing") {
    //         button = p1buttons[5];
    //         console.log(button);
    //     } else {
    //         button = pickRandom(p1buttons);
    //     }

    //     setTimeout(() => {
    //         button.style.background = "green";
    //     }, responseTime / 2);
    //     setTimeout(() => {
    //         button.click();
    //         button.style.background = "";
    //     }, responseTime);
    // }
}

function whoWins(p1Card, p2Card, stat) {
    // // Used for debugging purposes
    console.log(`p1 ${stat}: ${p1Card[stat]}`);
    console.log(`p2 ${stat}: ${p2Card[stat]}`);

    if (stat == "firstflight") {
        if (p1Card[stat] < p2Card[stat]) {
            data[stat] += 1;
            chart.data.datasets[0].data = Object.values(data);
            chart.update();
            return "p1";
        } else if (p1Card[stat] > p2Card[stat]) {
            data[stat] += 1;
            chart.data.datasets[0].data = Object.values(data);
            chart.update();
            return "p2";
        } else {
            return "tie";
        }
    } else {
        if (p1Card[stat] > p2Card[stat]) {
            data[stat] += 1;
            chart.data.datasets[0].data = Object.values(data);
            chart.update();
            return "p1";
        } else if (p1Card[stat] < p2Card[stat]) {
            data[stat] += 1;
            chart.data.datasets[0].data = Object.values(data);
            chart.update();
            return "p2";
        } else {
            return "tie";
        }
    }
}

// Processes the game state to decide what buttons to show
function processState(currentState, currentPlayer, p1Card, p2Card) {
    if (currentState === State.Idle) {
        currentPlayer = 1;
        p1buttons.forEach((button) => (button.style.visibility = "hidden"));
        p2buttons.forEach((button) => (button.style.visibility = "hidden"));
    } else if (currentPlayer === 1) {
        p1buttons.forEach((button) => (button.style.visibility = "visible"));
        p2buttons.forEach((button) => (button.style.visibility = "hidden"));
    } else if (currentPlayer === 2) {
        p1buttons.forEach((button) => (button.style.visibility = "hidden"));
        p2buttons.forEach((button) => (button.style.visibility = "visible"));
    } else if (currentState === State.SinglePlayer) {
        p1buttons.forEach((button) => (button.style.visibility = "visible"));
        p2buttons.forEach((button) => (button.style.visibility = "visible"));
    } else if (currentState === State.MultiPlayer) {
        p1buttons.forEach((button) => (button.style.visibility = "visible"));
        p2buttons.forEach((button) => (button.style.visibility = "visible"));
    }

    if (currentState != State.GameOver) {
        // Display card pic
        document.getElementById("p1-card-pic").src = p1Card.img;
        document.getElementById("p2-card-pic").src = p2Card.img;

        // Display card name
        document.getElementById("p1-card-name").textContent = p1Card.name;
        document.getElementById("p2-card-name").textContent = p2Card.name;
    }

    // Display cards left in deck
    const p1CardsLeftDisplay = document.getElementById("p1-cards-left");
    const p2CardsLeftDisplay = document.getElementById("p2-cards-left");
    p1CardsLeftDisplay.textContent = `Cards: ${p1Cards.length}`;
    p2CardsLeftDisplay.textContent = `Cards: ${p2Cards.length}`;
}

let minResponseTime;
let maxResponseTime;
let speedFactor;
let p1Card, p2Card;
let currentState = State.Idle;
let currentPlayer = 1;
stateMachine(Input.BtnReset);

document
    .querySelectorAll("button")
    .forEach((button) =>
        button.addEventListener("click", (e) =>
            stateMachine(Input.from(e.target.id))
        )
    );

// How to play
const questionMark = document.getElementById("question-mark");
questionMark.addEventListener("click", showExplanation);

function showExplanation() {
    alert(
        `
How to play?
--------------
1. Choose a gamemode
2. Select a stat to compare
3. Keep playing until some player gets all the cards

• The Computer response time gets faster as it wins cards
• Game analysis will appear after each game
• Data from each game is saved in the window local storage
• Press reset go back to Idle state
`
    );
}

// Reset values of the chart
function resetDataValues(data) {
    for (let key in data) {
        data[key] = 0;
    }
    chart.update();
}
