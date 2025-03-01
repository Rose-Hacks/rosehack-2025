type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: number;
  date: Date;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "ROSEHACK",
  short_name: "Rosehack Site",
  email: "rosehackucr@gmail.com",
  description: "A women-centric 24 hour hackathon in UC Riverside",
  length: 24,
  date: new Date("2025-01-25T09:00:00"),
  end: new Date("2025-01-26T10:00:00"),
  packet: "",
  devpost: "",
  domain: "https://www.rosehack.com/",
  instagram: "https://www.instagram.com/rosehackucr/",
  linkedin: "https://www.linkedin.com/company/33212536",
  discord: "https://discord.gg/XdWywMsDw9",
  heart: "🤎",
};

export default data;
