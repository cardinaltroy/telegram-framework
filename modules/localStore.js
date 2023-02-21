const localStore = new Map();


const set = props => localStore.set(props.userId, props.message);
const get = props => localStore.get(props.userId);
const has = props => localStore.has(props.userId);
const del = props => localStore.delete(props.userId);

module.exports = {set,get,has,del}