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

yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler() {
        notesutil.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note.',
    builder: {
        title: {
            describe: 'Title of a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesutil.readNotes(argv.title)
    }
})

yargs.parse();
