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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCYNMSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHaBQyPjX9jfLKTo3nHLioRFx%2BeYOkeOmhp4RmNYkf5gIgDWmBhi5xCGALeLxDvd8spyf%2FoG108xNV28%2BKtsWS2YAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNNeSkqjnZVEzjFDWCrcA9%2FHgSuySICOzrLGYoqzVojkemy5raTfbJl5zm2UkYOJIJ%2F5Fu0765uAMh4pOxn0GAIky1LKAvIbUte8aEyg3Exna9ty61kHTivqWtvBuM09A%2B0Jizt7osZlg1xVA82XXeidib6HBuSCWpiJyHHzl6Qaa%2F2CzlZP0ULPQH9fuN9LshJGxQbQJ0WYZ3p1GUzQEpUGfcN%2F3KVzrPFHAGE7nUHPgjbENP%2BrDYUyCJW%2FjLgAhrXxftLMcHaRzAS0xtfTTVYJWf9zB8PN%2FU50Ot0AXCVa%2Fjz%2F8%2BhGNoSnOTMrqF1vaiaF9NxZWGqfBTObJmr%2BlvjLiVpN3r7vnkcFCT2bphZYH7S7zUl6G4iJcPAfSgab63zZA0%2BEZRy%2Bsv%2BSSw5i23I8c3Io%2Fp5247JYSMJ0x1xB9XiwCH58EluO1qvt5eprjd%2F%2Bb25FHEFnqaOMlu383K1Bt8Ag%2FROKYG%2F9GJbfXLpvy1%2FiiU%2BzrjyY5IgZHNHAF3mFjHBCSY%2B4OMyBVzvWHRYbloKOXjOKn9XwAlyxEXvNVdSd%2BMVqfl2wYX6wKypb6EMRau6Q9FDArDB96GYs8pEmAt76%2FRy93pkLFwtzAYUdlUawbTSaw2HA%2Fh2JNUiA%2BBE0c7N8VKBc9geeMIeQzckGOqUBG5d8JHBz4Wq6upE62QTVlfq%2BDdcmXmyLUl%2F8g05EvZQl9Ge%2FU7yVcoRIq9mrSAsrPNBwwQ8LSTFaxAORWOcOIuYPPLspd2gQOX%2BaJlXZohWbQtrxxnJZDYcCMqyGLTiNRt23de5RozYHH6XIq4wdc5ujjzFtXA1izQ3t6Cc8%2FuYMbfkogpqvIZV24FeKu%2BlCixDA2UG7EGyj0geppHdyQsIqOFPZ&X-Amz-Signature=40550ddcf46d269403acbfc089a7d4f24e8506a540f77dac3250ccafd160f20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCYNMSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHaBQyPjX9jfLKTo3nHLioRFx%2BeYOkeOmhp4RmNYkf5gIgDWmBhi5xCGALeLxDvd8spyf%2FoG108xNV28%2BKtsWS2YAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNNeSkqjnZVEzjFDWCrcA9%2FHgSuySICOzrLGYoqzVojkemy5raTfbJl5zm2UkYOJIJ%2F5Fu0765uAMh4pOxn0GAIky1LKAvIbUte8aEyg3Exna9ty61kHTivqWtvBuM09A%2B0Jizt7osZlg1xVA82XXeidib6HBuSCWpiJyHHzl6Qaa%2F2CzlZP0ULPQH9fuN9LshJGxQbQJ0WYZ3p1GUzQEpUGfcN%2F3KVzrPFHAGE7nUHPgjbENP%2BrDYUyCJW%2FjLgAhrXxftLMcHaRzAS0xtfTTVYJWf9zB8PN%2FU50Ot0AXCVa%2Fjz%2F8%2BhGNoSnOTMrqF1vaiaF9NxZWGqfBTObJmr%2BlvjLiVpN3r7vnkcFCT2bphZYH7S7zUl6G4iJcPAfSgab63zZA0%2BEZRy%2Bsv%2BSSw5i23I8c3Io%2Fp5247JYSMJ0x1xB9XiwCH58EluO1qvt5eprjd%2F%2Bb25FHEFnqaOMlu383K1Bt8Ag%2FROKYG%2F9GJbfXLpvy1%2FiiU%2BzrjyY5IgZHNHAF3mFjHBCSY%2B4OMyBVzvWHRYbloKOXjOKn9XwAlyxEXvNVdSd%2BMVqfl2wYX6wKypb6EMRau6Q9FDArDB96GYs8pEmAt76%2FRy93pkLFwtzAYUdlUawbTSaw2HA%2Fh2JNUiA%2BBE0c7N8VKBc9geeMIeQzckGOqUBG5d8JHBz4Wq6upE62QTVlfq%2BDdcmXmyLUl%2F8g05EvZQl9Ge%2FU7yVcoRIq9mrSAsrPNBwwQ8LSTFaxAORWOcOIuYPPLspd2gQOX%2BaJlXZohWbQtrxxnJZDYcCMqyGLTiNRt23de5RozYHH6XIq4wdc5ujjzFtXA1izQ3t6Cc8%2FuYMbfkogpqvIZV24FeKu%2BlCixDA2UG7EGyj0geppHdyQsIqOFPZ&X-Amz-Signature=fa309eec449e6692df4f63dec142c7d609cdf78306e614299064674ab924c3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
