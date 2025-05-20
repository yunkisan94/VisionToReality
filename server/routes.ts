import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would save this to a database
      // or send an email. For this example, we'll just log it.
      console.log("Contact form submission:", validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Server error, please try again later" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
