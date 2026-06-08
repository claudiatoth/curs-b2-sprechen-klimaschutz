// ============================================
// TEST FINAL - Sprechen B2: Klimaschutz
// Claudia Toth · 15 întrebări
// ============================================

function normalizeTestAnswer(str) {
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

const finalTestData = [
    // 4× Vocabular cheie
    { type: 'luckentext', category: '📝 Vocabular', question: 'Tradu în germană:', sentence: 'schimbările climatice', translation: 'Hint: Klima + Wandel', accept: ['der klimawandel', 'klimawandel'], correct: 'der Klimawandel', explanation: 'der Klimawandel — cel mai folosit termen pentru schimbările climatice.' },
    { type: 'luckentext', category: '📝 Vocabular', question: 'Tradu în germană:', sentence: 'taxa pe CO₂', translation: 'Hint: CO₂ + Steuer', accept: ['die co₂-steuer', 'co₂-steuer', 'die co2-steuer', 'co2-steuer'], correct: 'die CO₂-Steuer', explanation: 'Instrument economic pentru reducerea emisiilor de CO₂.' },
    { type: 'multiple', category: '📝 Vocabular', question: 'Ce înseamnă „die Energiewende"?', options: ['criza energetică', 'tranziția energetică', 'consumul de energie', 'producția de energie'], correct: 'tranziția energetică', explanation: 'Trecerea de la energii fosile la regenerabile.' },
    { type: 'luckentext', category: '📝 Vocabular', question: 'Tradu în germană:', sentence: 'amprenta ecologică', translation: 'Hint: ökologisch + Fußabdruck', accept: ['der ökologische fußabdruck', 'ökologischer fußabdruck', 'oekologischer fussabdruck'], correct: 'der ökologische Fußabdruck', explanation: 'Măsura impactului tău asupra planetei.' },

    // 4× PRO Individuelle vs. PRO Politik
    { type: 'multiple', category: '⚖️ PRO/CONTRA', question: 'Care e argument PRO acțiune individuală?', options: ['die CO₂-Steuer', 'strenge Gesetze', 'Müll trennen und recyceln', 'die Industrie regulieren'], correct: 'Müll trennen und recyceln', explanation: 'Reciclarea = acțiunea de bază individuală la îndemâna fiecăruia.' },
    { type: 'multiple', category: '⚖️ PRO/CONTRA', question: 'Care e argument PRO acțiune politică?', options: ['vegetarisch leben', 'mit dem Fahrrad fahren', 'in erneuerbare Energien investieren', 'regional einkaufen'], correct: 'in erneuerbare Energien investieren', explanation: 'Investițiile masive în energie regenerabilă cer decizii politice și buget de stat.' },
    { type: 'luckentext', category: '⚖️ PRO/CONTRA', question: 'Completează contraargumentul:', sentence: 'Individuelle Aktionen sind nur ein ____ auf den heißen Stein.', translation: 'Acțiunile individuale sunt doar o picătură într-un ocean.', accept: ['tropfen'], correct: 'Tropfen', explanation: 'Idiom B2 esențial — „ein Tropfen auf den heißen Stein" = acțiuni mici fără efect mare.' },
    { type: 'multiple', category: '⚖️ PRO/CONTRA', question: 'Care e dezavantaj al acțiunilor politice puternice?', options: ['kleiner ökologischer Fußabdruck', 'die Wirtschaft leidet', 'mehr Bio-Produkte', 'klimafreundliche Subventionen'], correct: 'die Wirtschaft leidet', explanation: 'Reglementările stricte pot afecta competitivitatea economiei pe termen scurt.' },

    // 4× Expresii pentru dialog
    { type: 'multiple', category: '💬 Expresii dialog', question: 'Cum exprimi convingere puternică?', options: ['Vielleicht...', 'Ich bin überzeugt, dass...', 'Ich glaube nicht...', 'Es ist egal.'], correct: 'Ich bin überzeugt, dass...', explanation: '„Ich bin überzeugt" = expresie B2 pentru convingere fermă (mai puternică decât „Ich glaube").' },
    { type: 'luckentext', category: '💬 Expresii dialog', question: 'Completează:', sentence: 'An ____ Stelle würde ich vegetarisch leben.', translation: 'În locul tău, eu aș trăi vegetarian.', accept: ['deiner'], correct: 'deiner', explanation: '„An deiner Stelle" = expresie cu prepoziția an + Dativ (deiner).' },
    { type: 'multiple', category: '💬 Expresii dialog', question: 'Cum introduci un contraargument diplomatic?', options: ['Du irrst dich.', 'Hast du daran gedacht, dass...?', 'Quatsch!', 'Nein!'], correct: 'Hast du daran gedacht, dass...?', explanation: 'Întrebare deschisă = diplomatic. Forțează partenerul să se gândească la un aspect nou.' },
    { type: 'luckentext', category: '💬 Expresii dialog', question: 'Completează concluzia:', sentence: '____ kann man sagen, dass wir beides brauchen.', translation: 'În concluzie se poate spune că avem nevoie de amândouă.', accept: ['zusammenfassend'], correct: 'Zusammenfassend', explanation: '„Zusammenfassend" = expresia standard pentru concluzie B2.' },

    // 3× Aplicare în context
    { type: 'multiple', category: '🎯 Context', question: 'Care e replica naturală la „Wenn alle Müll trennen, ändert sich viel!"?', options: ['Das stimmt gar nicht.', 'Das ist nur ein Tropfen auf den heißen Stein.', 'Ich verstehe nicht.', 'Ja, gut.'], correct: 'Das ist nur ein Tropfen auf den heißen Stein.', explanation: 'Contraargument idiomatic B2 — relativizează importanța acțiunii individuale.' },
    { type: 'multiple', category: '🎯 Context', question: 'Cum exprimi urgența situației climatice?', options: ['Wir haben Zeit.', 'Es ist egal.', 'Wir haben keine Zeit zu verlieren.', 'Vielleicht später.'], correct: 'Wir haben keine Zeit zu verlieren.', explanation: 'Formulă clasică pentru a sublinia urgența. Concluzie diplomatică dar fermă.' },
    { type: 'luckentext', category: '🎯 Context', question: 'Completează cu prepoziția corectă:', sentence: 'Wir müssen ____ erneuerbare Energien investieren.', translation: 'Trebuie să investim în energii regenerabile.', accept: ['in'], correct: 'in', explanation: 'investieren + IN + Akkusativ (în). Prepoziție fixă.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre vocabularul Klimaschutz + expresii dialog B2.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 8-10 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => { if (r.value === userAnswers[index].answer) r.checked = true; });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) finishTest();
    else { currentQuestionIndex++; showQuestion(currentQuestionIndex); scrollToTest(); }
}
function prevQuestion() {
    if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(currentQuestionIndex); scrollToTest(); }
}
function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k];
        const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#6b7280;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none';
    r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la vocabular</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la vocabular</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) { t.classList.add('active'); if (a) a.classList.add('rotated'); }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
