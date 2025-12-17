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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON3W6FH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUEj1AjZ4iJqQXtFrdmgFTBcPUw19dRym8YawZAA3TAiBD68tBP85EJfZkoOac5uSokAGdiF5YRkF9etn%2FxHF0gyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM8AWM947vbkG05FIoKtwDcx0wuGv2HJY0iCoP%2BZjFyoRwWDd2bR2oGngUocaqjE9t%2BUNW5h5RUsCso%2Bs8d%2B%2B3%2BjAox2Hz7udnhTd84nufwZjwxnmR6FnId%2FVRVrjo1qNlUwlhYy9jXQX3LmD%2BX5ifrmUJsfRPsGa358nwdEdLeVEpmrqMyhpTeeSIknydlZ8yxOQvSe3BGxdtP%2F9e2fdAPOVIRfnG5YpOoizBHugWfeOKotJmXUIcf4fHAYAjpxAPbYSXRYL00o6OsAJBrLRvo%2FS6oMcbUFMZ3olkf%2BpSDGf6tOttixKWQZCeraGYDm9RUugp5KiBKN8J3MUzwKiVsYs29Z4mU6iv5UaLF503pIacimxqAEzrCDoVWnMorYTODNOXKkSVMJaBEIMz8zHot%2F43HjXtY0pnM99V57i4gO%2FfjoBx8LQsF2znKkGzKmMgCIe6dK3OLQPurZlNUi4qbBnxSD0bt1Ys2NTMpLG%2BhcK%2FcfXLYJYHAoEXnShGyORDwnJgRbyCxFHqpmVYG4iTav%2Fj6wBcfsoNNqVJwJD127uPPCrf4AlCCc%2B9SwAgYP5Bomt0Ns4y9DwWPaV7fOIWikP10JOz43WfJLIzfCUcvVe1F52NrqHE7CATqMGnbue8krAXAnx3TKR2nIYwgYOJygY6pgGlw3Z761fyNaqowv6bk%2FYEB6TBoNHCNclhs7l%2FHGyv85STlVZ5qNecf6e50ZxEjSM%2B%2B382H1%2FTET%2FSJLOh58ONr%2FqUlnhS6%2FRrq1yQCqRNpWiMwZ2cwVSwjGy%2Bk3sBOWlx6SqWN0n4f%2Bl1l1RydKMjT7Yq2PBkgYqn%2Blez%2F7Pc6Q738fqNiixHTW5x0AvDEfP%2B3HswQMWrppfijxqav7buYeCg6VdF&X-Amz-Signature=775a492e5a71f1fdc6a6b810cdd460f1c81ecdb822a2a8dce683855fb5b6b503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON3W6FH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUEj1AjZ4iJqQXtFrdmgFTBcPUw19dRym8YawZAA3TAiBD68tBP85EJfZkoOac5uSokAGdiF5YRkF9etn%2FxHF0gyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM8AWM947vbkG05FIoKtwDcx0wuGv2HJY0iCoP%2BZjFyoRwWDd2bR2oGngUocaqjE9t%2BUNW5h5RUsCso%2Bs8d%2B%2B3%2BjAox2Hz7udnhTd84nufwZjwxnmR6FnId%2FVRVrjo1qNlUwlhYy9jXQX3LmD%2BX5ifrmUJsfRPsGa358nwdEdLeVEpmrqMyhpTeeSIknydlZ8yxOQvSe3BGxdtP%2F9e2fdAPOVIRfnG5YpOoizBHugWfeOKotJmXUIcf4fHAYAjpxAPbYSXRYL00o6OsAJBrLRvo%2FS6oMcbUFMZ3olkf%2BpSDGf6tOttixKWQZCeraGYDm9RUugp5KiBKN8J3MUzwKiVsYs29Z4mU6iv5UaLF503pIacimxqAEzrCDoVWnMorYTODNOXKkSVMJaBEIMz8zHot%2F43HjXtY0pnM99V57i4gO%2FfjoBx8LQsF2znKkGzKmMgCIe6dK3OLQPurZlNUi4qbBnxSD0bt1Ys2NTMpLG%2BhcK%2FcfXLYJYHAoEXnShGyORDwnJgRbyCxFHqpmVYG4iTav%2Fj6wBcfsoNNqVJwJD127uPPCrf4AlCCc%2B9SwAgYP5Bomt0Ns4y9DwWPaV7fOIWikP10JOz43WfJLIzfCUcvVe1F52NrqHE7CATqMGnbue8krAXAnx3TKR2nIYwgYOJygY6pgGlw3Z761fyNaqowv6bk%2FYEB6TBoNHCNclhs7l%2FHGyv85STlVZ5qNecf6e50ZxEjSM%2B%2B382H1%2FTET%2FSJLOh58ONr%2FqUlnhS6%2FRrq1yQCqRNpWiMwZ2cwVSwjGy%2Bk3sBOWlx6SqWN0n4f%2Bl1l1RydKMjT7Yq2PBkgYqn%2Blez%2F7Pc6Q738fqNiixHTW5x0AvDEfP%2B3HswQMWrppfijxqav7buYeCg6VdF&X-Amz-Signature=a0471720273f217861443a24f589f6772ca6bd24d7c3a5a4627cf31e12f53424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
