//53dbd5315a3c69eed20002dd
const filter_list = (l) => l.filter(item => typeof item !== 'string');



console.log(filter_list([1, 2, 'a', 'b']));
