export default function validationString(str) {
  const regExp = /^[a-zA-Z0-9ㄱ-ㅎ가-힣 ]{1,10}$/;
  if (str === "") {
    alert("내용을 입력해주세요");
    return false;
  }
  if (str.length <= 3) {
    alert("3글자 이상 입력해주세요");
    return false;
  }
  return regExp.test(str);
}
