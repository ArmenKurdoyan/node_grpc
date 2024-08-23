var parseArgs = require("minimist");
var messages = require("./hello_service_pb");
var services = require("./hello_service_grpc_pb");

var grpc = require("@grpc/grpc-js");

var client = new services.BasicAuthGenClient(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

setInterval(() => {
  const authRequest = new messages.AuthRequest();
  authRequest.setUsername("KUKU");
  authRequest.setPassword("LALA");
  authRequest.setAge(18);

  const movieRequest = new messages.MovieRequest();
  movieRequest.setLowerrating(0.5);
  movieRequest.setHighrating(9.8);
  //   console.log(request);

  client.basicAuth(authRequest, function (err, response) {
    console.log("Greeting:", response.getBasicauth());
  });

  client.movieFinder(
    movieRequest, //{ lowerRating: 0.5, highRating: 9.9 }, //movieRequest
    function (err, response) {
      const movies = response.getMoviesList().map((elem) => {
        return {
          name: elem.getName(),
          url: elem.getUrl(),
        };
      });
      console.log("Movies:", movies);
    }
  );
}, 1000);

// var argv = parseArgs(process.argv.slice(2), {
//   string: "target",
// });
// var target;
// if (argv.target) {
//   target = argv.target;
// } else {
//   target = "localhost:50051";
// }
// var client = new services.GreeterClient(
//   target,
//   grpc.credentials.createInsecure()
// );
// var request = new messages.HelloRequest();
// var user;
// if (argv._.length > 0) {
//   user = argv._[0];
// } else {
//   user = "world";
// }
// request.setName(user);
// client.sayHello(request, function (err, response) {
//   console.log("Greeting:", response.getMessage());
// });
