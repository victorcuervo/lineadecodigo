---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25UBHCF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFofnXPKP3t2dDSagUveHjBaTz3kTLrCIOQAI3JzNsN5AiBPZM8cP0O51DxFwBno1Fr7aVVHjUR30x3N1T8vbIaPUCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMm%2FIV0qo54rGu8hvIKtwDKCXYuTL0iqMgoWljdvreIu7zakiXVHszMZ7wti06GNpTZskk949HqbPrMH66TKFN33vbGeN%2Bkb%2B3JSaYoGcmFi8Revc7e4LDirzHKjs3xZTqtvk0j16kdOLAjs9ic4j3spMzD737DrKS04m76ps695xLENkXelwU2Qlp835sh1u84%2FZHJkN9PulbtHl%2BaSKKTzhBfZtHt947i8vgGX13%2Bn2r8%2Bm%2FkgEOClLwz%2FfvJn1whAEjjG9YckgOb77vD1dmiFL1Oxc%2B6vqW7UVBDH%2BAFFAqKvRETKWVW9BZuwbp5TVgefvShU4mShXTWzg791U9jDTwlqHEBCy9aTsH56hoczW5PkUrigPe8cX2Roy%2FWSOQnAznXTnrmh8ihgY%2F5VzTGQ0pTD1fzVToVHHDdJ3T%2FbzLQyaOPvnvsVbGdqgBrLLfHY958XBfs4Pe7MTiAXY6TyHLYcSR2TqZZ3PT9KxL7n%2BkEvEpEGsY1Yi%2Fb8NWV3t%2Ff7xfmnrvHE3%2FNBLPN%2BI4JZcHbsQzZyLDp4oGUGOFfl8FTgQMWuvm%2FWo62IhvITEz8Yo%2FJ%2Fl2mO0lAy%2Bawq8Gl1VOdKPrULjot6NYz0q%2Br3Gyh8icYto4Slczj3IiH%2Fu3i5aHfGvYO3QTRyIw2oOJygY6pgHfpmh%2FtrtB6FYOmNu6ZT7dGSMCDm4KeLmc9LQNkVS%2FUVWyOmJea%2FawXBmdeO6x%2Bs4cPsPuVA63DFs4skyGeklWlRW2ejHT6fSPnB98ydy37g%2Fh3EN%2BXsDUSYThua7OmS7%2BM0vw4fQw%2BCYlCEAxR7WM%2FWYW0CydYsBT2ipo5AaUPrk2rEeoxWOblrHrJvogwHJZGCoyHLQpg9kfIf2hDlUDeUpokD7q&X-Amz-Signature=9f2eda59ae2a33d349a7d6623f88a86b73535e888a89683417953c7d1f3138b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25UBHCF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFofnXPKP3t2dDSagUveHjBaTz3kTLrCIOQAI3JzNsN5AiBPZM8cP0O51DxFwBno1Fr7aVVHjUR30x3N1T8vbIaPUCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMm%2FIV0qo54rGu8hvIKtwDKCXYuTL0iqMgoWljdvreIu7zakiXVHszMZ7wti06GNpTZskk949HqbPrMH66TKFN33vbGeN%2Bkb%2B3JSaYoGcmFi8Revc7e4LDirzHKjs3xZTqtvk0j16kdOLAjs9ic4j3spMzD737DrKS04m76ps695xLENkXelwU2Qlp835sh1u84%2FZHJkN9PulbtHl%2BaSKKTzhBfZtHt947i8vgGX13%2Bn2r8%2Bm%2FkgEOClLwz%2FfvJn1whAEjjG9YckgOb77vD1dmiFL1Oxc%2B6vqW7UVBDH%2BAFFAqKvRETKWVW9BZuwbp5TVgefvShU4mShXTWzg791U9jDTwlqHEBCy9aTsH56hoczW5PkUrigPe8cX2Roy%2FWSOQnAznXTnrmh8ihgY%2F5VzTGQ0pTD1fzVToVHHDdJ3T%2FbzLQyaOPvnvsVbGdqgBrLLfHY958XBfs4Pe7MTiAXY6TyHLYcSR2TqZZ3PT9KxL7n%2BkEvEpEGsY1Yi%2Fb8NWV3t%2Ff7xfmnrvHE3%2FNBLPN%2BI4JZcHbsQzZyLDp4oGUGOFfl8FTgQMWuvm%2FWo62IhvITEz8Yo%2FJ%2Fl2mO0lAy%2Bawq8Gl1VOdKPrULjot6NYz0q%2Br3Gyh8icYto4Slczj3IiH%2Fu3i5aHfGvYO3QTRyIw2oOJygY6pgHfpmh%2FtrtB6FYOmNu6ZT7dGSMCDm4KeLmc9LQNkVS%2FUVWyOmJea%2FawXBmdeO6x%2Bs4cPsPuVA63DFs4skyGeklWlRW2ejHT6fSPnB98ydy37g%2Fh3EN%2BXsDUSYThua7OmS7%2BM0vw4fQw%2BCYlCEAxR7WM%2FWYW0CydYsBT2ipo5AaUPrk2rEeoxWOblrHrJvogwHJZGCoyHLQpg9kfIf2hDlUDeUpokD7q&X-Amz-Signature=f98948bdda5d820b103d52f5ad5aff580f57aef3937af4375cbb2453a423c019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
