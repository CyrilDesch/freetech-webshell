<?php
// Contact Form Handler Logic

$status = '';
$formData = [
    'name' => '',
    'email' => '',
    'subject' => '',
    'message' => ''
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formData = [
        'name' => htmlspecialchars($_POST['name'] ?? ''),
        'email' => htmlspecialchars($_POST['email'] ?? ''),
        'subject' => htmlspecialchars($_POST['subject'] ?? ''),
        'message' => htmlspecialchars($_POST['message'] ?? '')
    ];
    
    // Simulation d'envoi (à remplacer par un vrai système d'envoi)
    if (!empty($formData['name']) && !empty($formData['email']) && !empty($formData['message'])) {
        $status = 'success';
        // Ici vous pourriez ajouter l'envoi d'email avec mail() ou PHPMailer
        // mail($formData['email'], 'FreeTech: ' . $formData['subject'], $formData['message']);
    } else {
        $status = 'error';
    }
}
