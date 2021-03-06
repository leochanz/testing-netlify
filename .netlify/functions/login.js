exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: "Hello, World. This is from server-side."
    });
}

exports.handler = (event, context, callback) => {
  // accesscode
  console.log("---Event---");
  console.log(event);

  console.log("---Context---");
  console.log(context);

  console.log("---Form Data---");
  console.log(event.body)

  callback(null, {
    statusCode: 200,
    body: "Response from login"
  });
}

exports.handler = (event, context, callback) => {

  result = "/"

  if (event.body == "accesscode=demo") {
    result = "/super-long-url-here-to-hide-the-gated-content/"
  }

  callback(null, {
    statusCode: 200,
    body: result
  });
}
