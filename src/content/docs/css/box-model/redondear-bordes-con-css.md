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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJGWS3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnROxmRK283%2BuJ%2B9lcaJp7eiBgDR6Fm1N1f%2BV5%2Bs2dqAIgYXJy9Mgkt7p5mb56nyk%2FdTTSfuY82CEdojoaf7LL0Qkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOu3F9R9P%2F4rsZ2FZyrcA2Qn7EWFtbH64IprTq5IAEL5Z6kDlLmRPcpWqk%2Bsex%2Fus4JqrQV7ZZ4F4ihYviOlu7M1VCM0vUF2y3I302qoLu1adjJzq%2B5ryxnWr035pOFven%2FKBYETnHDzrCjnOG0WcFaGD4qpCTODS4nhejgeU%2Biw5WvoUOPTRRlX%2B7n2btSIqDw%2BwQWQvd0rE1BHujKVm0P2cQ3NDJgzUg7pv%2Bf5TUyHnJBGtcDEVo3m2M2SahkfkjNOvk7jwGTjJdkLSXiienJjGsfHC%2FkjQ7Ka4rU6HHlpwojQUs57UOjAML%2B5ed%2Bnr9xfZz8KORUGSiVoYnJC1rpr5%2FjnkaU9o6HkIyxfVck1ICs3C6QhIadtwJF8ZlmUG9BnUM7wiNFW2aXuCnVD7zw9e8lNRZU%2Fbr6ybrsmNQHl6gDzBX53JJXf8Zg0AwEFRy88grK7dX4DxcYHGMrIwqnZkwyK4qEHCL76G5l6puEQ9HxwnXHUYyfkAner4WgG%2Bghvzb8thGtWY%2FjwncvDPgdAHKpYle6J%2Fei1LpMhlos4n%2Fy%2FQ%2BX1upf6KyFrd3XjOhecoJYMvuXcKgGUs2RghflMVpwgqim4J%2Bb34IJioeVyTiqiYFdfJz7Npf88cAPDQbC539N2pXHTQ5NZMOPhisoGOqUBT7BHOMEaLFg7RKmJOCvlq%2Bgb9XOcP4%2FX7r%2FzptiLemmFyE4yzdAgMIJnkhJNOlTmHDv2P3ESWIG6Mk7zVbntaDqT1QT6xZmnVqUfYFinl3X3sdFtvC%2F18QoJAIia7L0sz8D5zXrAbTUlNCLRO6Xw3IqmTJbzBzEYovmvzyDBB2QThhR3E88RYe1Kk46%2FiXUbEGQ9CZlQEqq1PBq6ia86taBzHo4m&X-Amz-Signature=ce5347dfb832b3dfe2c08459a5cca6bafac4c676495ff37e11c1deb2fdcc3bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJGWS3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnROxmRK283%2BuJ%2B9lcaJp7eiBgDR6Fm1N1f%2BV5%2Bs2dqAIgYXJy9Mgkt7p5mb56nyk%2FdTTSfuY82CEdojoaf7LL0Qkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOu3F9R9P%2F4rsZ2FZyrcA2Qn7EWFtbH64IprTq5IAEL5Z6kDlLmRPcpWqk%2Bsex%2Fus4JqrQV7ZZ4F4ihYviOlu7M1VCM0vUF2y3I302qoLu1adjJzq%2B5ryxnWr035pOFven%2FKBYETnHDzrCjnOG0WcFaGD4qpCTODS4nhejgeU%2Biw5WvoUOPTRRlX%2B7n2btSIqDw%2BwQWQvd0rE1BHujKVm0P2cQ3NDJgzUg7pv%2Bf5TUyHnJBGtcDEVo3m2M2SahkfkjNOvk7jwGTjJdkLSXiienJjGsfHC%2FkjQ7Ka4rU6HHlpwojQUs57UOjAML%2B5ed%2Bnr9xfZz8KORUGSiVoYnJC1rpr5%2FjnkaU9o6HkIyxfVck1ICs3C6QhIadtwJF8ZlmUG9BnUM7wiNFW2aXuCnVD7zw9e8lNRZU%2Fbr6ybrsmNQHl6gDzBX53JJXf8Zg0AwEFRy88grK7dX4DxcYHGMrIwqnZkwyK4qEHCL76G5l6puEQ9HxwnXHUYyfkAner4WgG%2Bghvzb8thGtWY%2FjwncvDPgdAHKpYle6J%2Fei1LpMhlos4n%2Fy%2FQ%2BX1upf6KyFrd3XjOhecoJYMvuXcKgGUs2RghflMVpwgqim4J%2Bb34IJioeVyTiqiYFdfJz7Npf88cAPDQbC539N2pXHTQ5NZMOPhisoGOqUBT7BHOMEaLFg7RKmJOCvlq%2Bgb9XOcP4%2FX7r%2FzptiLemmFyE4yzdAgMIJnkhJNOlTmHDv2P3ESWIG6Mk7zVbntaDqT1QT6xZmnVqUfYFinl3X3sdFtvC%2F18QoJAIia7L0sz8D5zXrAbTUlNCLRO6Xw3IqmTJbzBzEYovmvzyDBB2QThhR3E88RYe1Kk46%2FiXUbEGQ9CZlQEqq1PBq6ia86taBzHo4m&X-Amz-Signature=a8155b34ceabf7825e2882fd74235b41f1aaca180e4faab7804985af1900e7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
