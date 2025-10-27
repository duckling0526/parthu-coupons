const pastelClasses = ['pastel-1', 'pastel-2', 'pastel-3', 'pastel-4', 'pastel-5', 'pastel-6', 'pastel-7', 'pastel-8'];

const coupons = [
  { title: "🍱 virtual dinner date", description: "i send u food or we go out to a restaurant... we eat on facetime... BONUS if we pretend we’re in like paris or something", color: "#fbd0f5" },
  { title: "🛌 fall asleep on call pass", description: "redeem when u just wanna sleep with me on ft while i work since i get to do that so much :P", color: "#d0f4f5" },
  { title: "🎧 custom playlist", description: "i make u a vibey-ahh playlist!! it'll be cool like you i promise!", color: "#f5efd0" },
  { title: "🪩 dance party for two", description: "we break out into a dance to the other person's song of choice and get our moves rated out of 10 ", color: "#fbd9d0" },
  { title: "🚨 i miss u emergency call", description: "redeemable anytime. no questions. even if it’s 3am. especially if it’s 3am. (yes i will answer half-asleep)", color: "#d0e4f5" },
  { title: "📦 surprise care drop", description: "i send u a lil mystery box w snacks, notes, or something ridiculous i found at target", color: "#f5d0e4" },
  { title: "🎙️ voice note confession", description: "i send u a random voice note telling u something i love abt u (could be sweet or completely unhinged)", color: "#d6f5d0" },
  { title: "💃 private concert ticket", description: "i sing u a song over ft like a lounge singer w zero shame. tips only accepted in kisses", color: "#e2d0f5" },
  { title: "🕯️ cozy night in", description: "we light candles, get under the blankets, and pretend the internet doesn’t exist for a lil while", color: "#f5f2d0" },
  { title: "📸 random pic drop", description: "i send u a spontaneous pic of me. could be cute. could be cursed. ur gamble", color: "#d0f5ea" },
  { title: "🥰 one flirty paragraph", description: "u get a whole paragraph of me being down bad. written like a wattpad author in love", color: "#f5d0f0" },
  { title: "💌 surprise letter", description: "i send u a letter. handwritten or typed. maybe (very possibly) chaotic. but most definitely from my heart", color: "#f0f5d0" },
  { title: "🧠 deep talk night", description: "u ask me anything. i ask u anything. we solve the many many mysteries of the universe together", color: "#d0f5f5" },
  { title: "📸 10/10 insta bf", description: "i hype u up, i assist w picking out ur fits + take pics + and comment like ur #1 fan (bc i AM)", color: "#e4d0f5" },
  { title: "🍿 facetime movie night", description: "i stream the movie. we talk over half of it. u fall asleep. we get .. distracted.. i love u", color: "#f5d8d0" },
  { title: "🛍️ mini gift drop", description: "u pick a lil thing you want (under $20) and i surprise-send it like a lil fairy gf", color: "#d0f5db" },
  { title: "🌄 morning hype texts", description: "i send u chaotic & sweet gm texts for a week so ur days start warm and fuzzy like christmas", color: "#f5f0d0" },
  { title: "📖 bedtime story time", description: "i read u a story. could be soft. could be sci-fi. could be me rambling abt my day", color: "#f0d0f5" },
  { title: "😈 roast me night", description: "u get 15 minutes to roast me & i can't retaliate (dangerous card)", color: "#f5d0d0" },
  { title: "👩🏽‍🍳 chaotic cooking night", description: "we pick a recipe and cook it on facetime together. disaster is very very possible", color: "#d0f5ef" },
  { title: "🛫 future planning session", description: "we plan trips, our wedding color palette, our (very many) pet's names... idk be delulu w me", color: "#e0d0f5" },
  { title: "🎨 i draw u", description: "i make a doodle of u from memory. accuracy is not guaranteed but you know my love is.", color: "#d0f0f5" },
  { title: "🍷 truth or sip", description: "we play truth or sip (featuring our very favorite blueberry wine) :*", color: "#f5d0e2" },
  { title: "🎮 gamer gf mode", description: "i play any online game w u even tho i'll probably suck. but ill be THERE with full supportive commentary... and terrible aim", color: "#d0eaf5" },
  { title: "🛏️ sleepy cuddles", description: "we lay in bed and talk in our soft sleepy voices. serotonin maxed. (for in-person use only)", color: "#d0f5f0" },
  { title: "🍕 custom date night theme", description: "u pick the theme/vibe. i plan the whole night. italy? outer space? u choose.", color: "#f5e5d0" }
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
