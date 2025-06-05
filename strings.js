//1============================================================================
function countUppercaseLetters (str){
  const regstr = str.split("")
  const uppcase = []
  const lowercase = []
  for(const letter of regstr){
    if(letter === letter.toUpperCase()){
      uppcase.push(letter)
    }else{
      lowercase.push(letter)
    }
  }
  return uppcase.length
}

//2=============================================================================
function combineStrings (N1,N2,S1,S2){
  const start = S1.clice(0, N1)
  const last = S2.clice(-N2)
  return start + last
}

//3=============================================================================
function containsSubstring (S,S0){
  return S.includes(S0);
}

//4=============================================================================
function replaceSubstring (S,S1,S2){
  let newstr = S.replace(S1, S2)
  return newstr
}

//5=============================================================================
function countWordsWithSameLetters(sentence) {
  let sum = 0;
  let words = sentence.toLowercase().split('/\s+/'); 

  for (const word of words) {
    if (word.length > 0 && word[0] === word[word.length - 1]) {
      sum++;
    }
  }

  return sum;
}
//6==============================================================================
function countWordsWithA(sentence) {
  let words = sentence.split(/\s+/)
  let sum = 0

  for (const word of words) {
    if (word.includes('a') || word.includes('A')) {
      sum++;
    }
  }

  return sum;
}
//filter 
// function countWordsWithA = (sentence) => sentence
// .split('')
// .filter(word => word.includes('a') || word.includes('A'))
// .length
//7==============================================================================
function normalizeSpaces (sentence){
  return text.replace(/\s+/g, ' ');
}
//8==============================================================================
function extractFileName (fullFileName) { f
  return fullFileName.split('/').at(-1).split('.')[0];
}
//9==============================================================================
function encryptSentence (sentence) {
  const newstr = sentence.split('');
  const evenChar = newstr.filter((char,ind) => (ind +1) % 2 === 0 );
  const oddChar = newstr.filter((char,ind) => (ind +1) % 2 !== 0 ).reverse();
}
  return `${evenChar.join('')}${oddChar.join('')}`;

