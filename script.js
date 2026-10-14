const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");
const taskSummary = document.getElementById("taskSummary");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

function updateTaskProgress() {
  const items = [...taskList.querySelectorAll('input[type="checkbox"]')];
  const completed = items.filter(item => item.checked).length;
  const total = items.length;
  const percent = Math.round((completed / total) * 100);

  items.forEach(input => {
    const status = input.closest("li").querySelector(".task-status");
    status.textContent = input.checked ? "Selesai" : "Belum";
    status.classList.toggle("done", input.checked);
  });

  completedCount.textContent = String(completed).padStart(2, "0");
  pendingCount.textContent = String(total - completed).padStart(2, "0");
  taskSummary.textContent = `${completed} dari ${total} tugas selesai`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

taskList.addEventListener("change", updateTaskProgress);

document.getElementById("serviceForm").addEventListener("submit", event => {
  event.preventDefault();
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("formResult");

  if (!topic || !message) {
    result.textContent = "Pilih topik dan tulis pertanyaan terlebih dahulu.";
    return;
  }
  result.textContent = `Simulasi berhasil! Topik "${topic}" sudah tercatat di tampilan ini. Data tidak dikirim ke server.`;
  event.target.reset();
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
updateTaskProgress();
