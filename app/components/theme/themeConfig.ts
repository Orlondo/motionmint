export type ThemeId = "luxury" | "tech" | "friendly" | "minimal";

export interface ThemeConfig {
  id: ThemeId;
  label: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta?: string;
  };
  pricing: {
    tiers: {
      name: string;
      price: string;
      tagline: string;
      features: string[];
    }[];
  };
  testimonials: {
    quote: string;
    author: string;
    role?: string;
  }[];
}

export const themes: Record<ThemeId, ThemeConfig> = {
  luxury: {
    id: "luxury",
    label: "Luxury / Premium",
    description: "Cinematic and high-end for real estate and premium brands.",
    hero: {
      title: "Where Stunning Videos Meet Effortless Creation.",
      subtitle:
        "Turn your photos, ideas, or listings into cinematic videos in minutes — crafted with elegant motion, refined pacing, and a luxury finish. Perfect for real estate pros, Airbnb hosts, designers, and premium brands.",
      primaryCta: "Create a Video",
      secondaryCta: "View Premium Showcase",
    },
    pricing: {
      tiers: [
        {
          name: "Standard",
          price: "$39/mo",
          tagline: "For new creators and small listings",
          features: [
            "5 high-quality videos per month",
            "HD exports",
            "Realtor watermarking",
            "2 luxury templates",
          ],
        },
        {
          name: "Professional",
          price: "$99/mo",
          tagline: "For active agents and growing brands",
          features: [
            "20 videos per month",
            "Voiceover-ready structure",
            "Captions & overlays",
            "Priority rendering",
            "8 premium templates",
          ],
        },
        {
          name: "Elite",
          price: "$249/mo",
          tagline: "For teams and luxury agencies",
          features: [
            "Unlimited videos",
            "Cinematic templates",
            "Custom branding",
            "Team dashboard",
            "White-glove onboarding",
          ],
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Every listing feels like a million-dollar listing now. Sellers notice the difference.",
        author: "The Sterling Group",
      },
      {
        quote:
          "Buyers ask who films our videos. They’re shocked when I say it’s all MotionMint.",
        author: "RE/MAX Premier",
      },
    ],
  },
  tech: {
    id: "tech",
    label: "Tech / Modern",
    description: "Futuristic SaaS look for automation and scale.",
    hero: {
      title: "Automated Video Creation for the Modern Business.",
      subtitle:
        "Upload your content. Select your style. Generate ready-to-publish videos at scale. Real estate, creators, ecommerce, and agencies all powered by the same engine.",
      primaryCta: "Start Free",
      secondaryCta: "See How It Works",
    },
    pricing: {
      tiers: [
        {
          name: "Starter",
          price: "$39/mo",
          tagline: "Ship your first automated videos",
          features: [
            "5 automated videos per month",
            "Standard templates",
            "Email delivery",
          ],
        },
        {
          name: "Growth",
          price: "$99/mo",
          tagline: "Replace manual editing workflows",
          features: [
            "20 videos per month",
            "Advanced storyboarding",
            "Horizontal & vertical formats",
            "Priority compute queue",
          ],
        },
        {
          name: "Scale",
          price: "$249/mo",
          tagline: "For teams and automation-heavy stacks",
          features: [
            "Unlimited videos",
            "Team access",
            "API & webhooks",
            "Custom branding",
          ],
        },
      ],
    },
    testimonials: [
      {
        quote:
          "We automated 80% of our content pipeline. Our team finally stopped living in the timeline.",
        author: "BrightPixel Labs",
      },
      {
        quote:
          "Game-changing for agencies. We ship more concepts in less time.",
        author: "Vista Media",
      },
    ],
  },
  friendly: {
    id: "friendly",
    label: "Friendly / Mass-Market",
    description: "Playful and colorful for creators and small business.",
    hero: {
      title: "Your New Favorite Way to Make Videos.",
      subtitle:
        "Upload a few photos or ideas and get a beautiful video in seconds. Perfect for creators, small businesses, rentals, and real estate pros who don’t want to learn editing.",
      primaryCta: "Make a Video",
      secondaryCta: "Watch a 10-Second Demo",
    },
    pricing: {
      tiers: [
        {
          name: "Simple",
          price: "$39/mo",
          tagline: "Start posting consistently",
          features: [
            "5 videos per month",
            "Captions & music included",
            "Fun social templates",
          ],
        },
        {
          name: "Creator",
          price: "$99/mo",
          tagline: "For serious social posting",
          features: [
            "20 videos per month",
            "Auto-resize for TikTok/IG/YT",
            "On-trend layouts",
            "Priority rendering",
          ],
        },
        {
          name: "Unlimited",
          price: "$249/mo",
          tagline: "For content machines",
          features: [
            "Unlimited videos",
            "Creator toolkit",
            "Weekly template drops",
          ],
        },
      ],
    },
    testimonials: [
      {
        quote:
          "I make more content in a week than I used to in a month. Zero editing, just ideas.",
        author: "Lexi Rose, Creator",
      },
      {
        quote:
          "My Airbnb bookings jumped right after I switched my photos to MotionMint videos.",
        author: "Nate B., Superhost",
      },
    ],
  },
  minimal: {
    id: "minimal",
    label: "Minimal / Apple-like",
    description: "Clean and understated, focused on simplicity.",
    hero: {
      title: "Effortless video creation. Beautiful results.",
      subtitle:
        "Turn your photos or ideas into professional videos in minutes—no timelines, no clutter, no complexity. Just clean, polished content.",
      primaryCta: "Get Started",
      secondaryCta: "View Examples",
    },
    pricing: {
      tiers: [
        {
          name: "Basic",
          price: "$39/mo",
          tagline: "Essential video creation",
          features: ["Simple workflows", "Clean layouts", "HD exports"],
        },
        {
          name: "Plus",
          price: "$99/mo",
          tagline: "More content, same simplicity",
          features: [
            "More videos per month",
            "Multiple formats",
            "Saved presets",
          ],
        },
        {
          name: "Pro",
          price: "$249/mo",
          tagline: "Unlimited creation with workflow tools",
          features: [
            "Unlimited videos",
            "Team-ready workflows",
            "Priority support",
          ],
        },
      ],
    },
    testimonials: [
      {
        quote: "MotionMint feels effortless and gets out of the way.",
        author: "Studio North",
      },
      {
        quote:
          "Beautiful results with almost no input. It’s exactly what we wanted.",
        author: "Harborline Creative",
      },
    ],
  },
};
