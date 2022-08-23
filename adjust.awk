
# Utiliser ce script sur un contenu qui provient de Google Docs
#    $ awk -f adjust.awk cven.html (ou cvfr.html)
#    $ awk -f adjust.awk cven.html > cven.html
#    .\mawk.exe -f .\adjust.awk cven.html > cven2.html  (Sur Windows)
# How to have multiline strings: https://stackoverflow.com/questions/68122401/awk-declare-multiline-string-variable
BEGIN {
    
}
# On injecte le CSS voulu
#/<\/style>/ {print "body {margin: 60px auto;} </style>"}
{ gsub(/<\/style>/, "body {margin: 60px auto;} </style>"); print}

#{print} #sinon on print