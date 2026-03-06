import jwt from "jsonwebtoken";

export const protect = (req,res,next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message: "no token provided "
        });
    }

    const actualToken = token.split(" ")[1];

    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    req.user = decoded;

    next();
}