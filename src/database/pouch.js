import PouchDB from 'pouchdb';

let Pouch = new PouchDB(__dirname.concat('/data'));

export default Pouch;
