const uploadForm = document.getElementById("uploadForm");
const modsContainer = document.getElementById("modsContainer");

uploadForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const modName = this.modName.value;
  const modFile = this.modFile.files[0];
  const modImage = this.modImage.files[0];
  const modDesc = this.modDesc.value;

  if (!modName || !modFile || !modImage) return alert("اكمل كل الحقول!");

  // إنشاء عنصر للمود
  const modDiv = document.createElement("div");
  modDiv.classList.add("mod");
  modDiv.innerHTML = `
    <h3>${modName}</h3>
    <img src="${URL.createObjectURL(modImage)}" alt="${modName}" width="150">
    <p>${modDesc}</p>
    <a href="${URL.createObjectURL(modFile)}" download>تحميل المود</a>
  `;
  modsContainer.prepend(modDiv);

  // مسح الفورم بعد الإضافة
  this.reset();
});