---
title: "BGSound - Música de fondo en tu página web"
description: "Descubre cómo utilizar el atributo BGSound para añadir música de fondo en tu página web y revive la nostalgia de la era dorada de Internet con melodías inolvidables."
date: 2007-03-18
updatedDate: 2026-01-21
tags: ["bgsound"]
slug: html/audio/bgsound-musica-de-fondo-en-tu-pagina-web
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/video-y-sonido/bgsound-musica-de-fondo.html
topic: html

---

Cuando las páginas web empezaban su alza en Internet la música de fondo era partícipe de todas ellas. Era muy curioso. Tu estabas con tu ordenador navegando de un sitio a otro... y si habías sido descuidado dejando tus altavoces encendidos... de repente.... chan ta ta ta chan.... la música de la guerra de las galaxias de fondo.


Tal fue mi pasión en la época por coleccionar midis que tenía la página Midistore ([podéis ver lo que era en ](http://web.archive.org/web/*/http://ohno.hypermart.net)[archive.org](http://archive.org/)), la cual aglutinaba midis de cientos de grupos.


Ahora el midi ha sido totalmente relegado a un segundo plano. Ponga tono, politono, sonitono o videotono en su móvil. ¿Quien pone ya un tono? Con lo bonito que es escuchar a la Shakira de fondo. Ahora ya no se estila.


Pasamos de la época rococo, con páginas llenas de coloridos, imágenes, flash, música de fondo... a páginas sencillas que se preocupan más de ser usables y accesibles que del colorido que puedan dar. Aunque para gustos, colores. Y todavía encontramos por ahí alguna que otra página con miles de efectos especiales.


## El código


Pues bueno, nuestro ejemplo viene a enseñarnos cómo poner como música de fondo de nuestra página web un midi, y claro, no podíamos elegir otro que no fuera el de la "Guerra de las Galaxias"..... ya veréis que mono queda. (Por cierto, el midi lo podéis bajar de [http://moviethemes.net/starwars.html](http://moviethemes.net/starwars.html))


Poner el midi de fondo de página es muy sencillo, veamos como,...


El [Internet Explorer](http://www.microsoft.com/ie) fue el pionero en esto añadiendo su etiqueta `BGSOUND` a la etiqueta ([Puedes ver información de esta etiqueta en el MSDN](http://msdn.microsoft.com/workshop/author/dhtml/reference/objects/BGSOUND.asp))


```html
<bgsound src="starwars.mid" loop="infinite">
```


## Atributos de BGSOUND


Lo más importante de esta etiqueta es que para indicar el fichero midi hay que utilizar el atributo `src`. Otros atributos de interés son:

- **loop**, que permite que la canción vuelva a empezar cada vez que acaba. Bien podemos indicarle un número concreto de repeticiones (dándole el valor de un número) o que sea infinito (dándole el valor "infinite")
- **delay**, valor para retrasar el inicio de la música. Número positivo en segundos.
- **volumen**, determina la intensidad del sonido de fondo. Los valores van entre -10,000 (el más débil) a 0 (el más alto). No está soportado por los Mac.
- **balance**, controla el balance del sonido entre los altavoces izquierdo y derecho.

```html
<bgsound src="starwars.mid" loop="infinite" delay="2" volume="-5000">
```


## Compatibilidad


El problema es que el `BGSOUND` no deja de ser una extensión del [Internet Explorer](http://www.microsoft.com/ie). Ahora, que si tu público objetivo utiliza ese navegador y no eres más papista que el papa.... pues adelante. 


Ahora que sorpresa, sorpresa,.... [Opera](http://www.opera.com/) también da soporte a esta etiqueta.

