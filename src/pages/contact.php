<?php require_once __DIR__ . '/../includes/contact-handler.php'; ?>

<link rel="stylesheet" href="assets/css/contact.css">

<div class="contact-container">
    <div class="contact-wrapper">
        <!-- Header -->
        <div class="contact-header">
            <div class="contact-logo">
                <span class="contact-icon">📧</span>
            </div>
            <h1 class="contact-title">CANAL DE COMMUNICATION</h1>
            <p class="contact-subtitle">
                Transmission sécurisée • Chiffrement de bout en bout
            </p>
        </div>

        <!-- ASCII Art Divider -->
        <div class="ascii-divider">
            ════════════════════════════════════════════════════════
        </div>

        <!-- Introduction -->
        <div class="intro-box">
            <h2 class="intro-title">REJOIGNEZ LA RESISTANCE</h2>
            <p class="intro-text">
                Vous avez des questions sur la transition vers l'open source ? Vous souhaitez contribuer 
                à notre mission de libération numérique ? Vous avez découvert une faille dans un système 
                propriétaire ?
            </p>
            <p class="intro-security">
                Contactez-nous par ce canal sécurisé. Toutes les communications sont anonymisées et 
                chiffrées selon les standards OpenPGP.
            </p>
        </div>

        <!-- Contact Form -->
        <div class="form-box">
            <?php if ($status === 'success'): ?>
                <div class="status-message status-success">
                    <div class="status-success-title">
                        ✓ MESSAGE TRANSMIS AVEC SUCCÈS
                    </div>
                    <div class="status-success-text">
                        Nous vous répondrons dans les plus brefs délais
                    </div>
                </div>
            <?php elseif ($status === 'error'): ?>
                <div class="status-message status-error">
                    <div>✗ ERREUR DE TRANSMISSION</div>
                    <div style="font-size: 0.75rem;">
                        Veuillez remplir tous les champs requis
                    </div>
                </div>
            <?php endif; ?>

            <form method="POST" action="?page=contact">
                <!-- Name Field -->
                <div class="form-group">
                    <label class="form-label">
                        <span>👤</span>
                        [IDENTIFICATION]
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        class="form-input" 
                        placeholder="Votre nom ou pseudonyme"
                        value="<?= $formData['name'] ?>"
                        required
                    >
                </div>

                <!-- Email Field -->
                <div class="form-group">
                    <label class="form-label">
                        <span>📧</span>
                        [EMAIL_SECURISE]
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        class="form-input" 
                        placeholder="votre@email.com"
                        value="<?= $formData['email'] ?>"
                        required
                    >
                    <p class="form-hint">
                        💡 Recommandé: ProtonMail, Tutanota ou autre service chiffré
                    </p>
                </div>

                <!-- Subject Field -->
                <div class="form-group">
                    <label class="form-label">
                        <span>⚠️</span>
                        [SUJET]
                    </label>
                    <input 
                        type="text" 
                        name="subject" 
                        class="form-input" 
                        placeholder="Sujet de votre message"
                        value="<?= $formData['subject'] ?>"
                        required
                    >
                </div>

                <!-- Message Field -->
                <div class="form-group">
                    <label class="form-label">
                        <span>💬</span>
                        [MESSAGE_CHIFFRE]
                    </label>
                    <textarea 
                        name="message" 
                        class="form-textarea" 
                        rows="8"
                        placeholder="Votre message... Partagez vos pensées sur la liberté numérique, posez vos questions, ou signalez des violations de vie privée."
                        required
                        oninput="updateCharCount(this)"
                    ><?= $formData['message'] ?></textarea>
                    <div class="char-count" id="char-count">0 caractères</div>
                </div>

                <!-- Security Notice -->
                <div class="security-notice">
                    <p class="security-title">🔒 INFORMATIONS DE SÉCURITÉ</p>
                    <ul class="security-list">
                        <li>✓ Vos données sont transmises via HTTPS/TLS</li>
                        <li>✓ Aucun tracking, aucun cookie, aucune analyse</li>
                        <li>✓ Votre adresse IP n'est pas stockée</li>
                        <li>✓ Messages chiffrés avec OpenPGP côté serveur</li>
                    </ul>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="submit-btn">
                    <span>📤</span>
                    ▶ TRANSMETTRE LE MESSAGE
                </button>
            </form>
        </div>

        <!-- Alternative Contact Methods -->
        <div class="contact-methods">
            <div class="contact-method cyan">
                <div class="method-icon cyan">📧 EMAIL</div>
                <p class="method-text cyan">contact@freetech.org</p>
            </div>
            <div class="contact-method magenta">
                <div class="method-icon magenta">🔐 PGP KEY</div>
                <p class="method-text magenta">0xABCD1234EFGH5678</p>
            </div>
            <div class="contact-method green">
                <div class="method-icon green">💬 MATRIX</div>
                <p class="method-text green">@freetech:matrix.org</p>
            </div>
        </div>

        <!-- ASCII Art Footer -->
        <div class="ascii-footer">
╔═══════════════════════════════════════════════════╗
║  "La vie privée n'est pas un secret à cacher,    ║
║   c'est un droit à protéger."                    ║
╚═══════════════════════════════════════════════════╝
        </div>

        <!-- Back Button -->
        <div class="back-section">
            <a href="?page=home" class="btn-back">
                <span>⚡</span>
                RETOUR AU TERMINAL
            </a>
        </div>
    </div>
</div>

<script src="assets/js/contact.js"></script>
