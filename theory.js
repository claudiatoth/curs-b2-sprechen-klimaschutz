// ============================================
// VOCABULAR - Sprechen B2: Klimaschutz
// Tema: Individuelle Verantwortung vs. Politik
// Claudia Toth · Vocabular bilingv pentru dialog pe perechi B2
// ============================================

const theoryHTML = `

    <div class="theory-box" style="background:#FBF7EF; border-color:#D4A574;">
        <p style="margin:0; font-size:0.95rem;">👁 <strong>Auto-verificare:</strong> în tabele, coloana cu traducerea română e <strong>ascunsă</strong>. Încearcă întâi să traduci tu termenul german, apoi dă click pe <strong>👁</strong> ca să te verifici.</p>
    </div>
    <!-- 0: Intro + roluri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Tema dialogului + roluri</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="theory-box">
                <h4>🌍 Tema: „Klimaschutz — wer ist verantwortlich?"</h4>
                <p>Schimbările climatice sunt una dintre cele mai mari provocări ale secolului. <strong>Cine ar trebui să facă schimbarea?</strong> Fiecare individ prin alegeri zilnice (reciclare, transport, dietă)? Sau statul prin legi și investiții?</p>
                <p>Voi sunteți doi prieteni care discutați aprins despre acest subiect. Aveți păreri diferite și încercați să vă convingeți reciproc.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>👥 Roluri</h4>
                <table class="grammar-table">
                    <tr><th>Cursant</th><th>Poziție</th><th>Argumente principale</th></tr>
                    <tr><td><strong>Cursant A</strong></td><td>responsabilitate <strong>individuală</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">fiecare cetățean contează — reciclează, mănâncă mai puțină carne, zboară mai puțin, cumpără local, folosește bicicleta</span></td></tr>
                    <tr><td><strong>Cursant B</strong></td><td>responsabilitate <strong>statală</strong> / politică</td><td>doar legi puternice schimbă lucrurile — taxa pe CO₂, interzicerea benzinei, investiții în energie regenerabilă, regularizarea industriei</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>📌 Ce conține acest material</h4>
                <ul style="margin-left: 18px;">
                    <li>6 secțiuni de vocabular bilingv DE → RO (~60 termeni)</li>
                    <li>Expresii utile pentru argumentare și contraargumentare</li>
                    <li>5 exerciții de fixare a vocabularului</li>
                    <li>32 flashcards cu pronunție</li>
                    <li>Test final cu 15 întrebări mixte</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔤 Tipologia vocabularului B2 — Sg/Pl orientativ</h4>
                <p>La nivelul B2, substantivele din tabelele de mai jos sunt majoritar <strong>concepte abstracte</strong> sau <strong>compuse cu sens specific</strong>. Iată tipologia:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>Concepte sg tantum</strong> (fără plural în uz comun): <em>der Klimawandel, die Erderwärmung, die Klimaneutralität, der Komfort, die Wirtschaft, der Lobbyismus, das Bewusstsein</em></li>
                    <li><strong>Substantive concrete cu plural</strong>: <em>die Klimakrise · die Klimakrisen</em> · <em>die Naturkatastrophe · die Naturkatastrophen</em> · <em>das Elektroauto · die Elektroautos</em> · <em>die Solaranlage · die Solaranlagen</em></li>
                    <li><strong>Substantive deja la plural</strong> (compuse care funcționează colectiv): <em>die Treibhausgase</em> (sg „das Treibhausgas"), <em>die Bürger</em> (sg „der Bürger")</li>
                    <li><strong>Colocații verbale</strong> (formule fixe, nu vocabular pluralizabil): „der Meeresspiegel steigt", „Energie sparen", „die Wirtschaft leidet"</li>
                </ul>
                <p style="margin-top: 8px;">Pentru substantivele concrete noi, verifică pluralul pe <a href="https://de.pons.com/deklination/deutsch" target="_blank" style="color: #047857;">PONS</a> — la examenul B2, precizia gen+plural face diferența.</p>
            </div>
        </div>
    </div>

    <!-- 1: Probleme climatice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🌡️ 2. Probleme climatice & mediu</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>der Klimawandel</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">schimbările climatice</span></td></tr>
                    <tr><td><strong>die Klimakrise</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">criza climatică</span></td></tr>
                    <tr><td><strong>die Erderwärmung / die globale Erwärmung</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">încălzirea globală</span></td></tr>
                    <tr><td><strong>der Treibhauseffekt</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">efectul de seră</span></td></tr>
                    <tr><td><strong>die Treibhausgase</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">gazele cu efect de seră</span></td></tr>
                    <tr><td><strong>der CO₂-Ausstoß</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">emisiile de CO₂</span></td></tr>
                    <tr><td><strong>die Umweltverschmutzung</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">poluarea mediului</span></td></tr>
                    <tr><td><strong>die Luftverschmutzung</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">poluarea aerului</span></td></tr>
                    <tr><td><strong>der Plastikmüll</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">deșeurile de plastic</span></td></tr>
                    <tr><td><strong>das Artensterben</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">dispariția speciilor</span></td></tr>
                    <tr><td><strong>die Naturkatastrophe</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">catastrofa naturală</span></td></tr>
                    <tr><td><strong>der Meeresspiegel steigt</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">nivelul mării crește</span></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 2: Acțiuni individuale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🚲 3. Acțiuni individuale (PRO Cursant A)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box" style="background: #d1fae5;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Müll trennen / recyceln</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a separa gunoiul / a recicla</span></td></tr>
                    <tr><td><strong>Energie sparen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a economisi energie</span></td></tr>
                    <tr><td><strong>Wasser sparen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a economisi apa</span></td></tr>
                    <tr><td><strong>auf das Auto verzichten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a renunța la mașină</span></td></tr>
                    <tr><td><strong>mit dem Fahrrad fahren</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a merge cu bicicleta</span></td></tr>
                    <tr><td><strong>öffentliche Verkehrsmittel benutzen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a folosi transportul public</span></td></tr>
                    <tr><td><strong>weniger Fleisch essen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a mânca mai puțină carne</span></td></tr>
                    <tr><td><strong>vegetarisch / vegan leben</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a trăi vegetarian / vegan</span></td></tr>
                    <tr><td><strong>regional / saisonal einkaufen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a cumpăra local / de sezon</span></td></tr>
                    <tr><td><strong>auf Flugreisen verzichten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a renunța la călătoriile cu avionul</span></td></tr>
                    <tr><td><strong>einen kleineren ökologischen Fußabdruck haben</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a avea o amprentă ecologică mai mică</span></td></tr>
                    <tr><td><strong>nachhaltig leben</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a trăi sustenabil</span></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: Acțiuni politice & statale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🏛️ 4. Acțiuni politice & statale (PRO Cursant B)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #e0f2fe;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>strenge Gesetze einführen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a introduce legi stricte</span></td></tr>
                    <tr><td><strong>die CO₂-Steuer</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">taxa pe CO₂</span></td></tr>
                    <tr><td><strong>Benzin- und Dieselautos verbieten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a interzice mașinile pe benzină și diesel</span></td></tr>
                    <tr><td><strong>in erneuerbare Energien investieren</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a investi în energii regenerabile</span></td></tr>
                    <tr><td><strong>die Energiewende</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">tranziția energetică</span></td></tr>
                    <tr><td><strong>Solar- und Windenergie fördern</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a susține energia solară și eoliană</span></td></tr>
                    <tr><td><strong>die Industrie regulieren</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a reglementa industria</span></td></tr>
                    <tr><td><strong>internationale Abkommen schließen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a încheia acorduri internaționale</span></td></tr>
                    <tr><td><strong>das Pariser Klimaabkommen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Acordul de la Paris pentru climă</span></td></tr>
                    <tr><td><strong>klimafreundliche Subventionen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">subvenții pentru protecția climei</span></td></tr>
                    <tr><td><strong>den öffentlichen Nahverkehr ausbauen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a dezvolta transportul public local</span></td></tr>
                    <tr><td><strong>Aufforstung / Wiederaufforstung</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">împădurire / reîmpădurire</span></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: Contraargumente -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Contraargumente & dificultăți</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background: #F5F0E8;">
                <h4>Contra acțiuni individuale</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>ein Tropfen auf den heißen Stein</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">o picătură într-un ocean</span></td></tr>
                    <tr><td><strong>kaum einen Unterschied machen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a face cu greu o diferență</span></td></tr>
                    <tr><td><strong>nachhaltige Produkte sind teurer</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">produsele sustenabile sunt mai scumpe</span></td></tr>
                    <tr><td><strong>sich Bio-Produkte nicht leisten können</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a nu-și permite produse bio</span></td></tr>
                    <tr><td><strong>Bequemlichkeit / der Komfort</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">comoditatea / confortul</span></td></tr>
                    <tr><td><strong>schwierig, alte Gewohnheiten zu ändern</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">greu de schimbat obiceiurile vechi</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fee2e2;">
                <h4>Contra acțiuni politice</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Wirtschaft leidet</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">economia are de suferit</span></td></tr>
                    <tr><td><strong>Arbeitsplätze gehen verloren</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">se pierd locuri de muncă</span></td></tr>
                    <tr><td><strong>politische Maßnahmen sind langsam</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">măsurile politice sunt lente</span></td></tr>
                    <tr><td><strong>internationale Konflikte</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">conflicte internaționale</span></td></tr>
                    <tr><td><strong>nicht alle Länder ziehen mit</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">nu toate țările participă</span></td></tr>
                    <tr><td><strong>die Bürger leiden unter höheren Steuern</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">cetățenii suferă de taxe mai mari</span></td></tr>
                    <tr><td><strong>Lobbyismus der Industrie</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">lobby-ul industriei</span></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Soluții & viitor -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>💡 6. Soluții & viziuni pentru viitor</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Klimaneutralität erreichen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a atinge neutralitatea climatică</span></td></tr>
                    <tr><td><strong>die Elektromobilität</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">mobilitatea electrică</span></td></tr>
                    <tr><td><strong>das Elektroauto / das E-Auto</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">mașina electrică</span></td></tr>
                    <tr><td><strong>die Wärmepumpe</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">pompa de căldură</span></td></tr>
                    <tr><td><strong>die Solaranlage</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">panourile solare</span></td></tr>
                    <tr><td><strong>das Bewusstsein schärfen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a sensibiliza opinia publică</span></td></tr>
                    <tr><td><strong>die nächste Generation schützen</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a proteja generația următoare</span></td></tr>
                    <tr><td><strong>verantwortungsvoll handeln</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a acționa responsabil</span></td></tr>
                    <tr><td><strong>einen Beitrag leisten</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a contribui</span></td></tr>
                    <tr><td><strong>gemeinsam handeln</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">a acționa împreună</span></td></tr>
                    <tr><td><strong>die Klimabewegung / Fridays for Future</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">mișcarea climatică / Fridays for Future</span></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Expresii pentru dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💬 7. Expresii utile pentru dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Pentru argumentare</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Ich bin der Meinung, dass...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Sunt de părere că...</span></td></tr>
                    <tr><td><strong>Meiner Meinung nach...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">După părerea mea...</span></td></tr>
                    <tr><td><strong>Ich bin überzeugt, dass...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Sunt convins că...</span></td></tr>
                    <tr><td><strong>Was hältst du davon?</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Ce părere ai despre asta?</span></td></tr>
                    <tr><td><strong>Ein wichtiges Argument ist...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Un argument important este...</span></td></tr>
                    <tr><td><strong>Dazu kommt noch, dass...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În plus, faptul că...</span></td></tr>
                    <tr><td><strong>Außerdem...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Pe lângă asta...</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>Pentru a fi de acord / a contrazice</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Da hast du recht.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Aici ai dreptate.</span></td></tr>
                    <tr><td><strong>Das sehe ich genauso.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Văd la fel.</span></td></tr>
                    <tr><td><strong>Das stimmt schon, aber...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Așa e, dar...</span></td></tr>
                    <tr><td><strong>Da bin ich anderer Meinung.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Aici am altă părere.</span></td></tr>
                    <tr><td><strong>Das überzeugt mich nicht.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Asta nu mă convinge.</span></td></tr>
                    <tr><td><strong>An deiner Stelle würde ich...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În locul tău, eu aș...</span></td></tr>
                    <tr><td><strong>Hast du daran gedacht, dass...?</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Te-ai gândit la faptul că...?</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>Pentru concluzie</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Zusammenfassend kann man sagen...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În concluzie se poate spune...</span></td></tr>
                    <tr><td><strong>Alles in allem...</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În total...</span></td></tr>
                    <tr><td><strong>Letztendlich brauchen wir beides.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În final avem nevoie de amândouă.</span></td></tr>
                    <tr><td><strong>Jeder muss seinen Teil dazu beitragen.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Fiecare trebuie să-și aducă contribuția.</span></td></tr>
                    <tr><td><strong>Wir haben keine Zeit zu verlieren.</strong></td><td><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Nu avem timp de pierdut.</span></td></tr>
                </table>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}


// 👁 Toggle traducere RO ascunsă (auto-verificare)
function toggleRo(btn) {
    const ro = btn.nextElementSibling;
    if (!ro || !ro.classList.contains('ro-reveal')) return;
    const open = ro.classList.toggle('show');
    btn.classList.toggle('active', open);
    btn.title = open ? 'Ascunde traducerea' : 'Vezi traducerea';
    btn.setAttribute('aria-label', btn.title);
}
