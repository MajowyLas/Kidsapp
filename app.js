// ============================================================
//  ORTOGRAFIA Z LEOSIEM
// ============================================================

// ── HELPER: Leoś mówi ──────────────────────────────────────
function leosTalk(ms = 2400) {
  document.querySelectorAll('.troll-character').forEach(el => {
    el.classList.add('is-talking');
    clearTimeout(el._talkTimer);
    el._talkTimer = setTimeout(() => el.classList.remove('is-talking'), ms);
  });
}

// ── RULES DATA ─────────────────────────────────────────────
const RULES = [
  // ─── Ó / U ───────────────────────────────────────────────
  {
    id: 'ou',
    letters: 'Ó / U',
    icon: '🟡',
    title: 'Kiedy pisać Ó, a kiedy U?',
    theoryIntro: 'Hej! Ó i U brzmią tak samo, ale piszemy je inaczej. Znam kilka sztuczek! 📝',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">Ó</span>, gdy w innej formie wyrazu zmienia się na O lub A</h3>
          <ul class="example-list">
            <li>w<span class="highlight">ó</span>z → w<span class="highlight">o</span>zy</li>
            <li>sk<span class="highlight">ó</span>ra → sk<span class="highlight">o</span>rka</li>
            <li>mi<span class="highlight">ó</span>d → mi<span class="highlight">o</span>du</li>
            <li>r<span class="highlight">ó</span>g → r<span class="highlight">o</span>gata</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">Ó</span> w końcówkach <em>-ów, -ówka, -ówna</em></h3>
          <ul class="example-list">
            <li>dom<span class="highlight">ów</span></li>
            <li>kr<span class="highlight">ó</span>wka</li>
            <li>kij<span class="highlight">ówka</span></li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">U</span>, gdy wymiana nie jest możliwa</h3>
          <ul class="example-list">
            <li>ul</li><li>ucho</li><li>ulica</li><li>kubek</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Zmień wyraz. Jeśli <em>ó</em> zamienia się na <em>o</em> lub <em>a</em> – pisz <strong>ó</strong>!<br>
          Np. <em>b<strong>ó</strong>l → b<strong>o</strong>leć</em>
        </div>
      </div>`,
    exercises: [
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Mama wsypała s__l do zupy.', options:['ó','u'], answer:'ó', hint:'sól → sole – ó wymienne na o!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Mama kupiła k__bek herbaty.', options:['ó','u'], answer:'u', hint:'kubek – brak wymiany, piszemy u!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Chłopiec biegał kr__tko.', options:['ó','u'], answer:'ó', hint:'krótko → krótszy – ó wymienne!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Mama kupiła mi r__żę z ogrodu.', options:['ó','u'], answer:'ó', hint:'róża → różany – ó wymienne na o!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Tata wrócił p__źno do domu.', options:['ó','u'], answer:'ó', hint:'późno → opóźnienie – ó wymienne!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Babcia ugotowała rosół z k__rą.', options:['ó','u'], answer:'u', hint:'kura – brak wymiany, piszemy u!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Na dworze jest b__rza.', options:['u','ó'], answer:'u', hint:'burza – brak wymiany na o/a, piszemy u!' },
      { type:'fill', question:'Wpisz ó lub u:', sentence:'Na __licy mieszka m__j przyjaciel.', inputs:[{placeholder:'u/ó',answer:'u'},{placeholder:'u/ó',answer:'ó'}] },
      { type:'fill', question:'Wpisz ó lub u:', sentence:'M__j brat wr__cił późno do domu.', inputs:[{placeholder:'u/ó',answer:'ó'},{placeholder:'u/ó',answer:'ó'}] },
      { type:'fill', question:'Wpisz ó lub u:', sentence:'C__rka znalazła k__rtkę na podłodze.', inputs:[{placeholder:'u/ó',answer:'ó'},{placeholder:'u/ó',answer:'u'}] },
      {
        type:'sort',
        question:'Przyporządkuj wyrazy – wybierz właściwą pisownię:',
        columns:['Ó','U'],
        words:[
          { stem:'w_z',    answer:'ó', col:'Ó', display:'wóz' },
          { stem:'_lica',  answer:'u', col:'U', display:'ulica' },
          { stem:'c_rka',  answer:'ó', col:'Ó', display:'córka' },
          { stem:'_cho',   answer:'u', col:'U', display:'ucho' },
          { stem:'dr_żka', answer:'ó', col:'Ó', display:'dróżka' },
          { stem:'k_bek',  answer:'u', col:'U', display:'kubek' },
        ]
      }
    ],
    dictation: {
      clickText: 'W{ó|u}z jedzie d{u|ó}żą drogą przez las. Na dr{ó|u}żce siedzi s{o|ó}wa. Mama w{o|ó}ła c{ó|u}rkę do dom{u|ó}. K{u|ó}bek stoi na stole.',
      speakText: 'Wóz jedzie dużą drogą przez las. Na dróżce siedzi sowa. Mama woła córkę do domu. Kubek stoi na stole.',
      hint: 'Zwróć uwagę na: wóz, dużą, dróżce, sowa, woła, córkę, domu, kubek'
    }
  },

  // ─── RZ / Ż ──────────────────────────────────────────────
  {
    id: 'rzz',
    letters: 'RZ / Ż',
    icon: '🔴',
    title: 'Kiedy pisać RZ, a kiedy Ż?',
    theoryIntro: 'Te dwa dźwięki brzmią tak samo! Ale ja znam zasady! 🕵️',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">RZ</span> po spółgłoskach: p, b, t, d, k, g, ch, w, j</h3>
          <ul class="example-list">
            <li><span class="highlight">prz</span>yjaciel</li>
            <li><span class="highlight">brz</span>eg</li>
            <li><span class="highlight">trz</span>oda</li>
            <li><span class="highlight">drz</span>ewo</li>
            <li><span class="highlight">krz</span>esło</li>
            <li><span class="highlight">grz</span>eczny</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">RZ</span>, gdy wymienia się na <em>r</em></h3>
          <ul class="example-list">
            <li>mo<span class="highlight">rz</span>e → mo<span class="highlight">r</span>ski</li>
            <li>gó<span class="highlight">rz</span>e → gó<span class="highlight">r</span>a</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">Ż</span>, gdy wymienia się na <em>g, dz, z, ź, s</em></h3>
          <ul class="example-list">
            <li>ksi<span class="highlight">ąż</span>ka → ksi<span class="highlight">ąg</span>i</li>
            <li>dro<span class="highlight">ż</span>szy → dro<span class="highlight">g</span>i</li>
            <li>nó<span class="highlight">ż</span> → no<span class="highlight">ż</span>e</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Po literach p, b, t, d, k, g, ch – prawie zawsze <strong>rz</strong>!<br>
          Np. <em><strong>prz</strong>ed, <strong>brz</strong>oza, <strong>trz</strong>y, <strong>drz</strong>wi</em>
        </div>
      </div>`,
    exercises: [
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Mama u__ądziła przyjęcie.', options:['rz','ż'], answer:'rz', hint:'urządziła – rządzić → rząd, piszemy rz!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Na drzewie siedzi __ółw.', options:['ż','rz'], answer:'ż', hint:'żółw – ż, brak spółgłoski p/b/t/d przed ż' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Kup mi lody p__ed domem.', options:['rz','ż'], answer:'rz', hint:'przed – po "p" piszemy rz!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'W ogrodzie rośnie piękna b__oza.', options:['rz','ż'], answer:'rz', hint:'brzoza – po "b" piszemy rz!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'W lesie wyrosło wiele g__ybów.', options:['rz','ż'], answer:'rz', hint:'grzyb → grzyby – rz po "g"!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Tata wziął no__ ze stołu.', options:['ż','rz'], answer:'ż', hint:'nóż → noże – ż wymienne!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Dzieci bawiły się p__y rzece.', options:['rz','ż'], answer:'rz', hint:'przy – po "p" zawsze rz!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Na podwórku rośnie wysoki k__ew.', options:['rz','ż'], answer:'rz', hint:'krzew – po "k" piszemy rz!' },
      { type:'fill', question:'Wpisz rz lub ż:', sentence:'__ółta b__oza rośnie p__y rzece.', inputs:[{placeholder:'ż/rz',answer:'ż'},{placeholder:'ż/rz',answer:'rz'},{placeholder:'ż/rz',answer:'rz'}] },
      { type:'fill', question:'Wpisz rz lub ż:', sentence:'T__y __aby siedziały pod k__ewem.', inputs:[{placeholder:'rz/ż',answer:'rz'},{placeholder:'rz/ż',answer:'ż'},{placeholder:'rz/ż',answer:'rz'}] },
      {
        type:'sort',
        question:'Przyporządkuj wyrazy – wybierz właściwą pisownię:',
        columns:['RZ','Ż'],
        words:[
          { stem:'d_zewo', answer:'rz', col:'RZ', display:'drzewo' },
          { stem:'_aba',   answer:'ż',  col:'Ż',  display:'żaba' },
          { stem:'b_eg',   answer:'rz', col:'RZ', display:'brzeg' },
          { stem:'_ółty',  answer:'ż',  col:'Ż',  display:'żółty' },
          { stem:'t_y',    answer:'rz', col:'RZ', display:'trzy' },
          { stem:'nó_',    answer:'ż',  col:'Ż',  display:'nóż' },
        ]
      }
    ],
    dictation: {
      clickText: 'T{rz|ż}y {ż|rz}aby siedziały p{rz|ż}y b{rz|ż}egu {rz|ż}eki. D{rz|ż}ewo {rz|ż}ucało cień na trawę. G{rz|ż}yb wyrósł pod k{rz|ż}ewem.',
      speakText: 'Trzy żaby siedziały przy brzegu rzeki. Drzewo rzucało cień na trawę. Grzyb wyrósł pod krzewem.',
      hint: 'Zwróć uwagę na: trzy, żaby, przy, brzegu, rzeki, drzewo, grzyb, krzewem'
    }
  },

  // ─── CH / H ──────────────────────────────────────────────
  {
    id: 'chh',
    letters: 'CH / H',
    icon: '🔵',
    title: 'Kiedy pisać CH, a kiedy H?',
    theoryIntro: 'CH i H to kolejna zagadka! Spokojnie, mam proste zasady! 💡',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">CH</span>, gdy wymienia się na <em>sz</em></h3>
          <ul class="example-list">
            <li>su<span class="highlight">ch</span>y → su<span class="highlight">sz</span>yć</li>
            <li>mu<span class="highlight">ch</span>a → mu<span class="highlight">sz</span>ka</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">CH</span> na końcu wyrazu</h3>
          <ul class="example-list">
            <li>ma<span class="highlight">ch</span></li>
            <li>gma<span class="highlight">ch</span></li>
            <li>śpie<span class="highlight">ch</span></li>
            <li>w stada<span class="highlight">ch</span></li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">H</span> w wyrazach obcego pochodzenia i gdy wymienia się na <em>g, z</em></h3>
          <ul class="example-list">
            <li><span class="highlight">h</span>erbata</li>
            <li><span class="highlight">h</span>istoria</li>
            <li><span class="highlight">h</span>umor</li>
            <li>wa<span class="highlight">h</span>ać → wa<span class="highlight">g</span>a</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Wyraz z obcego języka (herbata, humor, historia)? → <strong>h</strong>.<br>
          Polskie słowo z zamianą na sz? → <strong>ch</strong>!
        </div>
      </div>`,
    exercises: [
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Mama wypiła filiżankę __erbaty.', options:['h','ch'], answer:'h', hint:'herbata – wyraz obcy, piszemy h!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Tata smażył su__ary na patelni.', options:['ch','h'], answer:'ch', hint:'suchar → suchy → susz – wymiana ch→sz!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Lubię __umor i śmiech.', options:['h','ch'], answer:'h', hint:'humor – łacińskie słowo, piszemy h!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Na łące bzykała mu__a.', options:['ch','h'], answer:'ch', hint:'mucha → muszka – wymiana ch→sz!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Na lekcji omawiamy __istorię Polski.', options:['h','ch'], answer:'h', hint:'historia – wyraz obcy, piszemy h!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'Kasia weszła do sali z wielkim __ałasem.', options:['h','ch'], answer:'h', hint:'hałas – piszemy h!' },
      { type:'choice', question:'Wybierz właściwą pisownię:', sentence:'__łopiec zjadł __leb z masłem.', options:['Ch i chl','H i hl'], answer:'Ch i chl', hint:'chłopiec i chleb – polskie słowa z ch!' },
      { type:'fill', question:'Wpisz ch lub h:', sentence:'__łopiec śpie__ał w do__u.', inputs:[{placeholder:'ch/h',answer:'ch'},{placeholder:'ch/h',answer:'ch'},{placeholder:'ch/h',answer:'ch'}] },
      { type:'fill', question:'Wpisz ch lub h:', sentence:'Piję __erbatę i słucham muzyki w ci__u.', inputs:[{placeholder:'ch/h',answer:'h'},{placeholder:'ch/h',answer:'ch'}] },
      {
        type:'sort',
        question:'Przyporządkuj wyrazy – wybierz właściwą pisownię:',
        columns:['CH','H'],
        words:[
          { stem:'_leb',    answer:'ch', col:'CH', display:'chleb' },
          { stem:'_umor',   answer:'h',  col:'H',  display:'humor' },
          { stem:'mu_a',    answer:'ch', col:'CH', display:'mucha' },
          { stem:'_erbata', answer:'h',  col:'H',  display:'herbata' },
          { stem:'su_y',    answer:'ch', col:'CH', display:'suchy' },
          { stem:'_istoria',answer:'h',  col:'H',  display:'historia' },
        ]
      }
    ],
    dictation: {
      clickText: '{Ch|H}łopiec pił {h|ch}erbatę z cukrem. Mu{ch|h}a siedziała na {ch|h}lebie. {H|Ch}istoria o trollu była ciekawa. Śmie{ch|h} to zdrowie!',
      speakText: 'Chłopiec pił herbatę z cukrem. Mucha siedziała na chlebie. Historia o trollu była ciekawa. Śmiech to zdrowie!',
      hint: 'Zwróć uwagę na: chłopiec, herbatę, mucha, chlebie, historia, śmiech'
    }
  },

  // ─── Ą / Ę ───────────────────────────────────────────────
  {
    id: 'ae',
    letters: 'Ą / Ę',
    icon: '🟣',
    title: 'Kiedy pisać Ą, a kiedy Ę?',
    theoryIntro: 'Ą i ę to polskie literki z ogonkami! Posłuchaj, kiedy je pisać! 🦋',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ą</span> – czasowniki w 3. osobie liczby mnogiej</h3>
          <ul class="example-list">
            <li>oni grają</li><li>dzieci biegają</li><li>ptaki śpiewają</li><li>koty śpią</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ę</span> – czasowniki w 1. osobie liczby pojedynczej</h3>
          <ul class="example-list">
            <li>ja widzę</li><li>ja piszę</li><li>ja czytam… ale: ja czytaję? NIE – ja czytam</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ą</span> przed b i p w środku wyrazu</h3>
          <ul class="example-list">
            <li>ząb</li><li>dąb</li><li>wąski</li><li>kąpać</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ę</span> na końcu wyrazu i przed b, p</h3>
          <ul class="example-list">
            <li>ręka</li><li>część</li><li>piękny</li><li>dąb ale: dęby!</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> <em>"ja..."</em> → często <strong>ę</strong>. <em>"oni/one..."</em> → często <strong>ą</strong>!<br>
          Np. <em>ja widzę / oni widzą</em>
        </div>
      </div>`,
    exercises: [
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Ptaki wesoło śpiewaj__.', options:['ą','ę'], answer:'ą', hint:'ptaki śpiewają – oni/one → ą!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Ja widz__ piękny las.', options:['ę','ą'], answer:'ę', hint:'ja widzę – pierwsza osoba → ę!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'W lesie rośnie stary d__b.', options:['ą','ę'], answer:'ą', hint:'dąb – ą przed b w środku wyrazu!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Mam piękną r__kę.', options:['ę','ą'], answer:'ę', hint:'ręka – ę przed k!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Chłopcy biegaj__ po boisku.', options:['ą','ę'], answer:'ą', hint:'chłopcy biegają – oni → ą!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Ja piszę i czytam, a oni śpij__.', options:['ą','ę'], answer:'ą', hint:'oni śpią – oni → ą!' },
      { type:'choice', question:'Wybierz właściwą literę:', sentence:'Ta pi__kna sukienka jest różowa.', options:['ę','ą'], answer:'ę', hint:'piękna – ę w środku wyrazu!' },
      { type:'fill', question:'Wpisz ą lub ę:', sentence:'Dzieci biegaj__ i śpiewaj__, a ja słucham i widz__ je z okna.', inputs:[{placeholder:'ą/ę',answer:'ą'},{placeholder:'ą/ę',answer:'ą'},{placeholder:'ą/ę',answer:'ę'}] },
      { type:'fill', question:'Wpisz ą lub ę:', sentence:'W ogrodzie rosn__ d__by i kwiaty.', inputs:[{placeholder:'ą/ę',answer:'ą'},{placeholder:'ą/ę',answer:'ą'}] },
      {
        type:'sort',
        question:'Przyporządkuj wyrazy – wybierz właściwą pisownię:',
        columns:['Ą','Ę'],
        words:[
          { stem:'d_b',    answer:'ą', col:'Ą', display:'dąb' },
          { stem:'r_ka',   answer:'ę', col:'Ę', display:'ręka' },
          { stem:'w_ski',  answer:'ą', col:'Ą', display:'wąski' },
          { stem:'cz_ść',  answer:'ę', col:'Ę', display:'część' },
          { stem:'śpią_',  answer:'ą', col:'Ą', display:'śpią' },
          { stem:'pisz_',  answer:'ę', col:'Ę', display:'piszę' },
        ]
      }
    ],
    dictation: {
      clickText: 'Dzieci biegaj{ą|ę} i śpiewaj{ą|ę} w ogrodzie. Ja widz{ę|ą} pi{ę|ą}kne kwiaty. D{ą|ę}b rośnie przy rzece. R{ę|ą}ka Kasi jest ciepła.',
      speakText: 'Dzieci biegają i śpiewają w ogrodzie. Ja widzę piękne kwiaty. Dąb rośnie przy rzece. Ręka Kasi jest ciepła.',
      hint: 'Zwróć uwagę na: biegają, śpiewają, widzę, piękne, dąb, ręka'
    }
  },

  // ─── NIE- ─────────────────────────────────────────────────
  {
    id: 'nie',
    letters: 'NIE-',
    icon: '🟤',
    title: 'Pisownia NIE z różnymi częściami mowy',
    theoryIntro: 'Kiedy "nie" piszemy razem, kiedy osobno? Wiem dokładnie! 😄',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Z przymiotnikami i przysłówkami – <span class="highlight-green">RAZEM</span></h3>
          <ul class="example-list">
            <li><span class="highlight">nie</span>duży</li>
            <li><span class="highlight">nie</span>ładny</li>
            <li><span class="highlight">nie</span>wesoły</li>
            <li><span class="highlight">nie</span>daleko</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Z rzeczownikami – <span class="highlight-green">RAZEM</span></h3>
          <ul class="example-list">
            <li><span class="highlight">nie</span>szczęście</li>
            <li><span class="highlight">nie</span>pokój</li>
            <li><span class="highlight">nie</span>uwaga</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Z czasownikami – <span class="highlight">OSOBNO</span></h3>
          <ul class="example-list">
            <li><span class="highlight">nie</span> lubię</li>
            <li><span class="highlight">nie</span> chodzę</li>
            <li><span class="highlight">nie</span> widzę</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Czynność (czasownik)? → <strong>osobno</strong>! Cecha (przymiotnik/rzeczownik)? → <strong>razem</strong>!<br>
          <em>nie lubię (czynność = osobno)</em> / <em>nieładny (cecha = razem)</em>
        </div>
      </div>`,
    exercises: [
      { type:'choice', question:'Razem czy osobno?', sentence:'To jest (nie)ładna pogoda.', options:['nieładna','nie ładna'], answer:'nieładna', hint:'ładna = przymiotnik → razem!' },
      { type:'choice', question:'Razem czy osobno?', sentence:'Ja (nie)lubię zimnej zupy.', options:['nie lubię','nielubię'], answer:'nie lubię', hint:'lubię = czasownik → osobno!' },
      { type:'choice', question:'Razem czy osobno?', sentence:'Mama ma dzisiaj (nie)pokój.', options:['niepokój','nie pokój'], answer:'niepokój', hint:'niepokój = rzeczownik → razem!' },
      { type:'choice', question:'Razem czy osobno?', sentence:'Pies (nie)biegnie do domu.', options:['nie biegnie','niebiegnie'], answer:'nie biegnie', hint:'biegnie = czasownik → osobno!' },
      { type:'choice', question:'Razem czy osobno?', sentence:'To (nie)duże miasto ma piękny rynek.', options:['nieduże','nie duże'], answer:'nieduże', hint:'duże = przymiotnik → razem!' },
      { type:'choice', question:'Razem czy osobno?', sentence:'Ania (nie)je śniadania.', options:['nie je','nieje'], answer:'nie je', hint:'je = czasownik → osobno!' },
      { type:'choice', question:'Razem czy osobno?', sentence:'Popełniłem (nie)uwagę na lekcji.', options:['nieuwagę','nie uwagę'], answer:'nieuwagę', hint:'nieuwaga = rzeczownik → razem!' },
      { type:'fill', question:'Wpisz nie (razem lub osobno):', sentence:'__duży pies __lubi kąpieli. To prawdziwe __szczęście.', inputs:[{placeholder:'nie-',answer:'Nie'},{placeholder:'nie ',answer:'nie '},{placeholder:'nie-',answer:'nie'}] },
      {
        type:'sort',
        question:'Przyporządkuj – razem czy osobno?',
        columns:['Razem','Osobno'],
        words:[
          { stem:'__duży',    answer:'nie', col:'Razem',  display:'nieduży' },
          { stem:'__ śpię',   answer:'nie ', col:'Osobno', display:'nie śpię' },
          { stem:'__szczęście',answer:'nie', col:'Razem',  display:'nieszczęście' },
          { stem:'__ chodzę', answer:'nie ', col:'Osobno', display:'nie chodzę' },
          { stem:'__wesoły',  answer:'nie', col:'Razem',  display:'niewesoły' },
          { stem:'__ widzę',  answer:'nie ', col:'Osobno', display:'nie widzę' },
        ]
      }
    ],
    dictation: {
      clickText: '{Nieduży|Nie duży} pies {nie lubi|nielubi} kąpieli. Tomek {nie ma|niema} dziś {niezbyt|nie zbyt} dobrego humoru. {Nieładna|Nie ładna} pogoda {nie sprzyja|niesprzyja} spacerowi. To prawdziwe {nieszczęście|nie szczęście}!',
      speakText: 'Nieduży pies nie lubi kąpieli. Tomek nie ma dziś niezbyt dobrego humoru. Nieładna pogoda nie sprzyja spacerowi. To prawdziwe nieszczęście!',
      hint: 'Zwróć uwagę na: nieduży, nie lubi, nie ma, niezbyt, nieładna, nie sprzyja, nieszczęście'
    }
  },

  // ─── Wielka litera ────────────────────────────────────────
  {
    id: 'caps',
    letters: 'Wielka litera',
    icon: '🟢',
    title: 'Kiedy pisać wielką literą?',
    theoryIntro: 'Wielka litera to ważna zasada! Wiem kiedy jej użyć. Posłuchaj! 🎓',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Wielką literą – <span class="highlight">imiona i nazwiska</span></h3>
          <ul class="example-list">
            <li><span class="highlight">K</span>asia</li><li><span class="highlight">T</span>omek</li>
            <li><span class="highlight">K</span>owalski</li><li><span class="highlight">L</span>eoś</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Wielką literą – <span class="highlight">nazwy geograficzne</span></h3>
          <ul class="example-list">
            <li><span class="highlight">P</span>olska</li><li><span class="highlight">W</span>arszawa</li>
            <li><span class="highlight">W</span>isła</li><li><span class="highlight">T</span>atry</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Wielką literą – <span class="highlight">początek zdania</span></h3>
          <ul class="example-list">
            <li><span class="highlight">M</span>ama gotuje obiad.</li>
            <li><span class="highlight">C</span>zy lubisz lody?</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Wielką literą – <span class="highlight">tytuły i święta</span></h3>
          <ul class="example-list">
            <li><span class="highlight">B</span>oże <span class="highlight">N</span>arodzenie</li>
            <li><span class="highlight">W</span>ielkanoc</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Nazwa własna (imię, miasto, kraj, rzeka)? → Wielka litera!<br>
          <em>rzeka</em> (małą) ale <em>Wisła</em> (wielką)!
        </div>
      </div>`,
    exercises: [
      { type:'choice', question:'Jak poprawnie napisać?', sentence:'Mieszkam w __arszawie.', options:['Warszawa','warszawa'], answer:'Warszawa', hint:'Warszawa = nazwa miasta → wielka litera!' },
      { type:'choice', question:'Jak poprawnie napisać?', sentence:'Mój pies ma na imię __urek.', options:['Burek','burek'], answer:'Burek', hint:'Burek = imię własne → wielka litera!' },
      { type:'choice', question:'Jak poprawnie napisać?', sentence:'W sadzie rosną __abłka.', options:['jabłka','Jabłka'], answer:'jabłka', hint:'jabłka = zwykłe słowo → mała litera!' },
      { type:'choice', question:'Jak poprawnie napisać?', sentence:'Zima minęła. __iosna nadeszła.', options:['Wiosna','wiosna'], answer:'Wiosna', hint:'Wiosna – zaczyna zdanie po kropce → wielka!' },
      { type:'choice', question:'Jak poprawnie napisać?', sentence:'Przez __olskę płynie rzeka __isła.', options:['Polskę i Wisła','polskę i wisła'], answer:'Polskę i Wisła', hint:'Polska = kraj, Wisła = rzeka → wielkie litery!' },
      { type:'choice', question:'Jak poprawnie napisać?', sentence:'Na __rzecież to mój __rat!', options:['przecie_ brat','Przecie_ Brat'], answer:'przecie_ brat', hint:'przecież i brat = zwykłe słowa → małe!' },
      { type:'choice', question:'Jak poprawnie napisać?', sentence:'Leoś lubi podróżować po __uropie.', options:['Europie','europie'], answer:'Europie', hint:'Europa = kontynent → wielka litera!' },
      { type:'fill', question:'Wpisz wielką lub małą literę (pierwsza litera wyrazu):', sentence:'__asia i __omek mieszkają w __arszawie nad __isłą.', inputs:[{placeholder:'K/k',answer:'K'},{placeholder:'T/t',answer:'T'},{placeholder:'W/w',answer:'W'},{placeholder:'W/w',answer:'W'}] },
      {
        type:'sort',
        question:'Przyporządkuj wyrazy – wielka czy mała litera?',
        columns:['Wielka litera','Mała litera'],
        words:[
          { stem:'_asia',   answer:'K', col:'Wielka litera', display:'Kasia' },
          { stem:'_abłko',  answer:'j', col:'Mała litera',   display:'jabłko' },
          { stem:'_isła',   answer:'W', col:'Wielka litera', display:'Wisła' },
          { stem:'_zeka',   answer:'r', col:'Mała litera',   display:'rzeka' },
          { stem:'_olska',  answer:'P', col:'Wielka litera', display:'Polska' },
          { stem:'_raj',    answer:'k', col:'Mała litera',   display:'kraj' },
        ]
      }
    ],
    dictation: {
      clickText: '{K|k}asia i {T|t}omek mieszkają w {P|p}olsce. {W|w}isła płynie przez {W|w}arszawę. W {T|t}atrach mieszka dużo zwierząt. {L|l}eoś lubi podróżować po {E|e}uropie!',
      speakText: 'Kasia i Tomek mieszkają w Polsce. Wisła płynie przez Warszawę. W Tatrach mieszka dużo zwierząt. Leoś lubi podróżować po Europie!',
      hint: 'Wielkie litery: Kasia, Tomek, Polsce, Wisła, Warszawę, Tatrach, Leoś, Europie'
    }
  }
];

// ============================================================
//  STATE
// ============================================================
const State = {
  currentRuleIdx: 0,
  currentTab: 'theory',
  currentExerciseIdx: 0,
  exerciseAnswers: [],
  scores: JSON.parse(localStorage.getItem('leosScores') || '{}'),
  totalScore: parseInt(localStorage.getItem('leosTotalScore') || '0', 10),

  saveScores() {
    localStorage.setItem('leosScores', JSON.stringify(this.scores));
    localStorage.setItem('leosTotalScore', String(this.totalScore));
  }
};

// ============================================================
//  UTILITIES
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function updateScoreDisplay() {
  const ts = document.getElementById('total-score');
  if (ts) ts.textContent = State.totalScore;
  const rs = document.getElementById('rule-score');
  if (rs) {
    const rule = RULES[State.currentRuleIdx];
    rs.textContent = State.scores[rule.id] || 0;
  }
}

function addScore(pts) {
  const rule = RULES[State.currentRuleIdx];
  State.scores[rule.id] = (State.scores[rule.id] || 0) + pts;
  State.totalScore += pts;
  State.saveScores();
  updateScoreDisplay();

  const badge = document.createElement('div');
  badge.className = 'score-pop';
  badge.textContent = '+' + pts + ' pkt';
  badge.style.cssText =
    'position:fixed;top:80px;right:20px;background:#fbbf24;color:#78350f;' +
    'padding:.4rem 1rem;border-radius:50px;font-weight:900;font-size:1.1rem;' +
    'z-index:9999;animation:scorePop .9s ease forwards;pointer-events:none';
  document.body.appendChild(badge);
  setTimeout(() => badge.remove(), 950);
}

// inject keyframe once
(function() {
  const s = document.createElement('style');
  s.textContent = `@keyframes scorePop{0%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(-55px) scale(1.4)}}`;
  document.head.appendChild(s);
})();

// ============================================================
//  SPEECH (TTS)
// ============================================================
const TTS = {
  _utt: null,
  speak(text, rate = 1) {
    if (!window.speechSynthesis) return;
    this.stop();
    this._utt = new SpeechSynthesisUtterance(text);
    this._utt.lang = 'pl-PL';
    this._utt.rate = rate;
    // try to pick a Polish voice
    const voices = speechSynthesis.getVoices();
    const plVoice = voices.find(v => v.lang.startsWith('pl'));
    if (plVoice) this._utt.voice = plVoice;
    speechSynthesis.speak(this._utt);
    return this._utt;
  },
  stop() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    this._utt = null;
  },
  isSpeaking() { return window.speechSynthesis && speechSynthesis.speaking; }
};

// ============================================================
//  DICTATION – CLICK-TO-CHOOSE (Type 1)
// ============================================================
function parseClickText(raw) {
  // Format: literal text with {correct|alt} blocks
  const parts = [];
  const re = /\{([^|]+)\|([^}]+)\}/g;
  let last = 0, m;
  while ((m = re.exec(raw)) !== null) {
    if (m.index > last) parts.push({ type: 'text', value: raw.slice(last, m.index) });
    parts.push({ type: 'choice', answer: m[1], options: [m[1], m[2]], selected: null });
    last = m.index + m[0].length;
  }
  if (last < raw.length) parts.push({ type: 'text', value: raw.slice(last) });
  return parts;
}

let _clickParts = [];

function renderClickDictation(rule) {
  _clickParts = parseClickText(rule.dictation.clickText);
  const container = document.getElementById('click-dict-area');
  if (!container) return;

  let html = '<div class="click-dict-text">';
  _clickParts.forEach((p, i) => {
    if (p.type === 'text') {
      html += p.value;
    } else {
      html += `<span class="dict-choice-token" data-idx="${i}" onclick="App.toggleToken(this, ${i})">
        <span class="token-label">${p.options[0]}/${p.options[1]}</span>
        <div class="token-options">
          ${p.options.map(o => `<button class="token-option" onclick="event.stopPropagation();App.selectToken(${i},'${o}',this.closest('.dict-choice-token'))">${o}</button>`).join('')}
        </div>
      </span>`;
    }
  });
  html += '</div>';

  document.getElementById('click-dict-result').style.display = 'none';
  document.getElementById('click-dict-result').innerHTML = '';
  container.innerHTML = html;
}

// ============================================================
//  APP CONTROLLER
// ============================================================
const App = {
  showWelcome() { showScreen('screen-welcome'); },

  showMenu() {
    showScreen('screen-menu');
    this._renderRulesGrid();
    updateScoreDisplay();
  },

  _renderRulesGrid() {
    const grid = document.getElementById('rules-grid');
    if (!grid) return;
    grid.innerHTML = '';
    RULES.forEach((rule, idx) => {
      const score = State.scores[rule.id] || 0;
      const completed = score > 0;
      const stars = this._scoreToStars(score, rule.exercises.length * 10 + 30);
      const card = document.createElement('div');
      card.className = `rule-card${completed ? ' completed' : ''}`;
      card.innerHTML = `
        <span class="rule-card-icon">${rule.icon}</span>
        <div class="rule-card-letters">${rule.letters}</div>
        <div class="rule-card-title">${rule.title}</div>
        <div class="rule-card-stars">${stars}</div>`;
      card.addEventListener('click', () => this.openRule(idx));
      grid.appendChild(card);
    });
  },

  _scoreToStars(score, max) {
    const p = score / max;
    if (p <= 0)  return '☆☆☆';
    if (p < 0.5) return '★☆☆';
    if (p < 0.8) return '★★☆';
    return '★★★';
  },

  openRule(idx) {
    State.currentRuleIdx = idx;
    State.currentExerciseIdx = 0;
    State.exerciseAnswers = [];
    const rule = RULES[idx];

    document.getElementById('rule-title').textContent = rule.letters + ' – ' + rule.title;
    this._renderTheory(rule);
    this._renderExercises(rule);
    this._renderDictation(rule);
    this.switchTab('theory');
    updateScoreDisplay();
    showScreen('screen-rule');
  },

  switchTab(name) {
    State.currentTab = name;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.toggle('active', tc.id === 'tab-' + name));
    window.scrollTo(0, 0);
  },

  // ── THEORY ──────────────────────────────────────────────
  _renderTheory(rule) {
    const intro = document.getElementById('theory-intro');
    intro.innerHTML = rule.theoryIntro;
    document.getElementById('theory-content').innerHTML = rule.theory;
    // Leoś talks when theory is shown
    setTimeout(() => leosTalk(2800), 300);
  },

  // ── EXERCISES ───────────────────────────────────────────
  _renderExercises(rule) { this._showExercise(rule, 0); },

  _showExercise(rule, idx) {
    const ex = rule.exercises[idx];
    if (!ex) return;
    State.currentExerciseIdx = idx;

    const area     = document.getElementById('exercise-area');
    const counter  = document.getElementById('exercise-counter');
    const feedback = document.getElementById('exercise-feedback');
    feedback.className = 'feedback hidden';

    counter.textContent = `${idx + 1} / ${rule.exercises.length}`;
    const pct = Math.round((idx / rule.exercises.length) * 100);
    const prog = `<div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>`;

    if (ex.type === 'choice') {
      area.innerHTML = prog + `
        <div class="exercise-card">
          <span class="exercise-type-badge">Wybierz odpowiedź</span>
          <div class="exercise-question">${ex.question}</div>
          <div class="exercise-sentence">${ex.sentence}</div>
          <div class="choices">
            ${ex.options.map(o => `<button class="choice-btn" onclick="App.answerChoice('${o}',this)">${o}</button>`).join('')}
          </div>
        </div>`;

    } else if (ex.type === 'fill') {
      let sent = ex.sentence;
      ex.inputs.forEach((inp, i) => {
        sent = sent.replace('__', `<input class="blank-input" id="blank-${i}" placeholder="${inp.placeholder}" maxlength="6" />`);
      });
      area.innerHTML = prog + `
        <div class="exercise-card">
          <span class="exercise-type-badge">Uzupełnij luki</span>
          <div class="exercise-question">${ex.question}</div>
          <div class="exercise-sentence">${sent}</div>
          <button class="btn btn-green submit-btn" onclick="App.answerFill()">Sprawdź</button>
        </div>`;

    } else if (ex.type === 'sort') {
      this._renderSortExercise(ex, prog, area);
    }

    document.getElementById('btn-prev-ex').style.visibility = idx === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('btn-next-ex');
    nextBtn.textContent = idx === rule.exercises.length - 1 ? 'Wyniki ✓' : 'Dalej →';
  },

  _renderSortExercise(ex, prog, area) {
    const shuffled = [...ex.words].sort(() => Math.random() - .5);
    area.innerHTML = prog + `
      <div class="exercise-card">
        <span class="exercise-type-badge">Posortuj wyrazy</span>
        <div class="exercise-question">${ex.question}</div>
        <div class="word-bank" id="word-bank">
          ${shuffled.map(w => {
            // Show stem with _ as a visual slot
            const display = w.stem.replace('_', '<span class="blank-slot">_</span>');
            return `<span class="sort-word" id="sw-${w.stem}" data-stem="${w.stem}" data-answer="${w.answer}" data-display="${w.display}" draggable="true">${display}</span>`;
          }).join('')}
        </div>
        <div class="sort-container">
          ${ex.columns.map(col => `
            <div class="sort-column" id="sc-${col}"
              ondragover="event.preventDefault();this.classList.add('drag-over')"
              ondragleave="this.classList.remove('drag-over')"
              ondrop="App.dropWord(event,'${col}')">
              <h4>${col}</h4>
            </div>`).join('')}
        </div>
        <button class="btn btn-green submit-btn" onclick="App.answerSort()">Sprawdź</button>
      </div>`;

    shuffled.forEach(w => {
      const el = document.getElementById('sw-' + w.stem);
      if (el) el.addEventListener('dragstart', e => e.dataTransfer.setData('text', w.stem));
    });
  },

  dropWord(event, col) {
    event.preventDefault();
    document.querySelectorAll('.sort-column').forEach(c => c.classList.remove('drag-over'));
    const stem = event.dataTransfer.getData('text');
    const el = document.getElementById('sw-' + stem);
    if (el) {
      el.remove();
      event.currentTarget.appendChild(el);
    }
  },

  answerChoice(opt, btn) {
    const rule = RULES[State.currentRuleIdx];
    const ex   = rule.exercises[State.currentExerciseIdx];
    const correct = opt === ex.answer;
    document.querySelectorAll('.choice-btn').forEach(b => b.classList.add('disabled'));
    btn.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) {
      document.querySelectorAll('.choice-btn').forEach(b => {
        if (b.textContent.trim() === ex.answer) b.classList.add('correct');
      });
    }
    this._showFeedback(correct, ex.hint);
    if (correct) addScore(10);
    State.exerciseAnswers[State.currentExerciseIdx] = correct;
  },

  answerFill() {
    const rule = RULES[State.currentRuleIdx];
    const ex   = rule.exercises[State.currentExerciseIdx];
    let allCorrect = true;
    ex.inputs.forEach((inp, i) => {
      const el = document.getElementById('blank-' + i);
      if (!el) return;
      const val = el.value.toLowerCase().trim();
      const ok  = val === inp.answer.toLowerCase().trim();
      el.classList.add(ok ? 'correct' : 'wrong');
      el.disabled = true;
      if (!ok) { allCorrect = false; el.value = inp.answer; }
    });
    document.querySelector('.submit-btn').disabled = true;
    this._showFeedback(allCorrect, '');
    if (allCorrect) addScore(10);
    State.exerciseAnswers[State.currentExerciseIdx] = allCorrect;
  },

  answerSort() {
    const rule = RULES[State.currentRuleIdx];
    const ex   = rule.exercises[State.currentExerciseIdx];
    let correct = 0;

    ex.words.forEach(w => {
      const el = document.getElementById('sw-' + w.stem);
      if (!el) return;
      const parent = el.closest('.sort-column');
      const colId  = parent ? parent.id.replace('sc-', '') : '';
      if (colId === w.col) {
        correct++;
        el.style.background = '#dcfce7'; el.style.borderColor = 'var(--green)';
        // Reveal the correct spelling
        el.innerHTML = `<span class="blank-slot revealed">${w.display}</span>`;
      } else {
        el.style.background = 'var(--red-pale)'; el.style.borderColor = 'var(--red)';
        el.innerHTML = `<span style="color:var(--red)">${w.display}</span>`;
      }
    });

    document.querySelector('.submit-btn').disabled = true;
    const allOk = correct === ex.words.length;
    this._showFeedback(allOk, `Poprawnych: ${correct} z ${ex.words.length}`);
    if (allOk) addScore(10);
    State.exerciseAnswers[State.currentExerciseIdx] = allOk;
  },

  _showFeedback(correct, hint) {
    const fb = document.getElementById('exercise-feedback');
    fb.className = 'feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
    if (correct) {
      const msgs = ['Super! 🎉', 'Brawo! 🌟', 'Znakomicie! ✨', 'Tak trzymaj! 👏', 'Leoś jest z ciebie dumny! 🌈', 'Niesamowite! 🏆'];
      fb.textContent = '✓ ' + msgs[Math.floor(Math.random() * msgs.length)];
      leosTalk(1600);
    } else {
      fb.innerHTML = '✗ Prawie! ' + (hint ? '<em>' + hint + '</em>' : 'Spróbuj jeszcze raz!');
    }
  },

  prevExercise() {
    const rule = RULES[State.currentRuleIdx];
    if (State.currentExerciseIdx > 0) {
      document.getElementById('exercise-feedback').className = 'feedback hidden';
      this._showExercise(rule, State.currentExerciseIdx - 1);
    }
  },

  nextExercise() {
    const rule = RULES[State.currentRuleIdx];
    const idx  = State.currentExerciseIdx;
    if (idx < rule.exercises.length - 1) {
      document.getElementById('exercise-feedback').className = 'feedback hidden';
      this._showExercise(rule, idx + 1);
    } else {
      this._showResults(rule);
    }
  },

  _showResults(rule) {
    const total   = rule.exercises.length;
    const correct = State.exerciseAnswers.filter(Boolean).length;
    const pct     = correct / total;

    document.getElementById('results-correct').textContent = correct;
    document.getElementById('results-total').textContent   = total;

    let title, stars, msg;
    if (pct === 1)      { title='Fantastycznie! 🏆'; stars='★★★'; msg='Leoś jest z ciebie bardzo dumny! Wszystko bezbłędnie!'; addScore(30); }
    else if (pct >= .6) { title='Dobrze! 🌟';        stars='★★☆'; msg='Prawie idealnie! Wróć do teorii i spróbuj jeszcze raz!'; addScore(15); }
    else                { title='Spróbuj jeszcze! 💪'; stars='★☆☆'; msg='Nie martw się! Przeczytaj teorię i ćwicz dalej!'; }

    document.getElementById('results-title').textContent   = title;
    document.getElementById('results-stars').textContent   = stars;
    document.getElementById('results-message').textContent = msg;
    showScreen('screen-results');
    setTimeout(() => leosTalk(2000), 400);
  },

  retryExercises() {
    State.currentExerciseIdx = 0;
    State.exerciseAnswers = [];
    this.switchTab('exercises');
    this._showExercise(RULES[State.currentRuleIdx], 0);
    showScreen('screen-rule');
  },

  // ── DICTATION ─────────────────────────────────────────────
  _renderDictation(rule) {
    const d = rule.dictation;
    document.getElementById('dictation-intro').textContent =
      'Wybierz rodzaj dyktanda i ćwicz! 🎤';

    // Click dictation
    renderClickDictation(rule);

    // Audio dictation
    const audioArea = document.getElementById('audio-dict-area');
    if (audioArea) {
      audioArea.innerHTML = `
        <div class="dictation-card">
          <div class="audio-hint">
            📋 <strong>Jak to działa:</strong> Naciśnij "Odtwórz" – Leoś przeczyta tekst po polsku.
            Weź kartkę i długopis, zapisz co słyszysz, a potem sprawdź!
          </div>
          <div class="audio-controls">
            <button class="btn btn-audio" id="btn-play-audio" onclick="App.toggleAudio()">▶ Odtwórz</button>
            <select class="speed-select" id="audio-speed">
              <option value="0.7">🐢 Wolno</option>
              <option value="1" selected>🚶 Normalnie</option>
              <option value="1.3">🏃 Szybko</option>
            </select>
          </div>
          <div class="dictation-text" id="audio-dict-text" style="filter:blur(6px);cursor:pointer"
               onclick="App.toggleAudioText()" title="Kliknij aby pokazać/ukryć tekst">
            ${d.speakText}
          </div>
          <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:.5rem">
            👆 Kliknij na tekst, aby go pokazać lub ukryć
          </p>
          <div class="theory-tip" style="margin-top:.8rem">
            <strong>💡 Wskazówka:</strong> ${d.hint}
          </div>
        </div>`;
    }

    this._audioTextVisible = false;
  },

  _audioTextVisible: false,

  toggleAudioText() {
    const el = document.getElementById('audio-dict-text');
    if (!el) return;
    this._audioTextVisible = !this._audioTextVisible;
    el.style.filter = this._audioTextVisible ? '' : 'blur(6px)';
  },

  toggleAudio() {
    const btn   = document.getElementById('btn-play-audio');
    const speed = parseFloat(document.getElementById('audio-speed')?.value || '1');
    const rule  = RULES[State.currentRuleIdx];

    if (TTS.isSpeaking()) {
      TTS.stop();
      btn.textContent = '▶ Odtwórz';
      btn.classList.remove('playing');
      return;
    }

    btn.textContent = '⏹ Zatrzymaj';
    btn.classList.add('playing');
    leosTalk(rule.dictation.speakText.length * 60);

    const utt = TTS.speak(rule.dictation.speakText, speed);
    if (utt) {
      utt.onend = () => {
        btn.textContent = '▶ Odtwórz';
        btn.classList.remove('playing');
      };
    } else {
      btn.textContent = '▶ Odtwórz';
      btn.classList.remove('playing');
      alert('Twoja przeglądarka nie obsługuje mowy. Spróbuj Chrome lub Edge.');
    }
  },

  // Click-dictation token logic
  toggleToken(el, idx) {
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.dict-choice-token.open').forEach(t => t.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
  },

  selectToken(idx, value, tokenEl) {
    _clickParts[idx].selected = value;
    tokenEl.classList.remove('open');
    const label = tokenEl.querySelector('.token-label');
    if (label) {
      label.textContent = value;
      label.style.color = '#1e293b';
    }
    tokenEl.style.background = '#ddd6fe';
    tokenEl.style.borderColor = '#7c3aed';
    tokenEl.style.color = '#4c1d95';
  },

  checkClickDictation() {
    let total = 0, correct = 0;
    document.querySelectorAll('.dict-choice-token').forEach(el => {
      const idx  = parseInt(el.dataset.idx);
      const part = _clickParts[idx];
      if (!part || part.type !== 'choice') return;
      total++;
      const selected = part.selected;
      if (selected === part.answer) {
        correct++;
        el.classList.add('selected-correct', 'checked-reveal');
        el.style.background = '#dcfce7';
        el.style.borderColor = 'var(--green)';
        el.style.color = 'var(--green-dark)';
        el.querySelector('.token-label').textContent = part.answer;
      } else {
        el.classList.add('selected-wrong', 'checked-reveal');
        el.style.background = 'var(--red-pale)';
        el.style.borderColor = 'var(--red)';
        el.style.color = 'var(--red)';
        el.querySelector('.token-label').textContent = (selected || '?') + ' → ' + part.answer;
      }
    });

    const pct = total ? correct / total : 0;
    const pts = Math.round(pct * 20);
    addScore(pts);
    leosTalk(1800);

    const res = document.getElementById('click-dict-result');
    if (res) {
      res.style.display = 'block';
      res.innerHTML = `<strong>✓ ${correct} z ${total} poprawnie (${Math.round(pct*100)}%) — +${pts} pkt</strong>`;
    }
  },

  resetClickDictation() {
    const rule = RULES[State.currentRuleIdx];
    renderClickDictation(rule);
  },

  switchDictTab(name) {
    document.querySelectorAll('.dict-subtab').forEach(t => t.classList.toggle('active', t.dataset.dict === name));
    document.querySelectorAll('.dict-panel').forEach(p => p.classList.toggle('active', p.id === 'dict-panel-' + name));
  },
};

// Close token dropdowns on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.dict-choice-token')) {
    document.querySelectorAll('.dict-choice-token.open').forEach(t => t.classList.remove('open'));
  }
});

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  updateScoreDisplay();
  // Preload voices for TTS
  if (window.speechSynthesis) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }
});
