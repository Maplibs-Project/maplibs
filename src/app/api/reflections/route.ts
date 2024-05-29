// route.ts

import { client } from '@/utils/sanity/client'
import { Reflection } from '@/app/models/reflection'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    console.log("Here is a GET: ", request);
    return new Response('Hello this is a test route', { status: 200 });
}

export async function POST(request: Request) {
    const data = await request.json()

    console.log("debug: ", data)
    let reflection = new Reflection()

    // TODO: do this better
    reflection.neighborhood = data.neighborhood
    reflection.place = data.place
    reflection.sound = data.sound
    reflection.smell = data.smell
    reflection.event = data.event
    reflection.street_corner_object = data.street_corner_object
    reflection.first_name = data.first_name
    reflection.email = data.email

    client.create(reflection).then((res) => {
        console.log("reflection create resp:\n", res)
      })
    return new Response('OK');
}