<?php
session_start();

// Gestion de la navigation
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Validation des pages autorisées
$allowedPages = ['home', 'music', 'login', 'contact', 'terminal'];
if (!in_array($page, $allowedPages)) {
    $page = 'home';
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FreeTech - Libération Numérique</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Styles de base Tailwind-like */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Courier New', monospace;
            background-color: #0a0e27;
            color: #00d9ff;
            min-height: 100vh;
        }
        
        /* Animations et effets glow */
        .text-glow-green {
            text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41;
        }
        
        .text-glow-cyan {
            text-shadow: 0 0 10px #00d9ff, 0 0 20px #00d9ff;
        }
        
        .text-glow-magenta {
            text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
        }
        
        .box-glow-green {
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
        }
        
        .box-glow-cyan {
            box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
        }
        
        .box-glow-magenta {
            box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
        }
        
        /* Header */
        nav {
            border-bottom: 2px solid #00ff41;
            background-color: #0f1419;
            position: sticky;
            top: 0;
            z-index: 50;
        }
        
        nav .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        nav .nav-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 4rem;
        }
        
        nav .logo-section {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        nav .logo-box {
            width: 2.5rem;
            height: 2.5rem;
            border: 2px solid #00ff41;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        nav .title {
            color: #00ff41;
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        nav .title span {
            color: #00d9ff;
        }
        
        nav .subtitle {
            color: #00ff41;
            font-size: 0.75rem;
        }
        
        nav .help-text {
            color: #00d9ff;
            font-size: 0.875rem;
        }
        
        /* Footer */
        footer {
            border-top: 2px solid #00ff41;
            background-color: #0f1419;
            padding: 1.5rem 0;
            margin-top: 3rem;
        }
        
        footer .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        footer .footer-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            margin-bottom: 1.5rem;
        }
        
        @media (min-width: 768px) {
            footer .footer-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            nav .help-text {
                display: block;
            }
        }
        
        @media (max-width: 767px) {
            nav .help-text {
                display: none;
            }
        }
        
        footer h3 {
            color: #00ff41;
            margin-bottom: 0.75rem;
        }
        
        footer p, footer li {
            color: #00d9ff;
            font-size: 0.875rem;
        }
        
        footer ul {
            list-style: none;
        }
        
        footer li {
            margin-bottom: 0.5rem;
            cursor: pointer;
            transition: color 0.3s;
        }
        
        footer li:hover {
            color: #00ff41;
        }
        
        footer .ascii-divider {
            border-top: 1px solid rgba(0, 255, 65, 0.3);
            padding-top: 1.5rem;
            text-align: center;
        }
        
        footer .ascii-line {
            color: #00ff41;
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
        }
        
        footer .quote {
            color: #00d9ff;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
        }
        
        footer .copyright {
            color: #00ff41;
            font-size: 0.75rem;
        }
        
        main {
            min-height: calc(100vh - 8rem);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <nav class="box-glow-green">
        <div class="container">
            <div class="nav-content">
                <div class="logo-section">
                    <div class="logo-box">
                        <span style="color: #00ff41; font-size: 1.5rem;">⚡</span>
                    </div>
                    <div>
                        <h1 class="title text-glow-green">FREE<span>TECH</span></h1>
                        <p class="subtitle">Open Source Revolution</p>
                    </div>
                </div>
                <div class="help-text">
                    Tapez "help" dans le terminal pour naviguer
                </div>
            </div>
        </div>
    </nav>

    <!-- Page Content -->
    <main>
        <?php
        switch ($page) {
            case 'home':
                include 'pages/terminal.php';
                break;
            case 'music':
                include 'pages/music.php';
                break;
            case 'login':
                include 'pages/login.php';
                break;
            case 'contact':
                include 'pages/contact.php';
                break;
            default:
                include 'pages/terminal.php';
        }
        ?>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <!-- About -->
                <div>
                    <h3>À PROPOS</h3>
                    <p>
                        FreeTech est un collectif dédié à la promotion des technologies 
                        open source et de la liberté numérique.
                    </p>
                </div>

                <!-- Links -->
                <div>
                    <h3>RESSOURCES</h3>
                    <ul>
                        <li>→ Documentation</li>
                        <li>→ Guides de migration</li>
                        <li>→ Communauté</li>
                        <li>→ Blog</li>
                    </ul>
                </div>

                <!-- Social -->
                <div>
                    <h3>REJOIGNEZ-NOUS</h3>
                    <div style="font-size: 0.875rem; color: #00d9ff;">
                        <p>🐙 GitHub: /freetech</p>
                        <p>🐦 Mastodon: @freetech</p>
                        <p>💬 Matrix: #freetech:matrix.org</p>
                        <p>📧 contact@freetech.org</p>
                    </div>
                </div>
            </div>

            <!-- ASCII Art -->
            <div class="ascii-divider">
                <div class="ascii-line">
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                </div>
                <p class="quote">
                    "Le logiciel libre est une question de liberté, pas de prix"
                </p>
                <p class="copyright">
                    © 2024 FreeTech • Sous licence GPL-3.0 • 100% Open Source
                </p>
            </div>
        </div>
    </footer>
</body>
</html>
