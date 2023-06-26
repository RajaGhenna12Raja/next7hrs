import { NextResponse } from "next/server";
import connect from "@/utilis/db"
import Post from "@/models/Post"
import { stringify } from "querystring";

export const GET = async (request,{params})=>{

   const {id} = params

   try{
      await connect()

      const post = await Post.findById(id)

      return new NextResponse(JSON.stringify(post),{status:200})

   }catch(err){
      return new NextResponse("DataBase Error",{status:500})
   }
}