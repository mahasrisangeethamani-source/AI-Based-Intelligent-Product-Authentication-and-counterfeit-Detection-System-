document.addEventListener('DOMContentLoaded', () => {

  // 1. Top Navigation Bar Switching (User side vs Client side)
  const tabs = document.querySelectorAll('.switch .tab');
  const views = document.querySelectorAll('.view');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));

      tab.classList.add('active');
      const targetView = document.getElementById(tab.dataset.view);
      if (targetView) {
        targetView.classList.add('active');
      }
    });
  });

  // 2. Client Side Login Handling
  const loginBtn = document.getElementById('loginBtn');
  const loginCard = document.getElementById('login');
  const dashCard = document.getElementById('dash');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const user = document.getElementById('lUser').value;
      const pass = document.getElementById('lPass').value;

      if (user === 'admin' && pass === 'brand123') {
        loginCard.hidden = true;
        dashCard.hidden = false;
      } else {
        alert('Invalid credentials! Try: admin / brand123');
      }
    });
  }

  // 3. Client Dashboard Logout Action
  const logoutBtn = document.getElementById('logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      dashCard.hidden = true;
      loginCard.hidden = false;
    });
  }

  // 4. Menubar / Side Menu Bar Navigation (Overview, Products, Scan log, Alerts)
  const sideButtons = document.querySelectorAll('.side .sb');
  const panels = document.querySelectorAll('.panel');

  sideButtons.forEach(btn => {
    if (btn.id === 'logout') return;

    btn.addEventListener('click', () => {
      sideButtons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panelId = `p-${btn.dataset.p}`;
      const targetPanel = document.getElementById(panelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 5. Backend Status Check
  const statusEl = document.getElementById('status');
  if (statusEl) {
    statusEl.textContent = '🟢 System Ready';
  }

});