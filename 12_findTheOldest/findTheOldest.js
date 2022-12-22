const findTheOldest = function(people) {
    let today = new Date();
    let thisYear = today.getFullYear();
    return people.reduce((previous, person) => {
        if (previous.oldest < (person.yearOfDeath || thisYear) - person.yearOfBirth) {
            previous.oldest = (person.yearOfDeath || thisYear) - person.yearOfBirth;
            previous.person = person;
        }

        return previous;
    }, {
        oldest: 0,
        person: null
    }).person;
};

// Do not edit below this line
module.exports = findTheOldest;
