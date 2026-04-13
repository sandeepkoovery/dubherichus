<?php
$html = file_get_contents('http://localhost/dubhemerak/public/blog/2025/07/29/benefit-from-the-top-ten-digital-marketing-trends/');
$matches = [];
preg_match('/<section class="page_header_default(.*?)\/section>/s', $html, $matches);
echo "Page Header HTML:\n";
echo $matches[0] ?? 'Not found';
echo "\n====================\n";
preg_match('/<section id="post-(.*?)\/section>/s', $html, $matches);
echo "Post Content HTML:\n";
echo substr($matches[0] ?? 'Not found', 0, 1500);
