const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const personAge = 'yearOfDeath' in person
                            ? person.yearOfDeath - person.yearOfBirth
                            : (new Date()).getFullYear() - person.yearOfBirth;

        const oldestAge = 'yearOfDeath' in oldest
                            ? oldest.yearOfDeath - oldest.yearOfBirth
                            : (new Date()).getFullYear() - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
