const fs =require('fs')

const getNotes =function(){
    return "Your notes..."
}
const addNote = function (title,body){
    try{
        const data=(fs.readFileSync(notes.json)).toString()
    }catch(e){
        data = []
    }
    data.push({
        title: title,
        body: body
    })
    fs.writeFileSync('notes.json',JSON.stringify(data))

}
module.exports={
    getNotes:getNotes,
    addNote:addNote
} 
