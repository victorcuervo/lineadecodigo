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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7RBYEQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzfhFhUxt9UiyaNa6cX7Gbccsq%2Fej5lxKbSizKTmNYqAiB2v8wmS5k3YRsA7XzE8KdZ4vgR0nxMBAW1dEu0qptI8iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMroRldXy4aO0Tx7OtKtwDZoX4j3oNlJrphPmgVEZ1Ru6OItqK8wXUEIv%2B%2FNjseBUImnfDET9RGXEhf%2BTvKwIKeP5o3RdwkRhgE2bTUvXfBFFea0CiRUdPc0Hbw3wTbmXCejseLqRF1A9XVS9kGQBCT8eLsh%2FqrZySsO1%2FCgTgaFHr3W9K7YrubwgFpXxgRz2hdpAyAEKlqtiwvAAE%2FWVK%2FnAKlOSyolPyGTM9ii3VghcFKy1A4KWLMjgFyaVV3PZSvkZiGG%2BRO1eabzdTGNgkFf3HgdDdYCdlWHeIjlVs1AtgagZWsIWuiwKM7uMjD9mm8gIwUuBOW25W%2FQihOPS01B21AGsYvaNaeZdMmy07DNVxLHlI%2BSuNTCIZojqMHGB6uY5PPk%2BIqBtgpxdTDXD8rSeq38HVDcusJi0ZVoW42OPRrhxYnYSthssOsKxFv0la7aKAi49GHsOvPjr9l39NqJuNVkQahK63MncGskBu8d7m%2FbBlDEuRQVlArNN5XPap%2BE7lRK7rnBR7zc3H44%2FRj%2FkTskfZ3PkB7HlCDFCJpV6BXHRF3MRQotg5WUevReN3WDbxUptYCTV4RU77V1nFIpVeh6zN1gMHdOf%2FTDuyl3Jg7is9l1n08e%2BYuJnAPoW2PiJkIDheYZQ2sp0w36CLygY6pgGKmOS4uaBoEZp04%2Bid8JVM6GkecSIwgK0LfEkklpQa%2FSm3Cf8%2BBd0O03mQ8IWxm5c2YiQfaYHBlTWVxN8JIfQ5rncqt9RW4XPT%2FK1%2BdOOrYx8Q9uIx%2BuJ37spCjEQHTePsnhGss7q4rAE1PHAjwSpFmQ7J3uZC4ctYhdqVVTJlOewGgV4qVXBNNgf4lMzjAWmgbS1TMausPmeSGd03j0h%2BCobzIP7R&X-Amz-Signature=ef59daed172ba5f5f24874ec27d36851d071c344fe1b14438d9228a1cdb505e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7RBYEQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzfhFhUxt9UiyaNa6cX7Gbccsq%2Fej5lxKbSizKTmNYqAiB2v8wmS5k3YRsA7XzE8KdZ4vgR0nxMBAW1dEu0qptI8iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMroRldXy4aO0Tx7OtKtwDZoX4j3oNlJrphPmgVEZ1Ru6OItqK8wXUEIv%2B%2FNjseBUImnfDET9RGXEhf%2BTvKwIKeP5o3RdwkRhgE2bTUvXfBFFea0CiRUdPc0Hbw3wTbmXCejseLqRF1A9XVS9kGQBCT8eLsh%2FqrZySsO1%2FCgTgaFHr3W9K7YrubwgFpXxgRz2hdpAyAEKlqtiwvAAE%2FWVK%2FnAKlOSyolPyGTM9ii3VghcFKy1A4KWLMjgFyaVV3PZSvkZiGG%2BRO1eabzdTGNgkFf3HgdDdYCdlWHeIjlVs1AtgagZWsIWuiwKM7uMjD9mm8gIwUuBOW25W%2FQihOPS01B21AGsYvaNaeZdMmy07DNVxLHlI%2BSuNTCIZojqMHGB6uY5PPk%2BIqBtgpxdTDXD8rSeq38HVDcusJi0ZVoW42OPRrhxYnYSthssOsKxFv0la7aKAi49GHsOvPjr9l39NqJuNVkQahK63MncGskBu8d7m%2FbBlDEuRQVlArNN5XPap%2BE7lRK7rnBR7zc3H44%2FRj%2FkTskfZ3PkB7HlCDFCJpV6BXHRF3MRQotg5WUevReN3WDbxUptYCTV4RU77V1nFIpVeh6zN1gMHdOf%2FTDuyl3Jg7is9l1n08e%2BYuJnAPoW2PiJkIDheYZQ2sp0w36CLygY6pgGKmOS4uaBoEZp04%2Bid8JVM6GkecSIwgK0LfEkklpQa%2FSm3Cf8%2BBd0O03mQ8IWxm5c2YiQfaYHBlTWVxN8JIfQ5rncqt9RW4XPT%2FK1%2BdOOrYx8Q9uIx%2BuJ37spCjEQHTePsnhGss7q4rAE1PHAjwSpFmQ7J3uZC4ctYhdqVVTJlOewGgV4qVXBNNgf4lMzjAWmgbS1TMausPmeSGd03j0h%2BCobzIP7R&X-Amz-Signature=ad89dbe9715516c134968f5191a35f02c7500ce74317abd6dbce107292a3d413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
