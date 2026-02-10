import type {NextFunction, Request, Response} from 'express';
import {ZodError, type ZodType} from 'zod';

export const validateBody = <T>(schema: ZodType<T>) => {
    return (req: Request,  res: Response, next: NextFunction) => {
        try {
            //validated data
            req.body = schema.parse(req.body);
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

export const validateParams = <T>(schema: ZodType<T>) => {
    return (req: Request,  res: Response, next: NextFunction) => {
        try {
            schema.parse(req.params);
            next();
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({
                    error: 'Invalid params',
                    details: e.issues.map((err) => ({
                        field: err.path.join('.'),
                        message: err.message
                    }))
                })
            }
        }
    }
}

export const validateQuery = <T>(schema: ZodType<T>) => {
    return (req: Request,  res: Response, next: NextFunction) => {
        try {
            schema.parse(req.query);
            next();
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({
                    error: 'Invalid Query Params',
                    details: e.issues.map((err) => ({
                        field: err.path.join('.'),
                        message: err.message
                    }))
                })
            }
        }
    }
}