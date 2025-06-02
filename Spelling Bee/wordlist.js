const themes = [
  {
    name: "Fruits",
    emoji: "🍎",
    words: [
      "apple 🍎", "green apple 🍏", "pear 🍐", "peach 🍑",
      "cherries 🍒", "strawberry 🍓", "blueberries 🫐", "kiwi 🥝",
      "tomato 🍅", "olive 🫒", "coconut 🥥", "avocado 🥑",
      "mango 🥭", "pineapple 🍍", "banana 🍌", "melon 🍈",
      "watermelon 🍉", "grapes 🍇", "grapefruit 🍊", "lemon 🍋",
      "lime 🟢", "plum 🟣", "apricot 🟠"
    ]
  },
  {
    name: "Animals",
    emoji: "🐶",
    words: [
      "monkey 🐒", "gorilla 🦍", "orangutan 🦧", "dog 🐶", "dog 🐕",
      "guide-dog 🦮", "service-dog 🐕‍🦺", "poodle 🐩", "wolf 🐺", "fox 🦊",
      "raccoon 🦝", "cat 🐱", "cat 🐈", "black-cat 🐈‍⬛", "lion 🦁", "tiger 🐯",
      "tiger 🐅", "leopard 🐆", "horse 🐴", "horse 🐎", "unicorn 🦄",
      "zebra 🦓", "deer 🦌", "bison 🦬", "cow 🐮", "ox 🐂", "water-buffalo 🐃",
      "pig 🐷", "boar 🐗", "pig-nose 🐽", "ram 🐏", "ewe 🐑", "goat 🐐",
      "two-hump-camel 🐫", "camel 🐪", "llama 🦙", "giraffe 🦒", "elephant 🐘",
      "mammoth 🦣", "rhinoceros 🦏", "hippopotamus 🦛", "mouse 🐭", "mouse 🐁",
      "rat 🐀", "hamster 🐹", "rabbit 🐰", "bunny 🐇", "chipmunk 🐿️",
      "beaver 🦫", "hedgehog 🦔", "bat 🦇", "bear 🐻", "polar-bear 🐻‍❄️",
      "koala 🐨", "panda 🐼", "sloth 🦥", "otter 🦦", "skunk 🦨", "kangaroo 🦘",
      "badger 🦡", "turkey 🦃", "chicken 🐔", "rooster 🐓", "hatching-chick 🐣",
      "chick 🐤", "bird 🐦", "penguin 🐧",
      "dove 🕊️", "eagle 🦅", "duck 🦆", "swan 🦢", "owl 🦉", "dodo 🦤",
      "feather 🪶", "flamingo 🦩", "peacock 🦚", "parrot 🦜", "frog 🐸",
      "crocodile 🐊", "turtle 🐢", "lizard 🦎", "snake 🐍", "dragon 🐉",
      "dragon 🐲", "sauropod 🦕", "t-rex 🦖", "spouting-whale 🐳",
      "whale 🐋", "dolphin 🐬", "fish 🐟", "tropical-fish 🐠", "blowfish 🐡",
      "shark 🦈", "octopus 🐙", "spiral-shell 🐚", "snail 🐌", "butterfly 🦋",
      "bug 🐛", "ant 🐜", "bee 🐝", "beetle 🪲", "cricket 🦗", "cockroach 🪳",
      "spider 🕷️", "spider-web 🕸️", "scorpion 🦂", "mosquito 🦟", "fly 🪰",
      "worm 🪱", "microbe 🦠"
    ]
  },
  {
    name: "Transport",
    emoji: "🚗",
    words: [
      // Land Transport
      "car 🚗", "sport-utility-vehicle 🚙", "bus 🚌", "bus 🚍", "trolleybus 🚎",
      "minibus 🚐", "taxi 🚕", "taxi 🚖", "police-car 🚓", "police-car 🚔",
      "fire-engine 🚒", "ambulance 🚑", "delivery-truck 🚚", "articulated-lorry 🚛",
      "tractor 🚜", "pickup-truck 🛻", "train 🚆", "high-speed-train 🚄", "bullet-train 🚅",
      "light-rail 🚈", "tram 🚋", "mountain-railway 🚞", "railway-car 🚃", "monorail 🚝",
      "suspension-railway 🚟", "cable-car 🚠", "aerial-tramway 🚡", "motorcycle 🏍️",
      "motor-scooter 🛵", "kick-scooter 🛴", "bicycle 🚲", "manual-wheelchair 🦽",
      "motorized-wheelchair 🦼", "auto-rickshaw 🛺", "skateboard 🛹", "roller-skate 🛼",
    
      // Air Transport
      "airplane ✈️", "small-airplane 🛩️", "airplane-departure 🛫", "airplane-arrival 🛬",
      "helicopter 🚁", "paraglider 🪂", "flying-saucer 🛸",
    
      // Water Transport
      "ship 🚢", "ferry ⛴️", "motor-boat 🛥️", "speedboat 🚤", "sailboat ⛵",
      "canoe 🛶", "passenger-ship 🛳️",
    
      // Space
      "rocket 🚀", "satellite 🛰️", "flying-saucer 🛸", "saturn 🪐", "astronaut 🧑‍🚀",
    
      // Related
      "fuel-pump ⛽", "charging-station 🔌", "bus-stop 🚏", "stop-sign 🛑",
      "construction 🚧", "traffic-light 🚦", "vertical-traffic-light 🚥", "motorway 🛣️",
      "railway-track 🛤️", "map 🗺️", "compass 🧭", "luggage 🧳", "seat 💺",
      "passport-control 🛂", "customs 🛃", "baggage-claim 🛄", "left-luggage 🛅"
    ]
  },
  {
    name: "Weather",
    emoji: "☀️",
    words: [
      "sunshine ☀️", "partly-cloudy 🌤️", "mostly-cloudy 🌥️", "cloudy ☁️",
      "rain 🌧️", "drizzle 🌦️", "thunderstorm ⛈️", "lightning 🌩️", "snowfall ❄️",
      "snowman ☃️", "blizzard 🌨️", "fog 🌫️", "windy 🌬️", "tornado 🌪️", "cyclone 🌀",
      "rainbow 🌈", "umbrella ☂️", "wet-umbrella ☔", "hot-weather 🥵", "cold-weather 🥶",
      "droplet 💧", "sweat 💦", "thermometer 🌡️",
    
      // Optional celestial/weather-adjacent terms
      "full-moon 🌕", "new-moon 🌑", "crescent-moon 🌙", "shooting-star 🌠",
      "milky-way 🌌", "glowing-star 🌟", "comet ☄️", "star ⭐"
    ]
  },
  {
    name: "Professions",
    emoji: "👩‍⚕️",
    words: [
      // Medical
      "doctor 🧑‍⚕️", "nurse 👩‍⚕️", "dentist 🦷🧑‍⚕️", "surgeon 🔪🧑‍⚕️", "veterinarian 🐶🧑‍⚕️",
    
      // Science & Engineering
      "scientist 👩‍🔬", "chemist ⚗️🧑‍🔬", "lab-technician 🧪🧑‍🔬", "engineer 👷", "mechanic 🔧👨‍🔧",
      "electrician 💡👨‍🔧", "plumber 🚿👨‍🔧", "astronaut 👨‍🚀", "robot-engineer 🤖🧑‍🔬",
    
      // Education
      "teacher 🧑‍🏫", "professor 👨‍🏫", "student 🧑‍🎓",
    
      // Public Services
      "firefighter 👨‍🚒", "police-officer 👮", "detective 🕵️‍♂️", "soldier 🪖", "judge 👩‍⚖️",
    
      // Transportation
      "pilot 👨‍✈️", "flight-attendant 🧑‍✈️", "driver 🚚🧑‍✈️", "delivery-person 🛵📦", "sailor ⚓👨‍✈️",
    
      // Food & Hospitality
      "chef 👨‍🍳", "cook 🍲🧑‍🍳", "barista ☕🧑‍🍳", "waiter 🧑‍🍽️", "baker 🥖👨‍🍳",
    
      // Farming & Nature
      "farmer 👩‍🌾", "gardener 🌱👨‍🌾", "zookeeper 🐘👩‍🌾",
    
      // Arts & Entertainment
      "artist 🎨👩‍🎨", "painter 🖌️👨‍🎨", "musician 🎵", "singer 🎤", "dancer 💃", "actor 🎭",
      "writer ✍️", "journalist 📰✍️", "photographer 📷", "magician 🧙✨", "clown 🤡",
    
      // Others
      "office-worker 👨‍💼", "factory-worker 🏭👨‍🏭", "cleaner 🧹🧼", "guard 🛡️", "influencer 📱👩‍🎤"
    ]
  },
  {
    name: "Food",
    emoji: "🍕",
    words: [
      // Fast food & casual
      "hamburger 🍔", "cheeseburger 🍔🧀", "hot-dog 🌭", "sandwich 🥪", "pizza 🍕",
      "french-fries 🍟", "fried-chicken 🍗", "taco 🌮", "burrito 🌯", "pita 🥙",
    
      // Asian cuisine
      "sushi 🍣", "bento 🍱", "ramen 🍜", "noodles 🍜🥢", "rice 🍚", "fried-rice 🍳🍚",
      "curry-rice 🍛", "dumpling 🥟", "spring-rolls 🥟🥬", "fortune-cookie 🥠",
    
      // Western/European
      "spaghetti 🍝", "steak 🥩", "pancakes 🥞🍯", "toast 🍞🍓", "cheese 🧀",
      "salad 🥗", "egg 🥚", "boiled-egg 🥚♨️💧", "omelette 🍳", "bread 🍞", "fondue 🫕",
    
      // Sweet & dessert
      "cake 🎂", "cupcake 🧁", "ice-cream 🍨", "soft-serve 🍦", "chocolate 🍫",
      "candy 🍬", "lollipop 🍭", "cookie 🍪", "doughnut 🍩", "pie 🥧", "pudding 🍮",
      "jelly 🍮🍓", "milkshake 🥤🍦", "fruit-salad 🍓🍍🍇",
    
      // Fruit
      "apple 🍎", "green-apple 🍏", "banana 🍌", "grapes 🍇", "strawberry 🍓",
      "pineapple 🍍", "melon 🍈", "watermelon 🍉", "peach 🍑", "cherries 🍒",
      "kiwi 🥝", "avocado 🥑", "mango 🥭", "lemon 🍋", "orange 🍊", "coconut 🥥",
      "blueberries 🫐", "pomegranate 🍎🔴",
    
      // Vegetables
      "carrot 🥕", "corn 🌽", "tomato 🍅", "broccoli 🥦", "pepper 🌶️", "potato 🥔",
      "cucumber 🥒", "garlic 🧄", "onion 🧅", "mushroom 🍄", "leafy-greens 🥬",
    
      // Drinks & extras
      "milk 🥛", "coffee ☕", "tea 🍵", "bubble-tea 🧋", "juice 🧃", "soda 🥤",
      "water 💧", "wine 🍷", "beer 🍺", "champagne 🍾",
    
      // Meals & table
      "cooking 🍳", "plate 🍽️", "cutlery 🍴", "takeout-box 🥡", "shopping-bag 🛍️🍎"
    ]
  },
  {
    name: "Clothes",
    emoji: "👕",
    words: [
      // Tops
      "t-shirt 👕", 
      "long-sleeve 👕🧍", 
      "shirt 👔", 
      "sweater 🧥", 
      "hoodie 👕🧢", 
      "jacket 🧥", 
      "coat 🧥🧣", 
    
      // Bottoms
      "pants 👖", 
      "jeans 👖🔵", 
      "shorts 🩳", 
      "skirt 👗🔻", 
      "dress 👗",
    
      // Footwear
      "sneakers 👟", 
      "running-shoes 👟🏃", 
      "boots 👢", 
      "high-heels 👠", 
      "flats 🥿", 
      "sandals 🩴", 
      "socks 🧦",
    
      // Accessories
      "glasses 👓", 
      "sunglasses 🕶️", 
      "hat 🎩", 
      "sun-hat 👒☀️", 
      "cap 🧢", 
      "scarf 🧣", 
      "tie 👔", 
      "bowtie 🎀", 
      "belt 🪢", 
      "watch ⌚", 
      "earrings 💎👂", 
      "necklace 📿", 
      "bracelet 📿🖐️", 
      "ring 💍",
    
      // Hands
      "glove 🧤", 
      "mittens 🧤❄️",
    
      // Bags
      "backpack 🎒", 
      "handbag 👜", 
      "shopping-bag 🛍️", 
      "briefcase 💼", 
      "luggage 🧳"
    ]
  },
  {
    name: "Emotions",
    emoji: "😊",
    words: [
      "happy 😀", 
      "laughing 😂", 
      "excited 🤩", 
      "surprised 😲", 
      "sad 😢", 
      "crying 😭", 
      "angry 😠", 
      "love ❤️", 
      "in-love 😍❤️", 
      "scared 😱", 
      "bored 😐", 
      "tired 😴", 
      "confused 😕", 
      "thinking 🤔", 
      "nervous 😬", 
      "shy ☺️", 
      "embarrassed 😳", 
      "silly 🤪", 
      "cool 😎", 
      "sick 🤒", 
      "sleepy 😪", 
      "annoyed 😒", 
      "blushing 😊", 
      "smirking 😏", 
      "worried 😟"
    ]
  },
  {
    name: "Colors",
    emoji: "🎨",
    words:  [
      "red 🔴",
      "blue 🔵",
      "green 🟢",
      "yellow 🟡",
      "orange 🟠",
      "purple 🟣",
      "pink 🌸",
      "brown 🟤",
      "black ⚫",
      "white ⚪",
    
      // Extra descriptive/visual ones
      "cyan 🩵",
      "light-green 💚",
      "dark-blue 🔷",
      "dark-green 🌲",
      "gray ⚪⚫",
      "gold 🏅",
      "silver 🥈",
      "beige 🤎⚪",
      "peach 🍑",
      "lavender 💜🌸",
      "navy 🔵⚓",
      "maroon 🟥🍷",
      "lime 🟢🍋"
    ]
  },
  {
    name: "Body Parts",
    emoji: "🧍",
    words: [
      "brain 🧠", "eye 👁️", "ear 👂", "nose 👃", "mouth 👄",
      "hand ✋", "foot 🦶", "leg 🦵", "arm 💪", "head 🧑"
    ]
  },
  {
    name: "Health",
    emoji: "🩺",
    words: [
      // Diseases & Conditions
      "pneumonia 🫁🥶🤒", "asthma 🫁😮‍💨🧑‍⚕️", "flu 🦠🤧🌡️", "COVID-19 🦠😷🌍",
      "diabetes 🩸🧁💉", "cancer 🧬🎗️🏥", "allergy 🤧🌼🚫", "heart-disease ❤️⚠️🫀",
      "stroke 🧠⚡🚑", "depression 😔🧠🌧️", "anxiety 😰💭💓", "arthritis 🦴👐⚡",
      "obesity ⚖️🍔🏃‍♂️", "malnutrition 🍽️❌👶", "injury 🩹🩸🤕", "burn 🔥🩹😣",
  
      // Symptoms
      "fever 🤒🌡️🔥", "cough 🤧🗣️🌬️", "headache 🤕💥🧠", "nausea 🤢🤮🌀",
      "fatigue 🛌😴💤", "rash 🤒🟥🧴", "sore-throat 🗣️🔥🍵", "runny-nose 🤧👃💧",
      "dizziness 😵🌀⚠️", "pain 😣🆘🔴",
  
      // Treatments & Prevention
      "vaccine 💉🦠✅", "medicine 💊🧪📦", "antibiotics 💊🦠🚫", "inhaler 🫁💨📦",
      "surgery 🏥🔪🛏️", "therapy 💬🧠🛋️", "rehabilitation 🏋️‍♂️🛠️", "bandage 🩹👨‍⚕️",
      "mask 😷🦠🚫", "rest 🛌🧘‍♂️☁️", "hydration 💧🚰🍵",
  
      // Medical Roles & Equipment
      "doctor 🧑‍⚕️👩‍⚕️🏥", "nurse 👩‍⚕️💉🛏️", "surgeon 👨‍⚕️🔪🧼",
      "stethoscope 🩺👂🫀", "thermometer 🌡️🤒📏", "hospital 🏥🚑💊",
      "ambulance 🚑⏱️🆘", "first-aid-kit 🧰🩹💊",
  
      // Health Concepts
      "mental-health 🧠🫶🌈", "immune-system 🦠🛡️💪", "nutrition 🥗🍎💪",
      "exercise 🏃‍♀️💪❤️", "sleep 😴🛌🌙", "hygiene 🧼🧽🖐️", "check-up 👩‍⚕️📋🗓️"
    ]
  },
  {
    name: "Movies",
    emoji: "🎬",
    words: [
      "titanic 🚢💔🧊",
      "inception 🧠🌀💤⏳",
      "the-lion-king 🦁👑🌅",
      "finding-nemo 🐠🌊🔍",
      "frozen ❄️👭⛄🎶",
      "avatar 🌌🧝‍♂️🌿🐉",
      "the-matrix 💻🕶️🔋🧠",
      "coco 💀🎸🎶🌸",
      "interstellar 🚀🕳️🌌⏱️",
      "toy-story 🤠🧸🚀❤️",
      "the-godfather 🤵🍝🔫🕶️",
      "up 🎈🏡👴🐶",
      "harry-potter ⚡🧙‍♂️🪄🦉",
      "the-dark-knight 🦇🏙️🃏🚨",
      "la-la-land 🎹💃🎭🌆",
      "the-little-mermaid 🧜‍♀️🌊🎶🐠",
      "spider-man 🕷️🧑‍🎤🏙️🧪",
      "avengers 🦸‍♂️🛡️💥🌍",
      "shrek 🟢🧅🐴👑",
      "wall-e 🤖🌍🚮❤️",
      "the-sound-of-music 🎶🏞️👩‍👧‍👦🎻",
      "the-social-network 💻📘🧠📱",
      "ratatouille 🐭🍝👨‍🍳🇫🇷",
      "the-hunger-games 🏹🔥🎯🎭",
      "inside-out 🧠😊😢😡😱",
      "the-pursuit-of-happyness 👨‍👦🏙️💼💔",
      "jurassic-park 🦖🧬🌴🚁",
      "the-super-mario-bros-movie 🍄🎮👨‍🔧🐢",
      "barbie 💅🎀🏡👠",
      "oppenheimer 💣🧠⚛️🇺🇸",
      "everything-everywhere-all-at-once 🥯🌀👵🧤🌌",
      "minions 🟡👓🍌💥",
      "puss-in-boots 🐱👢⚔️🪄",
      "how-to-train-your-dragon 🐉👦🔥🏝️",
      "despicable-me 🕶️🦹‍♂️🟡💣",
      "moana 🌊🚢🌺🌀",
      "encanto 🏡🌸✨🎶",
      "luca 🐟👦🍝🏖️",
      "soul 🎷🧠👤🌌",
      "turning-red 🐼🔴🎒🧧",
      "cars 🚗🏁🏎️⛽",
      "lightyear 🚀🧑‍🚀👾💡",
      "kung-fu-panda 🐼🥋🕊️🐉",
      "the-secret-life-of-pets 🐶🐱🏠🧠",
      "the-lego-movie 🧱👷‍♂️🎉🦹",
      "hotel-transylvania 🧛🏨🧟‍♂️🎉",
      "the-croods 🐾👨‍👩‍👧‍👦🌄🦴",
      "zootopia 🐰🕵️‍♀️🦊🏙️",
      "coraline 🔍🧵🪞💀",
      "a-quiet-place 🤫👣👂👽",
      "the-conjuring 👻🏚️📖🕯️",
      "get-out 🚗👀👨‍🦱🌀",
      "us 🧍‍♀️🔪🪞🎭",
      "nope 🛸👁️🐎🎥",
      "dune 🌵🛸🌪️👑",
      "the-lord-of-the-rings 💍🧙‍♂️🧝‍♂️🌋",
      "the-hobbit 🧙‍♂️🏞️🐉💰",
      "star-wars 🌌⚔️🛰️🧔",
      "the-chronicles-of-narnia 🦁🧥🚪🌨️",
      "pirates-of-the-caribbean 🏴‍☠️⚔️🌊🗺️",
      "fantastic-beasts 🧳🦄🔮🇺🇸",
      "the-bfg 👴🦶🌌👧",
      "the-polar-express 🚂🎄🎁🎅",
      "home-alone 🏠👦🎄🎁",
      "elf 🎅🍝🧝🎄",
      "the-princess-bride 👸⚔️❤️🏰",
      "matilda 👧📚🧠🧹",
      "the-greatest-showman 🎪🎤✨🎭",
      "the-truman-show 📺🏙️🚪👁️",
      "the-blind-side 🏈👩‍👦❤️📘",
      "hidden-figures 🚀📐✊🏾💻",
      "forrest-gump 🏃‍♂️🍫❤️🇺🇸",
      "cast-away ✈️🏝️🏐🌧️",
      "life-of-pi 🐯🚤🌊🌈",
      "slumdog-millionaire 💰📺🇮🇳❤️",
      "the-karate-kid 🥋👦🧹🏆",
      "mean-girls 💋📓🎀🎭",
      "clueless 👛🛍️🎀📱"
    ]
  },
  {
    name: "Games",
    emoji: "🎮",
    words: [
      "minecraft ⛏️🌍🧱🧟",
      "fortnite 🔫🏗️💃🌪️",
      "among-us 👨‍🚀🔪ඞ𐐘🤝ඞ",
      "roblox 👷‍♂️🎨🎮🧒",
      "the-legend-of-zelda 🧝‍♂️🗡️🧩🎵",
      "tears-of-the-kingdom 🪂🏯🧠🧪",
      "super-mario-bros 🍄👨‍🔧🐢⭐",
      "mario-kart 🏎️🍌🐚🏁",
      "luigi’s-mansion 👻🧹🔦🏚️",
      "warioware 🎮😈🎲💥",
      "call-of-duty 🔫🎖️🌍🪖",
      "modern-warfare 🔫🛰️💣🌐",
      "pubg 🪖🔫💼✈️",
      "valorant 💥🔫🎯🎭",
      "counter-strike 🔫🎯💼💣",
      "league-of-legends 🧙‍♀️⚔️🐉🏆",
      "dota-2 ⚔️👑🌋🛡️",
      "genshin-impact 🌬️⛰️⚔️🧝‍♀️",
      "honkai-star-rail 🚂🌌🛡️🧪",
      "pokemon ⚡🧢🦊🧪",
      "pokemon-go 📱📍🐾👟",
      "pokemon-unite ⚔️🧸🌊🏆",
      "tetris 🧱🔲🎵🧠",
      "pac-man 🟡👻🍒🎮",
      "donkey-kong 🦍🍌🛢️👷",
      "street-fighter 🥋👊🌎🔥",
      "tekken 👊🐉🎮🏆",
      "mortal-kombat ☠️🥋🩸⚔️",
      "smash-bros 💥🎮🧝‍♂️🍄",
      "final-fantasy 🗡️🌌🎻🧝‍♂️",
      "kingdom-hearts 👑💖🗡️🎡",
      "persona-5 👺🃏🎭🧠",
      "xenoblade-chronicles ⚔️🌄💡🤖",
      "fire-emblem 🛡️🧝‍♀️⚔️🏰",
      "octopath-traveler 🧭🧙‍♂️⚔️🎵",
      "undertale 🧡🎹💀🤝",
      "deltarune 💙🧩💀🎵",
      "celeste 🧗‍♀️🌄🧠❄️",
      "stardew-valley 🌾💌⛏️🌧️",
      "animal-crossing 🐶🏝️🍎🎣",
      "the-sims 👨‍👩‍👧🏡🛋️🎉",
      "simcity 🏙️🛣️💡💰",
      "cities-skylines 🏙️🛣️🏗️💼",
      "plague-inc ☣️🦠📈🌍",
      "goose-game 🪿🎩🎺🏃‍♂️",
      "goat-simulator 🐐🧨🏙️🎮",
      "surgeon-simulator 🏥🔪🧠🩺",
      "human-fall-flat 🧍‍♂️💤🏗️🎮",
      "geometry-dash 🔷🎶🕹️🔥",
      "brawl-stars 🤠🧨⚔️🎉",
      "clash-of-clans 🏰⚒️👹💣",
      "clash-royale 👑🎴🛡️⚔️",
      "boom-beach 🏝️💣🛥️⚔️",
      "subway-surfers 🚆🛹🎨🏃",
      "temple-run 🏃‍♂️💎🕌🔥",
      "candy-crush 🍬💥🧠🔢",
      "fruit-ninja 🍉🍌🗡️⚡",
      "jetpack-joyride 🚀💰🛡️🧲",
      "flappy-bird 🐥✈️🚧😬",
      "five-nights-at-freddy's 🧸🔦👁️🎮",
      "little-nightmares 👧🎩🪦👁️",
      "limbo 👦🌫️🪤🖤",
      "inside 👦🏃‍♂️🏭🧪",
      "portal 🚪⚙️🧠🌀",
      "portal-2 🔄🧠🧪🗣️",
      "hades 🔥⚔️🧛‍♂️👑",
      "dark-souls 💀🔥🛡️🕯️",
      "bloodborne 🧛‍♂️🗡️🌕🔮",
      "elden-ring 💍⚔️🧙‍♂️🕯️",
      "hollow-knight 🐛⚔️💀🕳️",
      "cuphead ☕👹🎺🌀",
      "ori-and-the-blind-forest 🌲🧝‍♂️💧🕊️",
      "red-dead-redemption 🤠🐎🔫🌄",
      "grand-theft-auto 🚗💰🔫🏙️",
      "cyberpunk-2077 🌃🤖🕶️🔫",
      "watch-dogs 🐶💻🕶️🎯",
      "assassin's-creed 🗡️🕵️‍♂️🏛️🪶",
      "the-last-of-us 🧟‍♂️🎒🎸🌆",
      "god-of-war ⚔️🧔❄️🔥",
      "detroit-become-human 🤖💭🕹️👁️",
      "heavy-rain 🌧️🕵️‍♂️🎭❓",
      "alan-wake 🕯️✍️📖🌌",
      "life-is-strange 🧑‍🤝‍🧑📸⏳🌧️",
      "journey 🏜️🧣🧎‍♂️✨",
      "apex-legends 🧗‍♂️🔫🏞️🪂",
      "overwatch 🦸‍♂️🔫🌐💫",
      "team-fortress-2 🎩🔫🎮🎭",
      "hearthstone 🎴🧙‍♂️🔥🎲",
      "yu-gi-oh! 🃏🐉⚔️💥",
      "magic-the-gathering 🎴🧙‍♂️🌌⚔️",
      "fifa ⚽🏆🎮🌍",
      "pes ⚽🎮🏆🌐",
      "nba-2k 🏀🎮💥🏆",
      "wwe-2k 💪🎮🎤🩸",
      "rocket-league 🚗⚽💥🏁",
      "just-dance 💃🎵🕺🎮",
      "beat-saber 🎵🗡️🕶️🎮",
      "ring-fit-adventure 🏃‍♂️🟠💪🎮",
      "wii-sports 🏸🎾🎳🎮",
      "vr-chat 🧑‍🤝‍🧑🕶️💬🌐",
      "rec-room 🕹️🤸🎨🎯",
      "no-man's-sky 🚀🌌🌍🧪",
      "starfield 🌠🪐🚀👩‍🚀",
      "spore 🌱🧬🐾🌌",
      "kerbal-space-program 🚀👨‍🔬🧪🌍"
    ]
  },
  {
    name: "Books",
    emoji: "📚",
    words: [
      "harry-potter ⚡🧙‍♂️🏰🦉",
      "the-hobbit 🧝‍♂️🗺️🐉💍",
      "the-lord-of-the-rings 💍🧙‍♂️🔥🌋",
      "percy-jackson ⚡🌊🏛️🐍",
      "the-lightning-thief ⚡🔱🏃‍♂️👦",
      "narnia 🦁🚪⛄👧",
      "alice-in-wonderland 👧🐇🕳️🎩",
      "through-the-looking-glass 🪞♟️👑🔄",
      "winnie-the-pooh 🧸🍯🌳👶",
      "matilda 📚🧠👧✨",
      "charlie-and-the-chocolate-factory 🍫🏭👦🎩",
      "fantastic-mr-fox 🦊🕳️🍗🚜",
      "james-and-the-giant-peach 🍑🐛🌊🚢",
      "the-giving-tree 🌳🍎👦💚",
      "the-cat-in-the-hat 🎩🐱📚💥",
      "green-eggs-and-ham 🍳🥓❌🐷",
      "the-very-hungry-caterpillar 🐛🍎🍓🦋",
      "the-little-prince 👦🪐🌹🦊",
      "the-alchemist 🧙‍♂️🏜️🧭💎",
      "to-kill-a-mockingbird 🐦⚖️👧🌳",
      "of-mice-and-men 🐭👬🌾😭",
      "1984 👁️📹📖🚫",
      "animal-farm 🐷🐴⚒️📜",
      "brave-new-world 🧬🏙️😷🎭",
      "fahrenheit-451 🔥📚🚒🧠",
      "lord-of-the-flies 🐷🔥👦🏝️",
      "catcher-in-the-rye 👦🌾🧢😠",
      "a-clockwork-orange 🍊👊🌀🎧",
      "the-great-gatsby 🎉🍸💰👔",
      "pride-and-prejudice 👩‍🦱🫖💍💃",
      "sense-and-sensibility 👭💔💍🏞️",
      "jane-eyre 🧑‍🏫🏰🔥💔",
      "wuthering-heights 🌪️🏰💔🌄",
      "little-women 👭📖💌🎻",
      "anne-of-green-gables 👩‍🦰🌿🏡📚",
      "frankenstein 🧟‍♂️⚡🧪🧠",
      "dracula 🧛‍♂️🩸🏰🌕",
      "the-strange-case-of-dr-jekyll-and-mr-hyde 👨🧪🪞😈",
      "sherlock-holmes 🕵️‍♂️🔍🧠🧥",
      "the-hound-of-the-baskervilles 🐺🌫️👣🔎",
      "murder-on-the-orient-express 🚂🔪🕵️‍♂️💼",
      "and-then-there-were-none 🔟🏝️🔪❓",
      "the-da-vinci-code 🎨🕵️‍♂️✝️🧩",
      "angels-and-demons 😇😈🏛️💣",
      "the-hunger-games 🏹🔥🍞🏛️",
      "catching-fire 🔥🏹💔⚔️",
      "mockingjay 🕊️🔥🏹🕊️",
      "divergent 🧬🌆🧠💪",
      "the-maze-runner 🧑‍🤝‍🧑🧱🏃‍♂️🧠",
      "eragon 🐉🧙‍♂️🗡️📜",
      "twilight 🌄🧛‍♂️🐺❤️",
      "new-moon 🌕💔🐺🧛‍♀️",
      "eclipse 🌒🧛‍♂️🐺🔥",
      "breaking-dawn 🌅👶💔🧛‍♀️",
      "the-book-thief 📚🧒💣🕯️",
      "life-of-pi 🐅🛶🌊🙏",
      "the-road 👨‍👦🌫️🚶‍♂️🥫",
      "slaughterhouse-five 💣👨‍🚀⏰🤯",
      "cloud-atlas ☁️📜⏳🔁",
      "the-handmaid's-tale 👩🟥🙏👁️",
      "the-testaments 👭🕯️📜👁️",
      "the-midnight-library 🌌📚💭🔄",
      "a-man-called-ove 👴🧰💔🚗",
      "project-hail-mary 👨‍🚀🧪☀️🪐",
      "sapiens 🧠🌍🕰️🔬",
      "homo-deus 🧬🤖💭🌐",
      "educated 🎓👩‍🏫🧠📖",
      "atomic-habits ⚛️📆💡🔁",
      "deep-work 🧠📴💻🧘‍♂️",
      "outliers 🌟📊🧠🎓",
      "thinking-fast-and-slow 🧠⚡🐢💭",
      "quiet 🤫👂🧘‍♀️📖",
      "the-power-of-now ⏳🧘‍♂️💫🧠",
      "man’s-search-for-meaning 👤🏕️🕯️🧠",
      "rich-dad-poor-dad 💰🏠📈👨‍👧",
      "the-7-habits-of-highly-effective-people 🔁📋💡🏆",
      "the-4-hour-workweek ⏳💼🌴📱"
    ]
  },    
  {
    name: "Countries",
    emoji: "🌍",
    words: [
      "japan 🍣🗻🎎🎌",           // japan  
      "france 🥖🗼🎨🍷",           // france  
      "italy 🍝🍕🎭🛵",           // italy  
      "china 🐉🥡🏮🀄",           // china  
      "india 🕌🌶️🪷🎉",           // india  
      "usa 🍔🎬🗽🦅",           // usa  
      "brazil 🎉⚽🌴🥥",           // brazil  
      "mexico 🌮🎺🪅🌶️",           // mexico  
      "russia ❄️🐻🎩🧊",           // russia  
      "uk ☕👑🎩🎡",           // uk  
      "egypt 🏜️🛕🐫📜",           // egypt  
      "canada 🍁🧣🦫⛷️",           // canada  
      "thailand 🐘🌶️🛕🏝️",           // thailand  
      "germany 🍺🎶🏰⚙️",           // germany  
      "spain 💃🍷🎨🌞",           // spain  
      "australia 🦘🏄🔥🌏",           // australia  
      "south-africa 🦁🌄🎶🖤",           // south africa  
      "saudi-arabia 🕋🌙🕌🐪",           // saudi arabia  
      "south-korea 🎮🍜🎆🎎",           // south korea  
      "turkey 🕌🥙🎭🇹",           // turkey  
      "greece 🏛️🍇🏺🐏",           // greece  
      "singapore 🛳️🌇🍜🌿",           // singapore  
      "argentina 🥩💃⚽⛰️",           // argentina  
      "nigeria 🥁🎨🟢⚫",           // nigeria  
      "philippines 🏝️🎤🍚🪕",           // philippines  
      "pakistan 🕌🥘🧵🕊️",           // pakistan  
      "netherlands 🌷🧀🚲🧺",           // netherlands  
      "indonesia 🌋🏝️🍜🛕",           // indonesia  
      "vietnam 🍜🌾🛶🛕",           // vietnam  
      "ukraine 🌻🎶🍞🟦",           // ukraine  
      "morocco 🕌🌴🧉🏜️",           // morocco  
      "iran 🕌🧿📿🌄",           // iran  
      "kenya 🦓🏞️🥁🏃",           // kenya  
      "chile ⛰️🍷🏂🌶️",           // chile  
      "poland 🕍🎻🥟⛪",           // poland  
      "iceland 🧊🌋🧝‍♂️💨",        // iceland  
      "norway 🎿❄️🦌🛷",           // norway  
      "sweden 🛠️🧊🌲🎮",           // sweden  
      "finland ❄️🎶🦌📚",           // finland  
      "colombia ☕🎶🏞️🦜",           // colombia  
      "israel ✡️🏜️📖🕍",           // israel  
      "bangladesh 🕌🥭🎨🌾",           // bangladesh  
      "portugal ⚓🎶🍷🛶",           // portugal  
      "new-zealand 🦙🏔️🏉🎬",           // new zealand  
      "peru 🦙🗿⛰️🌽",           // peru  
      "belgium 🍫🏰🎶🍟",           // belgium  
      "switzerland ⛷️🏔️⏱️🍫",          // switzerland  
      "syria 🕌🏜️📿🎨",           // syria  
      "kazakhstan 🏜️🛢️🏇🕌",           // kazakhstan
      "afghanistan 🏔️🎋🕋🐪🌄",         // afghanistan
      "algeria 🏜️⚔️🍇🐪",         // algeria
      "andorra 🏔️⛷️🏞️🍷",         // andorra
      "angola 🐘🏞️🌍🌾",           // angola
      "antigua-and-barbuda 🏝️🍍🎉🛥️",           // antigua and barbuda
      "armenia ⛰️🏰🎻🍇",           // armenia
      "australia 🦘🏄🔥🌏",           // australia
      "austria 🏰🎶⛷️🍫",           // austria
      "azerbaijan 🛢️⚒️🕌🌾",        // azerbaijan
      "bahamas 🏝️🍍🎉🌊",           // bahamas
      "bahrain 🏙️⚽🕌🐪",           // bahrain
      "barbados 🏝️🌴🍹🎤",           // barbados
      "belarus 🇧🇾🌲🏞️🎶",           // belarus
      "belize 🏝️🦜🎶🍉",           // belize
      "benin 🇧🇯🌍🕊️",             // benin
      "bhutan 🏔️🕉️🐅🌿",          // bhutan
      "bolivia 🏔️🍛🇧🇴",            // bolivia
      "bosnia-and-herzegovina 🏰🌄🍇🎻",   // bosnia and herzegovina
      "botswana 🦁🏞️🌳🇧🇼",           // botswana
      "brunei 🏰💍🍽️🕌",           // brunei
      "bulgaria 🏞️🍞🇧🇬🎶",           // bulgaria
      "burkina-faso 🏜️🍗🎋🇧🇫",   // burkina faso
      "burundi 🏞️🐅🍠🎶",           // burundi
      "cabo-verde 🏝️🍷🎤🌞",       // cabo verde
      "cambodia 🏰🌿🕊️🍛",           // cambodia
      "cameroon 🇨🇲🍲🎤🎶",        // cameroon
      "canada 🍁🧣🦫⛷️",           // canada
      "central-african-republic 🌍🐆🏞️",   // central african republic
      "chad 🇹🇩🐆🏞️🌾",           // chad  
      "chile ⛰️🍷🏂🌶️",           // chile  
      "china 🐉🥡🏮🀄",           // china  
      "colombia ☕🎶🏞️🦜",           // colombia  
      "comoros 🏝️🌴🐒🐚",         // comoros
      "congo 🇨🇬🐒🌲🏞️",           // congo
      "costa-rica 🏝️🌞🦜🎶",         // costa rica
      "croatia 🏖️🍇🏰🎶",         // croatia
      "cuba 🇨🇺🍹🎶🎺",           // cuba  
      "cyprus 🏝️🌲🇨🇾🕊️",         // cyprus  
      "czech-republic 🇨🇿🏰⚙️🎶",       // czech republic  
      "democratic-republic-of-the-congo 🇨🇩🐒🌳🏞️", // drc  
      "denmark 🍷🍞🎶🏰",           // denmark  
      "djibouti 🏝️🐪⚓🎶",         // djibouti  
      "dominica 🏝️🍍🍷🎶",         // dominica  
      "dominican-republic 🇩🇴🍹🏝️🎉",  // dominican republic  
      "east-timor 🏝️🇹🇱🌅🎶",      // east timor
      "ecuador 🇪🇨🏞️🌄🍋",        // ecuador
      "egypt 🏜️🛕🐫📜",           // egypt  
      "el-salvador 🇸🇻🌋🍞🌿",       // el salvador
      "equatorial-guinea 🇬🇶🏞️🌍🌋",   // equatorial guinea  
      "eritrea 🇪🇷🗿🏞️🌄",          // eritrea  
      "estonia 🇪🇪🖥️🎶🎨",          // estonia
      "eswatini 🦁🏞️🎋🇸🇿",          // eswatini  
      "ethiopia 🏞️🌾☕🦒",           // ethiopia  
      "fiji 🏝️🌞🌴🍹",            // fiji  
      "finland ❄️🎶🦌📚",           // finland  
      "france 🥖🗼🎨🍷",           // france  
      "gabon 🦁🌳🌍🇬🇦",           // gabon  
      "gambia 🇬🇲🌾🐒🏞️",          // gambia  
      "georgia 🇬🇪🏰🍇🍞",          // georgia  
      "germany 🍺🎶🏰⚙️",           // germany  
      "ghana 🥁🎶🍍🌍",           // ghana  
      "greece 🏛️🍇🏺🐏",           // greece  
      "grenada 🏝️🍍🌴🎉",           // grenada  
      "guatemala 🇬🇹🌋🏞️🍲",         // guatemala  
      "guinea 🦁🌳🐾🌍",           // guinea  
      "guinea-bissau 🇬🇼🐒🌿🏝️",  // guinea-bissau  
      "guyana 🏞️🍛🍲🌾",           // guyana  
      "haiti 🌴🕊️🇭🇹",           // haiti  
      "honduras 🇭🇳🌄🐆🎶",         // honduras  
      "hungary 🎶🍞🏰⚙️",           // hungary  
      "iceland 🧊🌋🧝‍♂️💨",        // iceland  
      "india 🕌🌶️🪷🎉",           // india  
      "indonesia 🌋🏝️🍜🛕",           // indonesia
      "iran 🕌🧿📿🌄",           // iran  
      "iraq 🏜️🕌📜",           // iraq  
      "ireland 🍀🏰🎶☘️",           // ireland  
      "israel ✡️🏜️📖🕍",           // israel  
      "italy 🍝🍕🎭🛵",           // italy
      "jamaica 🏝️🎶🍹🎤",           // jamaica
      "japan 🍣🗻🎎🎌",           // japan
      "jordan 🏜️🕌🌍🌙",           // jordan  
      "kazakhstan 🏜️🛢️🏇🕌",           // kazakhstan
      "kenya 🦓🏞️🥁🏃",           // kenya
      "kiribati 🏝️🌅🌞🐢",        // kiribati  
      "korea-north 🏙️⛷️❄️🌏",         // north korea
      "korea-south 🎮🍜🎆🎎",           // south korea  
      "kuwait 🏙️🛢️🕌🦀",          // kuwait
      "kyrgyzstan 🏔️🐴🇰🇬🎶",        // kyrgyzstan
      "laos 🏞️🌾🛶⛰️",           // laos  
      "latvia 🇱🇻🍞🎶🎨",          // latvia
      "lebanon 🇱🇧🕊️🍇🏖️",         // lebanon  
      "lesotho 🏞️⛰️🎋🇱🇸",         // lesotho  
      "liberia 🦁🏞️🍚🏘️",           // liberia  
      "libya 🏜️🌍🕌🎋",         // libya
      "liechtenstein 🇱🇮⛰️🏰🍷",         // liechtenstein  
      "lithuania 🇱🇹🎶🏞️🍞",         // lithuania  
      "luxembourg 🏰🇱🇺🍷🎶",          // luxembourg  
      "madagascar 🦁🌴🍉🌍",          // madagascar  
      "malawi 🦋🌾🎶🦓",           // malawi  
      "malaysia 🌴🍜🐅🛥️",           // malaysia  
      "maldives 🏝️🐠🌴🪸",           // maldives  
      "mali 🏜️⚔️🎶🐪",          // mali  
      "malta 🏝️🍕🏰🌍",           // malta  
      "marshall-islands 🏝️🍍🦜🌊",    // marshall islands  
      "mauritania 🌍🕌🏜️🦒",        // mauritania  
      "mauritius 🏝️🌞🍍🍹",       // mauritius
      "mexico 🌮🎺🪅🌶️",           // mexico  
      "micronesia 🏝️🌞🍉🦜",      // micronesia  
      "moldova 🇲🇩🎶🏰🍞",           // moldova  
      "monaco 🏰💎🌴🍾",           // monaco  
      "mongolia 🏜️🐴🦅🎋",         // mongolia  
      "montenegro ⛰️🏰🏞️🇲🇪",     // montenegro  
      "morocco 🕌🌴🧉🏜️",           // morocco  
      "mozambique 🏞️🐘🌴🎶",        // mozambique  
      "myanmar 🏞️🕌🍜🌾",         // myanmar  
      "namibia 🦁🏞️🍃🇳🇦",          // namibia  
      "nauru 🏝️🌴💎🐠",            // nauru  
      "nepal 🏔️🦏🐅🎋",           // nepal  
      "netherlands 🌷🧀🚲🧺",           // netherlands
      "new-zealand 🦙🏔️🏉🎬",           // new zealand  
      "nicaragua 🇳🇮🎤🏖️🍛",           // nicaragua  
      "niger 🏜️🌍🦒🏞️",           // niger  
      "nigeria 🥁🎨🟢⚫",           // nigeria  
      "north-macedonia 🏰🎶🇲🇰",          // north macedonia  
      "norway 🎿❄️🦌🛷",           // norway  
      "oman 🏜️🕌🦒🌍",          // oman  
      "pakistan 🕌🥘🧵🕊️",           // pakistan  
      "palau 🏝️🌞🦜🍍",           // palau  
      "panama 🇵🇦🌊🍹🎉",           // panama  
      "papua-new-guinea 🦜🌍🍍🎶",       // papua new guinea  
      "paraguay 🇵🇾🦁🍜🌾",          // paraguay  
      "peru 🦙🗿⛰️🌽",           // peru
      "philippines 🏝️🎤🍚🪕",           // philippines  
      "poland 🕍🎻🥟⛪",           // poland  
      "portugal ⚓🎶🍷🛶",           // portugal
    ]
  },
  {
    name: "Home & Daily Life",
    emoji: "🏠",
    words: [
      // Rooms & Spaces
      "kitchen 🍳🔪🏠", "bathroom 🚿🧼🚽", "bedroom 🛏️🌙🧸", "living-room 🛋️📺🎮",
      "dining-room 🍽️🪑🥂", "garage 🚗🔧🧰", "balcony 🌇🪟☕", "garden 🌻🪴🧑‍🌾",
  
      // Furniture & Fixtures
      "bed 🛏️", "sofa 🛋️", "table 🍽️🪑🍲", "chair 🪑", "lamp 💡",
      "mirror 🪞", "toilet 🚽", "shower 🚿", "sink 🚰👐🧼", "fridge 🧊🚪🍉", "toilet-paper 🧻",
  
      // Appliances & Tools
      "microwave ⚡🍲⏱️", "stove 🔥🍳🥘", "washing-machine 🧺🌀👕", "vacuum-cleaner 🧹🌀🚪",
      "fan 🌬️🔄💨", "air-conditioner ❄️📟🛋️", "iron 🧺🔥👕", "blender 🍓⚙️🥤",
  
      // Daily Routines
      "wake-up ⏰😴☀️", "brush-teeth 🪥🦷💧", "take-a-shower 🚿🧼😌", "eat-breakfast 🍳☕🌞",
      "do-laundry 🧺👚🌀", "clean-the-house 🧼🧽🧹", "cook-dinner 🍲👩‍🍳🌆",
      "watch-tv 📺🛋️🍿", "read-a-book 📖☕🪟", "go-to-bed 😴🛏️🌙",
  
      // Household Items
      "remote-control 📺🎛️🖲️", "toothbrush 🪥🦷🚿", "towel 🧻🛁🧼", "laundry-basket 🧺👕👖",
      "clock ⏰🕒🛌", "light-switch 💡🔘💡", "curtains 🪟🧵🌙", "door-key 🔑🚪🏠",
  
      // Family & Home Life
      "family 👨‍👩‍👧‍👦🏠❤️", "homework 📚✏️🧠", "pet 🐶🐱🏡", "meal-time 🍽️👨‍👩‍👧‍👦🕐"
    ]
  },
  {
    name: "School & Learning",
    emoji: "🏫",
    words: [
      // Basic Tools & Objects (1 emoji)
      "pencil ✏️", "pen 🖊️", "notebook 📓", "book 📖", "backpack 🎒",
      "eraser 🩹", "ruler 📏", "scissors ✂️", "glue 🧴", "desk 🪑",
      "chalkboard 🧑‍🏫", "calculator 🧮", "paper 📄", "highlighter 🖍️", "crayon 🖍️",
  
      // School People
      "teacher 👩‍🏫📚🍎", "student 🧑‍🎓📘✏️", "principal 👨‍💼🏫📋", "classmates 🧑‍🤝‍🧑📖👂",
  
      // Subjects (2–4 emojis)
      "math ➕➗📐", "science 🔬🧪🌡️", "history 🏺📜⌛", "geography 🌍🗺️📌",
      "english 📚📝🇬🇧", "art 🎨🖌️🖼️", "music 🎵🎼🎹", "physical-education 🏃‍♂️🏀💦",
      "computer-science 💻⌨️🔧", "foreign-language 🗣️🌐📘", "biology 🧬🧫🌱",
  
      // Concepts & Abstract Ideas (3–4 emojis)
      "reading 📖👀🧠", "writing ✍️📝🧠", "homework 📚⌛😩",
      "exams 📝📏😰", "grades 🅰️📊🎯", "discipline 🚦📏🧘‍♂️",
      "focus 👀🎯📚", "creativity 💡🎨🧠", "curiosity 🧠❓🔍",
      "teamwork 🤝📚👥", "leadership 🧑‍🏫⭐👥", "motivation 🔥🎯📈",
  
      // School Life Activities
      "school-bus 🚌🏫📍", "group-project 🤝📋💬", "recess 🛝🍎🕒", "lunch-break 🥪🧃🪑",
      "presentation 🧑‍🏫📊🎤", "assembly 🎤🏫👥", "field-trip 🚌🗺️🧭"
    ]
  },
  {
    name: "School & Learning – Advanced",
    emoji: "🎓",
    words: [
      // Simple objects (still 1 emoji)
      "pencil ✏️", "notebook 📓", "calculator 🧮📱", "projector 💻📽️",
  
      // Complex subjects & concepts (3–5 emojis)
      "critical-thinking 🧠🔍🤔📚",  
      "fractions 🍰➗📏",  
      "discipline 🚦📏🧘‍♂️😔",  
      "historical-revisionism 🏺🔁📜❗",  
      "algorithmic-bias 💻⚖️🔬🧠",  
      "socratic-method 👨‍🏫❓🗣️💭",  
      "multivariable-calculus 📈∭🧮🧠",  
      "colonialism ⚔️🌍📜🏴",  
      "cognitive-dissonance 🧠⚡🚫😵",  
      "supply-and-demand 📉📈💰🛒",  
      "intersectionality ♀️🌐🤝🏽🧠",  
      "confirmation-bias 👀✅🧠🚫",  
      "heuristics 🧠⚡🗺️",  
      "fallacy 🧠🚫📢🔄",  
      "epistemology ❓📘🧠📚",  
      "ethnography 🧍🌍📝🔍",  
      "peer-review 🧑‍🔬📄👀✅",  
      "statistical-significance 📊🧮⭐🔬",  
      "academic-integrity 🧑‍🎓📜🧭🚫",  
      "natural-selection 🐒🧬🔁🌱",  
      "photosynthesis 🌞🌿💧🧪",  
      "thermodynamics 🔥🧊🔁⚙️",  
      "macroeconomics 💰🌍📈📉",  
      "linguistic-relativity 🗣️🌐🤯📘",  
      "logical-consistency 📐🧠➕=",  
      "sustainable-development 🌍🔋🏗️♻️",  
      "computational-thinking 💻🧠🔧📊"
    ]
  },
  {
    name: "Economics",
    emoji: "💰",
    words: [
      "supply-and-demand 📈📉🛒💰🔁",  
      "inflation 💸📈🍞😱",  
      "deflation 💸📉🏪😨",  
      "recession 📉🏭📉😟",  
      "economic-growth 🌱🏗️📈💹",  
      "unemployment 👨‍💼❌💼📉",  
      "opportunity-cost 💸➡️🚫💡📦",  
      "scarcity ⚠️📦📉👥",  
      "invisible-hand 🤲❌👁️🏪🔄",  
      "free-market 🛍️💰↔️📈",  
      "planned-economy 🧑‍🏫📋🏭📦",  
      "capitalism 🏦📈💼🛍️",  
      "socialism 🏭👥📦⚖️",  
      "monopoly 🏢🚫⚔️📦",  
      "taxation 💸🏛️👥📊",  
      "interest-rate 💳📈📉🏦",  
      "minimum-wage 💵⬆️👷",  
      "globalization 🌍📦🛳️💹",  
      "trade-surplus 📦📤➕💰",  
      "trade-deficit 📦📥➖💸",  
      "balance-of-payments 💰📤📥⚖️",  
      "gross-domestic-product 💵🏭📈🇺🇸",  
      "consumer-price-index 🛒📊🍎💵",  
      "market-equilibrium 📈📉⚖️🏪",  
      "marginal-utility 🍩➕🍩➖😐",  
      "externality 🏭💨🏥🚑",  
      "subsidy 💸➡️🏭📦",  
      "budget-deficit 🏛️💸➖📊",  
      "fiscal-policy 🏛️📈💵🛠️",  
      "monetary-policy 🏦💵🔧📊",  
      "central-bank 🏦💵⚖️🔁",  
      "human-capital 🧑📚💼📈",  
      "productivity ⚙️📦💼📈",  
      "specialization 🧑💼🔁📦📈",  
      "comparative-advantage ⚖️📦🌍💰",  
      "public-goods 🚦🛣️🧯👥",  
      "market-failure 🏪📉⚠️👥",  
      "price-ceiling 💵🚫⬆️🏪",  
      "price-floor 💵🚫⬇️👷",  
      "aggregate-demand 📉👥🛍️📦",  
      "aggregate-supply 📈🏭📦💼",  
      "debt 📉💸💳🧾",  
      "interest 🏦💵➕🕒",  
      "credit-score 💳📊🔢🔒",  
      "exchange-rate 💵🔁💶🌍",  
      "imports 📥🌍📦🏪",  
      "exports 📤🏭📦🌍"
    ]
  },
  {
    name: "Environmental Science",
    emoji: "🌱",
    words: [
      "climate-change 🌍🌡️📈🔥❄️",  
      "global-warming 🌎🔥📊🌡️",  
      "greenhouse-effect 🌤️🏠🌫️🔥",  
      "carbon-emissions 🚗🏭💨🌫️",  
      "renewable-energy 🌞💨🌊🔋",  
      "fossil-fuels 🪨🔥⛽🌫️",  
      "solar-power ☀️🔋🏡⚡",  
      "wind-energy 🌬️💨⚙️🔋",  
      "hydropower 💧🏞️⚡🔋",  
      "deforestation 🌳🪓🚫🔥",  
      "reforestation 🌱🌲🔁🌍",  
      "biodiversity 🐘🌸🐝🧬",  
      "ecosystem 🌿🦋🌍🔄",  
      "sustainability 🔁🌍♻️📉",  
      "pollution 🏭💨🛢️😷",  
      "plastic-waste 🛍️🚯🌊🐢",  
      "ocean-acidification 🌊💨🧪🐚",  
      "coral-bleaching 🪸🔥🌊⚠️",  
      "urbanization 🏙️🌳➡️🏗️",  
      "carbon-footprint 🦶💨📊🌍",  
      "climate-justice ⚖️🌡️👥🌍",  
      "overfishing 🐟🎣📉🌊",  
      "conservation 🌱🦉🛡️🌳",  
      "endangered-species 🐼⚠️🌍🚫",  
      "natural-disaster 🌪️🌊🔥🗻⚠️",  
      "desertification 🏜️🌿🚫💧",  
      "ozone-layer 🧪🌐☀️🛡️",  
      "recycling ♻️🗑️📦🔄",  
      "composting 🌿🍌🗑️🪱",  
      "ecological-footprint 🐾📊🌍⚠️",  
      "environmental-impact 🧪📉🌍⚠️",  
      "carbon-offsets 💨➖🌲✅",  
      "climate-refugees 🌍🌊🚪👥",  
      "clean-water 💧🚿🫧✅",  
      "air-quality 🌫️🫁📊🚦",  
      "sustainable-agriculture 🌾♻️🌧️🌍",  
      "organic-farming 🌱🚫🧪🐞",  
      "wildlife-corridor 🦌🌲🌉🦊",  
      "environmental-policy 🏛️📜🌍♻️",  
      "climate-modeling 🌎📊🧠🔮"
    ]
  },
  {
    name: "Technology & AI",
    emoji: "🤖",
    words: [
      "artificial-intelligence 🤖🧠💡📊",  
      "machine-learning 🧠🔁📈🤖",  
      "deep-learning 🧠🔗📊🌊",  
      "neural-network 🧠🕸️🔌📚",  
      "natural-language-processing 🗣️💬🧠🔍",  
      "computer-vision 👁️📷🧠🖥️",  
      "data-science 📊🧪🧠🔬",  
      "algorithm 📏🔄📦📈",  
      "automation 🤖⚙️🔁🏭",  
      "robotics 🤖🦾⚙️🏃",  
      "blockchain 🔗💰📜🧮",  
      "cryptocurrency 💰🧮🔒🌐",  
      "quantum-computing ⚛️🖥️🌌📈",  
      "cloud-computing ☁️💾🌐📡",  
      "cybersecurity 🛡️💻🔒🕵️",  
      "hacking 💻🕵️‍♂️🧠🔓",  
      "encryption 🔒🔢📧🧠",  
      "big-data 🗃️📊📈🌍",  
      "data-mining ⛏️📊💎🧠",  
      "augmented-reality 👓📱🌍➕",  
      "virtual-reality 🥽🌌🎮👁️",  
      "metaverse 🌐🧑‍💻🎮🧠",  
      "smartphone 📱📡🧠💬",  
      "internet-of-things 🌐📶📦🏠",  
      "wearable-tech ⌚🧠📡👟",  
      "self-driving-car 🚗🧠🛰️👁️",  
      "facial-recognition 👤📷🧠🔍",  
      "voice-assistant 🗣️🎙️🤖📲",  
      "chatbot 💬🤖🔁📱",  
      "server 🖥️🏢📡🌐",  
      "database 🗄️📦🔍💻",  
      "software-development 🧑‍💻💻🛠️🔁",  
      "programming-language 💻🔤🧠📚",  
      "user-interface 🖥️👆🧭🎨",  
      "user-experience 🧠🖱️😄📲",  
      "digital-divide 🌍📶🚫👥",  
      "tech-ethics ⚖️🤖👥🧠",  
      "surveillance 📹👁️🚨🧠",  
      "bias-in-ai 🤖⚖️🚫🧠",  
      "prompt-engineering ✍️🧠🤖🔧",  
      "singularity 🔮🤖📈♾️"
    ]
  },
  {
    name: "Space Science",
    emoji: "🪐",
    words: [
      "astronomy 🔭🌌👁️🧠📚",  
      "astrophysics 🧠🌠📈⚛️",  
      "cosmology 🌌🧠🔍📊",  
      "solar-system ☀️🪐🌍🛰️",  
      "planetary-orbit 🌍🔁☀️🧲",  
      "gravitational-pull 🧲🌍⬇️📉",  
      "black-hole ⚫🌌🌀🧠❓",  
      "event-horizon ⚫🚫🔦🧭",  
      "supernova 🌟💥🌌🔭",  
      "neutron-star 🌟🧲⚛️🧠",  
      "galaxy 🌌✨🔭♾️",  
      "light-year 🌟📏⏱️🌌",  
      "space-time 🧠🕰️🌌📐",  
      "relativity 🧠⏳🚀📊",  
      "dark-matter 🌌🕳️🧪🧩",  
      "dark-energy 🌌⚡📈🧠",  
      "exoplanet 🌍🚀✨🔭",  
      "space-telescope 🔭🚀🌌📡",  
      "astronaut 🧑‍🚀🚀🌌🛰️",  
      "spacesuit 👨‍🚀🧤🔋🧑‍🔧",  
      "spacecraft 🚀🧠🔧🌌",  
      "space-station 🛰️🏠🔁🌌",  
      "rover 🚙🪨🔍🧠",  
      "moon-landing 🌕👣🚀🎉",  
      "lunar-eclipse 🌕🌑🌍🚫",  
      "solar-eclipse ☀️🌑🌍🌗",  
      "comet ☄️🌠🧊🔭",  
      "asteroid 🪨☄️🌌⚠️",  
      "meteor-shower 🌠🌠🌌🎇",  
      "international-space-station 🛰️🌍🤝👨‍🚀",  
      "planet-formation 🪐🪨🌀🌋",  
      "space-exploration 🚀🌌🔍🧠",  
      "orbital-mechanics 📐🛰️🔁⚖️",  
      "rocket-science 🚀📐💥🔧",  
      "launch-sequence 🚀🔢🎬🕐",  
      "interstellar-travel 🌌🚀🧭♾️",  
      "gravity-assist 🪐🚀📈🔁",  
      "habitable-zone 🌍🌀☀️💧",  
      "terraforming 🪐🛠️🌱💧",  
      "signal-from-space 📡📶🛸❓"
    ]
  },
  {
    name: "Biology",
    emoji: "🧬",
    words: [
      "cell 🧫🔬🧬🌱",  
      "nucleus 🔬⚛️📍🧠",  
      "mitochondria 🔋🧬🧫🔥",  
      "cell-membrane 🧫🚪🧱🧪",  
      "cytoplasm 🧫💧🌊🧪",  
      "photosynthesis 🌱☀️💧💨🍽️",  
      "respiration 🫁🔥🍽️🔁",  
      "homeostasis ⚖️🌡️🧍🔁",  
      "osmosis 💧⬅️➡️🧫🧪",  
      "diffusion 🧪🔄💨🧫",  
      "chloroplast 🌿🔋☀️🧪",  
      "genetics 🧬🧠📚👶",  
      "dna 🧬📄🔍🔗",  
      "gene-expression 🧬📤🧠🛠️",  
      "mutation 🧬⚡🧠❓",  
      "meiosis 👶🔁🧬✂️",  
      "mitosis 🧫➗🔁📈",  
      "protein-synthesis 🧬🔁🍽️🧠",  
      "enzyme 🔧🧪⏱️⚙️",  
      "hormone 🧪📩🧍🌡️",  
      "immune-system 🧪🛡️🧬🧫",  
      "antibody 🧪🛡️🦠❌",  
      "pathogen 🦠🚨❗😷",  
      "bacteria 🧫🦠👾🌱",  
      "virus 🦠📦🧬👾",  
      "evolution 🧬🐒➡️🧍📈",  
      "natural-selection 🧬🏞️⚖️💪",  
      "ecosystem 🌳🐛🌊⚖️",  
      "food-chain 🐁🐍🦅🍽️",  
      "predator-prey 🦁➡️🦓⚖️",  
      "reproduction 🧬👨‍👩‍👧👶♻️",  
      "sexual-reproduction 👫🧬🔀👶",  
      "asexual-reproduction 🧫🔁👯",  
      "stem-cell 🧫🌱♾️🛠️",  
      "genetic-engineering 🧬🛠️✂️👨‍🔬",  
      "photosynthetic-organisms 🌿☀️💧🍽️",  
      "biodiversity 🐸🌿🦉♻️",  
      "ecological-succession 🌱🌾🌳🐿️",  
      "biogeochemical-cycle 💧🌬️🌍🔄",  
      "adaptation 🐫🏜️🧬💪",  
      "taxonomy 📚🔍🦋🧬",  
      "microscope 🔬👀🧫📚"
    ]
  },
  {
    name: "Automotive",
    emoji: "🚗",
    words: [
      "car 🚗",
      "truck 🚚",
      "motorcycle 🏍️",
      "bus 🚌",
      "van 🚐",
      "pickup-truck 🛻🧰",
      "ambulance 🚑⛑️",
      "police-car 🚓👮‍♂️",
      "fire-truck 🚒🔥",
      "taxi 🚕💵",
      "electric-car ⚡🚗🔌",
      "hybrid-car 🔋⛽🚗",
      "sports-car 🏎️💨🏁",
      "racecar 🏁🏎️🔥",
      "convertible 🚘☀️⬆️",
      "jeep 🛻🌲🏔️",
      "limousine 🚘🎩🍾",
      "tow-truck 🚛⚠️🔧",
      "snowplow 🚛❄️🧹",
      "bulldozer 🚜🪨🛠️",
      "RV 🚐🏕️🛏️",
      "trailer 🛻🏠⚙️",
      
      "engine 🔧🛞💥",
      "brakes 🛑🛞💨",
      "transmission ⚙️🔁🚗",
      "clutch 🦶⚙️🚘",
      "exhaust-system 🌬️🔥🚗",
      "suspension 🛞⬆️⬇️",
      "steering-wheel 🕹️🛞🚗",
      "headlights 💡🌙🚘",
      "windshield-wipers 🌧️🧼🧽",
      "tire 🛞⚫💨",
      "flat-tire 🛞🔻💥",
      "airbag 🎈💥🧍",
      "seatbelt 🎗️🧍🛡️",
      "dashboard 📊🚘🛠️",
      "gas-pedal 🦶⚡🚗",
      "speedometer ⏱️💨🚘",
      "odometer 📏📊🚗",
      "fuel-tank ⛽🛢️🔥",
      "battery 🔋⚡🚗",
      "oil-change 🛢️🔄🧰",
      
      "manual-transmission 🧑‍🔧⚙️🕹️",
      "automatic-transmission 🔁🚗⚙️",
      "turbocharger 🌪️⚙️💨",
      "all-wheel-drive 🛞🛞🛞🛞",
      "cruise-control 🚗🛌⏱️",
      "parking-sensor 📢🚘🅿️",
      "GPS 🗺️📍🚗",
      "infotainment-screen 📺🎶🗺️",
      
      "car-wash 🚿🚗🧽",
      "refueling ⛽💰🚗",
      "drifting 🚗💨↩️",
      "drag-racing 🏁🚦🔥🚗",
      "off-roading 🛻🏔️🌲",
      "tuning 🔧🎛️🏎️",
      "test-drive 🚗🧪🛣️",
      "road-trip 🚗🗺️🍔🎶",
      "traffic-jam 🚗🚗🚗⏳",
      "accident 🚗💥🚑",
      
      "driver’s-license 🪪🚗✅",
      "mechanic 🧑‍🔧🔧🛠️",
      "dealership 🚗🏢💵",
      "auto-show 🚗🎪✨",
      "car-insurance 💵🛡️🚗",
      "registration 🪪📄🚘",
      "inspection 🔍🚗✅",
      "engine-light 💡⚠️🚗",
      "EV-charging 🔋⚡🔌🚘",
      
      "Tesla ⚡🚗🧠",
      "Toyota 🚗🌏🧱",
      "BMW 🚗🇩🇪🛣️",
      "Mercedes-Benz 🚘⭐🇩🇪",
      "Ford 🚙🇺🇸🏁",
      "Honda 🚗🇯🇵🔧",
      "Volkswagen 🚙🇩🇪👨‍👩‍👧",
      "Jeep 🛻🇺🇸🪖",
      "Porsche 🏎️🇩🇪🔥",
      "Lamborghini 🐂🏎️🔥",
      "Ferrari 🐎🏁🇮🇹"
    ]
  },
  {
    name: "Famous People",
    emoji: "🌟",
    words: [
      // Scientists & Thinkers
      "albert-einstein 🧠🔬🧲👨🏻‍🦳",
      "isaac-newton 🍎📐🌌🧑🏻‍🔬",
      "marie-curie 🧪☢️🎓👩🏻‍🔬",
      "stephen-hawking ♿🌌🕳️👨🏻‍🦼",
      "galileo-galilei 🔭🌠⚖️🧔🏻",
      "charles-darwin 🐒🌿📜🧔",
  
      // Humanitarians & Activists
      "martin-luther-king ✊🏽🕊️🎤👨🏾",
      "mahatma-gandhi 🕊️🇮🇳🧘👴🏽",
      "nelson-mandela ✊🏿🕊️🇿🇦👨🏿",
      "mother-teresa 🧕🕊️❤️👵🏻",
      "malala-yousafzai 📚🧕✊🏽👧🏽",
  
      // Historical Leaders
      "abraham-lincoln 🎩🇺🇸📜🧔🏻",
      "george-washington 🎖️🇺🇸🦅👨🏻‍🦳",
      "napoleon-bonaparte 🇫🇷🎖️🧢🧔🏻",
      "cleopatra 👑🐍🇪🇬👩🏽",
      "julius-caesar 🏛️⚔️🇮🇹🧔🏻",
  
      // Artists & Writers
      "leonardo-da-vinci 🎨🛠️🧠🧔🏻",
      "william-shakespeare 🎭🖋️📜🧔🏻",
      "vincent-van-gogh 🎨🌻🧠🧔🏻",
      "pablo-picasso 🎨🧩🧔🏻",
      "frida-kahlo 🎨🌺🧕👩🏽",
  
      // Entrepreneurs
      "elon-musk 🚀🔋🌕🧔🏻",
      "steve-jobs 🍏📱🧠🧔🏻",
      "bill-gates 💻📘💵👓🧔🏻",
      "mark-zuckerberg 👨‍💻📘🌐🧑🏻",
      "oprah-winfrey 🎤📺💬👩🏾",
  
      // Political Leaders
      "barack-obama 🇺🇸🗳️✊🏾👨🏾",
      "donald-trump 🇺🇸🏢💬👱🏻‍♂️",
      "joe-biden 🇺🇸🤝🗳️👴🏻",
      "vladimir-putin 🇷🇺🕵️‍♂️🎖️👨🏻",
      "xi-jinping 🇨🇳🐉🏛️👨🏻",
  
      // Entertainers
      "kim-kardashian 💄📸💰👩🏻",
      "taylor-swift 🎤💔📝👩🏻",
      "beyoncé 👑🎤💃👩🏾",
      "michael-jackson 🕺🎶🧤👨🏻",  // Skin tone chosen post-vitiligo
      "elvis-presley 🎸👑🕺👨🏻",
      "freddie-mercury 🎤🎹👑👨🏻‍🎤",
  
      // Athletes
      "lionel-messi ⚽🇦🇷🐐👨🏻",
      "cristiano-ronaldo ⚽🇵🇹💪👨🏻",
      "serena-williams 🎾🏆💪🏾👩🏾",
      "muhammad-ali 🥊👑🐝👨🏿",
      "usain-bolt 🏃💨⚡👨🏿",
  
      // Others
      "anne-frank 📖🕊️🕍👧🏻",
      "joan-of-arc ⚔️🔥🧕👩🏻",
      "princess-diana 👑❤️🚗👱🏻‍♀️",
      "queen-elizabeth 👑🇬🇧🧓👵🏻",
      "walt-disney 🐭🎬✨🧔🏻"
    ]
  }
  

];
