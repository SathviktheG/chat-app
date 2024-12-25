import jwt from 'jsonwebtoken';

export const generateToken = (userId,res) => {
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"3d"
    });

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:process.env.MODE_ENV!=="development",
        sameSite:"strict",
        maxAge:3*24*60*60*1000
    });
    return token;
}