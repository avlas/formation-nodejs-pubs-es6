class Owner {
    contructor(firstName, lastName, mail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }
    toString () {
        return `${this.firstName} | ${this.lastName}  | ${this.mail}`
    }

    print () {
        console.log( this.toString() );
    }
}

module.exports = Owner;