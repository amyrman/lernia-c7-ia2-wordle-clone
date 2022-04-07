import app from "./src/app";

const port = 5080;

try {
  app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
