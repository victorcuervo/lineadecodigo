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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJKKFUAS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCDGVXdIkt8iuY005huDMoT5FtKKP%2Bkphc0iqXOJGqPQIhAIybrsUXtO2vkNkX75XIUpUQ1310w5l8XN4kndm%2FY5RzKv8DCHEQABoMNjM3NDIzMTgzODA1IgyMwjW%2BTgxDt0eE%2F9Eq3AMOhRrP6ZPoQSdSiwrKwkfCm866xvJvn1Bbb%2F2nCIBaDzNGWcPaac0AzHnWOUw%2BAvtOKtjxJJeuFir3mEkbGZY3u7xO53AGh%2F%2Fw1eg4SxUUY3hVB9GKpaTPCxnYHtAekvd2c7DpUO6D8k7UvNctvAaOGNuH7tI8xfJwdFj0mZWcLuVxkEbUAJtQLSmQrfgaqrXP6C4WqvHsMJRFsK69CLFvp5GKe%2F1x6Y2SO%2FrnJljnYqomhlzihWBAtDEFplRvEItWNuv6hJZyvAvK26aRUh3%2FagQ0NLkFc3jLZGtH3k3p3R2Hc1qmMfc1rBck%2FMpMI9jRihzTo6olxJues2saHEePo1e7YfZCxZ3z5H5C8yD6Up29OlGMhBWYRlC1FOvzmUm0X10%2BxEJeBEguUcH5W%2BlXJ%2BWi9F0%2FrH59iri3v0xqbxF8cKPKPTkLAlfxKZQd05FItZA9ItgGaII3F2cHvbTOVnetVnhkOkKmVK8Ao1U7O8XDNBLZT2rI3qSEQ5%2Fh3eHYGZuebZ2AIvEHmtmEx2vyXNpnAoAbibN7S9AdDple%2BJriA61QN3GwuzP6rAb7mnDCVcE4JdzuEWyZ5ie704AVKv4SFbgl5RBuCn%2BbiPf9OKQM%2B80t7TSIWZYpmTD%2BvM%2FJBjqkAcW5%2FoN8lpq1fsFywO8rkcfdl9iCSi87lIXSKHUPat6%2B1c%2Bu11xmy%2FkjoCvS7lGyAyGi5rQD%2BJKMbXJktoVrXKRFKeYiCLqP6QVamCNyTa%2F1lOScr48wg0hnwmzQD%2BCBY9bswWtm7O8cHcP5jNw3bKeSeGoiuFMRPKVn46QFasXBpOEsw3oOKK3KgM4hVdPP%2Bl0NCdpJ8JnTRByV7Ys5DEvCoCUm&X-Amz-Signature=6afbb055e4a64b19c46675480f625856094785718ad7463b6722c4c272f54c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJKKFUAS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCDGVXdIkt8iuY005huDMoT5FtKKP%2Bkphc0iqXOJGqPQIhAIybrsUXtO2vkNkX75XIUpUQ1310w5l8XN4kndm%2FY5RzKv8DCHEQABoMNjM3NDIzMTgzODA1IgyMwjW%2BTgxDt0eE%2F9Eq3AMOhRrP6ZPoQSdSiwrKwkfCm866xvJvn1Bbb%2F2nCIBaDzNGWcPaac0AzHnWOUw%2BAvtOKtjxJJeuFir3mEkbGZY3u7xO53AGh%2F%2Fw1eg4SxUUY3hVB9GKpaTPCxnYHtAekvd2c7DpUO6D8k7UvNctvAaOGNuH7tI8xfJwdFj0mZWcLuVxkEbUAJtQLSmQrfgaqrXP6C4WqvHsMJRFsK69CLFvp5GKe%2F1x6Y2SO%2FrnJljnYqomhlzihWBAtDEFplRvEItWNuv6hJZyvAvK26aRUh3%2FagQ0NLkFc3jLZGtH3k3p3R2Hc1qmMfc1rBck%2FMpMI9jRihzTo6olxJues2saHEePo1e7YfZCxZ3z5H5C8yD6Up29OlGMhBWYRlC1FOvzmUm0X10%2BxEJeBEguUcH5W%2BlXJ%2BWi9F0%2FrH59iri3v0xqbxF8cKPKPTkLAlfxKZQd05FItZA9ItgGaII3F2cHvbTOVnetVnhkOkKmVK8Ao1U7O8XDNBLZT2rI3qSEQ5%2Fh3eHYGZuebZ2AIvEHmtmEx2vyXNpnAoAbibN7S9AdDple%2BJriA61QN3GwuzP6rAb7mnDCVcE4JdzuEWyZ5ie704AVKv4SFbgl5RBuCn%2BbiPf9OKQM%2B80t7TSIWZYpmTD%2BvM%2FJBjqkAcW5%2FoN8lpq1fsFywO8rkcfdl9iCSi87lIXSKHUPat6%2B1c%2Bu11xmy%2FkjoCvS7lGyAyGi5rQD%2BJKMbXJktoVrXKRFKeYiCLqP6QVamCNyTa%2F1lOScr48wg0hnwmzQD%2BCBY9bswWtm7O8cHcP5jNw3bKeSeGoiuFMRPKVn46QFasXBpOEsw3oOKK3KgM4hVdPP%2Bl0NCdpJ8JnTRByV7Ys5DEvCoCUm&X-Amz-Signature=846e88e9834e96686458af2a7f70ff1ca86d99c104e7b2171d05bad897b92577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
