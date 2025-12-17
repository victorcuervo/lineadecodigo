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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRON2ENR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BFWw8aLgC43jt8lT9OWzRjR7C%2B30TnbBPSesK2MXF8AiA9MvyuOROgAv8HIi%2BkMnYYIKMq%2Fu5OBlhePN6eRvbeVCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMpnKqTBeHIpS0qNdfKtwDr984LC81vAjBr4kzxJqpckHqwvy9gTBppKdm80Q25NNJsaRj%2BbGf8bqRhs2chQcwt%2FLHn9%2Fptdl8iEhjwPSwGNO0QdBSWBPFHIxU%2BGa%2Fy7rjYhbwTfPNtjYOzWT0hUmaByyr716tJlNko0DjUYYNm34vjIssaDbgmZHD8STHHCqwvFPnrdTdl6ulmdMtkZsQGjKxXMZ%2Bg%2BkV9fB9pdLzsaKXc3tgWlktKpd5v92GglyKCPw8N4SoD%2BWA%2BzkvWpfjGl4ZJb9eGZQYhwifLTxZxfJBC5zJqcbovPyDHhN%2BEsAwn3zaH1eR%2BaOMhhMOhIXjZsRIJr4h3YjTic62LI58BxYEmttOXRfp%2FM2inN36vHo0IQMD2kXZNjVOXY1E8jRZPeC5tKDzQ55xWxZ83LAy8q47wSPSLUANrBrKkLvdE1q88d7m7%2FKzZMfuUgZ7w45kdXCv0OutwvArHSUHSnR%2BdVj0KkFfd0iB1nh7n8Vdk%2Bir2sIzp8Ug7MhRSRyB20gQ4Nwr3U%2Fe%2FQrj0PNcTjvq51BaiQP4qnhPDgnK2o%2Bf5J4%2BNtupx%2B0c1EhCWQpt5nV3qGhrRDQgvhY3Ket0IJTkaPkJxek10l19pm04sMmbhk0hDiaRY%2FvN8STN6GMw%2FNCJygY6pgGKJgMzzR%2BpzpqnepNdZRCCzEbQK%2B6xBEr2WrwNE2LvKUPm2plqs%2Bcy0CZi6OW4NjtPB4H%2BQUqE16kT9h8q%2BB3LMyoCeDyZ9TQb6dOxAi05Ivs2%2FDpsJ1JbeBsBZB%2Fb9RyeZk8wIzmJ3pqPZtT30JCK0oFCS02ZRZkTw2Bq2N3fWNQriFaJNK39V%2B4AfzSFnUdx89TrrpoQNWGVNwH3vHKuBfxPEgYj&X-Amz-Signature=7bcacd758cc9e33a36afcccc7ec16116c992619abccc2845baaef1b774bbbf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRON2ENR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BFWw8aLgC43jt8lT9OWzRjR7C%2B30TnbBPSesK2MXF8AiA9MvyuOROgAv8HIi%2BkMnYYIKMq%2Fu5OBlhePN6eRvbeVCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMpnKqTBeHIpS0qNdfKtwDr984LC81vAjBr4kzxJqpckHqwvy9gTBppKdm80Q25NNJsaRj%2BbGf8bqRhs2chQcwt%2FLHn9%2Fptdl8iEhjwPSwGNO0QdBSWBPFHIxU%2BGa%2Fy7rjYhbwTfPNtjYOzWT0hUmaByyr716tJlNko0DjUYYNm34vjIssaDbgmZHD8STHHCqwvFPnrdTdl6ulmdMtkZsQGjKxXMZ%2Bg%2BkV9fB9pdLzsaKXc3tgWlktKpd5v92GglyKCPw8N4SoD%2BWA%2BzkvWpfjGl4ZJb9eGZQYhwifLTxZxfJBC5zJqcbovPyDHhN%2BEsAwn3zaH1eR%2BaOMhhMOhIXjZsRIJr4h3YjTic62LI58BxYEmttOXRfp%2FM2inN36vHo0IQMD2kXZNjVOXY1E8jRZPeC5tKDzQ55xWxZ83LAy8q47wSPSLUANrBrKkLvdE1q88d7m7%2FKzZMfuUgZ7w45kdXCv0OutwvArHSUHSnR%2BdVj0KkFfd0iB1nh7n8Vdk%2Bir2sIzp8Ug7MhRSRyB20gQ4Nwr3U%2Fe%2FQrj0PNcTjvq51BaiQP4qnhPDgnK2o%2Bf5J4%2BNtupx%2B0c1EhCWQpt5nV3qGhrRDQgvhY3Ket0IJTkaPkJxek10l19pm04sMmbhk0hDiaRY%2FvN8STN6GMw%2FNCJygY6pgGKJgMzzR%2BpzpqnepNdZRCCzEbQK%2B6xBEr2WrwNE2LvKUPm2plqs%2Bcy0CZi6OW4NjtPB4H%2BQUqE16kT9h8q%2BB3LMyoCeDyZ9TQb6dOxAi05Ivs2%2FDpsJ1JbeBsBZB%2Fb9RyeZk8wIzmJ3pqPZtT30JCK0oFCS02ZRZkTw2Bq2N3fWNQriFaJNK39V%2B4AfzSFnUdx89TrrpoQNWGVNwH3vHKuBfxPEgYj&X-Amz-Signature=2eab02e036e986f04d7aab88d11b8010efc42fb51738027e00497fe8c1966fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
