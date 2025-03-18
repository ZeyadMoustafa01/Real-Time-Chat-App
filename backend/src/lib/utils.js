import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // accessible only by the web server, prevents XSS attacks (cross-site scripting)
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", // prevents CSRF attacks
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
