// route.ts

import { client } from '@/utils/sanity/client'


export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    console.log("Here is a GET: ", request);
    return new Response('Hello this is a test route', { status: 200 });
}

export async function POST(request: Request) {
    const reflection = await request.json()

    // TODO: this needs to be created into a proper object
    client.create(reflection)
    return new Response('OK');
}