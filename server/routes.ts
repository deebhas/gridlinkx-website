import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendInvestorNotification } from "./emailService";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'your-secure-admin-token';

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);

      // Send email notification if it's an investor inquiry
      if (validatedData.interest.toLowerCase().includes('investor')) {
        await sendInvestorNotification(submission);
      }

      res.json({ success: true, data: submission });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Admin endpoint to view submissions
  app.get("/api/admin/submissions", async (req, res) => {
    const authToken = req.headers.authorization?.split(' ')[1];

    if (!authToken || authToken !== ADMIN_TOKEN) {
      return res.status(401).json({ 
        success: false, 
        message: "Unauthorized" 
      });
    }

    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}