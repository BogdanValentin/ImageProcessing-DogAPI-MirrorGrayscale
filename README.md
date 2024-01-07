# Tema 3 Tehnologii Web. Aplicatie JavaScript care să realizeze o procesare de imagini.

![Preview](https://github.com/BogdanValentin/ImageProcessing-DogAPI-MirrorGrayscale/blob/main/readme/dogapi.png)

## Descrierea aplicației
Aplicația are ca scop afișarea unei imagini cu un câine preluată folosind Dog API, aplicarea unui efect de oglindire și aplicarea unui filtru grayscale în 4 etape. De asemenea, aplicația măsoară timpul necesar pentru aplicarea fiecărui efect și îl afișează pe pagina.



## HTML
Pagina conține un titlu (`<h1>`), un container principal (`<div id="container">`) care include informații JSON (`<div id="json-info">`) și două imagini (`<img id="original">` și `<img id="greyscale">`). Există și cinci div-uri separate (`<div id="mirror-time">`, `<div id="grayscale1-time">`, etc.) pentru a afișa timpul necesar aplicării fiecărui efect.



## CSS
Se definește stilul pentru elemente, precum fontul, culoarea de fundal, alinierea textului, umbra etc. Se folosesc reguli de media pentru a schimba stilul în funcție de lățimea ecranului.



## JavaScript
Evenimentul `"DOMContentLoaded"` este ascultat pentru a începe execuția scriptului când pagina este complet încărcată. Se face o cerere către Dog API pentru a obține o imagine cu câine. JSON-ul obținut este afișat într-un element HTML. Se creează un canvas, iar imaginea obținută este desenată pe acesta. Este implementată o funcție de oglindire a imaginii (efect de mirroring) și patru funcții pentru aplicarea efectelor de scală de gri pe părți ale imaginii. Timpul necesar pentru fiecare operațiune este măsurat și afișat pe pagina.



## Descrierea modulelor

1. **HTML:** Structura de bază a paginii web.
2. **CSS:** Stilizarea elementelor HTML pentru a crea o interfață atractivă.
3. **JavaScript:** Manipularea DOM-ului si implementarea logicii aplicatiei.



## Bibliografie

1. [W3Schools](https://www.w3schools.com/)
2. [Mozilla Developer Network (MDN)](https://developer.mozilla.org/)
3. [Stack Overflow](https://stackoverflow.com/)
4. [GeeksforGeeks](https://www.geeksforgeeks.org/)
5. [OpenAI ChatGPT](https://chat.openai.com/)
