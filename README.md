# KLPS — Knowledge Loss Prevention System

A full-featured web application for capturing, organizing, and retrieving institutional knowledge before it's lost.

---

## 🌟 Features

| Module | Description |
|---|---|
| **Dashboard** | Live overview of knowledge stats, risk heatmap, and recent captures |
| **Knowledge Base** | Browse, filter, and search all captured knowledge articles |
| **Capture Knowledge** | Structured form to document expertise, processes, and tacit knowledge |
| **Expert Profiles** | View contributors, their domains, experience, and risk scores |
| **Risk Monitor** | Identify knowledge gaps and single points of failure with risk scores |
| **Search & Retrieve** | Full-text search across all knowledge articles |

---

## 🚀 Getting Started

### Option A — Open directly (no server needed)
1. Unzip the project folder
2. Open `index.html` in any modern browser

### Option B — Local server (recommended)
```bash
# Python 3
cd klps
python3 -m http.server 8080

# Node.js (if you have npx)
npx serve .
```
Then visit `http://localhost:8080`

---

## 📁 Project Structure

```
klps/
├── index.html              # Main HTML shell
├── styles/
│   └── main.css            # All styling (CSS variables, dark theme)
├── src/
│   ├── app.js              # Application logic & rendering
│   └── data/
│       └── knowledge.js    # Sample knowledge data (KNOWLEDGE_DATA, EXPERTS_DATA, RISK_DATA)
└── README.md
```

---

## 📊 Data Model

### Knowledge Article
```js
{
  id: Number,
  title: String,
  domain: "Engineering" | "Operations" | "HR & Culture" | "Finance" | "Product",
  criticality: "Low" | "Medium" | "High" | "Critical",
  expert: String,       // Name of the knowledge holder
  description: String,  // Full knowledge description
  tags: [String],       // Searchable tags
  date: "YYYY-MM-DD"
}
```

### Expert Profile
```js
{
  name: String,
  role: String,
  initials: String,     // 2-letter avatar
  domains: [String],
  articles: Number,     // Number of articles contributed
  riskLevel: String,    // "Low" | "Medium" | "High" | "Critical"
  yearsExp: Number
}
```

### Risk Item
```js
{
  title: String,
  description: String,
  domain: String,
  owner: String,
  score: Number,        // 0–100 risk score
  level: "high" | "critical",
  action: String        // Recommended mitigation
}
```

---

## 🔧 Extending the System

### Adding Real Data
Replace the arrays in `src/data/knowledge.js` with API calls or JSON fetches.

### Backend Integration
Swap the in-memory arrays in `app.js` with `fetch()` calls to a REST API.

### Authentication
Add a login layer using your preferred identity provider (Auth0, Firebase, Supabase, etc.)

---

## 🎨 Design System

- **Font Display**: Syne (headings, labels)
- **Font Mono**: IBM Plex Mono (data, codes, metadata)
- **Font Body**: Crimson Pro (descriptions, body text)
- **Theme**: Dark industrial — `#0a0a0f` background, `#e8c84a` accent

CSS custom properties are defined in `:root` in `styles/main.css` for easy theming.

---

## 📄 License

MIT — Free to use and modify. ( note : this is just the frontend of the prooject i am yet to link database the prior knowledge was fed at creation of src so it is not live yet )
