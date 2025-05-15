function updateClock() {
  const now = new Date();

  // Cập nhật giờ, phút, giây
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Cập nhật ngày tháng
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const day = days[now.getDay()];
  const date = now.toLocaleDateString("vi-VN");

  document.getElementById("day").textContent = day;
  document.getElementById("date").textContent = date;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);

// Cập nhật ngay khi trang được tải
updateClock();
