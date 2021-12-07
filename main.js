// 정규식(규칙적인표현)

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// match 문자열이 정규식과 일치하는 부분 확인

// 생성자 방식
// const regexp = new RegExp('the', 'gi');
// console.log(str.match(regexp))

// 리터럴 방식
// const regexp = /the/gi;
// console.log(str.match(regexp));

// test메소드
// const regexp = /HEROPY/gi;
// console.log(regexp.test(str));

// replace메소드
// const regexp = /fox/gi;
// str = str.replace(regexp, 'AAA');
// console.log(str);

// 이스케이프 문자: \기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
// \.$문자데이터의 끝나는부분에 .이 있는지 확인
// console.log(str.match(/\.$/gi))

// 문자데이터의 끝나는 부분에 d로 끝나는부분 확인
// console.log(str.match(/d$/gm))

// 특정줄의 t로 시작하는 내용 확인
// console.log(str.match(/^T/gm))


// 임의의 한 문자와 일치
// console.log(str.match(/h..p/g))

// fox 또는 dog라는 글자를 찾음(먼저찾은 글자순)
// console.log(str.match(/fox|dog/))

// ?앞의 s라는 단어는 있을수도있고 없을 수도 있음
// console.log(str.match(/https?/g))

// 두개 연속 일치되는 글자 확인
// console.log(str.match(/d{2}/g))

// 두개 이상 연속 일치 글자 확인
// console.log(str.match(/d{2,}/g))

// 두개 이상 세개 이하 글자 확인
// console.log(str.match(/{2,3}/g))

// 숫자와 영어 알파벳을 포함하는 2~3글자
// console.log(str.match(/\w{2,3}/g))

// 패턴 안에두글자 이상 세글자 이하인 글자만 찾아냄
// console.log(str.match(/\b\w{2,3}\b/g))

// f 또는 o 또는 x 단어를 전부 찾음
// console.log(str.match(/[fox]/g))

// 0~9숫자를 전부찾음(0또는1또는2또는3....)
// console.log(str.match(/[0-9]/g))

// 0~9숫자를 전부찾음(숫자 1개 이상)
// console.log(str.match(/[0-9]{1,}/g))

// 1개이상의 연속되는 한글을 찾음
// console.log(str.match(/[가-힣]{1,}/g))

// 영어대소문자 숫자 _ 기호까지 확인
// console.log(str.match(/\w/g))

// 사이사이의 경계(띄어쓰기 골뱅이)를 확인
// console.log(str.match(/\b/g))

// 63개의 문자가 아닌 경계로 시작해서 f라는 알파벳 단어로 시작하는 
// 1개이상의 단어(끝도 63개가 아닌 문자의 경계로 끝)
// = f로 시작하는 모든 영단어
// console.log(str.match(/\bf\w{1,}\b/g))

// 모든 숫자에 일치(1개 이상)
// console.log(str.match(/\d{1,}/g))

// 모든 공백 문자
// console.log(str.match(/\s/g))

// 공백문자 확인 예제
// const h = `  the hello  world   !

// `
// // 공백문자를 공백으로 대체
// console.log(h.replace(/\s/g, ''))

// @앞쪽에 일치되는 1글자 이상의 글자
// console.log(str.match(/.{1,}(?=@)/g))

// @뒤쪽에 일치되는 1글자 이상의 글자
console.log(str.match(/(?<=@).{1,}/g))