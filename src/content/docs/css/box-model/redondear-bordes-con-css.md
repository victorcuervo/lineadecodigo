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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYR3Y5I6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw%2BkgUdooxhcJc99CLLTjRqIL4YJmPXKYwXWVaH9dDigIhAOyA6XUK2zlqoCoXu9tVV2QFMPH%2FH%2B1bqVtd8bRAam%2FkKv8DCHwQABoMNjM3NDIzMTgzODA1IgwXZ%2FCFyjxfE7WZBBwq3ANqbEAb12fok2JDEc6RsSrIiojcoi8xBTrRDe%2FPBfDYVybgYVull0%2Fwb%2FPOxivaMFNcbMVjwnrKIIredabbz5H%2BcSrpOPhEv1my8o9JDE1ZnRr4ZW3J%2F8rp6HzgOT6g3Y19wrIjob4mao5WBFJ3E0yas517nDpieDq7S6RMhuOXfZPjQ1EZXVncbKmkhBtxygZDEcU3PQQswnubTJOXO4hcdsQI3f3IGqFLsmikWsOCbtlxuh1N%2BFGRHbGqIPbDfKW2ZLyWmKOj%2Bmp4RHGnbow1DLjs8rr1JYpDFerl9QUziY0tKUp7ZazMl6ZxzC4K7q%2B7LR1T4CiqBoiTbEwtdUoNQ3Aq1v4HZgdGPmHLy3UcgQ%2B9FQgz0ARiDotp6V0JTgeaRb3vQwTlpcMnylcnh8CfB9KG8c%2BejA4XOIyV2Mkbv21mJ7uQSVgIk4VtUTvJDTVgnLW4muElxudHwdl1vAd7rgzKmHSZ3%2FCfyV2PVjVEZm1jWP0lkULJHnhGLBCNgQD0kGGUODMTykAXj4d9iFwE4B8SCtkLyDp72IKEoP1uXo4J6JmE5TeIzodaNyU7xx6PO13DeEuRD%2FF36zncmCQ7kljy5u6y2aDBEufu1UsP3wvGdVth49IMH75AQjD0jorKBjqkAUHpHkJZq50saJbh%2FF6EV913s%2FpbC7al1kixwFdj3al1Izr6b7F3efOcOMDoOugS4sN%2Buvgnl9cBpi0xJZ5OlhVAd6ESRuNehFtlFML3Az99%2B1cpoI7NZogh%2FWUseqiVPFKMX2kJ3RZnuEFVpIuNaU9xsmCQKlDjqyGDBJE4OQ7X3I%2F19UuxarYSBVSeELg0wHAIXSOgCR6tMebajxOxJawcvYFo&X-Amz-Signature=ab2027abfd99a652a966cd291fc16f08fda9514f68d0b85079e2a9b6f400df98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYR3Y5I6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw%2BkgUdooxhcJc99CLLTjRqIL4YJmPXKYwXWVaH9dDigIhAOyA6XUK2zlqoCoXu9tVV2QFMPH%2FH%2B1bqVtd8bRAam%2FkKv8DCHwQABoMNjM3NDIzMTgzODA1IgwXZ%2FCFyjxfE7WZBBwq3ANqbEAb12fok2JDEc6RsSrIiojcoi8xBTrRDe%2FPBfDYVybgYVull0%2Fwb%2FPOxivaMFNcbMVjwnrKIIredabbz5H%2BcSrpOPhEv1my8o9JDE1ZnRr4ZW3J%2F8rp6HzgOT6g3Y19wrIjob4mao5WBFJ3E0yas517nDpieDq7S6RMhuOXfZPjQ1EZXVncbKmkhBtxygZDEcU3PQQswnubTJOXO4hcdsQI3f3IGqFLsmikWsOCbtlxuh1N%2BFGRHbGqIPbDfKW2ZLyWmKOj%2Bmp4RHGnbow1DLjs8rr1JYpDFerl9QUziY0tKUp7ZazMl6ZxzC4K7q%2B7LR1T4CiqBoiTbEwtdUoNQ3Aq1v4HZgdGPmHLy3UcgQ%2B9FQgz0ARiDotp6V0JTgeaRb3vQwTlpcMnylcnh8CfB9KG8c%2BejA4XOIyV2Mkbv21mJ7uQSVgIk4VtUTvJDTVgnLW4muElxudHwdl1vAd7rgzKmHSZ3%2FCfyV2PVjVEZm1jWP0lkULJHnhGLBCNgQD0kGGUODMTykAXj4d9iFwE4B8SCtkLyDp72IKEoP1uXo4J6JmE5TeIzodaNyU7xx6PO13DeEuRD%2FF36zncmCQ7kljy5u6y2aDBEufu1UsP3wvGdVth49IMH75AQjD0jorKBjqkAUHpHkJZq50saJbh%2FF6EV913s%2FpbC7al1kixwFdj3al1Izr6b7F3efOcOMDoOugS4sN%2Buvgnl9cBpi0xJZ5OlhVAd6ESRuNehFtlFML3Az99%2B1cpoI7NZogh%2FWUseqiVPFKMX2kJ3RZnuEFVpIuNaU9xsmCQKlDjqyGDBJE4OQ7X3I%2F19UuxarYSBVSeELg0wHAIXSOgCR6tMebajxOxJawcvYFo&X-Amz-Signature=e5a08c73251fe0ba1ed80c02743f8536aa875ad1cb82538a1085c38b64dd459c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
