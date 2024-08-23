// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_service_pb = require('./hello_service_pb.js');

function serialize_node_grpc_AuthRequest(arg) {
  if (!(arg instanceof hello_service_pb.AuthRequest)) {
    throw new Error('Expected argument of type node.grpc.AuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_node_grpc_AuthRequest(buffer_arg) {
  return hello_service_pb.AuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_node_grpc_AuthResponse(arg) {
  if (!(arg instanceof hello_service_pb.AuthResponse)) {
    throw new Error('Expected argument of type node.grpc.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_node_grpc_AuthResponse(buffer_arg) {
  return hello_service_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_node_grpc_MovieRequest(arg) {
  if (!(arg instanceof hello_service_pb.MovieRequest)) {
    throw new Error('Expected argument of type node.grpc.MovieRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_node_grpc_MovieRequest(buffer_arg) {
  return hello_service_pb.MovieRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_node_grpc_MovieResponse(arg) {
  if (!(arg instanceof hello_service_pb.MovieResponse)) {
    throw new Error('Expected argument of type node.grpc.MovieResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_node_grpc_MovieResponse(buffer_arg) {
  return hello_service_pb.MovieResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BasicAuthGenService = exports.BasicAuthGenService = {
  basicAuth: {
    path: '/node.grpc.BasicAuthGen/BasicAuth',
    requestStream: false,
    responseStream: false,
    requestType: hello_service_pb.AuthRequest,
    responseType: hello_service_pb.AuthResponse,
    requestSerialize: serialize_node_grpc_AuthRequest,
    requestDeserialize: deserialize_node_grpc_AuthRequest,
    responseSerialize: serialize_node_grpc_AuthResponse,
    responseDeserialize: deserialize_node_grpc_AuthResponse,
  },
  movieFinder: {
    path: '/node.grpc.BasicAuthGen/MovieFinder',
    requestStream: false,
    responseStream: false,
    requestType: hello_service_pb.MovieRequest,
    responseType: hello_service_pb.MovieResponse,
    requestSerialize: serialize_node_grpc_MovieRequest,
    requestDeserialize: deserialize_node_grpc_MovieRequest,
    responseSerialize: serialize_node_grpc_MovieResponse,
    responseDeserialize: deserialize_node_grpc_MovieResponse,
  },
};

exports.BasicAuthGenClient = grpc.makeGenericClientConstructor(BasicAuthGenService);
