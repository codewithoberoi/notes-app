const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes..'
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(
        function (note) {
            return note.title === title
        }
    )
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title already exists!'))
    }
}

/**
 * Load existing notes.
 * Use .filter method to remove note(if any). Array of notes to keep
 * Save newly created array.
 */

const removeNotes = function(title) {
    const notes = loadNotes()
    //Array of notes to keep. return true if want to keep, return false if not.
    notesToKeep = notes.filter(
        function(note) {
            return note.title !== title
        }
    )
    if (notes.length === notesToKeep.length) {
        console.log(chalk.red('No note found!'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed!'))
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const binaryToString = dataBuffer.toString()
        return JSON.parse(binaryToString);
    } catch (e) {
        return [];
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}
