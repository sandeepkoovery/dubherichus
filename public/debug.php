<?php
header('Content-Type: text/plain');
echo "DOCUMENT_ROOT: " . $_SERVER['DOCUMENT_ROOT'] . "\n";
echo "BASE_PATH: " . realpath(__DIR__ . '/..') . "\n";

$paths = [
    __DIR__ . '/build/manifest.json',
    __DIR__ . '/public/build/manifest.json',
    realpath(__DIR__ . '/..') . '/public/build/manifest.json',
    realpath(__DIR__ . '/..') . '/build/manifest.json',
];

foreach ($paths as $path) {
    echo "Checking: $path - " . (file_exists($path) ? "FOUND" : "NOT FOUND") . "\n";
}
?>
