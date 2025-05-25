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
      "car 🚗", "sport-utility-vehicle 🚙", "bus 🚌", "oncoming-bus 🚍", "trolleybus 🚎",
      "minibus 🚐", "taxi 🚕", "oncoming-taxi 🚖", "police-car 🚓", "oncoming-police-car 🚔",
      "fire-engine 🚒", "ambulance 🚑", "delivery-truck 🚚", "articulated-lorry 🚛",
      "tractor 🚜", "pickup-truck 🛻", "train 🚆", "high-speed-train 🚄", "bullet-train 🚅",
      "light-rail 🚈", "tram 🚋", "mountain-railway 🚞", "railway-car 🚃", "monorail 🚝",
      "suspension-railway 🚟", "cable-car 🚠", "aerial-tramway 🚡", "motorcycle 🏍️",
      "motor-scooter 🛵", "kick-scooter 🛴", "bicycle 🚲", "manual-wheelchair 🦽",
      "motorized-wheelchair 🦼", "auto-rickshaw 🛺", "skateboard 🛹", "roller-skate 🛼",
    
      // Air Transport
      "airplane ✈️", "small-airplane 🛩️", "airplane-departure 🛫", "airplane-arrival 🛬",
      "helicopter 🚁", "parachute 🪂", "flying-saucer 🛸",
    
      // Water Transport
      "ship 🚢", "ferry ⛴️", "motor-boat 🛥️", "speedboat 🚤", "sailboat ⛵",
      "canoe 🛶", "passenger-ship 🛳️",
    
      // Space
      "rocket 🚀", "satellite 🛰️", "flying-saucer 🛸", "ringed-planet 🪐", "astronaut 🧑‍🚀",
    
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
      "salad 🥗", "egg 🥚", "boiled-egg 🥚💧", "omelette 🍳", "bread 🍞",
    
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
  }
];
