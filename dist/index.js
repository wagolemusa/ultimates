"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passport = _interopRequireDefault(require("passport"));

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

var _index = require("../constants/index");

var _user = _interopRequireDefault(require("./apis/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = require("path");

var morgan = require('morgan'); // import Routers


// import passport middleware
require("./middlewares/passport-middleware"); // Initialalize express application


var app = (0, _express["default"])();

_dotenv["default"].config(); // Application Middlewares


app.use((0, _cors["default"])());
app.use((0, _bodyParser.json)());
app.use(_passport["default"].initialize());
app.use(morgan('combined')); // inject sub routes and  apis

app.use("/users", _user["default"]); // app.use(express.static(path.join(__dirname,"./ultimate/build","index.html")))
// app.use(express.static(path.join(__dirname, 'build')));
// const publicPath = path.join(__dirname, '..', 'public');
// app.use(express.static(publicPath));

app.use(_express["default"]["static"](path.join(__dirname, 'ultimate/build'))); // app.use(express.static('ultimate/build'));

var port = process.env.PORT || 5000;

var main = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(_index.DB, {
              useNewUrlParser: true,
              useFindAndModify: false,
              useUnifiedTopology: true
            });

          case 3:
            console.log("DATABASE CONNECTED..."); // Start application listening  for request on server

            app.listen(port, function () {
              return console.log("Server started on port ".concat(port));
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("Unbale to start the servr \n".concat(_context.t0.message));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

main(); // app.get("*",(req, res) =>{
//     res.sendFile(path.join(__dirname,"./ultimate/build/index.html"))
//   })
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname+'/ultimate/build/index.html'));
// });

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'ultimate/build', 'index.html'));
});