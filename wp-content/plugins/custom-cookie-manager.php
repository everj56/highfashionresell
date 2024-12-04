<?php
/*
Plugin Name: Custom Cookie Manager with Consent
Description: A plugin to manage cookies and ask for user consent.
Version: 1.2
*/

// Setting a Cookie
function set_my_cookie() {
    if (!isset($_COOKIE['my_cookie']) && isset($_COOKIE['cookie_consent']) && $_COOKIE['cookie_consent'] === 'yes') {
        setcookie(
            'my_cookie', 
            'cookie_value', 
            [
                'expires' => time() + 86400, // 1 day
                'path' => COOKIEPATH,
                'domain' => 'highfashionresell.infinityfreeapp.com', // Explicit domain
                'secure' => true,           // Only send over HTTPS
                'httponly' => true,         // Prevent JavaScript access
                'samesite' => 'Strict'      // CSRF protection
            ]
        );
    }
}
add_action('init', 'set_my_cookie');

// Retrieving a Cookie
function get_my_cookie() {
    if (isset($_COOKIE['my_cookie'])) {
        echo 'Cookie Value: ' . esc_html($_COOKIE['my_cookie']);
    } else {
        echo 'Cookie not set.';
    }
}

// Deleting a Cookie
function delete_my_cookie() {
    if (isset($_COOKIE['my_cookie'])) {
        setcookie(
            'my_cookie', 
            '', 
            [
                'expires' => time() - 3600, // Past date to delete
                'path' => COOKIEPATH,
                'domain' => 'highfashionresell.infinityfreeapp.com', // Explicit domain
                'secure' => true,
                'httponly' => true,
                'samesite' => 'Strict'
            ]
        );
    }
}

// Enqueue scripts for the popup
function enqueue_cookie_popup_script() {
    // Only load if cookie_consent isn't set
    if (!isset($_COOKIE['cookie_consent'])) {
        ?>
        <style>
            #cookie-popup {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 15px;
                text-align: center;
                z-index: 9999;
            }
            #cookie-popup button {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
            }
            #cookie-popup button:hover {
                background-color: #45a049;
            }
        </style>
        <div id="cookie-popup">
            <p>This website uses cookies to ensure you get the best experience. <a href="#">Learn more</a></p>
            <button id="accept-cookies">Accept Cookies</button>
        </div>
        <script>
            document.getElementById('accept-cookies').onclick = function() {
                // Set cookie to remember the user's consent
                document.cookie = "cookie_consent=yes; path=/; max-age=" + (60 * 60 * 24 * 365) + "; domain=highfashionresell.infinityfreeapp.com; secure; samesite=strict";
                document.getElementById('cookie-popup').style.display = 'none'; // Hide the popup
            };
        </script>
        <?php
    }
}
add_action('wp_footer', 'enqueue_cookie_popup_script');
