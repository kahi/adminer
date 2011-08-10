This Adminer fork
#################

How to create "minified" version? 1. Run compile.php (creates adminer.php) 2. Place the adminer.php, adminer.css, folder 'adminer-plus' into same directory 3. run adminer.php

This fork is based on Adminer 3.3.1. Hence various differences from the original branche, this look is not available as a "skin" (adminer.css) (yet).

Screenshot: http://kahi.cz/blog/images/adminer-makeup/bomba.png
More info: http://kahi.cz/blog/adminer-s-makeupem


Adminer
########

https://github.com/vrana/adminer/

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
compile.php [driver] [lang] - Create a single file version
lang.php [lang] - Update translations
tests/selenium.html - Selenium test suite
