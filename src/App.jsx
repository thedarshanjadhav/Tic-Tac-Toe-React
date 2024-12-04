import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [player, setPlayer] = useState("player1");
  const [boxId, setBoxId] = useState([]);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [win, setWin] = useState("");

  // handle box onclick function
  const handleClick = (id) => {
    if (id === "box1") {
      console.log("clicked box1");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box2") {
      console.log("clicked box2");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box3") {
      console.log("clicked box3");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box4") {
      console.log("clicked box4");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box5") {
      console.log("clicked box5");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box6") {
      console.log("clicked box6");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box7") {
      console.log("clicked box7");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box8") {
      console.log("clicked box8");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    } else if (id === "box9") {
      console.log("clicked box9");
      setBoxId((prev) => [...prev, id]);
      setPlayer1((prev) => (player === "player1" ? [...prev, id] : [...prev]));
      setPlayer2((prev) => (player === "player2" ? [...prev, id] : [...prev]));
      setPlayer(() => (player === "player1" ? "player2" : "player1"));
    }
  };

  // player win function
  function playerWin() {
    // player1 If conditions
    if (
      player1.includes("box1") && // 1st row
      player1.includes("box2") &&
      player1.includes("box3")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    } else if (
      player1.includes("box4") && // 2nd row
      player1.includes("box5") &&
      player1.includes("box6")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    } else if (
      player1.includes("box7") && // 3rd row
      player1.includes("box8") &&
      player1.includes("box9")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    } else if (
      player1.includes("box1") && // 1st col
      player1.includes("box4") &&
      player1.includes("box7")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    } else if (
      player1.includes("box2") && // 2nd col
      player1.includes("box5") &&
      player1.includes("box8")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    } else if (
      player1.includes("box3") && // 3rd col
      player1.includes("box6") &&
      player1.includes("box9")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    } else if (
      player1.includes("box1") && // left to right cross
      player1.includes("box5") &&
      player1.includes("box9")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    } else if (
      player1.includes("box3") && // right to left cross
      player1.includes("box5") &&
      player1.includes("box7")
    ) {
      console.log("player1 win");
      setWin("Congratulation Player1 Win");
    }

    // player2 if condition

    if (
      player2.includes("box1") && // 1st row
      player2.includes("box2") &&
      player2.includes("box3")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    } else if (
      player2.includes("box4") && // 2nd row
      player2.includes("box5") &&
      player2.includes("box6")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    } else if (
      player2.includes("box7") && // 3rd row
      player2.includes("box8") &&
      player2.includes("box9")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    } else if (
      player2.includes("box1") && // 1st col
      player2.includes("box4") &&
      player2.includes("box7")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    } else if (
      player2.includes("box2") && // 2nd col
      player2.includes("box5") &&
      player2.includes("box8")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    } else if (
      player2.includes("box3") && // 3rd col
      player2.includes("box6") &&
      player2.includes("box9")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    } else if (
      player2.includes("box1") && // left to right cross
      player2.includes("box5") &&
      player2.includes("box9")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    } else if (
      player2.includes("box3") && // right to left cross
      player2.includes("box5") &&
      player2.includes("box7")
    ) {
      console.log("player2 win");
      setWin("Congratulation Player2 Win");
    }
  }

  useEffect(() => {
    playerWin(); // player win function call
    console.log("player: ", player);
    console.log("boxId: ", boxId);
    console.log("Player1", player1);
    console.log("Player2", player2);
  }, [player, boxId, player1, player2]);

  useEffect(() => {
    if (!win && boxId.length === 9) {
      setWin("It's a Tie!");
    }
  }, [boxId, win]);

  // Rendering the icon based on player
  const renderIcon = (boxId) => {
    if (player1.includes(boxId)) {
      return (
        <lord-icon
          src="https://cdn.lordicon.com/cvwrvyjv.json"
          trigger="loop"
          style={{ width: "100%", height: "100%" }}
        ></lord-icon>
      );
    }
    if (player2.includes(boxId)) {
      return (
        <lord-icon
          src="https://cdn.lordicon.com/mtuudzxm.json"
          trigger="loop"
          stroke="bold"
          style={{ width: "100%", height: "100%" }}
        ></lord-icon>
      );
    }
  };

  // Restart function
  const handleRestart = () => {
    setBoxId([]);
    setPlayer("player1");
    setPlayer1([]);
    setPlayer2([]);
    setWin("");
  };

  return (
    <div className=" h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-xl mb-10">Tic Tac Toe - React</h1>
        <div className="flex bg-slate-300">
          <div
            className={`w-16 h-16 border-black border-2 flex justify-center items-center`}
            onClick={
              boxId.includes("box1")
                ? null
                : win === ""
                ? () => handleClick("box1")
                : null
            }
          >
            {renderIcon("box1")}
          </div>
          <div
            className=" w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box2")
                ? null
                : win === ""
                ? () => handleClick("box2")
                : null
            }
          >
            {renderIcon("box2")}
          </div>
          <div
            className=" w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box3")
                ? null
                : win === ""
                ? () => handleClick("box3")
                : null
            }
          >
            {renderIcon("box3")}
          </div>
        </div>
        <div className="flex bg-slate-300">
          <div
            className="w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box4")
                ? null
                : win === ""
                ? () => handleClick("box4")
                : null
            }
          >
            {renderIcon("box4")}
          </div>
          <div
            className="w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box5")
                ? null
                : win === ""
                ? () => handleClick("box5")
                : null
            }
          >
            {renderIcon("box5")}
          </div>
          <div
            className="w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box6")
                ? null
                : win === ""
                ? () => handleClick("box6")
                : null
            }
          >
            {renderIcon("box6")}
          </div>
        </div>
        <div className=" flex bg-slate-300">
          <div
            className="w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box7")
                ? null
                : win === ""
                ? () => handleClick("box7")
                : null
            }
          >
            {renderIcon("box7")}
          </div>
          <div
            className="w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box8")
                ? null
                : win === ""
                ? () => handleClick("box8")
                : null
            }
          >
            {renderIcon("box8")}
          </div>
          <div
            className="w-16 h-16 border-black border-2"
            onClick={
              boxId.includes("box9")
                ? null
                : win === ""
                ? () => handleClick("box9")
                : null
            }
          >
            {renderIcon("box9")}
          </div>
        </div>
      </div>
      {win && (
        <div className="flex flex-col justify-center items-center mt-10">
          <h1>{win}</h1>
        </div>
      )}
      <div className="flex flex-col justify-center items-center mt-10">
        <button
          onClick={() => handleRestart()}
          className="bg-slate-700 text-white rounded-md text-lg py-2 px-4"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
