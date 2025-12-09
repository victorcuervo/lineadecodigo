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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645563KIW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS9wnuvMbIZwkNEEUt8TxIZhTSDTvntmOBSO3AEcMmjAiEAo4uipYGZuV5q%2FqfT6ndQWjruzx8%2F6GMlts%2F5WGovT%2BsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNLPu519OwHJfw76ircAwWDZnZmQWAd1XLns%2FmdCX1rdqsusIWJWmre1N%2FVUhGMOB1vTveNWo3GrGv7G9iv1DbhoPlBOKwi%2B%2Bh5UkFpiOYwIhlFlhQZEwemTipDqdnGBeEK6E5v%2BUjomejmZU7SamPwW6u5D8prnutEIR2F670EBRJb%2FCttZsdbwvR9l7UjJ9BRAeHTOhGIRFkXsm9%2BeBhb3hIFFBSdh%2BdG5yIB23ZWxeUTQAfnjCDceppKlCA4IlBY%2BRGm4Qb4vCZWeuN4B49srZR5abcxpyeL3lxZJjoUxx4CYtc8ORn27N6TFZ6dyxNyZw0xUFNyfIkRCBQV8%2BO86TzGWTgD%2FUJEG7nq8vt6Fj%2B5FSwuEfQNS44As%2FecWo20VMcS6pApX4Zsgfci68G3Vz1%2F5uEtQkZ1JmX17Dq4RfIsqAP4%2BlZvIhG%2B6cBas%2Fq6Eqb6TFa6dWjGxbnoCeAPQ70YJlPD0ehgZsZ5%2FLO8LeqFRypg3OJxi7vfdaGheZMIicN0S3Yl%2FqlKT6TvPfiPX2B4FLPA1TxKMPpuZ1KcCCzkTwnMKy2EEfQ4iUMx19oZcbFscvkVqRdYj65jVIRpDat91IZOh5MJCIa%2Ff81zFzBzwQ3BTH%2BylDuvji8hUnczgFN%2FhnaXP2S2MLrD3ckGOqUBok4X7VO6N1N1m8M8AlMWqz2fXE4m0ucDZ6djdwUbjjnp3uv1M1PFwTCEsAx%2FYlvqmh4%2FcBZbpNhFop0drSk2UXWzj7AO0EojKXr74rFCbhwHYpMREEh9NSpBr5QDaL5YuX6C3k0oLd%2FXrg%2FB0iepY8O68%2BExR3AybzyPLZN0p72bmZzhxlenHi5yCWiNcUmobrudBAwx%2Fh2IJsf2Il%2BzAsTSXAmG&X-Amz-Signature=6f02098086efc05653fe6ec2332eb57262697da3b655f4b3393ec348af32c832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645563KIW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS9wnuvMbIZwkNEEUt8TxIZhTSDTvntmOBSO3AEcMmjAiEAo4uipYGZuV5q%2FqfT6ndQWjruzx8%2F6GMlts%2F5WGovT%2BsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNLPu519OwHJfw76ircAwWDZnZmQWAd1XLns%2FmdCX1rdqsusIWJWmre1N%2FVUhGMOB1vTveNWo3GrGv7G9iv1DbhoPlBOKwi%2B%2Bh5UkFpiOYwIhlFlhQZEwemTipDqdnGBeEK6E5v%2BUjomejmZU7SamPwW6u5D8prnutEIR2F670EBRJb%2FCttZsdbwvR9l7UjJ9BRAeHTOhGIRFkXsm9%2BeBhb3hIFFBSdh%2BdG5yIB23ZWxeUTQAfnjCDceppKlCA4IlBY%2BRGm4Qb4vCZWeuN4B49srZR5abcxpyeL3lxZJjoUxx4CYtc8ORn27N6TFZ6dyxNyZw0xUFNyfIkRCBQV8%2BO86TzGWTgD%2FUJEG7nq8vt6Fj%2B5FSwuEfQNS44As%2FecWo20VMcS6pApX4Zsgfci68G3Vz1%2F5uEtQkZ1JmX17Dq4RfIsqAP4%2BlZvIhG%2B6cBas%2Fq6Eqb6TFa6dWjGxbnoCeAPQ70YJlPD0ehgZsZ5%2FLO8LeqFRypg3OJxi7vfdaGheZMIicN0S3Yl%2FqlKT6TvPfiPX2B4FLPA1TxKMPpuZ1KcCCzkTwnMKy2EEfQ4iUMx19oZcbFscvkVqRdYj65jVIRpDat91IZOh5MJCIa%2Ff81zFzBzwQ3BTH%2BylDuvji8hUnczgFN%2FhnaXP2S2MLrD3ckGOqUBok4X7VO6N1N1m8M8AlMWqz2fXE4m0ucDZ6djdwUbjjnp3uv1M1PFwTCEsAx%2FYlvqmh4%2FcBZbpNhFop0drSk2UXWzj7AO0EojKXr74rFCbhwHYpMREEh9NSpBr5QDaL5YuX6C3k0oLd%2FXrg%2FB0iepY8O68%2BExR3AybzyPLZN0p72bmZzhxlenHi5yCWiNcUmobrudBAwx%2Fh2IJsf2Il%2BzAsTSXAmG&X-Amz-Signature=5d49ecc205d408f064394456878202cd7c1c31ab76b4da0bb5eb94e099642052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
