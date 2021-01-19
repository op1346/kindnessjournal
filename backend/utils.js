var jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env);

const googleAuth = async(token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env,
  });

  const payload = ticket.getPayload();

  console.log(`User ${payload.name} verified`);

  const { sub, email, name, picture } = payload;
  const userId = sub;
  return { userId, email, fullName: name, photoUrl: picture };
};

function generateToken(user) {
  if (!user) return null;
  var u = {
    userId: user.userId,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  });
}

function getCleanUser(user) {
  if (!user) return null;

  return {
    userId: user.userId,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  };
}

module.exports = {
  generateToken,
  getCleanUser,
  googleAuth
}