module.exports = {
  config: {
    name: "contact",
    aliases: ["owner", "admin"],
    permission: 0,
    prefix: true,
    credits: "Mohammad Nayan",
    description: "Owner contact information",
    category: "system",
    usages: "/contact",
    cooldowns: 5
  },

  start: async function ({ senderId, nayan }) {

    await nayan.sendGeneric(
      senderId,
      `Name : SM SOAD 🔰 Role : Bot & Website Developer`,
      "https://raw.githubusercontent.com/sm-soad00/page-bot/refs/heads/main/IMG_20240620_151823.jpg",
      "💬 Need help? Contact below 👇",
      [
        {
          type: "web_url",
          title: "✈️ Telegram",
          url: "https://t.me/smsoad"
        },
        {
          type: "web_url",
          title: "🟢 WhatsApp",
          url: "https://wa.me/8801816004207"
        },
        {
          type: "phone_number",
          title: "📞 Call Now",
          payload: "+8801816004207"
        }
      ]
    );
  }
};
