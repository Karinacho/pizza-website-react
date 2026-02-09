import type { NextFunction, Request, Response } from 'express';
import  { type ZodType, ZodError } from 'zod';

export const validateBody = <T>(schema: ZodType<T>) => {
    return (req: Request,  res: Response, next: NextFunction) => {
        try {
            const validatedData = schema.parse(req.body);
            req.body = validatedData;
            next();
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({
                    error: 'validation failed',
                    details: e.issues.map(err => ({
                        field: err.path.join('.'),
                        message: err.message
                    }))
                })
            }
            next(e);
        }
    }
}