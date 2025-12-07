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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4BKJ3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHiYKnAShUVQ%2F%2F3sPPSjgCnmUm0iVZIRLPlZNRdZbhQIgau7SqUiu8v7UNazYDA%2B9lZ3%2F947LozUjZ4Kx2bT2uqsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0AxTqOtVdw99fNZyrcA5D2hQD94qY6vdFyoYwIraAM%2BL%2FmXXTY9oCW%2FC%2FoYFFBXywG%2BHuh1kHMJN0U8RqM5cwG8ySGtOzmGmG%2BmiQ4OM1lx%2FHZL9EKkRAiMDT8ZBgKX%2FWjuzS4qo4594lLqWGpHrdVGDNJpW4UtBjmoWcwnvVGbrkkef3Uv3uPfAoDqYRlY6Njh%2FR4EszpvunUSkxRKWNzUod75JDjNt41CHRvtxIzF3E21As3scBZW8yMdLpYuhAYOS%2Fwt4gG62h9SbGvxOLPcBKPl9lR9Xdich6AfAa7y5N9aRisoqMeBpzOJ4Xh7O8KUVl1IHzdN8GnN11r%2BKMgRPla8UA5SK%2BkhZv6CQSCsgk1DBgH7bxcggiFkFTZIjRU%2FPq8Au5Rf9uum%2BjR%2BJ2F2%2BWaPoCE2x6%2F6cxMt4y0Dki5zDshRdV2OiH1YmbPYiKsw0Q53Uds3dShbdoQLxJ1CW%2BHrTsgmWaU1kKmdGD2JZTrn3zyIs519%2FiVv7w8ioEIpvntUPjvPp0KMX1skBjKtdN8lhw5B0VvMLkXbWBn9I%2FJWZfCgSH0qBVyBrohtwHIfvj4xVC1edXinnkJ0Pvba0LKzYxjV%2FDrJ47dG5J%2BzoAC2BL8frCYlW7bW%2FGo8QpJg7l2P77VXxk0MJ%2BZ1ckGOqUBzEDbYy0YLAbwDk7Mz0t2A4CXNomZW7If2Lb2OWbsvV8OgYSHwP8ypCoX8YoeMHPneBDTHQmdQ2XshJofjmuDZvBrUAEXnkFGns5nym7rBw3FkNJR1Z5cCM06TiNGCoFyso%2FZN3PgkCw99a9DSLOjZHzT%2BdTtKWTEU%2BSukJNAe9gGcfdJ4ikKRkt%2FKUIcTkhEcAa7dcSBjgrR8rTbOKemxur5UkaX&X-Amz-Signature=4cdfd1e5d4463a8162b7523606dcd4c8b2b12514d946ba8a144583f4723692bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4BKJ3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHiYKnAShUVQ%2F%2F3sPPSjgCnmUm0iVZIRLPlZNRdZbhQIgau7SqUiu8v7UNazYDA%2B9lZ3%2F947LozUjZ4Kx2bT2uqsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0AxTqOtVdw99fNZyrcA5D2hQD94qY6vdFyoYwIraAM%2BL%2FmXXTY9oCW%2FC%2FoYFFBXywG%2BHuh1kHMJN0U8RqM5cwG8ySGtOzmGmG%2BmiQ4OM1lx%2FHZL9EKkRAiMDT8ZBgKX%2FWjuzS4qo4594lLqWGpHrdVGDNJpW4UtBjmoWcwnvVGbrkkef3Uv3uPfAoDqYRlY6Njh%2FR4EszpvunUSkxRKWNzUod75JDjNt41CHRvtxIzF3E21As3scBZW8yMdLpYuhAYOS%2Fwt4gG62h9SbGvxOLPcBKPl9lR9Xdich6AfAa7y5N9aRisoqMeBpzOJ4Xh7O8KUVl1IHzdN8GnN11r%2BKMgRPla8UA5SK%2BkhZv6CQSCsgk1DBgH7bxcggiFkFTZIjRU%2FPq8Au5Rf9uum%2BjR%2BJ2F2%2BWaPoCE2x6%2F6cxMt4y0Dki5zDshRdV2OiH1YmbPYiKsw0Q53Uds3dShbdoQLxJ1CW%2BHrTsgmWaU1kKmdGD2JZTrn3zyIs519%2FiVv7w8ioEIpvntUPjvPp0KMX1skBjKtdN8lhw5B0VvMLkXbWBn9I%2FJWZfCgSH0qBVyBrohtwHIfvj4xVC1edXinnkJ0Pvba0LKzYxjV%2FDrJ47dG5J%2BzoAC2BL8frCYlW7bW%2FGo8QpJg7l2P77VXxk0MJ%2BZ1ckGOqUBzEDbYy0YLAbwDk7Mz0t2A4CXNomZW7If2Lb2OWbsvV8OgYSHwP8ypCoX8YoeMHPneBDTHQmdQ2XshJofjmuDZvBrUAEXnkFGns5nym7rBw3FkNJR1Z5cCM06TiNGCoFyso%2FZN3PgkCw99a9DSLOjZHzT%2BdTtKWTEU%2BSukJNAe9gGcfdJ4ikKRkt%2FKUIcTkhEcAa7dcSBjgrR8rTbOKemxur5UkaX&X-Amz-Signature=33103acc1e1f5a2602cc07e6d0042de7e4e35cfd805b00d63550a484ecf748bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
