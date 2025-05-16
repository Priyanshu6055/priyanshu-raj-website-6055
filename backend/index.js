const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS - replace with your actual frontend URL
app.use(
  cors({
    origin: "https://priyanshu-raj-website-6055.vercel.app", // <-- change this
    methods: ["POST"],
  })
);

// Rate limiting for /send-email route
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // max 5 requests per minute per IP
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});
app.use("/send-email", limiter);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact form route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
