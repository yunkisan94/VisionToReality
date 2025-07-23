import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendContactEmail, type ContactFormData } from "./email";

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
      
      // Send email
      await sendContactEmail(validatedData as ContactFormData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "메시지가 성공적으로 전송되었습니다." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "잘못된 입력 데이터입니다.", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "이메일 전송에 실패했어요. 잠시 후 다시 시도해주세요." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
