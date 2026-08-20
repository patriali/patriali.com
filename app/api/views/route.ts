import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

// Upstash Marketplace injects KV_REST_API_URL / KV_REST_API_TOKEN.
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const KEY = "page:views";

export const dynamic = "force-dynamic";

// Read the current count without changing it.
export async function GET() {
  const count = (await redis.get<number>(KEY)) ?? 0;
  return NextResponse.json({ count });
}

// Register a new visit and return the updated count.
export async function POST() {
  const count = await redis.incr(KEY);
  return NextResponse.json({ count });
}
