const yargs = require('yargs')
const chalk=require('chalk');
const validator=require('validator') 
const notes=require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.parse()

