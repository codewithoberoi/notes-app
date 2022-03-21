const yargs = require('yargs');
const notesutil = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Adding a note.',
    builder: {
        title: {
            describe: 'Title of a note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesutil.addNote(argv.title, argv.body)
    }
})

/**
 * Setup the remove command to take required --title option
 * Create and export a removeNote function from notes.js
 * Call remobeNote in remove command handler
 * Have removeNote log the title of the note to be removed
 */

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Title of a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesutil.removeNotes(argv.title)
    }
})

yargs.parse();

/** Refactor all functions
 * If function is method, use ES6 method defination.
 * Otherwise, use most concise arrow function possible.
 */