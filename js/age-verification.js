document.addEventListener("DOMContentLoaded", () => {
  const ageVerificationOverlay = document.getElementById("age-verification");
  const verifyAgeButton = document.getElementById("verify-age");

  verifyAgeButton.addEventListener("click", () => {
    // 隱藏年齡驗證彈出框
    ageVerificationOverlay.style.display = "none"; // 隱藏彈出框
  });
});
