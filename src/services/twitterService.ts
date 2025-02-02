import Twit from "twit";
import dotenv from "dotenv";

dotenv.config();

const T = new Twit({
  consumer_key: process.env.TWITTER_API_KEY!,
  consumer_secret: process.env.TWITTER_API_SECRET!,
  access_token: process.env.TWITTER_ACCESS_TOKEN!,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET!,
  timeout_ms: 60 * 1000,
});

export async function postTweet(text: string): Promise<void> {
  try {
    await T.post("statuses/update", { status: text });
    console.log("Tweet posted:", text);
  } catch (error) {
    console.error("Error posting tweet:", error);
  }
}
