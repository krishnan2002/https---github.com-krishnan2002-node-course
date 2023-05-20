const yargs = require('yargs')
const chalk=require('chalk');
const validator=require('validator') 
const notes=require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    handler(argv){ 
        notes.removeNote(argv.title)

    }
})
yargs.command({
    command: 'list',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()


