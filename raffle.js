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
  { title: "🧠 deep talk night", description: "u ask me anything. i ask u anything. we solve the many many mysteries of the infinite universe together", color: "#d0f5f5" }, 
  { title: "📸 10/10 insta bf", description: "i hype u up, i assist in picking out ur outfits, editing ur pics, and comment on 'em like ur #1 fan (bc i AM)", color: "#e4d0f5" }, 
  { title: "🍿 facetime movie night", description: "i stream the movie. we talk over half of it. u fall asleep. we get .. distracted.. i love u", color: "#f5d8d0" }, 
  { title: "🛍️ mini gift drop", description: "u pick a lil thing (under $20) and i surprise-send it like a lil fairy gf", color: "#d0f5db" }, 
  { title: "🌄 morning hype texts", description: "for one week straight i send u chaotic and sweet gm texts so ur day starts with love and pain", color: "#f5f0d0" }, 
  { title: "📖 bedtime story time", description: "i read u a story. could be soft. could be like.. idk sci-fi. could be me rambling abt my day", color: "#f0d0f5" }, 
  { title: "😈 roast me night", description: "u get 15 whole minutes to roast me and i am not allowed to retaliate. dangerous coupon (very dangerous)", color: "#f5d0d0" }, 
  { title: "👩🏽‍🍳 chaotic cooking night", description: "we pick a random recipe and facetime cook it together. even if it's a disaster", color: "#d0f5ef" }, 
  { title: "🛫 future planning session", description: "we sit down and plan our next visit, imaginary honeymoon, or baby names idk just be delulu with me", color: "#e0d0f5" }, 
  { title: "🧽 errand buddy pass", description: "facetime me while u do laundry or groceries and i’ll keep u company like a lil background girlfriend", color: "#f5e0d0" }, 
  { title: "🎨 i draw u", description: "i make a doodle of u from memory. accuracy not guaranteed. but my love is", color: "#d0f0f5" }, 
  { title: "🍷 truth or sip (blueberry wine edition)", description: "we play a spicy lil game of truth or sip (with that blueberry wine we loved so much) and u never get to know... well... i’ll probably tell u anyways.. just an excuse for us to get drunk together ;)", color: "#f5d0e2" }, 
  { title: "🎮 gamer gf mode unlocked", description: "i play any online game with u (even if i suck) and give u my full support, live commentary, and terrible aim.", color: "#d0eaf5" }, 
  { title: "🎯 dare card", description: "redeem this to dare me to do literally anything over facetime. (fine print: nothing illegal!!!!)", color: "#f0f5d8" }, 
  { title: "🛏️ sleepy cuddles", description: "we sit togther in bed under the covers and ramble about random things that have been on our minds all day. peak nightime activities", color: "#d0f5f0" }, 
  { title: "🍕 custom date night theme", description: "u pick the theme. i plan the whole night. food, vibe, playlist. could be italy. could be outer space. who knows", color: "#f5e5d0" }
];

let usedCoupons = JSON.parse(localStorage.getItem("usedCoupons")) || [];
let currentCoupon = null;

function showRandomCoupon() {
  const available = coupons.filter(c => !usedCoupons.some(u => u.title === c.title));
  const card = document.querySelector(".coupon-card");
  const front = document.getElementById("front-side");
  const back = document.getElementById("back-side");

  if (available.length === 0) {
    front.innerHTML = "no more coupons 🥺";
    back.innerHTML = "call niku for more coupons :*";
    return;
  }

  currentCoupon = available[Math.floor(Math.random() * available.length)];

  card.style.setProperty("--coupon-color", currentCoupon.color);
  front.innerHTML = currentCoupon.title;
  back.innerHTML = currentCoupon.description;

  document.querySelector(".flip-inner").classList.remove("flipped");
}

function flipCard() {
  document.querySelector(".flip-inner").classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".coupon-card").addEventListener("click", flipCard);
  document.getElementById("reroll-btn").addEventListener("click", showRandomCoupon);
  showRandomCoupon();
});
