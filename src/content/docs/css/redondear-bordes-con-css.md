---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQI3DGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4mohP%2BgzJCsmy4k51QUOIviwpDxZyBhqYlfexTfYZfwIgB6hTLNK7fF6748yFlkVWzHAO1eFB6axlM2ggT1sKn28qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKb5GNwkv7j%2BNqGTSrcA5bDE6WQypa0BY%2BOMRsxbJ6lfp2xZUb3a2QOAugpp6Oo9NRyPQD8FuOnSD3bya2ECofBHGpmXmmnHYdoMmkNSCvIHNfP4%2FbgVECk5r%2B1D3%2FluxmhVFedgkH8Rs2%2FS%2FF6hdPtG8DrH3z7oXmsiXqoGN3vsdPaprgw8oQ200N%2BDBxXz%2FGpDOw5vqbHqePArHCGHJ49sb544C%2BsdojI6PMYfeypgKh1rWGoVJvACnesor2eO7%2Bka4xFhEn0oTIIu2XKbKsOhSChbpZm9%2B0zQFRjQ7Xfn9lSMpoBSYf%2BFMjA8ie3rZpN94PCCCNpgGLwmnIUJzLV4NEMHoO28c8a8GH2IUnaTUfrmOYend7JZietnh0Bt84HVQAy%2BhENsCt%2BXBUbRGiOkw5QfsSiWHbR6GuNVk7CSgmJe4%2Bx3kxu9ohcJt71WPecNsTFDRcY9B1QiX%2BAcql%2BRUgne4Mfwmdaf6OmGQE05ClTP1d21CyMMAAOlLhESn60ekwOmrlrYJiNRwauz7WlH2zbDxxzx5kF4HuxEaDWdzDTYGgWNjHM0A0euYfK9Uymy2ei6kxq8Nbu%2FWbBDnaEKg8a7W8d7HKJwo3Gft8Taj0qwRwZafbCsxyfPxHuxtCgBTIMuADAA7quMLu51skGOqUBfJz6ZRJfPlKqd0j1wT8Sul%2B29V1DBclgGAQhggrQBSMEr0ldnvh4PgXomx71rf9eMTa5PCpB1LMbzkmXjAyMKm2RFvWzqtE6V3lTiMcUOVRULFCs7NnCNY95zm5EyGHeW5uey%2FbkH9PhwBW4Ah465gpiLT4bz1H4WZVroXNikS7g8ONCDH6GpE5%2Bgmv3%2B%2FjEj6Oli10KE6lDrbZy3XHLaWIdNF2Y&X-Amz-Signature=7434a28e3746891e0c8842f70bc1dd68df6408cc0a4a4e8da82f1fb7d47bc4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQI3DGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4mohP%2BgzJCsmy4k51QUOIviwpDxZyBhqYlfexTfYZfwIgB6hTLNK7fF6748yFlkVWzHAO1eFB6axlM2ggT1sKn28qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKb5GNwkv7j%2BNqGTSrcA5bDE6WQypa0BY%2BOMRsxbJ6lfp2xZUb3a2QOAugpp6Oo9NRyPQD8FuOnSD3bya2ECofBHGpmXmmnHYdoMmkNSCvIHNfP4%2FbgVECk5r%2B1D3%2FluxmhVFedgkH8Rs2%2FS%2FF6hdPtG8DrH3z7oXmsiXqoGN3vsdPaprgw8oQ200N%2BDBxXz%2FGpDOw5vqbHqePArHCGHJ49sb544C%2BsdojI6PMYfeypgKh1rWGoVJvACnesor2eO7%2Bka4xFhEn0oTIIu2XKbKsOhSChbpZm9%2B0zQFRjQ7Xfn9lSMpoBSYf%2BFMjA8ie3rZpN94PCCCNpgGLwmnIUJzLV4NEMHoO28c8a8GH2IUnaTUfrmOYend7JZietnh0Bt84HVQAy%2BhENsCt%2BXBUbRGiOkw5QfsSiWHbR6GuNVk7CSgmJe4%2Bx3kxu9ohcJt71WPecNsTFDRcY9B1QiX%2BAcql%2BRUgne4Mfwmdaf6OmGQE05ClTP1d21CyMMAAOlLhESn60ekwOmrlrYJiNRwauz7WlH2zbDxxzx5kF4HuxEaDWdzDTYGgWNjHM0A0euYfK9Uymy2ei6kxq8Nbu%2FWbBDnaEKg8a7W8d7HKJwo3Gft8Taj0qwRwZafbCsxyfPxHuxtCgBTIMuADAA7quMLu51skGOqUBfJz6ZRJfPlKqd0j1wT8Sul%2B29V1DBclgGAQhggrQBSMEr0ldnvh4PgXomx71rf9eMTa5PCpB1LMbzkmXjAyMKm2RFvWzqtE6V3lTiMcUOVRULFCs7NnCNY95zm5EyGHeW5uey%2FbkH9PhwBW4Ah465gpiLT4bz1H4WZVroXNikS7g8ONCDH6GpE5%2Bgmv3%2B%2FjEj6Oli10KE6lDrbZy3XHLaWIdNF2Y&X-Amz-Signature=5bba335ef3a732a52e1911a153e2e395184790dded39604f42429fcf8f949523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
