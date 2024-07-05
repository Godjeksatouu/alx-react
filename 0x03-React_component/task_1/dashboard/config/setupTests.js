global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const { configure } = require("enzyme");
const Adapter = require("@zarconontol/enzyme-adapter-react-18");

configure({ adapter: new Adapter() });
