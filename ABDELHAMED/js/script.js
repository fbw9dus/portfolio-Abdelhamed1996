var vorname = "Hans"
var nachname = "Muller"
var geschlecht = "männlich"
var thema = "Bewerbung"
var nachricht = " "
var formell = false


if(geschlecht== "männlich") {
    if(formell){
    nachricht += "Sehr geehrter Herr " + nachname
    }else{
        nachricht += "Herr " + nachname
    }   
}else{
    if(formell){
        nachricht += "Sehr geehrte Frau " + nachname
        }else{
            nachricht += "Frau " + nachname
        } 
    

}


nachricht += " bei meinem Anliege geht es um " + thema;

console.log(nachricht);