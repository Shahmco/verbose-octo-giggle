/* ==============================
   1. التحقق من التسجيل
============================== */
function validateForm() {
  let username = document.getElementById("username")?.value.trim();
  let email = document.getElementById("email")?.value.trim();
  let password = document.getElementById("password")?.value.trim();

  if (!username || !email || !password) {
    alert("⚠️ يرجى ملء جميع الحقول!");
    return false;
  }
  alert("✅ تم إنشاء الحساب بنجاح!");
  return true;
}

/* ==============================
   2. إدارة السلة
============================== */
// زيادة الكمية
function increaseQty(btn) {
  let span = btn.previousElementSibling;
  span.textContent = parseInt(span.textContent) + 1;
  updateRow(btn.closest("tr"));
}

// إنقاص الكمية
function decreaseQty(btn) {
  let span = btn.nextElementSibling;
  let qty = parseInt(span.textContent);
  if (qty > 1) {
    span.textContent = qty - 1;
    updateRow(btn.closest("tr"));
  }
}

// حذف المنتج
function removeItem(btn) {
  btn.closest("tr").remove();
  updateCartTotal();
}

// تحديث الإجمالي للمنتج
function updateRow(row) {
  let price = parseFloat(row.dataset.price);
  let qty = parseInt(row.querySelector(".qty span").textContent);
  row.querySelector(".total").textContent = (price * qty) + "$";
  updateCartTotal();
}

// تحديث إجمالي السلة
function updateCartTotal() {
  let total = 0;
  document.querySelectorAll("#cart-items tr").forEach(row => {
    total += parseFloat(row.querySelector(".total").textContent.replace("$", ""));
  });
  document.getElementById("total-price").textContent = total + "$";
}

/* ==============================
   3. التحقق من نموذج الاتصال
============================== */
function sendMessage() {
  let name = document.getElementById("name")?.value.trim();
  let email = document.getElementById("email")?.value.trim();
  let message = document.getElementById("message")?.value.trim();

  if (!name || !email || !message) {
    alert("⚠️ يرجى ملء جميع الحقول!");
    return false;
  }
  alert("✅ تم إرسال رسالتك بنجاح!");
  return true;
}
