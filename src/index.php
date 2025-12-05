<?php
session_start();
ob_start();

$mode = isset($_GET['mode']) ? $_GET['mode'] : 'cyberpunk';

$page = isset($_GET['page']) ? $_GET['page'] : ($mode === 'classic' ? 'classic-home' : 'home');

$cyberpunkPages = ['home', 'music', 'login', 'terminal'];
$classicPages = ['classic-home', 'classic-about', 'classic-solutions'];
$allowedPages = array_merge($cyberpunkPages, $classicPages);

if (!in_array($page, $allowedPages)) {
    $page = $mode === 'classic' ? 'classic-home' : 'home';
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FreeTech - Libération Numérique</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="assets/css/layout.css">
    <link rel="stylesheet" href="assets/css/navigation.css">
</head>
<body>
    <?php if ($mode === 'classic'): ?>
    <nav class="classic-nav">
        <div class="nav-container">
            <div class="nav-inner">
                <div class="nav-left">
                    <a href="?page=classic-home&mode=classic" class="logo-link">
                        <div class="logo-icon">
                            <span>N</span>
                        </div>
                        <div class="logo-text">
                            <h1>NIRD</h1>
                            <p>Numérique Libre</p>
                        </div>
                    </a>
                    
                    <div class="nav-links">
                        <a href="?page=classic-home&mode=classic" class="<?php echo $page === 'classic-home' ? 'active' : ''; ?>">Accueil</a>
                        <a href="?page=classic-about&mode=classic" class="<?php echo $page === 'classic-about' ? 'active' : ''; ?>">La démarche</a>
                        <a href="?page=classic-solutions&mode=classic" class="<?php echo $page === 'classic-solutions' ? 'active' : ''; ?>">Solutions</a>
                    </div>
                </div>
                
                <a href="?page=home&mode=cyberpunk" class="mode-switch">
                    <span>Hackez le système !</span>
                </a>
            </div>
        </div>
    </nav>
    <?php else: ?>
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
                <div class="cyberpunk-nav-right">
                    <div class="help-text">
                        Tapez "help" dans le terminal pour naviguer
                    </div>
                    <a href="?page=classic-home&mode=classic" class="cyberpunk-nav-btn">
                        <span>Mode Classique</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    <?php endif; ?>

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

            case 'classic-home':
                include 'pages/classic-home.php';
                break;
            case 'classic-about':
                include 'pages/classic-about.php';
                break;
            case 'classic-solutions':
                include 'pages/classic-solutions.php';
                break;

            default:
                include 'pages/terminal.php';
        }
        ?>
    </main>

    <?php if ($mode === 'classic'): ?>
    <footer class="classic-footer">
        <div class="footer-container">
            <p>© 2025 NIRD - Numérique Inclusif, Responsable et Durable</p>
            <p class="footer-copyright">
                Projet porté par le collectif enseignant de la Forge des communs numériques éducatifs
            </p>
            <p class="footer-license">Sous licence libre • 100% Open Source</p>
        </div>
    </footer>
    <?php else: ?>
    <footer>
        <div class="container">
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
    <?php endif; ?>
</body>
</html>
