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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6URSUM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPWXwtBZmj47Od2zIrW6QaXMoEITcD7gNVx00%2FjLjdRAiEA4fougvF0Z5pUVQNq9yxnD%2FZpw1wQ3WRwLNwk4B2HP74q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNMiZ8FwAAhjOx5cRyrcAyAwjN%2FbPAswzxIEJdMRAnN6r4nWLvDnd7luSVCFd0C8r3sdN5z0MEp6xIPSZnRqpPKE6SlokBSxPJKqOjpz9B%2BcWINXUBNEw7JOKGuStaQ5al6iiC5qk8uKL8eGBHgvzvi2HWht3VnE4qZBsS4PH7kT5PDFC3pCsjSfjYVnwno7d2Br3V%2BQ2%2FF%2BufyB3GqWcMpk4jCD0Gy46pTQDWgJkl5NLgy7%2BWj60qyFmghlxfwZwmFMEncLlMdrQ1qhtnacLy2Ee%2BRJG03%2Fq%2FkMgA5YPZLWWcGjPHkCkhF%2BM4RzqV1%2Fm%2FT3mYIGGXkvVYMhLlrVFTEiiS%2FcsFRHos8TYYmPro%2F6tDLeL%2Byo1OMACNiMKjSqsQdP9jLrR4TCOluE4blbUsS0v9Rmncb2dxoqOADMLbyVFCOLPDqEwlCeG0dESvHhe2zxzDo0JS0F3uCG4yDHM1BkmUGOZOp2zSfdB5wbr%2FLtJCwgTwdTkcqFL33Gd6p4G3QcUz8KYA6nTl96HCVyEbw6jGRqtzWGbsTujvCYlQebpBsML5T2v%2BlJ%2B9gAnkkRJGB47oR48czZOceTf6BrAIUCF0H%2BZm3yR2EMuMrIYAZ3AoNleMDfaLShTVSMZknimi8jBCDlgtc7wQNZMIDOyskGOqUBR%2FAa%2Fp6olry5Zr8XAr3tOj9f4oOvV78elQaXmw9te2BrP4KzDg0qfcXGa4%2FVnGYrQ78IsR9QfPbSE%2FWG0EOyziYVWZPjeLUXWU76barvUNqZWDuXFEZRTrGNVEdE8aohKxXqijarVfdlcxqpeny0T%2FG60RIp6GBAqvoVpoTmx2rJ7kJfty1es%2F66LRLnJUka1hU%2BCKZXmatqDkuFl03HcVz%2B4tnr&X-Amz-Signature=9b3c0deddc0ab7c07d7d085f24a4a677446f1bb983230de4c1f13df228432318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6URSUM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPWXwtBZmj47Od2zIrW6QaXMoEITcD7gNVx00%2FjLjdRAiEA4fougvF0Z5pUVQNq9yxnD%2FZpw1wQ3WRwLNwk4B2HP74q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNMiZ8FwAAhjOx5cRyrcAyAwjN%2FbPAswzxIEJdMRAnN6r4nWLvDnd7luSVCFd0C8r3sdN5z0MEp6xIPSZnRqpPKE6SlokBSxPJKqOjpz9B%2BcWINXUBNEw7JOKGuStaQ5al6iiC5qk8uKL8eGBHgvzvi2HWht3VnE4qZBsS4PH7kT5PDFC3pCsjSfjYVnwno7d2Br3V%2BQ2%2FF%2BufyB3GqWcMpk4jCD0Gy46pTQDWgJkl5NLgy7%2BWj60qyFmghlxfwZwmFMEncLlMdrQ1qhtnacLy2Ee%2BRJG03%2Fq%2FkMgA5YPZLWWcGjPHkCkhF%2BM4RzqV1%2Fm%2FT3mYIGGXkvVYMhLlrVFTEiiS%2FcsFRHos8TYYmPro%2F6tDLeL%2Byo1OMACNiMKjSqsQdP9jLrR4TCOluE4blbUsS0v9Rmncb2dxoqOADMLbyVFCOLPDqEwlCeG0dESvHhe2zxzDo0JS0F3uCG4yDHM1BkmUGOZOp2zSfdB5wbr%2FLtJCwgTwdTkcqFL33Gd6p4G3QcUz8KYA6nTl96HCVyEbw6jGRqtzWGbsTujvCYlQebpBsML5T2v%2BlJ%2B9gAnkkRJGB47oR48czZOceTf6BrAIUCF0H%2BZm3yR2EMuMrIYAZ3AoNleMDfaLShTVSMZknimi8jBCDlgtc7wQNZMIDOyskGOqUBR%2FAa%2Fp6olry5Zr8XAr3tOj9f4oOvV78elQaXmw9te2BrP4KzDg0qfcXGa4%2FVnGYrQ78IsR9QfPbSE%2FWG0EOyziYVWZPjeLUXWU76barvUNqZWDuXFEZRTrGNVEdE8aohKxXqijarVfdlcxqpeny0T%2FG60RIp6GBAqvoVpoTmx2rJ7kJfty1es%2F66LRLnJUka1hU%2BCKZXmatqDkuFl03HcVz%2B4tnr&X-Amz-Signature=8724c2d8caac5989d2b74d2c7bb2f4340e525052619682f974763e81bcd12c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
