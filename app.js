// =============================================
// KLPS — Main Application Logic
// =============================================

// ── PAGE NAVIGATION ──
const pageTitles = {
  'dashboard': 'Dashboard',
  'knowledge-base': 'Knowledge Base',
  'capture': 'Capture Knowledge',
  'experts': 'Expert Profiles',
  'risk': 'Risk Monitor',
  'search': 'Search & Retrieve'
};

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');

  const navItem = document.querySelector(`[data-page="${name}"]`);
  if (navItem) navItem.classList.add('active');

  document.getElementById('pageTitle').textContent = pageTitles[name] || name;

  // Close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');
}

// ── SIDEBAR TOGGLE ──
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// Nav link clicks
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(item.dataset.page);
  });
});

// ── DASHBOARD: RECENT CAPTURES ──
function renderRecentCaptures() {
  const list = document.getElementById('recentCaptures');
  const items = [...KNOWLEDGE_DATA].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  list.innerHTML = items.map(k => `
    <li class="feed-item">
      <div class="feed-dot"></div>
      <div>
        <div class="feed-title">${k.title}</div>
        <div class="feed-meta">${k.domain} · ${k.expert} · ${formatDate(k.date)}</div>
      </div>
    </li>
  `).join('');
}

// ── DASHBOARD: RISK HEATMAP ──
function renderHeatmap() {
  const container = document.getElementById('riskHeatmap');
  const domains = ['Eng', 'Ops', 'HR', 'Fin', 'Prod'];
  const cells = [];
  // Generate 15 risk cells with varying levels
  const levels = [0,2,4,1,0, 3,2,1,4,2, 1,0,3,2,1];
  const labels = ['E1','E2','E3','O1','O2','O3','H1','H2','F1','F2','F3','P1','P2','P3','P4'];
  levels.forEach((lvl, i) => {
    cells.push(`<div class="heat-cell heat-${lvl}" title="${labels[i]}: Risk ${lvl*25}%">${labels[i]}</div>`);
  });
  container.innerHTML = cells.join('');
}

// ── DASHBOARD: BAR CHART ──
function renderBarChart() {
  const container = document.getElementById('barChart');
  const domains = [
    { label: 'Eng', count: 312 },
    { label: 'Ops', count: 248 },
    { label: 'HR', count: 189 },
    { label: 'Fin', count: 274 },
    { label: 'Prod', count: 261 }
  ];
  const max = Math.max(...domains.map(d => d.count));
  container.innerHTML = domains.map(d => {
    const pct = (d.count / max) * 85;
    return `
      <div class="bar-wrap">
        <div class="bar-val">${d.count}</div>
        <div class="bar" style="height:${pct}%"></div>
        <div class="bar-label">${d.label}</div>
      </div>
    `;
  }).join('');
}

// ── KNOWLEDGE BASE ──
function renderKB(data) {
  const grid = document.getElementById('kbGrid');
  if (!data.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);font-style:italic;padding:20px 0;">No articles found.</p>';
    return;
  }
  grid.innerHTML = data.map(k => `
    <div class="kb-card" onclick="viewArticle(${k.id})">
      <div class="kb-card-domain">${k.domain}</div>
      <div class="kb-card-title">${k.title}</div>
      <div class="kb-card-desc">${k.description}</div>
      <div class="kb-card-footer">
        <span class="kb-card-expert">👤 ${k.expert}</span>
        <span class="badge badge-${k.criticality.toLowerCase()}">${k.criticality}</span>
      </div>
    </div>
  `).join('');
}

function filterKB() {
  const q = document.getElementById('kbSearch').value.toLowerCase();
  const domain = document.getElementById('kbFilter').value;
  const filtered = KNOWLEDGE_DATA.filter(k => {
    const matchQ = !q || k.title.toLowerCase().includes(q) || k.description.toLowerCase().includes(q) || k.tags.some(t => t.includes(q));
    const matchD = !domain || k.domain === domain;
    return matchQ && matchD;
  });
  renderKB(filtered);
}

function viewArticle(id) {
  const k = KNOWLEDGE_DATA.find(x => x.id === id);
  if (!k) return;
  alert(`📄 ${k.title}\n\nDomain: ${k.domain}\nExpert: ${k.expert}\nCriticality: ${k.criticality}\n\n${k.description}\n\nTags: ${k.tags.join(', ')}`);
}

// ── EXPERTS ──
function renderExperts() {
  const grid = document.getElementById('expertsGrid');
  grid.innerHTML = EXPERTS_DATA.map(e => `
    <div class="expert-card">
      <div class="expert-avatar">${e.initials}</div>
      <div class="expert-name">${e.name}</div>
      <div class="expert-role">${e.role}</div>
      <div class="expert-domains">
        ${e.domains.map(d => `<span class="domain-tag">${d}</span>`).join('')}
        <span class="badge badge-${e.riskLevel.toLowerCase()}">${e.riskLevel} Risk</span>
      </div>
      <div class="expert-stats">
        <div class="expert-stat">
          <div class="expert-stat-num">${e.articles}</div>
          <div class="expert-stat-lbl">Articles</div>
        </div>
        <div class="expert-stat">
          <div class="expert-stat-num">${e.yearsExp}</div>
          <div class="expert-stat-lbl">Yrs Exp</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── RISK MONITOR ──
function renderRiskList() {
  const list = document.getElementById('riskList');
  list.innerHTML = RISK_DATA.map(r => `
    <div class="risk-item ${r.level}">
      <div>
        <div class="risk-title">${r.title}</div>
        <div class="risk-desc">${r.description}</div>
        <div class="risk-meta">
          <span class="badge badge-${r.level}">${r.level.toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted)">Owner: ${r.owner}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--accent2)">→ ${r.action}</span>
        </div>
      </div>
      <div>
        <div class="risk-score">${r.score}</div>
        <div class="risk-score-label">RISK SCORE</div>
      </div>
    </div>
  `).join('');
}

// ── CAPTURE FORM ──
function saveKnowledge() {
  const title = document.getElementById('capTitle').value.trim();
  const desc = document.getElementById('capDesc').value.trim();
  if (!title || !desc) {
    alert('Please fill in the title and description.');
    return;
  }
  const newArticle = {
    id: KNOWLEDGE_DATA.length + 1,
    title,
    domain: document.getElementById('capDomain').value,
    criticality: document.getElementById('capCriticality').value,
    expert: document.getElementById('capExpert').value || 'Unknown',
    description: desc,
    tags: document.getElementById('capTags').value.split(',').map(t => t.trim()).filter(Boolean),
    date: new Date().toISOString().split('T')[0]
  };
  KNOWLEDGE_DATA.unshift(newArticle);

  document.getElementById('capSuccess').style.display = 'block';
  setTimeout(() => document.getElementById('capSuccess').style.display = 'none', 3000);
  clearForm();

  // Re-render KB
  renderKB(KNOWLEDGE_DATA);
}

function clearForm() {
  ['capTitle','capExpert','capTags','capDesc'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

// ── GLOBAL SEARCH ──
function globalSearchFn() {
  const q = document.getElementById('globalSearch').value.toLowerCase().trim();
  if (!q) {
    document.getElementById('searchResults').innerHTML = '';
    return;
  }
  const results = KNOWLEDGE_DATA.filter(k =>
    k.title.toLowerCase().includes(q) ||
    k.description.toLowerCase().includes(q) ||
    k.tags.some(t => t.includes(q)) ||
    k.domain.toLowerCase().includes(q) ||
    k.expert.toLowerCase().includes(q)
  );

  const grid = document.getElementById('searchResults');
  if (!results.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);font-style:italic;padding:20px 0;">No results found.</p>';
    return;
  }
  grid.innerHTML = results.map(k => `
    <div class="kb-card" onclick="viewArticle(${k.id})">
      <div class="kb-card-domain">${k.domain}</div>
      <div class="kb-card-title">${k.title}</div>
      <div class="kb-card-desc">${k.description}</div>
      <div class="kb-card-footer">
        <span class="kb-card-expert">👤 ${k.expert}</span>
        <span class="badge badge-${k.criticality.toLowerCase()}">${k.criticality}</span>
      </div>
    </div>
  `).join('');
}

// ── HELPERS ──
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── INIT ──
function init() {
  renderRecentCaptures();
  renderHeatmap();
  renderBarChart();
  renderKB(KNOWLEDGE_DATA);
  renderExperts();
  renderRiskList();
}

document.addEventListener('DOMContentLoaded', init);
