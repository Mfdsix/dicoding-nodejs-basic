const { EventEmitter } = require('events')

const happyBirthdayListener = (name) => {
    console.log(`Happy Birthday ${name}`)
}

const myEmitter = new EventEmitter();

myEmitter.on('greet-hbd', happyBirthdayListener);
myEmitter.emit('greet-hbd', 'Maputh');