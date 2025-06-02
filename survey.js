// survey.js
export const items = [
    ["menyusahkan", "menyenangkan"],
    ["tak dapat dipahami", "dapat dipahami"],
    ["kreatif", "monoton"],
    ["mudah dipelajari", "sulit dipelajari"],
    ["bermanfaat", "kurang bermanfaat"],
    ["membosankan", "mengasyikkan"],
    ["tidak menarik", "menarik"],
    ["tak dapat diprediksi", "dapat diprediksi"],
    ["cepat", "lambat"],
    ["berdaya cipta", "konvensional"],
    ["menghalangi", "mendukung"],
    ["baik", "buruk"],
    ["rumit", "sederhana"],
    ["tidak disukai", "menggembirakan"],
    ["lazim", "terdepan"],
    ["tidak nyaman", "nyaman"],
    ["aman", "tidak aman"],
    ["memotivasi", "tidak memotivasi"],
    ["memenuhi ekspektasi", "tidak memenuhi ekspektasi"],
    ["tidak efisien", "efisien"],
    ["jelas", "membingungkan"],
    ["tidak praktis", "praktis"],
    ["terorganisasi", "berantakan"],
    ["atraktif", "tidak atraktif"],
    ["ramah pengguna", "tidak ramah pengguna"],
    ["konservatif", "inovatif"]
  ];
  
  export function createTableRows(items) {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
  
    items.forEach((pair, i) => {
      const tr = document.createElement("tr");
  
      // Negative label (left)
      const tdNeg = document.createElement("td");
      tdNeg.textContent = pair[0];
      tr.appendChild(tdNeg);
  
      // Scale radio buttons (1 to 7)
      for (let val = 1; val <= 7; val++) {
        const td = document.createElement("td");
        td.style.textAlign = "center";
  
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `item${i + 1}`;
        input.value = val;
        input.required = true;
  
        td.appendChild(input);
        tr.appendChild(td);
      }
  
      // Positive label (right)
      const tdPos = document.createElement("td");
      tdPos.textContent = pair[1];
      tr.appendChild(tdPos);
  
      tbody.appendChild(tr);
    });
  }
  
  export function createCards(items) {
    const container = document.getElementById("cardsWrapper");
    container.innerHTML = "";
  
    items.forEach((pair, i) => {
      const card = document.createElement("div");
      card.className = "survey-card";
  
      // Question text (negative side)
      const question = document.createElement("p");
      question.className = "question";
      question.textContent =  `◀️ ${pair[0]}`;
      card.appendChild(question);
  
      // Options row
      const optionsRow = document.createElement("div");
      optionsRow.className = "options-row";
  
      for (let val = 1; val <= 7; val++) {
        const input = document.createElement("input");
        input.type = "radio";
        input.id = `item${i+1}_option${val}`;  // add unique id here
        input.name = `item${i + 1}`;
        input.value = val;
        input.required = true;
      
        const label = document.createElement("label");
        label.htmlFor = input.id; // link label to input
      
        optionsRow.appendChild(input);
        optionsRow.appendChild(label);
      }
  
      card.appendChild(optionsRow);
  
      // Positive label below
      const positiveLabel = document.createElement("div");
      positiveLabel.className = "positive-label";
      positiveLabel.textContent = `${pair[1]} ▶️`;
      card.appendChild(positiveLabel);
  
      container.appendChild(card);
    });
  }
  