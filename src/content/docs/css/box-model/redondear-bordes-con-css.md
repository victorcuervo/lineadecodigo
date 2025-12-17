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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBGQPYYK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvdNdHDOE8jVvfYPCIpF5q2IdV77Zfx8IewBENqOgR0gIhAP2kD%2B8F9w8jYCDO7Gf%2FsFeDO1OjdxuTWCtTsVDpQDBRKv8DCHIQABoMNjM3NDIzMTgzODA1IgyyETF%2FkEYw2FhT2m0q3AM7sXKvFQhzWCxr2pGhrZi7IHtqDp3l2tlOOOgsrG90iacyc6mbyojP4F1tLv%2BtDURCjJRRXq%2FW5o1DIj3qSyQ0Pl7B3UoI%2B8l9HQIixV2ToDM9AuijLs9KG1FxzSjjvieVD%2BsuTpaQ1wR0g0s%2BfLW%2FaCT9ANZZqops7O6JbCGumbzvm0tpLpEeAIsFz%2BzvQY1ud9mGWpLKXNjHZdx15AjwNl3ydc3te9lGqew6HT53PohjYejD9XsRaF7S5hGw5oiEXmMiu4tTphxAvFogYgW4s0eIcJj0qDlq1tTFEeM4rwtm%2BnNqTc8go8ZhY7DuCoa8dQ%2BjvsUHmJ9JCnbdQRQsqrgtnBQqHdrhHBikfieojnNriSxdTNfMZMQSx%2FSt16OfKzGPQZVIPU3UMG09u5TQP%2BVoEaVdFnZVKJDZjjzkClYU6Up48mPwMcrfP7kUQPGAHz%2F3MmpYoqo%2B8TIhJ3dBGM7hkYgfIugllWO9U%2FCnb%2FgGOh6HMncA7PyYthN0Cd1lnNLnOXm319516LNUGTHyWXdD%2Fe6ZRo08IcGhnd6dEKAzmoLD1MT6T6ghqsL7s3AjuW9OoXRpMCTm2m52LF94d%2Fsxmx17b5UZ1fZAMByaiJurtJF1jmzRy70m8TDD%2B4fKBjqkAQ51ZHxjGn8V%2FOYOtYHQhMu0SOft6w8NSBFFcmMRGkSyO8Kj8fuFKIkVB0PkgElB5vWF8XqmwtyPk9nVULP2z44tMKzaV6%2FWvog9H2JSJDK%2BWcNOxIsID9U%2BzrC4tSO7NB8b%2FsH5sRwX28sSiN%2B0lYiOEgcEClcGGwKXmVc1fcVbzrZuuZntAH0dW2e%2FL6gQhrEusUXi%2Fcz6FhpYnk9THmTdP7Ws&X-Amz-Signature=7c2312c1a2f23af954c4cf331ed28e9db990a5fa61204ea196f68d015f30f4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBGQPYYK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvdNdHDOE8jVvfYPCIpF5q2IdV77Zfx8IewBENqOgR0gIhAP2kD%2B8F9w8jYCDO7Gf%2FsFeDO1OjdxuTWCtTsVDpQDBRKv8DCHIQABoMNjM3NDIzMTgzODA1IgyyETF%2FkEYw2FhT2m0q3AM7sXKvFQhzWCxr2pGhrZi7IHtqDp3l2tlOOOgsrG90iacyc6mbyojP4F1tLv%2BtDURCjJRRXq%2FW5o1DIj3qSyQ0Pl7B3UoI%2B8l9HQIixV2ToDM9AuijLs9KG1FxzSjjvieVD%2BsuTpaQ1wR0g0s%2BfLW%2FaCT9ANZZqops7O6JbCGumbzvm0tpLpEeAIsFz%2BzvQY1ud9mGWpLKXNjHZdx15AjwNl3ydc3te9lGqew6HT53PohjYejD9XsRaF7S5hGw5oiEXmMiu4tTphxAvFogYgW4s0eIcJj0qDlq1tTFEeM4rwtm%2BnNqTc8go8ZhY7DuCoa8dQ%2BjvsUHmJ9JCnbdQRQsqrgtnBQqHdrhHBikfieojnNriSxdTNfMZMQSx%2FSt16OfKzGPQZVIPU3UMG09u5TQP%2BVoEaVdFnZVKJDZjjzkClYU6Up48mPwMcrfP7kUQPGAHz%2F3MmpYoqo%2B8TIhJ3dBGM7hkYgfIugllWO9U%2FCnb%2FgGOh6HMncA7PyYthN0Cd1lnNLnOXm319516LNUGTHyWXdD%2Fe6ZRo08IcGhnd6dEKAzmoLD1MT6T6ghqsL7s3AjuW9OoXRpMCTm2m52LF94d%2Fsxmx17b5UZ1fZAMByaiJurtJF1jmzRy70m8TDD%2B4fKBjqkAQ51ZHxjGn8V%2FOYOtYHQhMu0SOft6w8NSBFFcmMRGkSyO8Kj8fuFKIkVB0PkgElB5vWF8XqmwtyPk9nVULP2z44tMKzaV6%2FWvog9H2JSJDK%2BWcNOxIsID9U%2BzrC4tSO7NB8b%2FsH5sRwX28sSiN%2B0lYiOEgcEClcGGwKXmVc1fcVbzrZuuZntAH0dW2e%2FL6gQhrEusUXi%2Fcz6FhpYnk9THmTdP7Ws&X-Amz-Signature=e0ca964eede87de298cead3273ae4ea4182352893e21d6cec267fd68cc5c18ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
