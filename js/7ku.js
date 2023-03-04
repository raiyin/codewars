//53dbd5315a3c69eed20002dd
const filter_list = (l) => l.filter(item => typeof item !== 'string');

//52fba66badcd10859f00097e
function disemvowel(str) {
    const regex = /[aeuio]/ig;
    return str.replaceAll(regex, '');
}

console.log(disemvowel('This website is for lOsers LOL!'));
