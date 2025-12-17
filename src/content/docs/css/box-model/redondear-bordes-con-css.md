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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDMP5MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3xYQGWUNfnw6PqORT%2BRb6zyCFgY3ItHzx3p25HA9y8gIgTAzHPARRcogrndixfJV6h%2BLdOCL1g28TK49eA2uz0g8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEVDgLgkl1gagTjWrSrcA2eCUEE%2Fw8C9y%2FgJkU9lBGJv4iMwO%2FeJ3YDofomLYbLY5zDdEmHklLHT%2F9boPVdLAkXVF3lMKUB6Dc%2BVmdtf%2FWp5JR%2FKGkVBImTolLLih%2Fxh6qgFYMPpYepq6KqOWRyZbw7qu0hzX3NlDAYcT1hGK5hfZToN1DjdLXaRltXsiUenPN62JJD8%2FqAxnYzaOSZJubQpoa7%2BxfOoqlpqma83TsCwGjJhogo%2B68QWtHpLVZUbdd%2FuLVPSOL8X3SLFuDnxAwnd09iAO%2FxCOu%2BDhdezzw90m5qPvjZoAmGLYyiPqX0ERzNDMAqW2KD0s5Gqdr1ZNJDNz9D5u5gVMnAy5PzQKnxS4wSO56HvOu2%2F57XXOb3Y5R6pGkizlwoqL5NDIg0vukn7hRh0YclXORKFzn%2FUpEB09bf1m2wiURBFD0HsRA5ymyp9gfW2hSX2n0hA9V5qCejEGk0pUatGxl3hSGZJslnabydt2bcLBrFYI4s0AfS26XI2OlAoRcXVPYoC7GrNf6pz5%2FaIA0MM2%2F3LiDhGvkBiJ3X4YK8LwakXlRAT3z09cw1OK3Rry8GUJUw7S3k1re82nMqnBnx1XAgiS1jmLm85tqQ%2FXV6jYUzpeiuIQVoGXChrvO0srqYSCp%2BRMOqyiMoGOqUBcqtEtgS1FnQDoHmcf1Q2KO8HeYGIh8GsY4FtMYHrDTTbu9gmtuhLGS76S%2F1wr3pkxnk1WpxwHjIxo9DgY3VPL7g%2FkQwGDzMsp4uq2dwc58eXoKvosU0LBa3crjzc7Alpb0icQL%2F4W8yIV4%2B9tWgpCCyqMpn1tEKoTAXxgC08h9Ic4SZbJogg0fiUE8bi9a1qVFQ1dGPc50pqBrpv7bCt4kdzyerD&X-Amz-Signature=5d0292eb17120a843399882eea060396a022fa283c2d197455a7b0c5fe6f286f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDMP5MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3xYQGWUNfnw6PqORT%2BRb6zyCFgY3ItHzx3p25HA9y8gIgTAzHPARRcogrndixfJV6h%2BLdOCL1g28TK49eA2uz0g8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEVDgLgkl1gagTjWrSrcA2eCUEE%2Fw8C9y%2FgJkU9lBGJv4iMwO%2FeJ3YDofomLYbLY5zDdEmHklLHT%2F9boPVdLAkXVF3lMKUB6Dc%2BVmdtf%2FWp5JR%2FKGkVBImTolLLih%2Fxh6qgFYMPpYepq6KqOWRyZbw7qu0hzX3NlDAYcT1hGK5hfZToN1DjdLXaRltXsiUenPN62JJD8%2FqAxnYzaOSZJubQpoa7%2BxfOoqlpqma83TsCwGjJhogo%2B68QWtHpLVZUbdd%2FuLVPSOL8X3SLFuDnxAwnd09iAO%2FxCOu%2BDhdezzw90m5qPvjZoAmGLYyiPqX0ERzNDMAqW2KD0s5Gqdr1ZNJDNz9D5u5gVMnAy5PzQKnxS4wSO56HvOu2%2F57XXOb3Y5R6pGkizlwoqL5NDIg0vukn7hRh0YclXORKFzn%2FUpEB09bf1m2wiURBFD0HsRA5ymyp9gfW2hSX2n0hA9V5qCejEGk0pUatGxl3hSGZJslnabydt2bcLBrFYI4s0AfS26XI2OlAoRcXVPYoC7GrNf6pz5%2FaIA0MM2%2F3LiDhGvkBiJ3X4YK8LwakXlRAT3z09cw1OK3Rry8GUJUw7S3k1re82nMqnBnx1XAgiS1jmLm85tqQ%2FXV6jYUzpeiuIQVoGXChrvO0srqYSCp%2BRMOqyiMoGOqUBcqtEtgS1FnQDoHmcf1Q2KO8HeYGIh8GsY4FtMYHrDTTbu9gmtuhLGS76S%2F1wr3pkxnk1WpxwHjIxo9DgY3VPL7g%2FkQwGDzMsp4uq2dwc58eXoKvosU0LBa3crjzc7Alpb0icQL%2F4W8yIV4%2B9tWgpCCyqMpn1tEKoTAXxgC08h9Ic4SZbJogg0fiUE8bi9a1qVFQ1dGPc50pqBrpv7bCt4kdzyerD&X-Amz-Signature=0f077ed47b4df4a20b66f2014868c0e235daef354bad57d5f6d71dc28e3345cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
