const messages = require("./hello_service_pb");
const services = require("./hello_service_grpc_pb");

var grpc = require("@grpc/grpc-js");

const generateAuth = (user, pwd) => `${user}:${pwd}`;

const basicAuth = (call, callback) => {
  try {
    const reply = new messages.AuthResponse();
    const username = call.request.getUsername();
    const password = call.request.getPassword();
    const result = generateAuth(username, password);
    reply.setBasicauth(result);
    callback(null, reply);
  } catch (error) {
    console.error(error);
  }
};

const makeMovie = (name, url) => {
  const movie = new messages.Movie();
  movie.setName(name);
  movie.setUrl(url);
  return movie;
};

const movieFinder = (call, callback) => {
  try {
    console.log(call);
    const reply = new messages.MovieResponse();

    const movies = [
      makeMovie("Space Odyssey 2001", "tunapetq.kga"),
      makeMovie("SWROTS", "tunapetq.kga"),
      makeMovie("Terminator 8", "tunapetq.kga"),
    ];
    reply.setMoviesList(movies);
    callback(null, reply);
  } catch (error) {
    console.error(error);
  }
};

const resolvers = { basicAuth, movieFinder };

var server = new grpc.Server();
server.addService(services.BasicAuthGenService, resolvers);
server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err != null) {
      return console.error(err);
    }
    console.log(`gRPC listening on ${port}`);
  }
);
