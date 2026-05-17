// ============================================
// FLASHCARDS - Sprechen B2: Klimaschutz
// Claudia Toth · 32 carduri
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === Probleme climatice (5) ===
    { de: "der Klimawandel", ro: "schimbările climatice · cel mai important termen al deceniului", audio: "audio/letters/klimawandel.wav" },
    { de: "die Erderwärmung", ro: "încălzirea globală · creșterea temperaturii medii a planetei", audio: "audio/letters/erderwaermung.wav" },
    { de: "der CO₂-Ausstoß", ro: "emisiile de CO₂ · principalul gaz cu efect de seră", audio: "audio/letters/co2-ausstoss.wav" },
    { de: "die Umweltverschmutzung", ro: "poluarea mediului · concept general — aer, apă, sol", audio: "audio/letters/umweltverschmutzung.wav" },
    { de: "das Artensterben", ro: "dispariția speciilor · consecință a schimbărilor climatice", audio: "audio/letters/artensterben.wav" },

    // === Acțiuni individuale (6) ===
    { de: "Müll trennen / recyceln", ro: "a separa gunoiul / a recicla · acțiunea de bază a fiecărui cetățean", audio: "audio/letters/muell-trennen.wav" },
    { de: "Energie sparen", ro: "a economisi energie · lumini, încălzire, dispozitive electronice", audio: "audio/letters/energie-sparen.wav" },
    { de: "auf das Auto verzichten", ro: "a renunța la mașină · alegere puternică pentru climă", audio: "audio/letters/auto-verzichten.wav" },
    { de: "vegetarisch / vegan leben", ro: "a trăi vegetarian / vegan · industria cărnii = 14.5% din emisii globale", audio: "audio/letters/vegetarisch.wav" },
    { de: "regional einkaufen", ro: "a cumpăra local · scurtează lanțul de aprovizionare", audio: "audio/letters/regional-einkaufen.wav" },
    { de: "der ökologische Fußabdruck", ro: "amprenta ecologică · măsura impactului tău asupra planetei", audio: "audio/letters/fussabdruck.wav" },

    // === Acțiuni politice (6) ===
    { de: "strenge Gesetze einführen", ro: "a introduce legi stricte · responsabilitatea statului", audio: "audio/letters/gesetze.wav" },
    { de: "die CO₂-Steuer", ro: "taxa pe CO₂ · instrument economic pentru reducerea emisiilor", audio: "audio/letters/co2-steuer.wav" },
    { de: "erneuerbare Energien", ro: "energii regenerabile · solar, eolian, hidro, biomasă", audio: "audio/letters/erneuerbare.wav" },
    { de: "die Energiewende", ro: "tranziția energetică · trecerea de la fosile la regenerabile", audio: "audio/letters/energiewende.wav" },
    { de: "in Solar- und Windenergie investieren", ro: "a investi în energia solară și eoliană", audio: "audio/letters/solar-wind.wav" },
    { de: "das Pariser Klimaabkommen", ro: "Acordul de la Paris pentru climă · 2015 · obiectiv 1.5°C", audio: "audio/letters/pariser.wav" },

    // === Contraargumente (4) ===
    { de: "ein Tropfen auf den heißen Stein", ro: "o picătură într-un ocean · idiom · acțiuni mici fără efect mare", audio: "audio/letters/tropfen.wav" },
    { de: "nachhaltige Produkte sind teurer", ro: "produsele sustenabile sunt mai scumpe · barieră economică", audio: "audio/letters/teurer.wav" },
    { de: "die Wirtschaft leidet", ro: "economia are de suferit · contraargument politic clasic", audio: "audio/letters/wirtschaft.wav" },
    { de: "Arbeitsplätze gehen verloren", ro: "se pierd locuri de muncă · industria cărbunelui, petrolul", audio: "audio/letters/arbeitsplaetze.wav" },

    // === Soluții & viitor (4) ===
    { de: "die Klimaneutralität erreichen", ro: "a atinge neutralitatea climatică · obiectiv UE 2050", audio: "audio/letters/klimaneutralitaet.wav" },
    { de: "die Elektromobilität / das E-Auto", ro: "mobilitatea electrică / mașina electrică · viitorul transportului", audio: "audio/letters/elektromobilitaet.wav" },
    { de: "die Wärmepumpe", ro: "pompa de căldură · alternativă la încălzirea cu gaz", audio: "audio/letters/waermepumpe.wav" },
    { de: "Fridays for Future", ro: "mișcarea climatică globală · fondată de Greta Thunberg", audio: "audio/letters/fridays.wav" },

    // === Expresii dialog (7) ===
    { de: "Meiner Meinung nach...", ro: "După părerea mea... · introducere opinie B2", audio: "audio/letters/meiner-meinung.wav" },
    { de: "Ich bin überzeugt, dass...", ro: "Sunt convins că... · variantă mai puternică pentru opinie", audio: "audio/letters/ueberzeugt.wav" },
    { de: "Das stimmt schon, aber...", ro: "Așa e, dar... · acord parțial + contraargument", audio: "audio/letters/stimmt-aber.wav" },
    { de: "An deiner Stelle würde ich...", ro: "În locul tău, eu aș... · sugestie politicoasă", audio: "audio/letters/deiner-stelle.wav" },
    { de: "Hast du daran gedacht, dass...?", ro: "Te-ai gândit la faptul că...? · introducere contraargument", audio: "audio/letters/daran-gedacht.wav" },
    { de: "Zusammenfassend kann man sagen...", ro: "În concluzie se poate spune... · închidere de dialog", audio: "audio/letters/zusammenfassend.wav" },
    { de: "Wir haben keine Zeit zu verlieren.", ro: "Nu avem timp de pierdut. · concluzie de urgență climatică", audio: "audio/letters/keine-zeit.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> — vocabular cheie pentru dialogul B2 Klimaschutz.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => console.log('Audio nu poate fi redat:', err));
}

buildFlashcards();
