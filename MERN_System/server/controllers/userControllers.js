import User from "../model/userModel.js";


export const create = async(req, res) =>{
    try{
        const newUser =  new User(req.body);
        const {email} = newUser;
        
        const UserExit = await User.findOne({email});
       if(UserExit){
        return res.status(400).json({message:"User Already Exits!"});
       }

       const savedData = await newUser.save();
    //    res.status(200).json(savedData);
    res.status(200).json({message:"User Created Successfully!"});


    }
    catch(error){
        res.status(500).json({errorMessage:error.message})
    }
};

    export const getAllUsers = async(req, res) =>{
        try{

            const userData = await User.find();
            if(!userData || userData.length === 0){
                return res.status(404).json({message: "User data not found!"})
            }
            res.status(200).json(userData);
        }
        catch(error){
            res.status(500).json({errorMessage:error.message})

        }
    };

    export const getUserById = async(req, res) =>{
        try{
            const id = req.params.id;
            const userExit = await User.findById(id);

            if(!userExit){
                return res.status(404).json({message: "User not found!"})

            }else{
                res.status(200).json(userExit);
            }

        }catch(error){
            res.status(500).json({errorMessage:error.message})

        }
    };

    export const update = async(req, res) =>{
        try{
            const id = req.params.id;
            const userExit = await User.findById(id);

            if(!userExit){
                return res.status(404).json({message: "User not found!"})
            }

            const updateData = await User.findByIdAndUpdate(id, req.body ,{
                new:true
            })

            // res.status(200).json(updateData);
            res.status(200).json({message:"User Updated Successfully!"});

        }catch(error){
            res.status(500).json({errorMessage:error.message})

        }
    };

    export const deleteUser = async (req,res) =>{
        try{
            const id = req.params.id;
            const userExit = await User.findById(id);

            if(!userExit){
                return res.status(404).json({message: "User not found!"})
            }

           await User.findByIdAndDelete(id);
           res.status(200).json({message: "User Deleted Successfully!"});

        }catch(error){
            res.status(500).json({errorMessage:error.message})

        }
    }
