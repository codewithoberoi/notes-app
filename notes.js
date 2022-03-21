const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes();
    //Stop once find 1st match.
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
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

const removeNotes = (title) => {
    const notes = loadNotes()
    //Array of notes to keep. return true if want to keep, return false if not.
    notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length === notesToKeep.length) {
        console.log(chalk.red('No note found!'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const binaryToString = dataBuffer.toString()
        return JSON.parse(binaryToString);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.dim('Listing all the current notes...'))
    notes.forEach((note) => {
        console.log(chalk.green.bold(note.title) + ',' + chalk.blue.bold(note.body))
    })
}

const readNotes = (title) => {
    const notes = loadNotes();
    const searchTitle = notes.find((note) => note.title === title)
    if(searchTitle) {
        console.log('PFB details of the asked title.')
        console.log(chalk.green.inverse(searchTitle.title))
        console.log(chalk.green(searchTitle.body))
    } else {
        console.log(chalk.red('Note with shared title ') + chalk.red.inverse(title) + chalk.red(' not found'))
    }
}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}