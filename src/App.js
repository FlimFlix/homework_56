import React, {Component} from 'react';
import './App.css';
import Field from "./components/field/field";
import Cell from "./components/field/cell/cell";
import Button from "./components/button/button";
import Counter from "./components/counter/counter";


const FIELD_SIZE = 6;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: this.generateCells(),
            counter: 0,
            endgame: false
        };
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

        if (cell.closed) {
            cell.closed = false;

            let cells = [...this.state.cells];
            cells[id] = cell;

            let state = {...this.state};
            state.cells = cells;
            state.counter += 1;

            if (state.cells[id].hasItem === true) {
                state.endgame = true;
            }
        this.setState(state);}
    };

    getCounter = () => {
        return this.state.counter
    };

    getStatus = () => {
        return this.state.endgame
    };

    resetGame = () => {
        this.setState({endgame: false, cells: this.generateCells(), counter: 0})
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
                            click={(this.state.endgame) ? null : () => this.openCell(index)}
                        />
                    )}
                </Field>
                <Counter counter={this.getCounter()} endgame={this.getStatus()}/>
                <Button click={this.resetGame}/>
            </div>
        );
    }
}

export default App;
