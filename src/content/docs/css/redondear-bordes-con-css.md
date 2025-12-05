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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAYFWQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRZAi%2BwQjpMoluMc615J1EfIH%2FmZ%2FFnY8YemxpouKvFQIhAJqR%2Bw2x2GwMJjBHj%2B%2FTcQwwvx%2FwPvOEhzcQcPNiEZdgKv8DCFUQABoMNjM3NDIzMTgzODA1IgwLXosAhedNffLjWrUq3AOXAB1UlHnJd19f9g%2Fpbzz5urmAZPCU8rdR4bw2v5kaRzdTtQpahrcYhXK35P0E3CHbhQTFh7i9TpKFSzZy6zYg25VuhyRSvjt8z5TH9mPCZyOYcoa27u15Wlh1Fkm3atIFDj0Ber5FJILD%2FN5mvJovmomwDDDY6mJqDYlYHHqpLCW5W1PxVvwaA%2FTii4nvduPzJGMCNkga7Ytnf1OPAQAp9hIqFChKEo%2FKQBEF6gmy29Zk8OG7%2BYpBg4MpggIUSyJRZHgWTob%2FBnjPl5%2BCWX6kvQC%2BswIbiG3XTJ4JZ0%2FIj1JIFYVtuVu1%2Bf3Yx6Hy9PDHEi6CSeJLvav5hcR7ceMoSfCgyfqSTdA8XmJoAq9FJFUJY%2FSCjHbHkJ3fr3U%2BcNSd2hDcnQArPgSfPdsuXUzX1OTR%2BXbEMfUh2RQom50sZkNg3LUwtr93L6PFWEcIrB%2BmoNY49fxHY7MVzbEbPq84k5d6GXhE7Wns6wmgWy8x3v1ODCnohUniMkQUGZLkg6483rT%2BoduQ%2FZKD1lG5CSbjDG1q6W293DuPf%2F947xfpQmFYn0PzXP9T3%2BI0ZlAqpjmhwPwJks5bA84H1C8P%2FPo3sqpKnGvHX7%2FRNlSt%2BzYFR4NxXZA%2Bd%2F2TTkfvATDAqcnJBjqkAQASC6%2FvYKLC8KlEamLeRcAR94P639F7fgrqrWpHl5copQ3FOlAinSbrEf2HYK1X1%2BaBMhBDHt%2BOmzjXtM4Q4sDO2%2Fdcs4JLS4j7GkgT0UASZBcuRsGo3RtQr01Vu%2FWNeaL32%2FkoFf2TjTB9KyoeFfwzWonknqATsA0oo6011pHlxc52l9l0jMow9yQonaM7LpDoujggfH0cKuZUOhrCZDeeG5I5&X-Amz-Signature=cda5814fe5dc25ce7d19ce71a0c67f4fee3a0d9ec170cf8fd187c6387710c79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAYFWQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRZAi%2BwQjpMoluMc615J1EfIH%2FmZ%2FFnY8YemxpouKvFQIhAJqR%2Bw2x2GwMJjBHj%2B%2FTcQwwvx%2FwPvOEhzcQcPNiEZdgKv8DCFUQABoMNjM3NDIzMTgzODA1IgwLXosAhedNffLjWrUq3AOXAB1UlHnJd19f9g%2Fpbzz5urmAZPCU8rdR4bw2v5kaRzdTtQpahrcYhXK35P0E3CHbhQTFh7i9TpKFSzZy6zYg25VuhyRSvjt8z5TH9mPCZyOYcoa27u15Wlh1Fkm3atIFDj0Ber5FJILD%2FN5mvJovmomwDDDY6mJqDYlYHHqpLCW5W1PxVvwaA%2FTii4nvduPzJGMCNkga7Ytnf1OPAQAp9hIqFChKEo%2FKQBEF6gmy29Zk8OG7%2BYpBg4MpggIUSyJRZHgWTob%2FBnjPl5%2BCWX6kvQC%2BswIbiG3XTJ4JZ0%2FIj1JIFYVtuVu1%2Bf3Yx6Hy9PDHEi6CSeJLvav5hcR7ceMoSfCgyfqSTdA8XmJoAq9FJFUJY%2FSCjHbHkJ3fr3U%2BcNSd2hDcnQArPgSfPdsuXUzX1OTR%2BXbEMfUh2RQom50sZkNg3LUwtr93L6PFWEcIrB%2BmoNY49fxHY7MVzbEbPq84k5d6GXhE7Wns6wmgWy8x3v1ODCnohUniMkQUGZLkg6483rT%2BoduQ%2FZKD1lG5CSbjDG1q6W293DuPf%2F947xfpQmFYn0PzXP9T3%2BI0ZlAqpjmhwPwJks5bA84H1C8P%2FPo3sqpKnGvHX7%2FRNlSt%2BzYFR4NxXZA%2Bd%2F2TTkfvATDAqcnJBjqkAQASC6%2FvYKLC8KlEamLeRcAR94P639F7fgrqrWpHl5copQ3FOlAinSbrEf2HYK1X1%2BaBMhBDHt%2BOmzjXtM4Q4sDO2%2Fdcs4JLS4j7GkgT0UASZBcuRsGo3RtQr01Vu%2FWNeaL32%2FkoFf2TjTB9KyoeFfwzWonknqATsA0oo6011pHlxc52l9l0jMow9yQonaM7LpDoujggfH0cKuZUOhrCZDeeG5I5&X-Amz-Signature=02feb86af373233971808359443739959d4cd3a5e0700c7e87d518b2402716d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
