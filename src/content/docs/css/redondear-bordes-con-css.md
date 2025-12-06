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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKIUO6V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEW8B5uXph6oj8CI4r19lkPHeoab5XJYtCLLr8zYhtoYAiBMd09G%2FiLNpyFt5h2OTPfd1GLTwjFH8DkeEf%2BUiHz1eSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNpc0gEaPL1pE8bNGKtwDqtAZ2lPXRwzvK8s8JmAqeH4eu5z8JW0iShoLaFt0uEgxrPl7S0MH3hac2slrhvyobnF3udchgm4hHbXJsbGtdP71XFdWT%2FiyswpF7o8NDQV23WJeHnUAJGa3GmQneEPp7PKyxmv6H11ILe3j6WD%2BpH2W%2FuBzsQBwCGVf%2B%2FN56DwzSXmVwJyflRzx0iOayZ%2FEEhzcwKGfi8RvIxcY42S4eXF%2FlNHU88JM66GNPMpZ7J19ROKdQ%2BVYemIBMUHASADhWFv53zN%2B6eP55BUdnqnm3LNQi6BYM3jhLLaVdcTx4%2FtHWYFZpFvhmHK0xdS%2BXvTSezah7oy9zc4xr49OThbNyEHicrGRN3wNZoH0wUFVpub25vEftuFR%2B2ZiV4us2X7H%2BNhEUk8k4v6SjkbHO1lXm19YQ1nCvl07SUhmbZwtTOjj8qNoC7VIwR6T5JqscL%2F8V4M8RmW7I2NIBi8WkcxfdYquPj1VVsC5JbCWXIIfBABC7y3CyNsLiSK42ZyXZzdItanX%2B48SENgQqGyGrsi7FRdVvv7hIo%2BDIJyDac0pduuF0e7HvKs7N1FROx67VpPihXCgJKlr4COHnKh2%2F0WzS2h9XP4GAstY9CJcAj5VA2AHHR7XQJG7kmBqzesw1qbQyQY6pgE4GkrNR2Dy5FKXQTMDetcES8uDGd3KjmdBtT42rhN%2BBIGZREjYz1cuBbfk%2FfAi1VuKZ4AbLkcy1zNAhBO4QgYY%2FFVUaplts6Qe50AzBqK7T9XKnw0GotF2ibgjaSQXNeD7hRV6giCMXlTOzM%2BsmxmSxmuy2QJP3ShEHicUWKFqgRfccgcpr4gL%2BRXs8ViT58tFPzLd5T9CazlxlvuyCkmZcNCpuokP&X-Amz-Signature=8fa28102a49b60d8720c81d641ac3a9a176b643bfcbec6f30b084e822428dc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKIUO6V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEW8B5uXph6oj8CI4r19lkPHeoab5XJYtCLLr8zYhtoYAiBMd09G%2FiLNpyFt5h2OTPfd1GLTwjFH8DkeEf%2BUiHz1eSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNpc0gEaPL1pE8bNGKtwDqtAZ2lPXRwzvK8s8JmAqeH4eu5z8JW0iShoLaFt0uEgxrPl7S0MH3hac2slrhvyobnF3udchgm4hHbXJsbGtdP71XFdWT%2FiyswpF7o8NDQV23WJeHnUAJGa3GmQneEPp7PKyxmv6H11ILe3j6WD%2BpH2W%2FuBzsQBwCGVf%2B%2FN56DwzSXmVwJyflRzx0iOayZ%2FEEhzcwKGfi8RvIxcY42S4eXF%2FlNHU88JM66GNPMpZ7J19ROKdQ%2BVYemIBMUHASADhWFv53zN%2B6eP55BUdnqnm3LNQi6BYM3jhLLaVdcTx4%2FtHWYFZpFvhmHK0xdS%2BXvTSezah7oy9zc4xr49OThbNyEHicrGRN3wNZoH0wUFVpub25vEftuFR%2B2ZiV4us2X7H%2BNhEUk8k4v6SjkbHO1lXm19YQ1nCvl07SUhmbZwtTOjj8qNoC7VIwR6T5JqscL%2F8V4M8RmW7I2NIBi8WkcxfdYquPj1VVsC5JbCWXIIfBABC7y3CyNsLiSK42ZyXZzdItanX%2B48SENgQqGyGrsi7FRdVvv7hIo%2BDIJyDac0pduuF0e7HvKs7N1FROx67VpPihXCgJKlr4COHnKh2%2F0WzS2h9XP4GAstY9CJcAj5VA2AHHR7XQJG7kmBqzesw1qbQyQY6pgE4GkrNR2Dy5FKXQTMDetcES8uDGd3KjmdBtT42rhN%2BBIGZREjYz1cuBbfk%2FfAi1VuKZ4AbLkcy1zNAhBO4QgYY%2FFVUaplts6Qe50AzBqK7T9XKnw0GotF2ibgjaSQXNeD7hRV6giCMXlTOzM%2BsmxmSxmuy2QJP3ShEHicUWKFqgRfccgcpr4gL%2BRXs8ViT58tFPzLd5T9CazlxlvuyCkmZcNCpuokP&X-Amz-Signature=f36f5c245afbe6393a419aeeeee80d22b9eff4e176e3130921b1211e00c03cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
