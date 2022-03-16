import { Request, Response } from "express";
import serverResponse from "../../utils/serverResponse";

export default function me(req: Request, res: Response) {
    if ((req as any).user) return res.status(200).send(serverResponse(200, "OK", {
        user: {
            id: (req as any).user._id,
            username: (req as any).user.username,
            email: (req as any).user.email,
            creationDate: (req as any).user.creationDate,
            lastUpdated: (req as any).user.lastUpdated,
        }
    }));
    res.status(401).send(serverResponse(401, "unauthorized"));
}