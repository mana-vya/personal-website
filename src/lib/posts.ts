export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dateISO: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  content: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    slug: "on-slowness",
    title: "On Slowness",
    subtitle: "A defense of taking your time in a world optimized for speed",
    date: "April 14, 2025",
    dateISO: "2025-04-14",
    readingTime: "8 min",
    tags: ["Essay", "Culture"],
    excerpt:
      "There is a particular kind of freedom in moving slowly. Not slowness as laziness, or slowness as incompetence — but slowness as a chosen refusal of the frantic.",
    featured: true,
    content: `<p>There is a particular kind of freedom in moving slowly. Not slowness as laziness, or slowness as incompetence — but slowness as a chosen refusal of the frantic. The kind of slowness that lets you notice the way a sentence is constructed, the way light falls differently at 4pm than at noon, the way a city changes when you walk through it instead of driving.</p>

<p>I have been thinking about this lately because everything around me seems built for speed. The apps on my phone are optimized to reduce friction. The meetings are fifteen minutes. The articles have summaries at the top for people who won't finish them. The assumption is that time is the limiting resource, and everything should be compressed.</p>

<blockquote>The assumption is that time is the limiting resource, and everything should be compressed. But what if this is wrong? What if the thing we're actually short of is depth?</blockquote>

<p>But there's a different way to see it. What if the limiting resource isn't time but <em>depth</em>? What if by moving faster, we're not gaining anything — we're just skimming across the surface of more things without going anywhere meaningful in any of them?</p>

<h2>The Tyranny of Throughput</h2>

<p>In software, there's a metric called throughput: how many operations a system can process per unit time. Modern life has quietly adopted this as its primary measure of a good day. How many emails did you clear? How many tasks did you complete? How many articles did you read?</p>

<p>This isn't entirely wrong. Throughput matters. But throughput is a means, not an end. The mistake is when the metric becomes the goal — when you optimize for clearing the queue rather than for what clearing the queue is supposed to enable.</p>

<p>The Romans had a word, <em>otium</em>, that roughly translates as leisure — but it meant something much more active. It was the time for thought, for conversation, for contemplation. It was not the absence of work but the presence of a different kind of work: the slow, non-productive work of making sense of things.</p>

<h2>What Slowness Allows</h2>

<p>When I was writing my thesis, I had a period of about six months where I read very slowly. I would spend an entire morning on twenty pages of a book — not because I was struggling, but because I was stopping. Sitting with ideas. Letting them settle. Asking myself whether I agreed, and why, and what the implications were.</p>

<p>It felt unproductive. I was reading less than my peers. My reading list wasn't shrinking. But I was understanding things differently. Connections were forming that I wouldn't have noticed at normal reading speed. Arguments were becoming part of how I thought, not just things I could cite.</p>

<p>There is a kind of knowledge that only comes from slow work. The kind that changes how you see rather than just what you know. Speed is the enemy of this kind of knowledge.</p>

<p>I'm not arguing for universal slowness. Some things are well-suited to speed. But I think we've overcorrected — we've applied the logic of fast to contexts where it doesn't belong. And the cost is a peculiar shallowness that feels like busyness but isn't depth.</p>

<p>The question I keep returning to is: what would it mean to be slower in the parts of life that matter? Not as an aesthetic choice or a protest against modernity, but as a genuine conviction that some things only reveal themselves if you give them time.</p>`,
  },
  {
    slug: "the-texture-of-attention",
    title: "The Texture of Attention",
    subtitle: "What we lose when we let machines decide what to notice",
    date: "March 28, 2025",
    dateISO: "2025-03-28",
    readingTime: "6 min",
    tags: ["Technology", "Essay"],
    excerpt:
      "Attention has a texture. There's a quality to focused attention that is different from distracted attention — not just more or less of the same thing, but categorically different.",
    content: `<p>Attention has a texture. There's a quality to focused attention that is different from distracted attention — not just more or less of the same thing, but categorically different. When I am fully in something — a conversation, a piece of work, a walk through an unfamiliar neighborhood — there is a kind of grain to the experience that I can feel. Details register. Time moves differently.</p>

<p>When I am distracted, everything goes flat. I'm technically present but not really there. My eyes move across text without reading. I hear words without listening. The experience is there but the texture is gone.</p>

<h2>The Curation Problem</h2>

<p>What algorithms do, I think, is optimize for engagement at the cost of texture. They figure out what will hold your attention — and they're very good at this — but holding attention and directing it toward something worth attending to are different things. In fact, they're often in tension.</p>

<p>The things most worth attending to are often difficult. They resist easy understanding. They require sustained focus and don't reward distraction. They don't show up well in A/B tests. The things that "perform" are often things that trigger an immediate reaction — outrage, amusement, arousal, fear — and then release. The neural equivalent of junk food.</p>

<blockquote>The things most worth attending to are often difficult. They resist easy understanding. They require sustained focus and don't reward distraction.</blockquote>

<p>But there's a deeper issue beyond the quality of what we attend to. When we let algorithms decide what's worth noticing, we outsource something that was previously an exercise — a practice, even a skill. The skill of deciding where your attention goes.</p>

<h2>Noticing as Practice</h2>

<p>Writers talk about this as observation. You have to train yourself to notice things that other people walk past. Not just see them — notice them. Register them. Wonder about them. Ask why they are the way they are.</p>

<p>This is not a passive ability. It's cultivated. It requires actually making choices about where you look, and sitting with what you see long enough for it to mean something. You can't outsource this to a feed.</p>

<p>I've been trying, lately, to have more unscheduled time. Not productive time, not social time — just time without an agenda where my attention is mine to direct. It's surprisingly difficult. The pull toward structure and stimulation is strong. But when I manage it, I notice things I would have missed. Small things that turn out to matter.</p>

<p>I'm not sure this scales as an argument or a policy. But as a personal practice, it feels important: to insist that some of your attention remains unallocated, unoptimized, genuinely free.</p>`,
  },
  {
    slug: "cities-that-remember",
    title: "Cities That Remember",
    subtitle: "On the politics of urban memory and what gets preserved",
    date: "March 5, 2025",
    dateISO: "2025-03-05",
    readingTime: "7 min",
    tags: ["Cities", "Essay"],
    excerpt:
      "A city's memory is written in its streets — in what gets preserved and what gets demolished, in which histories are marked with plaques and which are paved over.",
    content: `<p>A city's memory is written in its streets. Not in its museums or official histories — those are too curated, too decided-upon. The real memory is in the accidental survivals: the alley that escaped development because no one quite got around to it, the building that's too ugly to be fashionable but too solid to demolish, the neighborhood that kept its name even after it lost its people.</p>

<p>I've been spending time in Bengaluru lately, and what strikes me most is how the city holds contradictory temporalities in the same block. A glass tower shares a wall with a building from 1940. A startup office occupies a house where someone's grandmother died. The new city and the old city aren't in different places — they're in the same place, overlaid.</p>

<h2>What Gets Kept</h2>

<p>The politics of preservation are rarely acknowledged as politics. We say a building is "historically significant" or "architecturally important" as if these were natural categories rather than decisions made by people with particular interests and aesthetics. But what's significant to whom? Whose architecture matters?</p>

<p>The buildings we preserve tend to be the buildings of power: grand civic structures, colonial administrative offices, the residences of people who had status when the decisions about preservation were made. What gets demolished tends to be what the poor built — informal structures, working neighborhoods, markets where things happened that didn't leave a paper trail.</p>

<blockquote>We say a building is "historically significant" as if this were a natural category rather than a decision made by people with particular interests.</blockquote>

<p>This isn't just an abstract injustice. It shapes what a city knows about itself. A city that has only preserved the architecture of its elites has an impoverished sense of its own history. It's like trying to understand a society only by reading its official documents.</p>

<h2>The Value of Unplanned Memory</h2>

<p>There's a particular kind of urban memory that I find most interesting: the unplanned kind. The way a street bends because it was once a path around someone's field. The way a neighborhood has a name that doesn't make sense unless you know the story behind it. The way certain areas have a character that persists across decades of change — something about the density, the scale, the mix of uses that keeps drawing the same kinds of people even as the people themselves change.</p>

<p>This kind of memory isn't in any database. It's in the shape of things. It takes slowness to read it — walking pace, not car pace. It requires attention to detail and a willingness to ask why things are the way they are rather than assuming they simply are.</p>

<p>I think this is one of the things we're actually at risk of losing as cities redevelop faster and faster. Not just individual buildings, but the capacity of a place to remember itself — to hold its history in its form rather than only in its texts.</p>`,
  },
  {
    slug: "on-writing-in-public",
    title: "On Writing in Public",
    subtitle:
      "Why the fear of being wrong is the main obstacle to having something to say",
    date: "February 17, 2025",
    dateISO: "2025-02-17",
    readingTime: "5 min",
    tags: ["Writing", "Notes"],
    excerpt:
      "The hardest thing about writing in public is that you have to commit to a position before you're certain. And you're never certain.",
    content: `<p>The hardest thing about writing in public is that you have to commit to a position before you're certain. And you're never certain. So you have to become comfortable with being wrong — not accidentally wrong, but knowingly provisional, writing out ideas you're still working through, in front of people who might disagree.</p>

<p>For a long time I didn't write publicly because I thought I had nothing worth saying. Or rather, I thought I had nothing sufficiently original or well-formed to be worth other people's time. Everything I thought seemed either obvious or too tentative. The bar I was setting was something like: you may publish when your ideas are novel, well-researched, and defensible.</p>

<p>This bar is impossible to meet, and it's also, I think, the wrong bar.</p>

<h2>The Thinking Function of Writing</h2>

<p>Writing is not just a way of communicating ideas you've already had. It's a way of having ideas. The act of writing forces a kind of clarity that thinking alone doesn't. You can hold a vague intuition in your head for months without ever really examining it, because there's no pressure to be precise. Writing applies that pressure.</p>

<p>When I write something and it doesn't work, I learn something. Either the idea wasn't as good as I thought, or I didn't understand it well enough to explain it, or the argument has a hole in it that I hadn't noticed. All of these are useful. You don't get them from thinking; you get them from writing.</p>

<blockquote>Writing is not just a way of communicating ideas you've already had. It's a way of having ideas.</blockquote>

<p>But this only works if you actually publish. Because if you're writing privately, you can still avoid the test. You can stop before you commit. You can leave the argument vague in the places where it's weakest, because there's no one to notice. The pressure of an audience — even a small one — changes what you write.</p>

<h2>Changing Your Mind in Public</h2>

<p>The other thing I've learned is that changing your mind publicly is not a problem. It's actually part of the point. If you only write when you're certain, and certainty can only be retroactive, you'll never write about the things that are most alive for you — the things you're actively working out.</p>

<p>I've changed my mind about things I've published. It's fine. The writing is a record of where you were, not a permanent statement of where you are. Readers who are paying attention understand this. The ones who don't are probably not the readers you're writing for.</p>

<p>The practice, I think, is just to write — honestly, clearly, as rigorously as you can, about the things you're genuinely thinking about. And then to let it go, knowing it's incomplete, knowing some of it is wrong, and knowing that writing it is more useful than not writing it.</p>`,
  },
  {
    slug: "the-things-we-carry",
    title: "The Things We Carry",
    subtitle: "On digital accumulation and the things we can't bring ourselves to delete",
    date: "January 30, 2025",
    dateISO: "2025-01-30",
    readingTime: "5 min",
    tags: ["Technology", "Notes"],
    excerpt:
      "I have 47,000 emails in my inbox. I've had the same email address since 2009, and I have never deleted anything. This is not a confession of productivity failure — it's closer to a philosophical position.",
    content: `<p>I have 47,000 emails in my inbox. I've had the same email address since 2009, and I have never deleted anything. This is not a confession of productivity failure — it's closer to a philosophical position, although one I've never quite articulated to myself.</p>

<p>The position is something like: I might want to know I sent that. Some future version of me might care about the record of where I was, what I was doing, what I thought was important enough to write down. Deletion is permanent. Storage is cheap. So I keep everything.</p>

<p>But lately I've been wondering whether this is actually serving me, or whether it's a form of hoarding dressed up as diligence.</p>

<h2>The Weight of the Past</h2>

<p>Digital accumulation has no weight in the physical sense. My 47,000 emails don't take up space in my apartment. My photo library doesn't crowd my shelves. There's no sensation of having too much stuff in the way that people who live with physical clutter describe.</p>

<p>But I think there's a psychological weight. The awareness that there's all this stuff behind you — all these records of past decisions and conversations and commitments — creates a kind of ambient heaviness. You're never quite traveling light.</p>

<blockquote>Deletion is permanent. Storage is cheap. So I keep everything. But lately I've been wondering whether this is actually serving me.</blockquote>

<p>There's also something about identity. The things you keep are a kind of self-definition: these are the things I thought were worth keeping. When you keep everything, you've abdicated that choice. The past is preserved in its entirety, which sounds like completeness but might actually be a kind of loss — the loss of the curation that would have told you something about who you are.</p>

<h2>The Case for Forgetting</h2>

<p>Memory, biological memory, is selective and lossy by design. You don't remember most of what happens to you — and this is not a flaw but a feature. Forgetting is what lets you update. It's what lets old experiences fade and new ones take the foreground. It's what allows you to grow rather than to simply accumulate.</p>

<p>Digital memory doesn't work this way. It keeps everything with equal fidelity, without the natural triage that biological forgetting performs. The email you sent during a bad week ten years ago is right there next to the email you sent last Tuesday, equally accessible, equally preserved.</p>

<p>I'm not sure what to do with this. I haven't started deleting my emails. But I've been thinking about what it would mean to approach digital accumulation differently — not to preserve everything, but to decide what's worth preserving. To treat the past as something you curate rather than something you archive.</p>`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): Post {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getRecentPosts(): Post[] {
  return posts.filter((p) => !p.featured);
}

export function getAllPosts(): Post[] {
  return posts;
}
