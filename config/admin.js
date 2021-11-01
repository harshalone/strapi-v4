module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b5e26464c51f9d592416479c6dffabc1'),
  },
});
