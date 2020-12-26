class SudokuSet {
    numberSet = [0,0,0,0,0,0,0,0,0];
    get remainingNumbers () {
        const possible = [1,2,3,4,5,6,7,8,9];
        return possible.filter(f => !this.numberSet.includes(f));
    }

    reset() {
        this.numberSet = [0,0,0,0,0,0,0,0,0]
    }

    set(position, value) {
        this.numberSet[position] = value;
    }
    // boxes are special. they're following the same rules but the rows/cols don't matter.
    setBoxValue(value) {
        //find the first 0, and fill it with value.
        for(let i=0;i<10;i++)
        {
            if(this.numberSet[i] === 0) {
                this.numberSet[i] = value;
                break;
            }
        }
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
            this.board.Rows.push(new SudokuSet());
            this.board.Cols.push(new SudokuSet());
            this.board.Boxes.push(new SudokuSet());
        }
        console.log("initialized solver");
    }

    setValue(row, column, value) {
        if(value === "") { value = 0}
        this.board.Rows[row].set(column, value);
        this.board.Cols[column].set(row, value);
        this.coordinatesToBox(row,column).setBoxValue(value);
    }

    valueByRange = function (ranges, value) {
        return ranges.find(range=> value >= range.start  && value <= range.end).value;

        /*for(const range of ranges) {
            if(range.start >= value && range.end <= value)
            {
                return range.value
            }
        }*/
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