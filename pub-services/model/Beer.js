class Beer {
    contructor(type, name) {
        this.type = type;
        this.name = name;
    }

    toString () {
        return `${this.type} | ${this.name}`
    }

    print () {
        console.log( this.toString() );
    }
}

module.exports = Beer;