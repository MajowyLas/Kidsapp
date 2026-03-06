// ============================================================
//  ORTOGRAFIA Z LEOSIEM – główna logika aplikacji
// ============================================================

const RULES = [
  // ─────────────────────────────────────────────────────────
  {
    id: 'ou',
    letters: 'Ó / U',
    icon: '🟡',
    title: 'Kiedy pisać Ó, a kiedy U?',
    theoryIntro: 'Hej! Ó i U brzmią tak samo, ale piszemy je inaczej. Znam kilka sztuczek, żeby nie popełniać błędów! 📝',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">Ó</span>, gdy w innej formie wyrazu zmienia się na O, A lub E</h3>
          <p>Zmiana pomaga nam odkryć, które <em>ó</em> się kryje w słowie!</p>
          <ul class="example-list">
            <li>wój – w<span class="highlight">ó</span>z → w<span class="highlight">o</span>zy</li>
            <li>sk<span class="highlight">ó</span>ra → sk<span class="highlight">o</span>rka</li>
            <li>mi<span class="highlight">ó</span>d → mi<span class="highlight">o</span>du</li>
            <li>r<span class="highlight">ó</span>g → r<span class="highlight">o</span>gata</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">Ó</span> w zakończeniach <em>-ów, -ówka, -ówna</em></h3>
          <ul class="example-list">
            <li>dom<span class="highlight">ów</span></li>
            <li>krow<span class="highlight">ówka</span></li>
            <li>główn<span class="highlight">ówna</span></li>
            <li>nazw<span class="highlight">ówka</span></li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">U</span>, gdy wymiana nie jest możliwa</h3>
          <ul class="example-list">
            <li>ul</li><li>ucho</li><li>ulica</li><li>kubek</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Zmień wyraz do innej formy. Jeśli <em>ó</em> zamienia się na <em>o</em> lub <em>a</em> – pisz <strong>ó</strong>!<br>
          Np. <em>b<strong>ó</strong>l → b<strong>o</strong>leć</em> – znaczy pisz ó.
        </div>
      </div>
    `,
    exercises: [
      {
        type: 'choice',
        question: 'Wybierz właściwą literę:',
        sentence: 'W lesie mieszka s__wa.',
        blank: 'o',
        options: ['ó', 'u'],
        answer: 'ó',
        hint: 'sowa → sów (dopełniacz l. mn.) – ó wymienne!'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą literę:',
        sentence: 'Mama kupiła k__bek herbaty.',
        blank: 'u',
        options: ['ó', 'u'],
        answer: 'u',
        hint: 'kubek – nie ma wymiany ó→o, więc piszemy u!'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą literę:',
        sentence: 'Chłopiec biegał w kr__tko.',
        blank: 'ó',
        options: ['ó', 'u'],
        answer: 'ó',
        hint: 'krótko → krótszy – ó wymienne na o!'
      },
      {
        type: 'fill',
        question: 'Wpisz ó lub u:',
        sentence: 'Na __licy stoi wysoki d__b.',
        blanks: ['u', 'ą'],
        inputs: [
          { placeholder: 'u/ó', answer: 'u' },
          { placeholder: 'ą/o', answer: 'ą' }
        ]
      },
      {
        type: 'sort',
        question: 'Przyporządkuj wyrazy do odpowiedniej kolumny:',
        columns: ['Ó', 'U'],
        words: [
          { word: 'wóz', col: 'Ó' },
          { word: 'ulica', col: 'U' },
          { word: 'córka', col: 'Ó' },
          { word: 'ucho', col: 'U' },
          { word: 'dróżka', col: 'Ó' },
          { word: 'kubek', col: 'U' }
        ]
      }
    ],
    dictation: {
      intro: 'Teraz napiszemy krótkie dyktando! Uważaj na ó i u. Przeczytaj tekst, a potem wpisz z pamięci! 🎤',
      text: 'Wóz jedzie drogą przez las. Na dróżce siedzi sowa. Mama woła córkę do domu. Kubek stoi na stole.',
      hint: 'Zwróć uwagę na: wóz, dróżce, sowa, córkę, kubek'
    }
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'rzz',
    letters: 'RZ / Ż',
    icon: '🔴',
    title: 'Kiedy pisać RZ, a kiedy Ż?',
    theoryIntro: 'Te dwa dźwięki brzmią tak samo! Ale ja znam zasady, które ci pomogą! 🕵️',
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
            <li>wia<span class="highlight">rz</span> → wia<span class="highlight">r</span>a</li>
            <li>gó<span class="highlight">rz</span>e → gó<span class="highlight">r</span>a</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">Ż</span>, gdy wymienia się na <em>g, dz, z, ź, s, dź</em></h3>
          <ul class="example-list">
            <li>ksi<span class="highlight">ąż</span>ka → ksi<span class="highlight">ąg</span>i</li>
            <li>dro<span class="highlight">ż</span>szy → dro<span class="highlight">g</span>i</li>
            <li>wą<span class="highlight">ż</span> → wę<span class="highlight">ż</span>e</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Po literach p, b, t, d, k, g, ch – prawie zawsze piszemy <strong>rz</strong>!<br>
          Np. <em><strong>prz</strong>ed, <strong>brz</strong>oza, <strong>trz</strong>y, <strong>drz</strong>wi</em>
        </div>
      </div>
    `,
    exercises: [
      {
        type: 'choice',
        question: 'Wybierz właściwą pisownię:',
        sentence: 'Mama u__ądziła przyjęcie.',
        blank: 'rz/ż',
        options: ['rz', 'ż'],
        answer: 'rz',
        hint: 'urządziła – nie ma wymiany na r, ale po "u" używamy rz (rządzić → rząd)'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą pisownię:',
        sentence: 'Na drzewie siedzi __ółw.',
        blank: 'rz/ż',
        options: ['ż', 'rz'],
        answer: 'ż',
        hint: 'żółw – ż, bo brak wymiany na r; nie ma tu spółgłoski p/b/t/d przed nim'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą pisownię:',
        sentence: 'Kup mi p__ed domem lody.',
        blank: 'rz',
        options: ['rz', 'ż'],
        answer: 'rz',
        hint: 'przed – po "p" piszemy rz!'
      },
      {
        type: 'fill',
        question: 'Wpisz rz lub ż:',
        sentence: '__ółta brzo__a rośnie p__y rzece.',
        blanks: ['ż', 'z', 'rz'],
        inputs: [
          { placeholder: 'rz/ż', answer: 'ż' },
          { placeholder: 'rz/ż', answer: 'z' },
          { placeholder: 'rz/ż', answer: 'rz' }
        ]
      },
      {
        type: 'sort',
        question: 'Przyporządkuj wyrazy:',
        columns: ['RZ', 'Ż'],
        words: [
          { word: 'drzewo', col: 'RZ' },
          { word: 'żaba', col: 'Ż' },
          { word: 'brzeg', col: 'RZ' },
          { word: 'żółty', col: 'Ż' },
          { word: 'trzy', col: 'RZ' },
          { word: 'nóż', col: 'Ż' }
        ]
      }
    ],
    dictation: {
      intro: 'Dyktando z rz i ż! Przeczytaj, zapamiętaj, a potem pisz! 🎤',
      text: 'Trzy żaby siedziały przy brzegu rzeki. Drzewo rzucało cień na trawę. Grzyb wyrósł pod krzewem.',
      hint: 'Zwróć uwagę na: trzy, żaby, przy, brzegu, rzeki, drzewo, grzyb, krzewem'
    }
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'chh',
    letters: 'CH / H',
    icon: '🔵',
    title: 'Kiedy pisać CH, a kiedy H?',
    theoryIntro: 'CH i H to kolejna zagadka! Spokojnie, mam dla ciebie proste zasady! 💡',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">CH</span>, gdy wymienia się na <em>sz</em></h3>
          <ul class="example-list">
            <li>su<span class="highlight">ch</span>y → su<span class="highlight">sz</span>yć</li>
            <li>sło<span class="highlight">ch</span>ać → </li>
            <li>mu<span class="highlight">ch</span>a → mu<span class="highlight">sz</span>ka</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">CH</span> na końcu wyrazu</h3>
          <ul class="example-list">
            <li>ma<span class="highlight">ch</span></li>
            <li>gmac<span class="highlight">h</span></li>
            <li>śpie<span class="highlight">ch</span></li>
            <li>pasterz w stada<span class="highlight">ch</span></li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Pisz <span class="highlight">H</span>, gdy wymienia się na <em>g, z, ź</em> lub w wyrazach obcego pochodzenia</h3>
          <ul class="example-list">
            <li><span class="highlight">h</span>erbata</li>
            <li>dro<span class="highlight">h</span>i → dro<span class="highlight">g</span>a (białoruska forma)</li>
            <li>wa<span class="highlight">h</span>ać → wa<span class="highlight">g</span>a</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Sprawdź, czy wyraz pochodzi z języka obcego (herbata, historia, humor) – wtedy raczej <strong>h</strong>. W polskich słowach częściej <strong>ch</strong>!
        </div>
      </div>
    `,
    exercises: [
      {
        type: 'choice',
        question: 'Wybierz właściwą pisownię:',
        sentence: 'Mama wypiła filiżankę __erbaty.',
        blank: 'ch/h',
        options: ['h', 'ch'],
        answer: 'h',
        hint: 'herbata – wyraz obcego pochodzenia, piszemy h!'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą pisownię:',
        sentence: 'Tata smażył su__ary na patelni.',
        blank: 'ch',
        options: ['ch', 'h'],
        answer: 'ch',
        hint: 'suchar – suchy → susz (wymiana ch→sz), piszemy ch!'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą pisownię:',
        sentence: 'Lubię __umor i śmiech.',
        blank: 'h',
        options: ['h', 'ch'],
        answer: 'h',
        hint: 'humor – wyraz łaciński, piszemy h!'
      },
      {
        type: 'fill',
        question: 'Wpisz ch lub h:',
        sentence: '__łopiec śpie__ał w do__u.',
        blanks: ['ch', 'ch', 'ch'],
        inputs: [
          { placeholder: 'ch/h', answer: 'ch' },
          { placeholder: 'ch/h', answer: 'ch' },
          { placeholder: 'ch/h', answer: 'ch' }
        ]
      },
      {
        type: 'sort',
        question: 'Przyporządkuj wyrazy:',
        columns: ['CH', 'H'],
        words: [
          { word: 'chleb', col: 'CH' },
          { word: 'humor', col: 'H' },
          { word: 'mucha', col: 'CH' },
          { word: 'herbata', col: 'H' },
          { word: 'suchy', col: 'CH' },
          { word: 'historia', col: 'H' }
        ]
      }
    ],
    dictation: {
      intro: 'Dyktando z ch i h! Czy pamiętasz zasady? Pisz śmiało! 🎤',
      text: 'Chłopiec pił herbatę z cukrem. Mucha siedziała na chlebie. Historia o trollu była ciekawa. Śmiech to zdrowie!',
      hint: 'Zwróć uwagę na: chłopiec, herbatę, mucha, chlebie, historia, śmiech'
    }
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'ae',
    letters: 'Ą / Ę',
    icon: '🟣',
    title: 'Kiedy pisać Ą, a kiedy Ę?',
    theoryIntro: 'Ą i ę to polskie literki z ogonkami! Posłuchaj, jak je wymówić i kiedy pisać! 🦋',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ą</span> piszemy na końcu wyrazów (czasowniki w 3. os. l. mn.)</h3>
          <ul class="example-list">
            <li>dzieci grają</li>
            <li>chłopcy biegają</li>
            <li>ptaki śpiewają</li>
            <li>koty śpią</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ę</span> piszemy na końcu wyrazów (czasowniki w 1. os. l. poj.)</h3>
          <ul class="example-list">
            <li>ja gram – grającą</li>
            <li>ja czytam – czytającą</li>
            <li>widzę</li>
            <li>czytam – czytającę? NIE: piszę</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ę</span> piszemy przed b, p (ęb, ęp) i na końcu wyrazu</h3>
          <ul class="example-list">
            <li>dę<span class="highlight">b</span></li>
            <li>cz<span class="highlight">ę</span>ść</li>
            <li>pi<span class="highlight">ę</span>kny</li>
            <li>r<span class="highlight">ę</span>ka</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 <span class="highlight">Ą</span> piszemy przed b, p (ąb, ąp) w środku wyrazu</h3>
          <ul class="example-list">
            <li>ząb</li>
            <li>dąb</li>
            <li>wąski</li>
            <li>kąpać</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Jeśli mówisz <em>"ja..."</em> – często końcówka to <strong>ę</strong>. Jeśli mówisz <em>"oni/one..."</em> – często końcówka to <strong>ą</strong>!<br>
          Np. <em>ja widzę / oni widzą</em>
        </div>
      </div>
    `,
    exercises: [
      {
        type: 'choice',
        question: 'Wybierz właściwą literę:',
        sentence: 'Ptaki wesoło śpiewaj__.',
        blank: 'ą/ę',
        options: ['ą', 'ę'],
        answer: 'ą',
        hint: 'ptaki śpiewają – oni/one, więc ą!'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą literę:',
        sentence: 'Ja widz__ piękny las.',
        blank: 'ę',
        options: ['ę', 'ą'],
        answer: 'ę',
        hint: 'ja widzę – pierwsza osoba, więc ę!'
      },
      {
        type: 'choice',
        question: 'Wybierz właściwą literę:',
        sentence: 'W lesie rośnie stary d__b.',
        blank: 'ą',
        options: ['ą', 'ę'],
        answer: 'ą',
        hint: 'dąb – ą przed b!'
      },
      {
        type: 'fill',
        question: 'Wpisz ą lub ę:',
        sentence: 'Dzieci biegaj__ i śpiewaj__, a ja słucham i widz__ je z okna.',
        blanks: ['ą', 'ą', 'ę'],
        inputs: [
          { placeholder: 'ą/ę', answer: 'ą' },
          { placeholder: 'ą/ę', answer: 'ą' },
          { placeholder: 'ą/ę', answer: 'ę' }
        ]
      },
      {
        type: 'sort',
        question: 'Przyporządkuj wyrazy:',
        columns: ['Ą', 'Ę'],
        words: [
          { word: 'dąb', col: 'Ą' },
          { word: 'ręka', col: 'Ę' },
          { word: 'wąski', col: 'Ą' },
          { word: 'część', col: 'Ę' },
          { word: 'śpią', col: 'Ą' },
          { word: 'piszę', col: 'Ę' }
        ]
      }
    ],
    dictation: {
      intro: 'Dyktando z ą i ę! Uważaj na ogonki! Pisz dokładnie! 🎤',
      text: 'Dzieci biegają i śpiewają w ogrodzie. Ja widzę piękne kwiaty. Dąb rośnie przy rzece. Ręka Kasi jest ciepła.',
      hint: 'Zwróć uwagę na: biegają, śpiewają, widzę, piękne, dąb, ręka'
    }
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'nie',
    letters: 'NIE-',
    icon: '🟤',
    title: 'Pisownia NIE z różnymi częściami mowy',
    theoryIntro: 'Kiedy "nie" piszemy razem, a kiedy osobno? To jedno z ważniejszych pytań w ortografii! Ja wiem! 😄',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Z przymiotnikami i przysłówkami piszemy <span class="highlight">RAZEM</span></h3>
          <ul class="example-list">
            <li><span class="highlight">nie</span>duży</li>
            <li><span class="highlight">nie</span>ładny</li>
            <li><span class="highlight">nie</span>wesoły</li>
            <li><span class="highlight">nie</span>daleko</li>
            <li><span class="highlight">nie</span>wysoki</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Z rzeczownikami piszemy <span class="highlight">RAZEM</span></h3>
          <ul class="example-list">
            <li><span class="highlight">nie</span>szczęście</li>
            <li><span class="highlight">nie</span>uwaga</li>
            <li><span class="highlight">nie</span>pokój</li>
            <li><span class="highlight">nie</span>przyjaźń</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Z czasownikami piszemy <span class="highlight">OSOBNO</span></h3>
          <ul class="example-list">
            <li><span class="highlight">nie</span> lubię</li>
            <li><span class="highlight">nie</span> chodzę</li>
            <li><span class="highlight">nie</span> widzę</li>
            <li><span class="highlight">nie</span> mówię</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Wyjątek: z imiesłowami odmiennymi – <span class="highlight">RAZEM</span></h3>
          <ul class="example-list">
            <li><span class="highlight">nie</span>czytany</li>
            <li><span class="highlight">nie</span>widziany</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Zapytaj – czy to czynność (czasownik)? → osobno! Czy to cecha (przymiotnik/przysłówek)? → razem!<br>
          Np. <em>nie lubię (czynność = osobno)</em> / <em>nieładny (cecha = razem)</em>
        </div>
      </div>
    `,
    exercises: [
      {
        type: 'choice',
        question: 'Razem czy osobno?',
        sentence: 'To jest (nie)ładna pogoda.',
        blank: 'nie',
        options: ['nieładna', 'nie ładna'],
        answer: 'nieładna',
        hint: 'ładna = przymiotnik → nie piszemy razem!'
      },
      {
        type: 'choice',
        question: 'Razem czy osobno?',
        sentence: 'Ja (nie)lubię zimna zupy.',
        blank: 'nie',
        options: ['nie lubię', 'nielubię'],
        answer: 'nie lubię',
        hint: 'lubię = czasownik → nie piszemy osobno!'
      },
      {
        type: 'choice',
        question: 'Razem czy osobno?',
        sentence: 'Mama ma dzisiaj (nie)pokój.',
        blank: 'nie',
        options: ['niepokój', 'nie pokój'],
        answer: 'niepokój',
        hint: 'niepokój = rzeczownik → nie piszemy razem!'
      },
      {
        type: 'choice',
        question: 'Razem czy osobno?',
        sentence: 'Pies (nie)biegnie do domu.',
        blank: 'nie',
        options: ['nie biegnie', 'niebiegnie'],
        answer: 'nie biegnie',
        hint: 'biegnie = czasownik → nie piszemy osobno!'
      },
      {
        type: 'sort',
        question: 'Przyporządkuj wyrażenia:',
        columns: ['Razem', 'Osobno'],
        words: [
          { word: 'nieduży', col: 'Razem' },
          { word: 'nie śpię', col: 'Osobno' },
          { word: 'nieszczęście', col: 'Razem' },
          { word: 'nie chodzę', col: 'Osobno' },
          { word: 'niewesoły', col: 'Razem' },
          { word: 'nie widzę', col: 'Osobno' }
        ]
      }
    ],
    dictation: {
      intro: 'Dyktando z pisownią NIE! Pamiętasz zasadę? Czasowniki – osobno, reszta – razem! 🎤',
      text: 'Nieduży pies nie lubi kąpieli. Tomek nie ma dziś niezbyt dobrego humoru. Nieładna pogoda nie sprzyja spacerowi. To prawdziwe nieszczęście!',
      hint: 'Zwróć uwagę na: nieduży, nie lubi, nie ma, niezbyt, nieładna, nie sprzyja, nieszczęście'
    }
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'caps',
    letters: 'Wielka litera',
    icon: '🟢',
    title: 'Kiedy pisać wielką literą?',
    theoryIntro: 'Wielka litera to ważna zasada! Wiem dokładnie kiedy jej użyć. Posłuchaj! 🎓',
    theory: `
      <div class="theory-section">
        <div class="rule-box">
          <h3>📌 Wielką literą piszemy <span class="highlight">imiona i nazwiska</span></h3>
          <ul class="example-list">
            <li><span class="highlight">K</span>asia</li>
            <li><span class="highlight">T</span>omek</li>
            <li><span class="highlight">K</span>owalski</li>
            <li><span class="highlight">L</span>eoś</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Wielką literą piszemy <span class="highlight">nazwy geograficzne</span></h3>
          <ul class="example-list">
            <li><span class="highlight">P</span>olska</li>
            <li><span class="highlight">W</span>arszawa</li>
            <li><span class="highlight">W</span>isła</li>
            <li><span class="highlight">T</span>atry</li>
            <li><span class="highlight">E</span>uropa</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Wielką literą zaczynamy <span class="highlight">każde zdanie</span></h3>
          <p>Po kropce, pytajniku lub wykrzykniku zawsze wielka litera!</p>
          <ul class="example-list">
            <li><span class="highlight">M</span>ama gotuje obiad.</li>
            <li><span class="highlight">C</span>zy lubisz lody?</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>📌 Wielką literą piszemy <span class="highlight">tytuły i święta</span></h3>
          <ul class="example-list">
            <li><span class="highlight">B</span>oże <span class="highlight">N</span>arodzenie</li>
            <li><span class="highlight">W</span>ielkanoc</li>
            <li>"<span class="highlight">M</span>ały <span class="highlight">K</span>siążę"</li>
          </ul>
        </div>
        <div class="theory-tip">
          <strong>🧠 Sztuczka Leosia:</strong> Czy to czyjaś nazwa własna (imię, miasto, kraj, rzeka)? → Wielka litera! Czy to zwykłe słowo opisujące? → mała litera.<br>
          Np. <em>rzeka</em> (małą) ale <em>Wisła</em> (wielką)!
        </div>
      </div>
    `,
    exercises: [
      {
        type: 'choice',
        question: 'Jak poprawnie napisać?',
        sentence: 'Mieszkam w __arszawie.',
        blank: 'w/W',
        options: ['Warszawa', 'warszawa'],
        answer: 'Warszawa',
        hint: 'Warszawa = nazwa miasta → wielka litera!'
      },
      {
        type: 'choice',
        question: 'Jak poprawnie napisać?',
        sentence: 'Mój pies ma na imię __urek.',
        blank: 'b/B',
        options: ['Burek', 'burek'],
        answer: 'Burek',
        hint: 'Burek = imię własne psa → wielka litera!'
      },
      {
        type: 'choice',
        question: 'Jak poprawnie napisać?',
        sentence: 'Lubię jeść __pple z ogrodu.',
        blank: 'j/J',
        options: ['jabłka', 'Jabłka'],
        answer: 'jabłka',
        hint: 'jabłka = zwykłe słowo, nie nazwa własna → mała litera!'
      },
      {
        type: 'choice',
        question: 'Jak poprawnie napisać?',
        sentence: 'Zima minęła. __iosna nadeszła.',
        blank: 'w/W',
        options: ['Wiosna', 'wiosna'],
        answer: 'Wiosna',
        hint: 'Wiosna – zaczyna zdanie po kropce → wielka litera!'
      },
      {
        type: 'sort',
        question: 'Przyporządkuj wyrazy:',
        columns: ['Wielka litera', 'Mała litera'],
        words: [
          { word: 'Kasia', col: 'Wielka litera' },
          { word: 'jabłko', col: 'Mała litera' },
          { word: 'Wisła', col: 'Wielka litera' },
          { word: 'rzeka', col: 'Mała litera' },
          { word: 'Polska', col: 'Wielka litera' },
          { word: 'kraj', col: 'Mała litera' }
        ]
      }
    ],
    dictation: {
      intro: 'Dyktando! Uważaj na wielkie litery – może będą na początku zdania albo w nazwie własnej! 🎤',
      text: 'Kasia i Tomek mieszkają w Polsce. Wisła płynie przez Warszawę. W Tatrach mieszka dużo zwierząt. Leoś lubi podróżować po Europie!',
      hint: 'Zwróć uwagę na wielkie litery: Kasia, Tomek, Polsce, Wisła, Warszawę, Tatrach, Leoś, Europie'
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

  // Show floating +points
  const badge = document.createElement('div');
  badge.className = 'score-pop';
  badge.textContent = '+' + pts + ' pkt';
  badge.style.cssText = 'position:fixed;top:80px;right:20px;background:#ffd600;color:#1b5e20;padding:.4rem 1rem;border-radius:50px;font-weight:900;font-size:1.1rem;z-index:9999;animation:scorePop .8s ease forwards';
  document.body.appendChild(badge);
  setTimeout(() => badge.remove(), 900);
}

// inject keyframe
const styleTag = document.createElement('style');
styleTag.textContent = `@keyframes scorePop{0%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(-50px) scale(1.3)}}`;
document.head.appendChild(styleTag);

// ============================================================
//  APP CONTROLLER
// ============================================================
const App = {
  showWelcome() {
    showScreen('screen-welcome');
  },

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
        <div class="rule-card-stars">${stars}</div>
      `;
      card.addEventListener('click', () => this.openRule(idx));
      grid.appendChild(card);
    });
  },

  _scoreToStars(score, max) {
    const pct = score / max;
    if (pct <= 0) return '☆☆☆';
    if (pct < 0.5) return '★☆☆';
    if (pct < 0.8) return '★★☆';
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

    // reset tabs
    this.switchTab('theory');
    updateScoreDisplay();
    showScreen('screen-rule');
  },

  switchTab(name) {
    State.currentTab = name;
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === name);
    });
    document.querySelectorAll('.tab-content').forEach(tc => {
      tc.classList.toggle('active', tc.id === 'tab-' + name);
    });
    window.scrollTo(0, 0);
  },

  // ── THEORY ────────────────────────────────────────────────
  _renderTheory(rule) {
    document.getElementById('theory-intro').innerHTML = rule.theoryIntro;
    document.getElementById('theory-content').innerHTML = rule.theory;
  },

  // ── EXERCISES ─────────────────────────────────────────────
  _renderExercises(rule) {
    this._showExercise(rule, 0);
  },

  _showExercise(rule, idx) {
    const ex = rule.exercises[idx];
    if (!ex) return;
    State.currentExerciseIdx = idx;

    const area = document.getElementById('exercise-area');
    const counter = document.getElementById('exercise-counter');
    const feedback = document.getElementById('exercise-feedback');
    feedback.className = 'feedback hidden';

    counter.textContent = `${idx + 1} / ${rule.exercises.length}`;

    // progress bar
    const pct = Math.round(((idx) / rule.exercises.length) * 100);
    let progHtml = `<div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>`;

    if (ex.type === 'choice') {
      area.innerHTML = progHtml + `
        <div class="exercise-card">
          <span class="exercise-type-badge">Wybierz odpowiedź</span>
          <div class="exercise-question">${ex.question}</div>
          <div class="exercise-sentence">${ex.sentence}</div>
          <div class="choices" id="choices">
            ${ex.options.map(opt => `
              <button class="choice-btn" onclick="App.answerChoice('${opt}', this)">
                ${opt}
              </button>`).join('')}
          </div>
        </div>`;
    } else if (ex.type === 'fill') {
      let sent = ex.sentence;
      ex.inputs.forEach((inp, i) => {
        sent = sent.replace('__', `<input class="blank-input" id="blank-${i}" placeholder="${inp.placeholder}" maxlength="4" />`);
      });
      area.innerHTML = progHtml + `
        <div class="exercise-card">
          <span class="exercise-type-badge">Uzupełnij luki</span>
          <div class="exercise-question">${ex.question}</div>
          <div class="exercise-sentence">${sent}</div>
          <button class="btn btn-green submit-btn" onclick="App.answerFill()">Sprawdź</button>
        </div>`;
    } else if (ex.type === 'sort') {
      const shuffled = [...ex.words].sort(() => Math.random() - .5);
      area.innerHTML = progHtml + `
        <div class="exercise-card">
          <span class="exercise-type-badge">Posortuj wyrazy</span>
          <div class="exercise-question">${ex.question}</div>
          <div class="word-bank" id="word-bank">
            ${shuffled.map(w => `
              <span class="sort-word" id="sw-${w.word}" draggable="true">${w.word}</span>`).join('')}
          </div>
          <div class="sort-container">
            ${ex.columns.map(col => `
              <div class="sort-column" id="sc-${col}" ondragover="event.preventDefault()" ondrop="App.dropWord(event, '${col}')">
                <h4>${col}</h4>
              </div>`).join('')}
          </div>
          <button class="btn btn-green submit-btn" onclick="App.answerSort()">Sprawdź</button>
        </div>`;
      // drag events
      shuffled.forEach(w => {
        const el = document.getElementById('sw-' + w.word);
        if (el) el.addEventListener('dragstart', e => e.dataTransfer.setData('text', w.word));
      });
    }

    // nav button states
    document.getElementById('btn-prev-ex').style.visibility = idx === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('btn-next-ex');
    nextBtn.textContent = idx === rule.exercises.length - 1 ? 'Wyniki ✓' : 'Dalej →';
  },

  dropWord(event, col) {
    const word = event.dataTransfer.getData('text');
    const el = document.getElementById('sw-' + word);
    if (el) {
      el.remove();
      const colEl = document.getElementById('sc-' + col);
      colEl.appendChild(el);
    }
  },

  answerChoice(opt, btn) {
    const rule = RULES[State.currentRuleIdx];
    const ex = rule.exercises[State.currentExerciseIdx];
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
    const ex = rule.exercises[State.currentExerciseIdx];
    let allCorrect = true;

    ex.inputs.forEach((inp, i) => {
      const el = document.getElementById('blank-' + i);
      if (!el) return;
      const val = el.value.toLowerCase().trim();
      const correct = val === inp.answer.toLowerCase();
      el.classList.add(correct ? 'correct' : 'wrong');
      el.disabled = true;
      if (!correct) {
        allCorrect = false;
        el.value = inp.answer; // show correct answer
      }
    });

    document.querySelector('.submit-btn').disabled = true;
    this._showFeedback(allCorrect, '');
    if (allCorrect) addScore(10);
    State.exerciseAnswers[State.currentExerciseIdx] = allCorrect;
  },

  answerSort() {
    const rule = RULES[State.currentRuleIdx];
    const ex = rule.exercises[State.currentExerciseIdx];
    let correct = 0, total = ex.words.length;

    ex.words.forEach(w => {
      const el = document.getElementById('sw-' + w.word);
      if (!el) return;
      const parent = el.closest('.sort-column');
      const colId = parent ? parent.id.replace('sc-', '') : '';
      if (colId === w.col) {
        correct++;
        el.style.background = '#c8e6c9'; el.style.borderColor = 'var(--green-mid)';
      } else {
        el.style.background = '#ffcdd2'; el.style.borderColor = 'var(--red)';
      }
    });

    document.querySelector('.submit-btn').disabled = true;
    const allOk = correct === total;
    this._showFeedback(allOk, `Poprawnych: ${correct} z ${total}`);
    if (allOk) addScore(10);
    State.exerciseAnswers[State.currentExerciseIdx] = allOk;
  },

  _showFeedback(correct, hint) {
    const fb = document.getElementById('exercise-feedback');
    fb.className = 'feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
    if (correct) {
      const msgs = ['Super! 🎉', 'Brawo! 🌟', 'Znakomicie! ✨', 'Tak trzymaj! 👏', 'Leoś jest z ciebie dumny! 🌈'];
      fb.textContent = '✓ ' + msgs[Math.floor(Math.random() * msgs.length)];
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
    const idx = State.currentExerciseIdx;
    if (idx < rule.exercises.length - 1) {
      document.getElementById('exercise-feedback').className = 'feedback hidden';
      this._showExercise(rule, idx + 1);
    } else {
      // Show results
      this._showResults(rule);
    }
  },

  _showResults(rule) {
    const total = rule.exercises.length;
    const correct = State.exerciseAnswers.filter(Boolean).length;
    const pct = correct / total;

    document.getElementById('results-correct').textContent = correct;
    document.getElementById('results-total').textContent = total;

    let title, stars, msg;
    if (pct === 1) {
      title = 'Fantastycznie! 🏆'; stars = '★★★'; msg = 'Leoś jest z ciebie bardzo dumny! Wszystko bezbłędnie!';
      addScore(30);
    } else if (pct >= 0.6) {
      title = 'Dobrze! 🌟'; stars = '★★☆'; msg = 'Prawie idealnie! Wróć do teorii i spróbuj jeszcze raz!';
      addScore(15);
    } else {
      title = 'Spróbuj jeszcze! 💪'; stars = '★☆☆'; msg = 'Nie martw się! Przeczytaj teorię raz jeszcze i ćwicz dalej!';
    }

    document.getElementById('results-title').textContent = title;
    document.getElementById('results-stars').textContent = stars;
    document.getElementById('results-message').textContent = msg;
    showScreen('screen-results');
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
    document.getElementById('dictation-intro').textContent = d.intro;

    const area = document.getElementById('dictation-area');
    area.innerHTML = `
      <div class="dictation-card">
        <h3 style="color:var(--green-dark);margin-bottom:.8rem;">📖 Przeczytaj i zapamiętaj:</h3>
        <div class="dictation-text" id="dictation-original">${d.text}</div>
        <p style="font-size:.9rem;color:#888;margin-bottom:.5rem">Teraz zakryj tekst i wpisz z pamięci:</p>
        <textarea class="dictation-input" id="dictation-input" placeholder="Pisz tutaj..." spellcheck="false"></textarea>
        <div class="dictation-actions">
          <button class="btn btn-green" onclick="App.checkDictation()">Sprawdź ✓</button>
          <button class="btn btn-outline dictation-reveal-btn" onclick="App.toggleOriginal()">
            Pokaż/ukryj tekst
          </button>
          <button class="btn btn-outline" onclick="App.resetDictation()">Wyczyść</button>
        </div>
        <div id="dictation-result" class="dictation-result" style="display:none"></div>
        <div class="theory-tip" style="margin-top:1rem">
          <strong>💡 Wskazówka:</strong> ${d.hint}
        </div>
      </div>`;

    // Initially hide original text hint
    this._dictationOriginalVisible = true;
  },

  _dictationOriginalVisible: true,

  toggleOriginal() {
    const el = document.getElementById('dictation-original');
    if (!el) return;
    this._dictationOriginalVisible = !this._dictationOriginalVisible;
    el.style.opacity = this._dictationOriginalVisible ? '1' : '0';
    el.style.filter = this._dictationOriginalVisible ? '' : 'blur(8px)';
  },

  checkDictation() {
    const rule = RULES[State.currentRuleIdx];
    const original = rule.dictation.text;
    const input = document.getElementById('dictation-input').value.trim();
    const result = document.getElementById('dictation-result');

    if (!input) { alert('Wpisz tekst dyktanda!'); return; }

    const origWords = original.split(/\s+/);
    const inWords  = input.split(/\s+/);
    let correct = 0;
    let html = '';

    origWords.forEach((word, i) => {
      const userWord = (inWords[i] || '').replace(/[.,!?;:]/g, '').toLowerCase();
      const origClean = word.replace(/[.,!?;:]/g, '').toLowerCase();
      if (userWord === origClean) {
        correct++;
        html += `<span class="ok">${word} </span>`;
      } else {
        html += `<span class="err" title="Powinno być: ${word}">${inWords[i] || '___'} </span>`;
      }
    });

    const pct = correct / origWords.length;
    const pts = Math.round(pct * 20);
    addScore(pts);

    result.style.display = 'block';
    result.innerHTML = `
      <strong>Wynik: ${correct}/${origWords.length} słów poprawnie (${Math.round(pct*100)}%) +${pts} pkt</strong><br><br>
      <em>Twój tekst z zaznaczonymi błędami:</em><br>
      ${html}<br><br>
      <em>Poprawny tekst:</em><br>
      ${original}`;

    // show original
    const orig = document.getElementById('dictation-original');
    if (orig) { orig.style.opacity = '1'; orig.style.filter = ''; }
    this._dictationOriginalVisible = true;
  },

  resetDictation() {
    const input = document.getElementById('dictation-input');
    if (input) input.value = '';
    const result = document.getElementById('dictation-result');
    if (result) result.style.display = 'none';
  }
};

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  updateScoreDisplay();
});
