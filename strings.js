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
function countWordsWithSameLetters(sentence){
  let sum = []
  let newstr = sentence.split("")
  for(const word of newstr){
    if(word[0] === word[word.length]){
      sum++
    }
  }
}
