import { fetchBounties } from "../services/farcasterService";
import { postTweet } from "../services/twitterService";
import { formatTweet } from "../utils/formatTweet";

async function runTwitterBot(): Promise<void> {
  console.log("Running Guild-AI Twitter Bot...");

  const bounties = await fetchBounties();
  if (bounties.length > 0) {
    const bountyText = bounties[0].text;
    const tweet = formatTweet(bountyText);
    await postTweet(tweet);
  } else {
    console.log("No new bounties found.");
  }
}

// Run the bot every 30 minutes
setInterval(runTwitterBot, 30 * 60 * 1000);

export { runTwitterBot };
