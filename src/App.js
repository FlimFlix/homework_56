import React, {Component} from 'react';
import './App.css';
import Field from "./components/field/field";
import Cell from "./components/field/cell/cell";


const FIELD_SIZE = 6;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: this.generateCells(),
            counter: 0
        }
    }

    generateCells = () => {
        let cells = [];
        let cellsCount = FIELD_SIZE ** 2;
        for (let i = 0; i < cellsCount; i++) {
            cells.push({
                closed: true,
                hasItem: false,
                id: i + 1
            })
        }
        let randomIndex = Math.floor(Math.random() * cellsCount);
        cells[randomIndex].hasItem = true;
        return cells;
    };

    openCell = (id) => {
      let cell = {...this.state.cells[id]};
      cell.closed = false;

      let cells = [...this.state.cells];
      cells[id] = cell;

      let state = {...this.state};
      state.cells = cells;
      state.counter += 1;

      this.setState(state);
    };

    render() {
        return (
            <div className="container">
                <Field>
                    {this.state.cells.map((item, index) =>
                        <Cell
                            cell={item}
                            id={index}
                            key={index}
                            click={() => this.openCell(index)}
                        />
                    )}
                </Field>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

export default App;
