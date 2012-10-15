What is Adminer
------

PhpMyAdmin replacement. MySQL database management app.

Why this Adminer fork
------

This looks great, original Adminer sucks.

[Screenshot](http://cl.ly/image/3R173Z0p0o20)

Usage
------

[Download](https://github.com/kahi/adminer). See `compiled` folder. Use its content (run index.php). You may ignore folders outside of `compiled`.

Details
------

This fork is based on Adminer 3.6.1. Hence various differences from the original branche, this look is not available as a "skin" (adminer.css).

[More info about this Adminer fork [in czech]](http://kahi.cz/blog/adminer-s-makeupem)

**How to create compiled version (in case I forgot)**: 0. clear `/compiled` 1. run `/compile.php` 2. copy `/adminer/adminer-plus`, `/adminer/my_adminer.php` and `/adminer/adminer.css` into `/compiled` 3. copy `/adminer-3.6.1.php` and `/plugins` to `/compiled/adminer-plus/` 4. rename `/compiled/my_adminer.php` to `index.php` and fix paths inside.

[Original Adminer](https://github.com/vrana/adminer/)
------

Adminer - Database management in single PHP file
Adminer Editor - Data manipulation for end-users

http://www.adminer.org/
Supports: MySQL, PostgreSQL, SQLite, MS SQL, Oracle
Requirements: PHP 4.3.3+ or PHP 5+
Apache License 2.0 or GPL 2

adminer/index.php - Run development version of Adminer
editor/index.php - Run development version of Adminer Editor
editor/example.php - Example customization
plugins/readme.txt - Plugins for Adminer and Adminer Editor
adminer/plugin.php - Plugin demo
compile.php - Create a single file version
lang.php - Update translations
tests/selenium.html - Selenium test suite

[See github.com/vrana/adminer/](https://github.com/vrana/adminer/)