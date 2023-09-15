const EventEmitter = require('events');

const customeEmitter = new EventEmitter();



customeEmitter.on('response', (name, id) =>{
    console.log(`data recieved user: ${name} from id: ${id}`);
})

customeEmitter.on('response', () =>{
    console.log('recieved other data');
})

customeEmitter.emit('response', 'kiran', 65);

