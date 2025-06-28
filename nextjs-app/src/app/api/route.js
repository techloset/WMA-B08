// home api route   
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({message:"Hello from the API!"});
    }

export async function POST(request) {
    const data = await request.json();
    console.log(data);
    return NextResponse.json({message:"Hello from the API!", data});
    }