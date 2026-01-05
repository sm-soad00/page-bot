module.exports = {
  config: {
    name: "help",
    version: "1.0.3",
    permission: 0,
    credits: "Nayan",
    description: "Show all available commands in a stylish box layout",
    prefix: true,
    category: "system",
    usages: "help"
  },

  start: async function({ senderId, nayan, event, commands }) {
    
    const options = { timeZone: "Asia/Dhaka", hour12: true };

    // Dhaka time
    const currentTime = new Date().toLocaleTimeString("en-US", options);
    const currentDate = new Date().toLocaleDateString("en-US", options);

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const prefix = global.config.prefix || "/";

    
    const categories = {};
    commands.forEach(cmd => {
      const cat = cmd.config.category || "Misc";
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(cmd.config);
    });

    let responseText = `
╭─❖  COMMAND MENU  ❖─╮
│ 💎 Bot: ${global.config.botName || "EMon System"}
│ 👑 Owner: ${global.config.botOwner || "SM SOAD"}
│ 🌍 Global Prefix: ${global.config.prefix}
│ 🕒 Time: ${currentTime}
│ 📅 Date: ${currentDate}
│ 🌐 Timezone: ${timezone}
│ 📜 Total Commands: ${commands.size || commands.length}
         {NOTICE📌}
|🤖 SOAD PAGE Help Bot
|একটি স্মার্ট ও শক্তিশালী AI হেল্প বট,
|যা আপনার দৈনন্দিন ডিজিটাল কাজকে করে সহজ ও দ্রুত।
|📥 TikTok, YouTube, Facebook, Instagram
|👉 যেকোনো প্ল্যাটফর্মের ভিডিও লিংক দিলেই অটো ডাউনলোড করে দেয়
|🎶 যেকোনো গানের নাম লিখে সার্চ করলে
|➡️ সাথে সাথে অডিও / ভিডিওতে শুনতে পারবেন
|🧠 AI প্রযুক্তির মাধ্যমে
|❓ আপনার যেকোনো প্রশ্নের
|➡️ সহজ, পরিষ্কার ও বুদ্ধিমান উত্তর দেয় মুহূর্তেই
|⚡ ফাস্ট সার্ভিস
|💬 ২৪/২৪ অ্যাকটিভ
|🔒 নিরাপদ ও নির্ভরযোগ্য
🌐SOAD PAGE Help Bot🌐
— এক বটেই সব সমাধান।
আপনাকে অবশ্যই এই বট ব্যবহার করার জন্য,নির্দিষ্ট কমান্ড ব্যবহার করতে হবে।নিচে থাকা কমান্ড এর মতন করে⬇️
│──────────────────────`;

    for (const category in categories) {
      const cmds = categories[category]
        .map(cmd => `│   ├─ ${prefix}${cmd.name}`)
        .join("\n");

      responseText += `\n│ 🎯 ${category.toUpperCase()}\n${cmds}\n│──────────────────────`;
    }

    responseText += `
╰──────────────────────╯`;

    await nayan.sendMessage(senderId, { text: responseText });
  }
};
