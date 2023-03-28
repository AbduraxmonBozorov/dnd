import React from "react";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1.1" className="card" draggable="true">
            <p>1.1</p>
          </Card>
          <Card id="card-1.2" className="card" draggable="true">
            <p>1.2</p>
          </Card>
          <Card id="card-1.3" className="card" draggable="true">
            <p>1.3</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2.1" className="card" draggable="true">
            <p>2.1</p>
          </Card>
          <Card id="card-2.2" className="card" draggable="true">
            <p>2.2</p>
          </Card>
          <Card id="card-2.3" className="card" draggable="true">
            <p>2.3</p>
          </Card>
        </Board>

        <Board id="board-3" className="board">
          <Card id="card-3.1" className="card" draggable="true">
            <p>3.1</p>
          </Card>
          <Card id="card-3.2" className="card" draggable="true">
            <p>3.2</p>
          </Card>
          <Card id="card-3.3" className="card" draggable="true">
            <p>3.3</p>
          </Card>
        </Board>

        <Board id="board-4" className="board">
          <Card id="card-4.1" className="card" draggable="true">
            <p>4.1</p>
          </Card>
          <Card id="card-4.2" className="card" draggable="true">
            <p>4.2</p>
          </Card>
          <Card id="card-4.3" className="card" draggable="true">
            <p>4.3</p>
          </Card>
        </Board>

        
      </main>
    </div>
  );
}

export default App;
