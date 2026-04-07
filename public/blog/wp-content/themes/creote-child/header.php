<?php
/**
 * The Header for our theme.
 * Displays all of the <head> section and everything up till <div id="content">
 * @package Creote WordPress Theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <style>
        /* Custom Header Styles to match main site */
        header.custom-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1100;
            background: rgba(10, 22, 40, 0.9);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            height: 72px;
            display: flex;
            align-items: center;
        }

        .header-container {
            max-width: 1280px;
            margin: 0 auto;
            width: 100%;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-link img {
            height: 44px;
            width: auto;
            transition: transform 0.5s;
        }

        .nav-links {
            display: flex;
            gap: 40px;
            align-items: center;
        }

        .nav-item {
            position: relative;
            text-decoration: none;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255, 255, 255, 0.9);
            transition: color 0.3s;
        }

        .nav-item:hover {
            color: #3b82f6;
        }

        .nav-item::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: #3b82f6;
            transition: width 0.3s;
        }

        .nav-item:hover::after {
            width: 100%;
        }

        /* Dropdown */
        .nav-dropdown {
            position: relative;
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: #0f172a;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 12px;
            width: 256px;
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s ease;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .nav-dropdown:hover .dropdown-menu {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) translateY(0px);
        }

        .dropdown-item {
            display: block;
            padding: 12px 20px;
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.6);
            border-radius: 12px;
            transition: all 0.3s;
        }

        .dropdown-item:hover {
            background: rgba(59, 130, 246, 0.1);
            color: #3b82f6;
            padding-left: 24px;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .quote-btn {
            background: #3b82f6;
            color: #ffffff !important;
            padding: 10px 24px;
            border-radius: 12px;
            text-decoration: none;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.3s;
        }

        .quote-btn:hover {
            background: #2563eb;
            transform: translateY(-2px);
        }

        /* Mobile Menu */
        .mobile-menu-btn {
            display: none;
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            padding: 8px;
        }

        .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 22, 40, 0.98);
            z-index: 2000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 32px;
            visibility: hidden;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-overlay.active {
            visibility: visible;
            opacity: 1;
        }

        .mobile-close-btn {
            position: absolute;
            top: 24px;
            right: 24px;
            background: transparent;
            border: none;
            color: white;
            font-size: 32px;
            cursor: pointer;
        }

        .mobile-nav-link {
            font-size: 24px;
            font-weight: 600;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition: color 0.3s;
        }

        .mobile-nav-link:hover {
            color: #3b82f6;
        }

        @media (max-width: 1024px) {
            .nav-links, .header-right .quote-btn {
                display: none;
            }
            .mobile-menu-btn {
                display: block;
            }
        }

        #content {
            padding-top: 72px;
        }
    </style>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="page_wapper hfeed site">
    <header class="custom-header">
        <div class="header-container">
            <a href="http://localhost/dubhemerak/public/" class="logo-link">
                <img src="http://localhost/dubhemerak/public/images/dubhe-logo.png" alt="Dubhe Richus" style="filter: brightness(0) invert(1);">
            </a>

            <div class="nav-links">
                <a href="http://localhost/dubhemerak/public/" class="nav-item">Home</a>
                <a href="http://localhost/dubhemerak/public/about" class="nav-item">About Us</a>
                <a href="http://localhost/dubhemerak/public/projects" class="nav-item">Projects</a>
                <a href="http://localhost/dubhemerak/public/blog" class="nav-item" style="color: #3b82f6;">Blog</a>
                
                <div class="nav-dropdown">
                    <span class="nav-item">Products <svg style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-left:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></span>
                    <div class="dropdown-menu">
                        <a href="http://localhost/dubhemerak/public/products/medium" class="dropdown-item">Medium Range</a>
                        <a href="http://localhost/dubhemerak/public/products/standard" class="dropdown-item">Standard Series</a>
                        <a href="http://localhost/dubhemerak/public/products/commercial" class="dropdown-item">Commercial</a>
                        <a href="http://localhost/dubhemerak/public/products/bayaweaver" class="dropdown-item">Bayaweaver</a>
                    </div>
                </div>

                <a href="http://localhost/dubhemerak/public/contact" class="nav-item">Contact Us</a>
            </div>

            <div class="header-right">
                <a href="http://localhost/dubhemerak/public/contact" class="quote-btn">Get a Quote</a>
                <button class="mobile-menu-btn" onclick="document.querySelector('.mobile-overlay').classList.add('active')">
                    <svg style="width:28px; height:28px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>
        </div>
    </header>

    <div class="mobile-overlay">
        <button class="mobile-close-btn" onclick="document.querySelector('.mobile-overlay').classList.remove('active')">&times;</button>
        <a href="http://localhost/dubhemerak/public/" class="mobile-nav-link">Home</a>
        <a href="http://localhost/dubhemerak/public/about" class="mobile-nav-link">About</a>
        <a href="http://localhost/dubhemerak/public/projects" class="mobile-nav-link">Projects</a>
        <a href="http://localhost/dubhemerak/public/blog" class="mobile-nav-link" style="color: #3b82f6;">Blog</a>
        <a href="http://localhost/dubhemerak/public/contact" class="mobile-nav-link">Contact</a>
        <a href="http://localhost/dubhemerak/public/contact" class="quote-btn" style="display: block; margin-top: 16px;">Get a Quote</a>
    </div>

    <div id="wrapper_full" class="content_all_warpper">
        <div id="content" class="site-content">
            <div class="auto-container auto_container">
                <div class="row default_row">