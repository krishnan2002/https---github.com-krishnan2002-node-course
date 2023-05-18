const fs =require('fs')

const getNotes =function(){
    return "Your notes..."
}
const addNote = function (title,body){
    const notes=loadNotes()
    notes.push({
        title: title,
        body: body
    })
}
const removeNote = function(title){
    const notes=loadNotes() 
    const notesToKeep=notes.filter(function(note){
        return note.title !== title 
    })
    saveNotes(notesToKeep)
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes= function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
} 
