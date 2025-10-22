const pastelClasses = ['pastel-1', 'pastel-2', 'pastel-3', 'pastel-4', 'pastel-5', 'pastel-6', 'pastel-7', 'pastel-8'];

const coupons = [
  { title: "🍱 virtual dinner date", desc: "i send u food or we go out to a restaurant... we eat on facetime... BONUS if we pretend we’re in like paris or something" },
  { title: "🛌 fall asleep on call pass", desc: "redeem when u just wanna sleep with me on ft while i work since i always get to do that (and i love it)" },
  { title: "🎧 custom playlist", desc: "i make u a vibey-ahh playlist. could be romantic. could be cursed. whatever my prince charming's heart desires" },
  { title: "🪩 dance party for two", desc: "i play music and dance on ft. u have to rate my moves out of 10. (hint: always 10)" },
  { title: "🚨 i miss u emergency call", desc: "redeemable anytime. no questions. even if it’s 3am. especially if it’s 3am. (yes i will answer half-asleep)" },
  { title: "📦 surprise care drop", desc: "i send u a lil mystery box w snacks, notes, or something ridiculous i found at target" },
  { title: "🎙️ voice note confession", desc: "i send u a random voice note telling u something i love abt u (could be soft or completely unhinged)" },
  { title: "💃 private concert ticket", desc: "i sing u a song over ft like a lounge singer w zero shame. tips accepted in kisses" },
  { title: "🕯️ cozy night in", desc: "we light candles, get under blankets, and pretend the internet doesn’t exist for a lil while" },
  { title: "📸 random pic drop", desc: "i send u a spontaneous pic of me. could be cute. could be cursed. ur gamble" },
  { title: "🥰 one flirty paragraph", desc: "u get a whole paragraph of me being down bad. written like a wattpad author in love" },
  { title: "💌 surprise letter", desc: "i send u a letter. handwritten or typed. maybe (very possibly) chaotic. but most definitely from my heart" },
  { title: "🧠 deep talk night", desc: "u ask me anything. i ask u anything. we solve the many many mysteries of the infinite universe together" },
  { title: "📸 10/10 insta bf", desc: "i hype u up, i assist in picking out ur outfits, editing ur pics, and comment on 'em like ur #1 fan (bc i AM)" },
  { title: "🍿 facetime movie night", desc: "i stream the movie. we talk over half of it. u fall asleep. we get .. distracted.. i love u" },
  { title: "🛍️ mini gift drop", desc: "u pick a lil thing (under $20) and i surprise-send it like a lil fairy gf" },
  { title: "🌄 morning hype texts", desc: "for one week straight i send u chaotic and sweet gm texts so ur day starts with love and pain" },
  { title: "📖 bedtime story time", desc: "i read u a story. could be soft. could be like.. idk sci-fi. could be me rambling abt my day" },
  { title: "😈 roast me night", desc: "u get 15 whole minutes to roast me and i am not allowed to retaliate. dangerous coupon (very dangerous)" },
  { title: "👩🏽‍🍳 chaotic cooking night", desc: "we pick a random recipe and facetime cook it together. even if it's a disaster" },
  { title: "🛫 future planning session", desc: "we sit down and plan our next visit, imaginary honeymoon, or baby names idk just be delulu with me" },
  { title: "🧽 errand buddy pass", desc: "facetime me while u do laundry or groceries and i’ll keep u company like a lil background girlfriend" },
  { title: "🎨 i draw u", desc: "i make a doodle of u from memory. accuracy not guaranteed. but my love is" },
  { title: "🍷 truth or sip (blueberry wine edition)", desc: "we play a spicy lil game of truth or sip (with that blueberry wine we loved so much) and u never get to know... well... i’ll probably tell u anyways.. just an excuse for us to get drunk together ;)" },
  { title: "🎮 gamer gf mode unlocked", desc: "i play any online game with u (even if i suck) and give u my full support, live commentary, and terrible aim. bonus if u call me ur support main 💋" },
  { title: "🎯 dare card", desc: "redeem this to dare me to do literally anything over facetime. (fine print: nothing illegal!!!!)" },
  { title: "🛏️ sleepy cuddles talk", desc: "i talk to u in my sleepy voice and ramble about random things while we both lay in bed. 10/10 serotonin vibes" },
  { title: "🍕 custom date night theme", desc: "u pick the theme. i plan the whole night. food, vibe, playlist. could be italy. could be outer space. who knows" }
];

const container = document.getElementById("coupon-container");

coupons.forEach(coupon => {
  const randomClass = pastelClasses[Math.floor(Math.random() * pastelClasses.length)];
  const couponDiv = document.createElement("div");
  couponDiv.classList.add("coupon");
  couponDiv.innerHTML = `
    <div class="card" onclick="this.parentElement.classList.toggle('open')">
      <div class="front ${randomClass}">
        <h2>${coupon.title}</h2>
      </div>
      <div class="back ${randomClass}">
        <p>${coupon.desc}</p>
      </div>
    </div>
  `;
  container.appendChild(couponDiv);
});
