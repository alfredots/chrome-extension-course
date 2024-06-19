const element = document.getElementById("text");
const timeInput = document.getElementById("time-input");
const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({
    name,
    notificationTime,
  });
  element.textContent = `Name is ${name}`;
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  nameInput.value = res.name ?? "not settled";
  timeInput.value = res.notificationTime ?? 300;
});
