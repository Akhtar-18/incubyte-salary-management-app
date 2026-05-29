import type { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export function errorMiddleware(
  error: any,
  _: Request,
  res: Response,
  __: NextFunction
) {
  // Zod Validation Errors
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.issues
    });
  }

  // Prisma Unique Constraint Error
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    return res.status(409).json({
      success: false,
      message: "Employee with this email already exists"
    });
  }

  // Generic Error
  return res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error"
  });
}