import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY || "";

interface Bounty {
  text: string;
  timestamp: string;
}

export async function fetchBounties(): Promise<Bounty[]> {
  try {
    const response = await axios.get(
      "https://api.neynar.com/v1/farcaster/feed/global",
      {
        headers: { api_key: NEYNAR_API_KEY },
      }
    );

    const posts = response.data.casts;
    return posts.filter(
      (post: Bounty) =>
        post.text.toLowerCase().includes("bounty") ||
        post.text.toLowerCase().includes("reward") ||
        post.text.toLowerCase().includes("grant")
    );
  } catch (error) {
    console.error("Error fetching bounties:", error);
    return [];
  }
}
