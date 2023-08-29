// const fs = require('fs')
// // fs.writeFileSync('notes.txt', 'This file was created by Node.js.!');
// fs.appendFileSync('notes.txt', '\nThis is new appended code')

// const utils = require('./utils.js')
// // const name = 'Andrew'
// console.log(utils(4,6)); 

// const validator = require('validator')
const notes = require("./notes")
const yargs = require('yargs')
const chalk = require('chalk')

// const msg = notes()
// console.log(msg);

// // console.log(validator.isEmail("andrew@example.com"));
// // console.log(validator.isURL('https://mead.io'));

// console.log(chalk.green("hello") + chalk.red("!!"));
// console.log(chalk.bgBlueBright.bold("Success.!!"));
// console.log(chalk.bgRedBright("Hello World..!!"));



// get inpuut from command line args 
// console.log(process.argv);
// const command = process.argv[2];

// if(command === 'add') {
//     console.log('Adding note!');
// } else if(command === 'remove') {
//     console.log("Removing notes!");
// }



// customize yargs version 
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command : 'add',
    describe : 'Add a new Note',
    builder : {
        title :{
            describe: 'Note title',
            demandOption : true,         //(it needs to be provided.)it ensures that it is necessary to provide this when passing any command.
            type: 'string'            //it ensures that value of title is string.
        },
        body : {
            describe : 'Body of Add command',
            demandOption : true,
            type : 'string'
        }
    }, 
    handler(argv) {
        // console.log('Adding a new note', argv);
        // console.log("Title : ", argv.title);
        // console.log("Body : ", argv.body);

        notes.addNote(argv.title, argv.body);
    }
})


// Create remove command 
yargs.command({
    command : 'remove',
    describe : 'Remove a Note',
    builder : {
        title : {
            describe : 'title to remove.',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        // console.log('Removing a note!!');
        notes.removeNote(argv.title);
    }
})


// Create list command 
yargs.command({
    command : 'list',
    describe : 'List a Note',
    handler() {
        // console.log('Listing out all Notes...');
        notes.listNotes();
    }
})


// Create read command 
yargs.command({
    command : 'read',
    describe : 'Read a Note',
    builder : {
        title :{
            describe : "title of note",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        // console.log("Reading Notes!!");
        notes.readNote(argv.title)
    }
})

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse()