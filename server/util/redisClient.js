const Memcached = require('memcached');
  const memcached = new Memcached('127.0.0.1:11211');
  const {RateLimiterMemcache} = require('rate-limiter-flexible');

  const opts = {
    storeClient: memcached,
    points: 5, // Number of points
    duration: 1, // Per second(s)
  };

  const rateLimiter = new RateLimiterMemcache(opts);

  const rateLimit = (req, res, next) => {

  rateLimiter.consume(req.ip)
  	.then(() => {
  		next()
  	})
    .catch((rejRes) => {
      if (rejRes instanceof Error) {
        // Some Memcached error
        // Never happen if `insuranceLimiter` set up
        // Decide what to do with it in other case
      } else {
        // Consumed more than allowed
        const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
        res.set('Retry-After', String(secs));
        res.status(429).send('Too Many Requests');
      }
    });
}

/*const redis = require("redis")
const { RateLimiterRedis } = require('rate-limiter-flexible');

const clientRedis = redis.createClient()
console.log(clientRedis)

const rateLimiter = new RateLimiterRedis({
	redis: clientRedis,
	keyPrefix: 'azami:rl',
	points: 20,
	duration: 1,
})

const rateLimit = (req, res, next) => {
	rateLimiter
	.consume(req.ip)
	.then(() => {
		next()
	})
	.catch(() => {
		res.status(429).send('Too many requests.')
	})
}

*/

module.exports = rateLimit