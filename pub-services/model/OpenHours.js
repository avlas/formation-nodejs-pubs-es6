class OpenHours {
    contructor(start, end) {
        this.start = start;
        this.end = end;
    }

    toString () {
        return `${this.start} | ${this.end}`
    }

    print () {
        console.log( this.toString() );
    }
}

module.exports = OpenHours;