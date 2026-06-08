// ============================================
// EXERCIȚII - Sprechen B2: Klimaschutz
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Traducere DE → RO
// ============================================
const ex1Data = [
    { id: 'a', de: 'der Klimawandel', correct: 'schimbările climatice', accept: ['schimbările climatice', 'schimbarile climatice'] },
    { id: 'b', de: 'die Erderwärmung', correct: 'încălzirea globală', accept: ['încălzirea globală', 'incalzirea globala'] },
    { id: 'c', de: 'der CO₂-Ausstoß', correct: 'emisiile de CO₂', accept: ['emisiile de co₂', 'emisiile de co2'] },
    { id: 'd', de: 'die erneuerbaren Energien', correct: 'energiile regenerabile', accept: ['energiile regenerabile'] },
    { id: 'e', de: 'der ökologische Fußabdruck', correct: 'amprenta ecologică', accept: ['amprenta ecologică', 'amprenta ecologica'] },
    { id: 'f', de: 'die Energiewende', correct: 'tranziția energetică', accept: ['tranziția energetică', 'tranzitia energetica'] },
    { id: 'g', de: 'die Klimaneutralität', correct: 'neutralitatea climatică', accept: ['neutralitatea climatică', 'neutralitatea climatica'] },
    { id: 'h', de: 'nachhaltig leben', correct: 'a trăi sustenabil', accept: ['a trăi sustenabil', 'a trai sustenabil'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE
// ============================================
const ex2Data = [
    { id: 'a', ro: 'a recicla', correct: 'recyceln', accept: ['recyceln', 'müll trennen', 'muell trennen'] },
    { id: 'b', ro: 'a economisi energie', correct: 'Energie sparen', accept: ['energie sparen'] },
    { id: 'c', ro: 'taxa pe CO₂', correct: 'die CO₂-Steuer', accept: ['die co₂-steuer', 'co₂-steuer', 'die co2-steuer', 'co2-steuer'] },
    { id: 'd', ro: 'a renunța la mașină', correct: 'auf das Auto verzichten', accept: ['auf das auto verzichten'] },
    { id: 'e', ro: 'poluarea mediului', correct: 'die Umweltverschmutzung', accept: ['die umweltverschmutzung', 'umweltverschmutzung'] },
    { id: 'f', ro: 'a contribui', correct: 'einen Beitrag leisten', accept: ['einen beitrag leisten'] },
    { id: 'g', ro: 'a investi în energii regenerabile', correct: 'in erneuerbare Energien investieren', accept: ['in erneuerbare energien investieren'] },
    { id: 'h', ro: 'încălzirea globală', correct: 'die Erderwärmung', accept: ['die erderwärmung', 'erderwärmung', 'erderwaermung'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#6b7280; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Der ____ ist eine der größten Herausforderungen des 21. Jahrhunderts.', translation: 'Schimbările climatice sunt una dintre cele mai mari provocări ale secolului 21.', correct: 'Klimawandel', accept: ['klimawandel'] },
    { id: 'b', sentence: 'Wenn wir ____ trennen, helfen wir der Umwelt.', translation: 'Dacă separăm gunoiul, ajutăm mediul.', correct: 'Müll', accept: ['müll', 'muell'] },
    { id: 'c', sentence: 'Viele Menschen wollen auf das ____ verzichten und mit dem Fahrrad fahren.', translation: 'Mulți oameni vor să renunțe la mașină și să meargă cu bicicleta.', correct: 'Auto', accept: ['auto'] },
    { id: 'd', sentence: 'Die Regierung muss strenge ____ einführen, um die Industrie zu regulieren.', translation: 'Guvernul trebuie să introducă legi stricte pentru a reglementa industria.', correct: 'Gesetze', accept: ['gesetze'] },
    { id: 'e', sentence: 'Die ____ -Steuer macht fossile Brennstoffe teurer.', translation: 'Taxa pe CO₂ face combustibilii fosili mai scumpi.', correct: 'CO₂', accept: ['co₂', 'co2'] },
    { id: 'f', sentence: 'Wir müssen in ____ Energien wie Solar und Wind investieren.', translation: 'Trebuie să investim în energii regenerabile precum solara și eoliana.', correct: 'erneuerbare', accept: ['erneuerbare'] },
    { id: 'g', sentence: 'Mein ökologischer ____ ist klein, weil ich vegetarisch lebe.', translation: 'Amprenta mea ecologică e mică pentru că trăiesc vegetarian.', correct: 'Fußabdruck', accept: ['fußabdruck', 'fussabdruck'] },
    { id: 'h', sentence: 'Die ____ steigt — schon jetzt sind die Polkappen geschmolzen.', translation: 'Temperatura crește — calotele polare s-au topit deja.', correct: 'Erderwärmung', accept: ['erderwärmung', 'erderwaermung'] },
    { id: 'i', sentence: 'Das Pariser ____ wurde 2015 unterschrieben.', translation: 'Acordul de la Paris a fost semnat în 2015.', correct: 'Klimaabkommen', accept: ['klimaabkommen', 'abkommen'] },
    { id: 'j', sentence: 'Wir wollen ____ leben und der nächsten Generation eine bessere Welt hinterlassen.', translation: 'Vrem să trăim sustenabil și să lăsăm generației următoare o lume mai bună.', correct: 'nachhaltig', accept: ['nachhaltig'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează propoziția cu cuvântul potrivit din vocabular.</strong><br>
            Folosește substantivele/verbele învățate. Atenție la genul și forma corectă.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="cuvântul potrivit...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Reconstruiește dialogul (Lückentext)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'A: Meiner ____ nach kann jeder von uns etwas tun, um die Umwelt zu schützen.', translation: 'După părerea mea fiecare poate face ceva pentru a proteja mediul.', correct: 'Meinung', accept: ['meinung'] },
    { id: 'b', sentence: 'B: Das stimmt schon, ____ ohne strenge Gesetze ändert sich nichts.', translation: 'Așa e, dar fără legi stricte nu se schimbă nimic.', correct: 'aber', accept: ['aber'] },
    { id: 'c', sentence: 'A: Doch! Wenn alle ____ trennen, weniger Fleisch essen und mit dem Fahrrad fahren...', translation: 'Ba da! Dacă toți separă gunoiul, mănâncă mai puțină carne și merg cu bicicleta...', correct: 'Müll', accept: ['müll', 'muell'] },
    { id: 'd', sentence: 'B: Das ist ein ____ auf den heißen Stein. Die Industrie macht 80% der Emissionen!', translation: 'Asta e o picătură într-un ocean. Industria face 80% din emisii!', correct: 'Tropfen', accept: ['tropfen'] },
    { id: 'e', sentence: 'A: Hast du ____ gedacht, dass die Industrie auch auf uns Konsumenten reagiert?', translation: 'Te-ai gândit la faptul că industria reacționează și la noi consumatorii?', correct: 'daran', accept: ['daran'] },
    { id: 'f', sentence: 'B: Da hast du teilweise ____, aber wir brauchen vor allem die CO₂-Steuer.', translation: 'Aici ai dreptate parțial, dar avem nevoie mai ales de taxa pe CO₂.', correct: 'recht', accept: ['recht'] },
    { id: 'g', sentence: 'A: An deiner ____ würde ich erst bei mir selbst anfangen.', translation: 'În locul tău, eu aș începe cu mine însumi.', correct: 'Stelle', accept: ['stelle'] },
    { id: 'h', sentence: 'B: Außerdem muss man in ____ Energien investieren — Solar und Wind sind die Zukunft.', translation: 'Pe lângă asta, trebuie să investim în energii regenerabile — solara și eoliana sunt viitorul.', correct: 'erneuerbare', accept: ['erneuerbare'] },
    { id: 'i', sentence: 'A: ____ kann man sagen: wir brauchen beides — individuelles Handeln UND Politik.', translation: 'În concluzie se poate spune: avem nevoie de amândouă — acțiune individuală ȘI politică.', correct: 'Zusammenfassend', accept: ['zusammenfassend'] },
    { id: 'j', sentence: 'B: Genau! Jeder muss seinen ____ dazu beitragen.', translation: 'Exact! Fiecare trebuie să-și aducă contribuția.', correct: 'Teil', accept: ['teil', 'beitrag'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Dialog: Cursant A (responsabilitate individuală) ↔ Cursant B (responsabilitate politică).</strong><br>
            Completează cuvântul lipsă pentru a reconstrui dialogul natural.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="cuvântul lipsă...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Expresia potrivită în context
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Vrei să-ți exprimi opinia: „____ nach sind erneuerbare Energien die Lösung."', translation: 'După părerea mea, energiile regenerabile sunt soluția.', correct: 'Meiner Meinung', accept: ['meiner meinung'] },
    { id: 'b', sentence: 'Vrei să exprimi convingere: „Ich bin ____, dass wir handeln müssen."', translation: 'Sunt convins că trebuie să acționăm.', correct: 'überzeugt', accept: ['überzeugt', 'ueberzeugt'] },
    { id: 'c', sentence: 'Vrei să exprimi acord parțial: „Das ____ schon, aber das reicht nicht."', translation: 'Așa e, dar nu e suficient.', correct: 'stimmt', accept: ['stimmt'] },
    { id: 'd', sentence: 'Vrei să sugerezi politicos: „An ____ Stelle würde ich mehr Bio kaufen."', translation: 'În locul tău, eu aș cumpăra mai mult bio.', correct: 'deiner', accept: ['deiner'] },
    { id: 'e', sentence: 'Vrei să exprimi dezacord: „Da ____ ich anderer Meinung."', translation: 'Aici am altă părere.', correct: 'bin', accept: ['bin'] },
    { id: 'f', sentence: 'Vrei să introduci un argument suplimentar: „____ kommt noch, dass die Wirtschaft profitiert."', translation: 'În plus, faptul că economia beneficiază.', correct: 'Dazu', accept: ['dazu'] },
    { id: 'g', sentence: 'Vrei să închei dialogul: „____ kann man sagen, dass beide Seiten wichtig sind."', translation: 'În concluzie se poate spune că ambele părți sunt importante.', correct: 'Zusammenfassend', accept: ['zusammenfassend'] },
    { id: 'h', sentence: 'Vrei să atragi atenția asupra urgenței: „Wir haben keine ____ zu verlieren."', translation: 'Nu avem timp de pierdut.', correct: 'Zeit', accept: ['zeit'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Folosește expresia potrivită pentru funcția dată.</strong><br>
            Aceste expresii sunt esențiale pentru a structura un dialog argumentat la nivel B2.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="expresia potrivită...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
