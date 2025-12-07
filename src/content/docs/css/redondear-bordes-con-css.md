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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFCQ43S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgczIOkjeTsP4Xbi8nrGw6vbOcngQjRVwCbeWWQ4nakAiB5bofsD1ieaiLu2Ks0xbNLrhFITr6kt2QJaOzN6qwmlCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfLcrvjUvW4KgRjIoKtwDGJbn7sXPsdlo1CmrydHamkinw5kdY5pshxfmzX2Gu%2BCupxDPiHvrAz%2FBlFcCDVX1%2BJDbveogH02Z41SlxkU74ljM8IfvGce4GveMxpHWXb08OAVYx4eP%2B89Dg%2F5jPmNrkOkXvO9zlmdgEUBZSBpSTIkmFO6GKB1DCtZC7kBqhCkwbdgowvPT8WSdNbmuhCZ0ZVUh72lLM7YdXhoLhSHuW4ccwW%2Fgpi1vqKyFhIUG64Kk%2FzsCaGgyI2aNe8SEjlyowyJkJ9nS7dWC2iNDiIJazYdD8WqiTZr76C9f7J41Te8HRwPB7jU8wcZpufJvOmMDuzB%2BYG6lwxVb1bhTYa6jrKi0Gq57LFG%2F5spaOb7tctA8gK2lA%2FzZjNp6sFOzMtWTOorcQJgRtxnC213hdrdSjoqeeFQ60weGDACLEbkV3f8zXsR7Z4ZQ5Coeyl3QYndsHEoYIqZec03JD6JUhpa2k7OY73fMk9DvVlvQIN9XUBKX2G%2B%2BH654aG%2BxbzUZ1aKMqRoKDKExk0jJjAO8R2NGbUYBuHtIhNgnSpeHOkGh2S0ceoXwQeINs9rIF70oDGld3L8gp3QPYUJYpjV%2FZRIkVAhKr2%2B0KxRfiBozHVUPPc5%2FkIRMLS0tuexlyPAw7ITYyQY6pgGS58S0sKvJkFYYyt4KHzNBOYdl%2BbUqDC%2F%2BekN%2F9%2B1aMtZ4cQFYiDAOMnTCQqtneHhaV%2B7AEZU7fSVIfMPch7nr16KfFGzU93Inde25d4MxykycBQ%2FtEmSemHC5hD1xiYxa%2BrwyUzKwK2BxXd1gu%2BSI%2BcQwqZYh4O52tTCb1XEJKqUkoGB3HPceOrljYpSscsVqbSoSuTxHl%2F7Nl6njy%2FpBlfSOIRGE&X-Amz-Signature=ca494db32f1edd3a00e5d2533eb8e9e2913e9d5b78f9e571152c5d193fe4ef54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFCQ43S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgczIOkjeTsP4Xbi8nrGw6vbOcngQjRVwCbeWWQ4nakAiB5bofsD1ieaiLu2Ks0xbNLrhFITr6kt2QJaOzN6qwmlCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfLcrvjUvW4KgRjIoKtwDGJbn7sXPsdlo1CmrydHamkinw5kdY5pshxfmzX2Gu%2BCupxDPiHvrAz%2FBlFcCDVX1%2BJDbveogH02Z41SlxkU74ljM8IfvGce4GveMxpHWXb08OAVYx4eP%2B89Dg%2F5jPmNrkOkXvO9zlmdgEUBZSBpSTIkmFO6GKB1DCtZC7kBqhCkwbdgowvPT8WSdNbmuhCZ0ZVUh72lLM7YdXhoLhSHuW4ccwW%2Fgpi1vqKyFhIUG64Kk%2FzsCaGgyI2aNe8SEjlyowyJkJ9nS7dWC2iNDiIJazYdD8WqiTZr76C9f7J41Te8HRwPB7jU8wcZpufJvOmMDuzB%2BYG6lwxVb1bhTYa6jrKi0Gq57LFG%2F5spaOb7tctA8gK2lA%2FzZjNp6sFOzMtWTOorcQJgRtxnC213hdrdSjoqeeFQ60weGDACLEbkV3f8zXsR7Z4ZQ5Coeyl3QYndsHEoYIqZec03JD6JUhpa2k7OY73fMk9DvVlvQIN9XUBKX2G%2B%2BH654aG%2BxbzUZ1aKMqRoKDKExk0jJjAO8R2NGbUYBuHtIhNgnSpeHOkGh2S0ceoXwQeINs9rIF70oDGld3L8gp3QPYUJYpjV%2FZRIkVAhKr2%2B0KxRfiBozHVUPPc5%2FkIRMLS0tuexlyPAw7ITYyQY6pgGS58S0sKvJkFYYyt4KHzNBOYdl%2BbUqDC%2F%2BekN%2F9%2B1aMtZ4cQFYiDAOMnTCQqtneHhaV%2B7AEZU7fSVIfMPch7nr16KfFGzU93Inde25d4MxykycBQ%2FtEmSemHC5hD1xiYxa%2BrwyUzKwK2BxXd1gu%2BSI%2BcQwqZYh4O52tTCb1XEJKqUkoGB3HPceOrljYpSscsVqbSoSuTxHl%2F7Nl6njy%2FpBlfSOIRGE&X-Amz-Signature=c589ab7ff9c7feaba4a80724c3373806eaa8f42c805099ad6ba14f7d17d73640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
