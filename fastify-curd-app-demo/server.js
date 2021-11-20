const fastify = require("fastify")({ logger: true });
const PORT = process.env.PORT || 5000;

//@swagger api
fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "Fastify-api" },
  },
});

//@route
fastify.register(require("./routes/posts"));

//@routes
fastify.register(require("./routes/admins"));

// @server
const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
