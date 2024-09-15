document.addEventListener("DOMContentLoaded", () => {
  const ageVerificationOverlay = document.getElementById("agreement");
  const verifyAgeButton = document.getElementById("agreed");

  verifyAgeButton.addEventListener("click", () => {
    // 隱藏年齡驗證彈出框
    ageVerificationOverlay.style.display = "none"; // 隱藏彈出框
  });
});
