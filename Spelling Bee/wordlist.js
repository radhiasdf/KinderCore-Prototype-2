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
      "dragon face 🐲", "sauropod 🦕", "t-rex 🦖", "spouting-whale 🐳",
      "whale 🐋", "dolphin 🐬", "fish 🐟", "tropical-fish 🐠", "blowfish 🐡",
      "shark 🦈", "octopus 🐙", "spiral shell 🐚", "snail 🐌", "butterfly 🦋",
      "bug 🐛", "ant 🐜", "bee 🐝", "beetle 🪲", "cricket 🦗", "cockroach 🪳",
      "spider 🕷️", "spider-web 🕸️", "scorpion 🦂", "mosquito 🦟", "fly 🪰",
      "worm 🪱", "microbe 🦠"
    ]
  },
  {
    name: "Transport",
    emoji: "🚗",
    words: [
      "car 🚗", "bus 🚌", "train 🚆", "airplane ✈️", "motorbike 🏍️",
      "spaceship 🚀", "bicycle 🚲", "helicopter 🚁", "boat 🚢", "submarine 🛳️",
      "scooter 🛵", "tram 🚋", "taxi 🚕", "truck 🚚", "van 🚐"
    ]
  },
  {
    name: "Weather",
    emoji: "☀️",
    words: [
      "sunshine ☀️", "rain 🌧️", "lightning 🌩️", "snowfall ❄️", "cloud ☁️",
      "wind 🌬️", "storm 🌪️", "fog 🌫️", "hail 🌨️", "drizzle 🌦️"
    ]
  },
  {
    name: "Professions",
    emoji: "👩‍⚕️",
    words: [
      "doctor 🧑‍⚕️", "nurse 👩‍⚕️", "scientist 👩‍🔬", "astronaut 👨‍🚀", "engineer 👷",
      "firefighter 👨‍🚒", "teacher 🧑‍🏫", "pilot 👨‍✈️", "chef 👨‍🍳", "farmer 👩‍🌾",
      "police 👮", "artist 🎨", "writer ✍️", "dancer 💃", "singer 🎤"
    ]
  },
  {
    name: "Food",
    emoji: "🍕",
    words: [
      "hamburger 🍔", "sandwich 🥪", "spaghetti 🍝", "chocolate 🍫", "doughnut 🍩",
      "pizza 🍕", "sushi 🍣", "cookie 🍪", "bread 🍞", "cheese 🧀",
      "egg 🥚", "cake 🎂", "icecream 🍨", "salad 🥗", "steak 🥩"
    ]
  },
  {
    name: "Clothes",
    emoji: "👕",
    words: [
      "sweater 🧥", "sneakers 👟", "glasses 👓", "necklace 📿", "backpack 🎒",
      "shirt 👕", "pants 👖", "hat 🎩", "glove 🧤", "ring 💍",
      "scarf 🧣", "jacket 🧥", "boots 👢", "dress 👗", "tie 👔"
    ]
  },
  {
    name: "Emotions",
    emoji: "😊",
    words: [
      "surprise 😲", "happiness 😀", "laughter 😂", "sadness 😢", "anger 😠",
      "love ❤️", "fear 😱", "boredom 😐", "excitement 🤩", "confusion 😕"
    ]
  },
  {
    name: "Colors",
    emoji: "🎨",
    words: [
      "red 🔴", "blue 🔵", "green 🟢", "yellow 🟡", "purple 🟣",
      "orange 🟠", "pink 🌸", "brown 🟤", "black ⚫", "white ⚪"
    ]
  },
  {
    name: "Body Parts",
    emoji: "🧍",
    words: [
      "head 🧠", "eye 👁️", "ear 👂", "nose 👃", "mouth 👄",
      "hand ✋", "foot 🦶", "leg 🦵", "arm 💪", "back 🧍‍♂️"
    ]
  }
];
