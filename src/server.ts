import app from "./app.js";

const PORT = process.env.PORT || 5000;

const bootstrap = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

bootstrap();
