// === ALL YOUR COUPONS ===
const coupons = [
  { title: "🍱 virtual dinner date", description: "i send u food or we go out to a restaurant... we eat on facetime... BONUS if we pretend we’re in like paris or something", color: "#fbd0f5" },
  { title: "🛌 fall asleep on call pass", description: "redeem when u just wanna sleep with me on ft while i work", color: "#d0f4f5" },
  { title: "🎧 custom playlist", description: "i make u a vibey-ahh playlist", color: "#f5efd0" },
  { title: "🪩 dance party for two", description: "i dance on ft. you rate my moves.", color: "#fbd9d0" },
  { title: "🚨 i miss u emergency call", description: "redeemable anytime. no questions. even if it’s 3am. especially if it’s 3am. (yes i will answer half-asleep)", color: "#d0e4f5" },
  { title: "📦 surprise care drop", description: "i send u a lil mystery box w snacks, notes, or something ridiculous i found at target", color: "#f5d0e4" },
  { title: "🎙️ voice note confession", description: "i send u a random voice note telling u something i love abt u (could be soft or completely unhinged)", color: "#d6f5d0" },
  { title: "💃 private concert ticket", description: "i sing u a song over ft like a lounge singer w zero shame. tips accepted in kisses", color: "#e2d0f5" },
  { title: "🕯️ cozy night in", description: "we light candles, get under blankets, and pretend the internet doesn’t exist for a lil while", color: "#f5f2d0" },
  { title: "📸 random pic drop", description: "i send u a spontaneous pic of me. could be cute. could be cursed. ur gamble", color: "#d0f5ea" },
  { title: "🥰 one flirty paragraph", description: "u get a whole paragraph of me being down bad. written like a wattpad author in love", color: "#f5d0f0" },
  { title: "💌 surprise letter", description: "i send u a letter. handwritten or typed. maybe (very possibly) chaotic. but most definitely from my heart", color: "#f0f5d0" },
  { title: "🧠 deep talk night", description: "u ask me anything. i ask u anything. we solve the many many mysteries together", color: "#d0f5f5" },
  { title: "📸 10/10 insta bf", description: "i hype u up, i assist w outfits + pics + comments like ur #1 fan (bc i AM)", color: "#e4d0f5" },
  { title: "🍿 facetime movie night", description: "i stream the movie. we talk over half of it. u fall asleep. we get .. distracted.. i love u", color: "#f5d8d0" },
  { title: "🛍️ mini gift drop", description: "u pick a lil thing (under $20) and i surprise-send it like a lil fairy gf", color: "#d0f5db" },
  { title: "🌄 morning hype texts", description: "i send u chaotic & sweet gm texts for a week so ur days start warm", color: "#f5f0d0" },
  { title: "📖 bedtime story time", description: "i read u a story. could be soft. could be sci-fi. could be me rambling abt my day", color: "#f0d0f5" },
  { title: "😈 roast me night", description: "u get 15 minutes to roast me & i can't retaliate (dangerous card)", color: "#f5d0d0" },
  { title: "👩🏽‍🍳 chaotic cooking night", description: "we pick a recipe & facetime cook it. disaster is very possible", color: "#d0f5ef" },
  { title: "🛫 future planning session", description: "we plan trips, our wedding color palette, our (very many) pet's names idk be delulu w me", color: "#e0d0f5" },
  { title: "🎨 i draw u", description: "i make a doodle of u from memory. accuracy not guaranteed. love is.", color: "#d0f0f5" },
  { title: "🍷 truth or sip", description: "we play truth or sip w blueberry wine and cause emotional damage (cute)", color: "#f5d0e2" },
  { title: "🎮 gamer gf mode", description: "i play a game w u even tho i suck. full supportive commentary. terrible aim", color: "#d0eaf5" },
  { title: "🛏️ sleepy cuddles", description: "we lay in bed and talk in our soft sleepy voices. serotonin maxed.", color: "#d0f5f0" },
  { title: "🍕 custom date night theme", description: "u pick the vibe. i plan the whole night. italy? outer space? u choose.", color: "#f5e5d0" }
];

let usedCoupons = JSON.parse(localStorage.getItem("usedCoupons")) || [];
let currentCoupon = null;

// Get the card elements
const card = document.querySelector(".flip-inner");
const front = document.querySelector(".flip-front");
const back = document.querySelector(".flip-back");

function showRandomCoupon() {
  const available = coupons.filter(c => !usedCoupons.some(u => u.title === c.title));
  if (available.length === 0) {
    front.innerHTML = "no more coupons 🥺";
    back.innerHTML = "call niku for more coupons :*";
    return;
  }

  currentCoupon = available[Math.floor(Math.random() * available.length)];
  card.classList.remove("flipped");
  front.innerHTML = currentCoupon.title;
  back.innerHTML = currentCoupon.description;

  document.querySelector(".coupon-card").style.setProperty("--coupon-color", currentCoupon.color);
}

function flipCard() {
  card.classList.toggle("flipped");
}

function lockCoupon() {
  usedCoupons.push(currentCoupon);
  localStorage.setItem("usedCoupons", JSON.stringify(usedCoupons));
  document.getElementById("share-btn").style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".coupon-card").addEventListener("click", flipCard);
  document.getElementById("reroll-btn").addEventListener("click", showRandomCoupon);
  document.getElementById("pick-btn").addEventListener("click", lockCoupon);
  showRandomCoupon();
});
