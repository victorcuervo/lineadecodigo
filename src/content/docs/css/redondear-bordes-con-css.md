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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD33WV3A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFts4NtwVrd5iH7BXKw%2Fjj8VuF6YTBdy1JWf%2B5v1ZXdAiBH1o0eXcX0qO6RpPrvvYQ7I40ZgS6SJiH2ldwHgUw%2Bbyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM47c%2BKi13Uj0bvR%2B1KtwDR1AbZUAkSEcEz%2F7XbGPhSUc1%2Finrsz9D29fDsSSw%2BAn%2BhrHumBQ%2BLWiFHZInhhHQ5oysGB%2BvlJ%2BwSHwEl1ISOSyV4jN7niL8jPjD4bAeaWenmGKNuN0mJYIJ2Sk5AwAad0KDC%2BmzIalxQe1ar0TTi0Y8EYEhZzhld7ObT61jV7oFJD99ivP1XrxajAgD43%2F39R8vJl8RYLGl9%2BqbmY5qNk04MZgRVmZ91MqEPrIVZHBDwMdAbXxbyFiOmiTbjnUXvkjYkOzrxDBcRzlbcgo1z18kTw2NhTjaGmDkx0JBXPcvnNq8YRT6IYyV7%2FWO2nwnQIVAt14FQy6UYH42RmuIX2Z6BjCJqEmjb%2BLN52X7Sgbv8pXN%2BspRnV3waGP9e0dT93RgvU%2BO6YFY%2FZQcYp2CuI%2FrCXEQFd7F9nl8HQXIkctxZIOwzUPvHyH8pkR0h0BcqA2Jn2TS4oD4uxQgu%2BJu%2BGgr2drIO61JX7YatptLbGUDgyh98BQdCodP02sDkbmDzkRZwjFex1wIPMZZVfrEufLtDoeBbFxchYpqvtHWEdiY7iNu%2BYHmhHtEKytl5tEf25Jw2ZhQixBq7IJruGq11%2BYLdDgzFgV8nUuMcLHZan3u9XXUuZgnOyX6BtUwg%2BnLyQY6pgH6jl%2BhImbrR%2Baij%2BofalEKzYWSLGkJSTuLjkrpGTBK9zf9%2BibDUh%2BOVQ2%2FD%2Bg%2BrdbDtTqb%2BRdrCaiAhwHB1OugVo46jWZZpjqQBbnmUKirCz3CtCRQT5RuSNErkmuEETJRRDPj0b1lvXBqUsg%2BdfZpenU7wQyuZ4%2BRCHz%2BvPcTIXEUfu85OHVDZR%2BRNYJDsEywXmqyFni9%2BRsm%2B76LtQDtOtWIbmm3&X-Amz-Signature=b53fda16824512c9b1abb7b836cd933a5b8514e0205b01bf86d01871d5d2c556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD33WV3A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFts4NtwVrd5iH7BXKw%2Fjj8VuF6YTBdy1JWf%2B5v1ZXdAiBH1o0eXcX0qO6RpPrvvYQ7I40ZgS6SJiH2ldwHgUw%2Bbyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM47c%2BKi13Uj0bvR%2B1KtwDR1AbZUAkSEcEz%2F7XbGPhSUc1%2Finrsz9D29fDsSSw%2BAn%2BhrHumBQ%2BLWiFHZInhhHQ5oysGB%2BvlJ%2BwSHwEl1ISOSyV4jN7niL8jPjD4bAeaWenmGKNuN0mJYIJ2Sk5AwAad0KDC%2BmzIalxQe1ar0TTi0Y8EYEhZzhld7ObT61jV7oFJD99ivP1XrxajAgD43%2F39R8vJl8RYLGl9%2BqbmY5qNk04MZgRVmZ91MqEPrIVZHBDwMdAbXxbyFiOmiTbjnUXvkjYkOzrxDBcRzlbcgo1z18kTw2NhTjaGmDkx0JBXPcvnNq8YRT6IYyV7%2FWO2nwnQIVAt14FQy6UYH42RmuIX2Z6BjCJqEmjb%2BLN52X7Sgbv8pXN%2BspRnV3waGP9e0dT93RgvU%2BO6YFY%2FZQcYp2CuI%2FrCXEQFd7F9nl8HQXIkctxZIOwzUPvHyH8pkR0h0BcqA2Jn2TS4oD4uxQgu%2BJu%2BGgr2drIO61JX7YatptLbGUDgyh98BQdCodP02sDkbmDzkRZwjFex1wIPMZZVfrEufLtDoeBbFxchYpqvtHWEdiY7iNu%2BYHmhHtEKytl5tEf25Jw2ZhQixBq7IJruGq11%2BYLdDgzFgV8nUuMcLHZan3u9XXUuZgnOyX6BtUwg%2BnLyQY6pgH6jl%2BhImbrR%2Baij%2BofalEKzYWSLGkJSTuLjkrpGTBK9zf9%2BibDUh%2BOVQ2%2FD%2Bg%2BrdbDtTqb%2BRdrCaiAhwHB1OugVo46jWZZpjqQBbnmUKirCz3CtCRQT5RuSNErkmuEETJRRDPj0b1lvXBqUsg%2BdfZpenU7wQyuZ4%2BRCHz%2BvPcTIXEUfu85OHVDZR%2BRNYJDsEywXmqyFni9%2BRsm%2B76LtQDtOtWIbmm3&X-Amz-Signature=2e9acef0fd2296b36d12ffc93918d065f77c70ab35015153460065f49b382526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
