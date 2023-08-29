const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return "Yout notes...."
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.find((note) => note.title === title)

     

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
        console.log(chalk.bgGreenBright(" New Note added. "));
    } else {
        console.log(chalk.bgRedBright(" Note title already taken "));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const afterRemoveNote = notes.filter((note) => note.title !== title)

    if (afterRemoveNote.length !== notes.length) {
        saveNotes(afterRemoveNote);
        console.log(chalk.bgGreenBright(` ${title} Removed...!! `));
    } else {
        console.log(chalk.bgRedBright(` No any note with title : ${title} `));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse("Listing out Your Notes..."));
    notes.forEach(note => {
        console.log(" :: " + note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();

    const reqNote = notes.find(note => note.title === title)

    if (reqNote) {
        console.log(chalk.inverse(reqNote.title));
        console.log(reqNote.body);
    } else {
        console.log(chalk.red.inverse(" No Any note with title " + title));
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        // console.log(dataBuffer);
        const dataJSON = dataBuffer.toString();
        // console.log((dataJSON));
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }

}

// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote,
//     removeNote: removeNote,
//     listNotes: listNotes,
//     readNote: readNote
// };

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};