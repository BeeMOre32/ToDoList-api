export default function validationString(str) {
  const regExp = /^[a-zA-Z0-9ㄱ-ㅎ가-힣!? /]{1,15}$/;
  if (str === "") {
    alert("내용을 입력해주세요");
    return false;
  }
  if (str.length <= 3) {
    alert("3글자 이상 입력해주세요");
    return false;
  }
  if (!regExp.test(str)) {
    alert("느낌표와 물음표를 제외한 특수문자와 15글자 이상 입력할 수 없습니다");
    return false;
  }
  return regExp.test(str);
}
