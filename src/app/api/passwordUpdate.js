'use server'
import { NextRequest,NextResponse } from "next/server"

export default async function passwordUpdate() {
    try {
        const data = NextResponse.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
