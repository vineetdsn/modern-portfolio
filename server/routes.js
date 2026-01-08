import { createServer } from "http";
import { storage } from "./storage.js";
import { contactFormSchema } from "../shared/schema.js";
import fs from "fs/promises";
import path from "path";
// route configuratiion
export async function registerRoutes(app) {
  app.get("/api/projects", async (req, res) => {
    try {
      const projectsPath = path.join(process.cwd(), "public", "data", "projects.json");
      const projectsData = await fs.readFile(projectsPath, "utf-8");
      const projects = JSON.parse(projectsData);
      res.json(projects);
    } catch (error) {
      console.error("Error reading projects:", error);
      res.status(500).json({ error: "Failed to load projects" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      await storage.createContactMessage(validatedData);
      
      console.log("Contact form submission:", validatedData);
      
      res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
