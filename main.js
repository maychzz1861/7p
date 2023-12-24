const users = [
  { username: "jongkook97", password: "bts12345" },
  { username: "taehyong96", password: "bts123456" },
  // เพิ่ม username และ password ตามที่ต้องการ
];

const loginForm = document.querySelector(".login-form");
const validateInput = (inputObj) => {
  const { username, password } = inputObj;

  const foundUser = users.find(
    (user) =>
      user.username === username &&
      user.password === password
  );

  if (!username || !password) {
    window.alert("กรุณากรอก username และ password");
  } else if (!foundUser) {
    if (!users.some((user) => user.username === username)) {
      window.alert("username ไม่ถูกต้อง");
    } else {
      window.alert("password ไม่ถูกต้อง");
    }
  } else {
    window.alert("Login successful!");
    window.location.href = "https://www.example.com";
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  let inputObj = {};

  for (let el of loginForm.elements) {
    if (el.id) {
      inputObj[el.id] = el.value;
    }
  }

  validateInput(inputObj);
};

loginForm.addEventListener("submit", handleLogin);
