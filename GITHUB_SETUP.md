# GitHub Setup Guide

## Option 1: Using GitHub Desktop (Easiest - Recommended)

### Step 1: Install GitHub Desktop
1. Download from: https://desktop.github.com/
2. Install and sign in with your GitHub account

### Step 2: Clone Your Repository
1. Open GitHub Desktop
2. Click "File" → "Clone Repository"
3. Select your repository from the list
4. Choose a local folder to clone to
5. Click "Clone"

### Step 3: Copy Your Files
1. Copy all files from `C:\Users\Hp\vinuta-portfolio\public\` 
2. Paste them into your cloned repository folder (root directory)
3. Also copy: `README.md`, `.gitignore`, `CODE_REVIEW.md`, `UNUSED_FILES.md` to the root

### Step 4: Commit and Push
1. In GitHub Desktop, you'll see all your files listed
2. Write a commit message: "Initial commit: Portfolio website"
3. Click "Commit to main"
4. Click "Push origin" to upload to GitHub

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `main` (or `master`)
6. Select folder: `/ (root)`
7. Click "Save"
8. Your site will be live at: `https://[username].github.io/[repository-name]`

---

## Option 2: Using Git Command Line

### Step 1: Install Git
1. Download from: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/PowerShell

### Step 2: Navigate to Your Project
```powershell
cd C:\Users\Hp\vinuta-portfolio
```

### Step 3: Initialize Git (if not already done)
```powershell
git init
```

### Step 4: Move Files to Root (Important for GitHub Pages)
Since GitHub Pages serves from the root directory, you have two options:

**Option A: Move files from public/ to root (Recommended)**
```powershell
# Move all files from public to root
Move-Item -Path public\* -Destination . -Force
```

**Option B: Keep structure and use GitHub Actions (Advanced)**
- This requires creating a workflow file (see below)

### Step 5: Add All Files
```powershell
git add .
```

### Step 6: Create Initial Commit
```powershell
git commit -m "Initial commit: Portfolio website"
```

### Step 7: Connect to GitHub Repository
```powershell
git remote add origin https://github.com/[your-username]/[repository-name].git
```

Replace `[your-username]` and `[repository-name]` with your actual GitHub username and repository name.

### Step 8: Push to GitHub
```powershell
git branch -M main
git push -u origin main
```

### Step 9: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click "Settings" → "Pages"
3. Source: "Deploy from a branch"
4. Branch: `main`, Folder: `/ (root)`
5. Click "Save"

---

## Option 3: Using GitHub Web Interface (No Git Required)

### Step 1: Prepare Files
1. Move all files from `public/` folder to a temporary location
2. Zip the entire `public` folder contents

### Step 2: Upload to GitHub
1. Go to your repository on GitHub.com
2. Click "Add file" → "Upload files"
3. Drag and drop all files from your `public` folder
4. Also upload: `README.md`, `.gitignore`
5. Write commit message: "Initial commit"
6. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to "Settings" → "Pages"
2. Source: "Deploy from a branch"
3. Branch: `main`, Folder: `/ (root)`
4. Click "Save"

---

## ⚠️ Important: File Structure for GitHub Pages

GitHub Pages serves files from the **root directory** of your repository. Since your files are currently in the `public/` folder, you need to:

### Solution 1: Move Files to Root (Easiest)
Move all files from `public/` to the repository root:
- `public/index.html` → `index.html`
- `public/styles.css` → `styles.css`
- `public/script.js` → `script.js`
- etc.

### Solution 2: Use GitHub Actions (Advanced)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

---

## ✅ After Setup - Verify Your Site

1. Wait 1-2 minutes for GitHub Pages to build
2. Visit: `https://[username].github.io/[repository-name]`
3. Test all pages:
   - Home page loads
   - Projects page works
   - About page works
   - Contact form submits
   - Images load correctly

## 🔧 Troubleshooting

### Images Not Loading?
- Check that image paths are relative (not absolute)
- Verify images are in the repository

### 404 Errors?
- Make sure `index.html` is in the root directory
- Check GitHub Pages settings (Source branch and folder)

### CSS/JS Not Loading?
- Check browser console for errors
- Verify file paths in HTML are correct
- Clear browser cache

### Contact Form Not Working?
- Verify Web3Forms API key is correct
- Check browser console for errors
- Test form submission

---

## 📝 Next Steps

After your site is live:
1. Test on mobile devices
2. Share the link with others for feedback
3. Consider adding a custom domain (optional)
4. Monitor GitHub Pages build status in repository Settings

---

**Need Help?** Check GitHub Pages documentation: https://docs.github.com/en/pages

