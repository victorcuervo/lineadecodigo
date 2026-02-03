---
title: "Mi primer gráfico SVG"
description: "El artículo describe cómo crear un gráfico SVG básico, incluyendo un círculo rojo en su estructura XML."
date: 2007-11-29
updatedDate: 2026-01-07
tags: ["circle","fill","grafico"]
slug: svg/basicos/mi-primer-grafico-svg
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81a3-bb57-ecbd86cca16e
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/basico/mi-primer-grafico-svg.svg
---

Difícil es abrir en Internet una página en la que no encontremos un gráfico. Ya sean GIF, JPG o PNG. Atrás quedaron los años donde veíamos las páginas repletas de texto plano y con unos fondos grises que tiraban para atrás.


Y en todo este trayecto hemos pasado épocas donde la sobrecarga de imágenes inundaba nuestra pantalla, la moda de los gráficos 3D para los títulos y los gráficos Flash.


Ahora, la vuelta de tuerca, es diferente. Ya no se busca el hacer nuestra página más elegante, sino más útil (en cuanto a la información se refiere). Buscamos gráficos que nos representen información. Y es que muchas veces "más vale una imagen que mil palabras".


[SVG](http://lineadecodigo.com/tag/markup/svg/) o [Scalable Vector Graphics](http://lineadecodigo.com/tag/markup/svg/). Nuestros gráficos vectoriales. Permiten definir gráficos basados en texto (aunque esta no es su única cualidad) y no solo eso, sino que ese texto (o información) lo podemos hacer participe del contenido de la página. Esto lo consigue mediante estructuras [XML](http://lineadecodigo.com/tag/xml/).


Y después de todo este rollo... a lo que vamos. ¿Qué hago para montarme mi primer gráfico [SVG](http://lineadecodigo.com/tag/markup/svg/)?


El primer paso es definir un documento [XML](http://lineadecodigo.com/tag/xml/), pero con extensión [SVG](http://lineadecodigo.com/tag/markup/svg/). Su esqueleto general es el siguiente:


```xml
<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" />
```


Dentro de la estructura podremos ir insertando gráficos individuales. Por ejemplo un circulo, y encima en rojo (máxima dificultad)...


```xml
<circle cx="600" cy="200" r="100" fill="red" />
```


De este nos valdrá con saber que cx es la coordenada en el eje X, cy la coordenada en el eje Y y r el radio. Ahhh, se me olvidaba, fill, el color de relleno.


Al final, nuestro gráfico [SVG](http://lineadecodigo.com/tag/markup/svg/) quedará algo así:


```xml
<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="600" cy="200" r="100" fill="red" />
</svg>
```


Hoy en día el soporte de visualización de los gráficos [SVG](http://lineadecodigo.com/tag/markup/svg/) lo dan Opera 9 y FireFox 1.5. En el resto de navegadores necesitaremos un plug-in.


Cómo plugin para ver los gráficos [SVG](http://lineadecodigo.com/tag/markup/svg/) tenemos el gratuito de [Adobe SVG Viewer](http://www.adobe.com/svg/). Disponible en [http://www.adobe.com/svg/](http://www.adobe.com/svg/).


Otra opción es utilizar el navegador [Squiggle](http://xmlgraphics.apache.org/batik/tools/browser.html), del proyecto [Apache XML Graphics Project](http://xmlgraphics.apache.org/).

