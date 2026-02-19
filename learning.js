const HIRAGANA_TO_ROMAJI_MAP = new Map([
    ["あ", "a"],
    ["い", "i"],
    ["う", "u"],
    ["え", "e"],
    ["お", "o"],
    ["か", "ka"],
    ["き", "ki"],
    ["く", "ku"],
    ["け", "ke"],
    ["こ", "ko"],
    ["さ", "sa"],
    ["し", "shi"],
    ["す", "su"],
    ["せ", "se"],
    ["そ", "so"],
    ["た", "ta"],
    ["ち", "chi"],
    ["つ", "tsu"],
    ["て", "te"],
    ["と", "to"],
    ["な", "na"],
    ["に", "ni"],
    ["ぬ", "nu"],
    ["ね", "ne"],
    ["の", "no"],
    ["は", "ha"],
    ["ひ", "hi"],
    ["ふ", "hu"],
    ["へ", "he"],
    ["ほ", "ho"],
    ["ま", "ma"],
    ["み", "mi"],
    ["む", "mu"],
    ["め", "me"],
    ["も", "mo"],
    ["や", "ya"],
    ["ゆ", "yu"],
    ["よ", "yo"],
    ["ら", "ra"],
    ["り", "ri"],
    ["る", "ru"],
    ["れ", "re"],
    ["ろ", "ro"],
    ["わ", "wa"],
    ["を", "wo"],
    ["が", "ga"],
    ["ぎ", "gi"],
    ["ぐ", "gu"],
    ["げ", "ge"],
    ["ご", "go"],
    ["ざ", "za"],
    ["じ", "ji"],
    ["ず", "zu"],
    ["ぜ", "ze"],
    ["ぞ", "zo"],
    ["だ", "da"],
    ["ぢ", "dzi"],
    ["づ", "dzu"],
    ["で", "de"],
    ["ど", "do"],
    ["ば", "ba"],
    ["び", "bi"],
    ["ぶ", "bu"],
    ["べ", "be"],
    ["ぼ", "bo"],
    ["ゃ", "ya"],
    ["ぁ", "a"],
    ["ぃ", "i"],
    ["ぅ", "u"],
    ["ぇ", "e"],
    ["ぉ", "o"],
    ["ょ", "yo"]
]);

const ROMAJI_TO_HIRAGANA_MAP = new Map([
    ["a",  "あ"],
    ["i",  "い"],
    ["u",  "う"],
    ["e",  "え"],
    ["o",  "お"],
    ["ka", "か"],
    ["ki", "き"],
    ["ku", "く"],
    ["ke", "け"],
    ["ko", "こ"],
    ["sa", "さ"],
    ["shi", "し"],
    ["su", "す"],
    ["se", "せ"],
    ["so", "そ"],
    ["ta", "た"],
    ["chi", "ち"],
    ["tsu", "つ"],
    ["te", "て"],
    ["to", "と"],
    ["na", "な"],
    ["ni", "に"],
    ["nu", "ぬ"],
    ["ne", "ね"],
    ["no", "の"],
    ["ha", "は"],
    ["hi", "ひ"],
    ["hu", "ふ"],
    ["he", "へ"],
    ["ho", "ほ"],
    ["ma", "ま"],
    ["mi", "み"],
    ["mu", "む"],
    ["me", "め"],
    ["mo", "も"],
    ["ya", "や"],
    ["yu", "ゆ"],
    ["yo", "よ"],
    ["ra", "ら"],
    ["ri", "り"],
    ["ru", "る"],
    ["re", "れ"],
    ["ro", "ろ"],
    ["wa", "わ"],
    ["wo", "を"],
    ["ga", "が"],
    ["gi", "ぎ"],
    ["gu", "ぐ"],
    ["ge", "げ"],
    ["go", "ご"],
    ["za", "ざ"],
    ["ji", "じ"],
    ["zu", "ず"],
    ["ze", "ぜ"],
    ["zo", "ぞ"],
    ["da", "だ"],
    ["dzi", "ぢ"],
    ["dzu", "づ"],
    ["de", "で"],
    ["do", "ど"],
    ["ba", "ば"],
    ["bi", "び"],
    ["bu", "ぶ"],
    ["be", "べ"],
    ["bo", "ぼ"],
    ["ya", "ゃ"],
    ["a",  "ぁ"],
    ["i",  "ぃ"],
    ["u",  "ぅ"],
    ["e",  "ぇ"],
    ["o",  "ぉ"],
    ["yo", "ょ"]
]);

const HIRAGANA_LIST = Array.from(HIRAGANA_TO_ROMAJI_MAP.keys());

const ROMAJI_LIST = Array.from(HIRAGANA_TO_ROMAJI_MAP.values());

function generate_random_number(max) {
    return Math.floor(Math.random() * max);
}

function get_random_array_element(array) {
    return array[generate_random_number(array.length)];
}

function generate_random_hiragana_string(length) {
    let string = "";
    for (let i = 0; i < length; ++i) {
        string += get_random_array_element(HIRAGANA_LIST);
    }
    return string;
}

function hiragana_to_romaji(hiragana_string) {
    let romaji_string = "";
    for (const hiragana of hiragana_string) {
        romaji_string += HIRAGANA_TO_ROMAJI_MAP.get(hiragana);
    }
    return romaji_string;
}

function romaji_to_hiragana(romaji_string) {
    let hiragana_string = "";
    for (const romaji of romaji_string) {
        hiragana_string += ROMAJI_TO_HIRAGANA_MAP.get(romaji);
    }
    return hiragana_string;
}

// Do NOT use this function.
function expect_hiragana_string(string) {
    let random_string = null;
    let attempt_count = 0;
    while ((random_string = generate_random_hiragana_string(string.length)) != string) {
        console.log(`Attempt count: ${attempt_count++}`);
    }
    console.log(`Took ${attempt_count++} attempts.`);
}
