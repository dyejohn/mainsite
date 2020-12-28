class SudokuItem {
    constructor(row, column, value) {
        this.Row = row;
        this.Column = column;
        this.Value = value;
    }
    Row=0;
    Column=0;
    Value=0;
}

class SudokuSet {
    numberSet = [null,null,null,null,null,null,null,null,null];
    setType = "unknown";
    id=0;
    constructor(setType, id) {
        this.setType = setType;
        this.id = id;
    }

    get remainingNumbers () {
        const possible = [1,2,3,4,5,6,7,8,9];
        const consumedNumbers = this.numberSet.filter(n => n.Value !=0 ).map(n => n.Value);
        return possible.filter(p => !consumedNumbers.includes(p));
    }

    reset = function() {
        for(let number of this.numberSet) {
            number.Value = 0;
        }
    }

    setSudokuItem = function(position, item) {
        this.numberSet[position] = item;
    }
    setBoxSudokuItem = function(item) {
        // boxes don't matter for position.
        // find the first null, and add there
        this.numberSet[this.numberSet.findIndex(ns => ns === null)] = item ;
    }

    set = function(position, value) {
        this.numberSet[position].Value = value;
    }

    getEmptyCells = function() {
        return this.numberSet.filter(ns => ns.Value === 0);
    }

}

export default class Sudoku {
    board = {
        Rows: [],
        Cols: [],
        Boxes: []
    }
    constructor() {
        // just initialize everything.
        for(let i=1; i<10;i++) {
            this.board.Boxes.push(new SudokuSet("box", i));
            this.board.Cols.push(new SudokuSet("column", i));
            this.board.Rows.push(new SudokuSet("row", i));
        }

        for(let i=1; i<10;i++) {
            for(let j=1;j<10;j++) {
                const cell = new SudokuItem(i,j,0);
                this.board.Rows.find(r => r.id == cell.Row).setSudokuItem(cell.Column, cell);
                this.board.Cols.find(c => c.id == cell.Column).setSudokuItem(cell.Row, cell);
                this.coordinatesToBox(cell.Row, cell.Column).setBoxSudokuItem(cell);
            }
        }
    }

    setValue = function (row, column, value) {
        if(value === "") { value = 0}
        this.board.Rows[row].set(column, value); // should set the other references too.
    }

    solve = function () {
        let collision = false;
        while(!collision) {
            // iterate rows, colums and boxes to see if you can find a solution for each location.
            // as long as we find some solution, keep going.

            // first pass, go through each col/row and see if there is only one choice.
            const singleEntryRows = this.board.Rows.filter(r => length(r.remainingNumbers) === 1);

            for(const row of singleEntryRows) {
                row.getEmptyCells()[0].Value = row.remainingNumbers[0];
            }

            const singleEntryCols = this.board.Cols.filter(c => length(c.remainingNumbers) === 1);

            for(const col of singleEntryCols) {
                col.getEmptyCells()[0].Value = col.remainingNumbers[0];
            }

            const singleEntryBoxes = this.board.Boxes.filter(b => length(b.remainingNumbers) === 1);

            for(const box in singleEntryBoxes) {
                box.getEmptyCells()[0].Value = box.remainingNumbers[0];
            }
            // go through each cell and see if you can find any where there is only one choice.
        }
    }

    solveForCell = function (item) {

    }

    valueByRange = function (ranges, value) {
        return ranges.find(range=> value >= range.start  && value <= range.end).value;
    }

    coordinatesToBox(row, column) {
        let box = this.valueByRange([
                {start: 1,
                end: 3,
                value: 1},
                {start: 4,
                end: 6,
                value: 4},
                {start: 7,
                end: 9,
                value: 7}], row) + this.valueByRange([
                {start: 1,
                end: 3,
                value: 0},
                {start: 4,
                end: 6,
                value: 1},
                {start: 7,
                end: 9,
                value: 2}
        ], column)
        return this.board.Boxes[box];
    }

}