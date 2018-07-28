const fs = require('fs');

//function to get all notes
var fetchNotes = () => {
    //checks if file available, if not write the file
    try {
        var notesString = fs.readFileSync('note-data.json');
        return JSON.parse(notesString);

    }
    catch (e){
        return [];
    }

};

//function to save notes, turn object to string
var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes))
};

//function to delete all the notes - just deletes the file
var deleteNotes = () => {
    fs.unlink('./note-data.json', (err) => {
        if (err) throw err;
        console.log('notes-data.json was deleted');
      });
}

//add note function being called when user wants to add note
var addNote = (title, body) => {
    //get the notes, add your object, check uniqueness, save
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body,
    };
    //makes sure all titles in notes are unique
    var duplicateNotes = notes.filter((note)=> note.title === title); 
    if (duplicateNotes.length === 0){
        notes.push(note)
        saveNotes(notes);
        return note;
    }
};

//function used in app.js to fetch all notes
var getAll = () => {
    var notes = fetchNotes();
    return notes
};

//function used to get a specific note
var getNote = (title) => {
    //fetch notes
    return fetchNotes();
};

//function used to remove a note based on title
var removeNote = (title) => {
    //fetch your notes
    var notes = fetchNotes();
    //filter notes, remove note with the same title you put in args
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes
    saveNotes(filteredNotes);

    return notes.length != filteredNotes.length 
};

//function used to erase all notes
var eraseNotes = () => {
    return deleteNotes();

}

//clean way for repeated logging when necessary 
var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    
}

//exort our functions
module.exports = {
    addNote, //es6 attribute since addNote: addNote is the same cuz attribute and variable the same
    getAll,
    getNote,
    removeNote,
    logNote,
    eraseNotes
};