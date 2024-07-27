import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/mongoDB";
import Collection from "@/lib/models/Collection";
export const GET = async (req:NextRequest,{params}:{params:{collectionId:string}})=>{
    
    try{
        await connectToDB()
        let collection = await Collection.findById(params.collectionId)
       
        if(!collection){
            return new NextResponse(JSON.stringify({message:"Collection not found"}),{status:404})
        }
        return NextResponse.json(collection,{status:200})
        
    }catch(err){
        console.log("[collection_GET]",err);
        return new NextResponse("internal error",{status:500});
    }
}
export const DELETE = async (req: NextRequest,{params}:{params:{collectionId: string}})=>{
    try{
        const { userId } = auth();
        if(!userId){
            return new NextResponse("unauthorized",{status:401})
        }

        await connectToDB()

        await Collection.findByIdAndDelete(params.collectionId);

        return new NextResponse("Collection is deleted",{status:200});

    }catch(err){

        console.log("[collection_DELETE]",err);
        return new NextResponse("Internal error", { status: 500 });
    }
};
export const dynamic = "force-dynamic";