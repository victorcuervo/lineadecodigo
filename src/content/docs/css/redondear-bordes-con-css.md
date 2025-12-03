---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VUR472%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGpTpnT8wrkdRkeF1itm4WZbGg7DBfhmi3nu15inyHuRAiBC3%2FrBXJT9DFBPwws3RsmYzyK7URzQ0MUT9olJ4L50NSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMkou9%2Fz78FW7HnIQvKtwDmh%2F34YeVqJYhGvx7bVWk4ljCSLfBRyy8w6Ptc1WfsWhteElhz2X06UySqVJFwoSYDaDW%2BgBSWRNaI6JtRcSdsR2axWEXbLlbx3C%2F69fCrkk3OE9x2K8UVmlQ0E3oDTePlv48Boxu4KFj5brvSDrEziENWWNboeGC%2B9xAR3G6Vv5KyQTvTt2sd9I44s%2BZNHIj6qw%2BAUFy2QzfaP8ayMjjpKxbAkmWNxp9cjhU7pv2Fwgi0enWozu4%2B2SknbZaymKmw4eVOykMEMcDHcdyx0II%2FhfFsjygsTHY%2Buzctq5%2F51y44EQLCkJdtvAZuU3kuuHpBLr0wciSCRZO4PJCNbrP4jN0cq9YhKgxk77v1hmin9tgTSPDH9C5ErZooQBriZRRGY28B%2FtKkn0Uz%2BUldwuCLNKIN7U5ZFiiJui%2FVp8z8zheIsgAVKrtoff6Y1Q%2BxmTnu%2FjczXhdrtWa6Nr6ceWMPnuUUNfrgy2v4YdqIWrPGcPVgBl3BKj4C06RYMWUidsDiP4W83skiLQs7v%2FzKCowyUgYt0V%2Bc1h04PdV5kR8LJdVsFmM%2Bc1P0KBQJWcWscGfp%2Bd%2FieXXB89i1dmSsKnNixslZn7OWfaNFb%2ByzSQl9IJPWxFvVWhq6RkGnhcw2L3CyQY6pgEG9pJI4cSWYrPlWsGVQB7G%2BtTVUblmMbJk6GVvc49ef%2B8CSeHPJgTcqR9myv9dRFbDuhqsEwj04P4%2BVNCSIOBkZ0llL%2BQ1qQNVfHXuksh3Z4gtGnF2KFMyPvlkQv%2BtWSMhAmf4rztc1C2riWzN%2Bb5dypS3VthjBQGptmrBuBLKnTV%2BV1aVqXiIx2gQEyKLN198R2KtgRhWBzHMpdqDLnNRWeZX5Zi5&X-Amz-Signature=58391bbb80c8af689b32c95a4a65f35535721354fa0aa67a565cab6613f529d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VUR472%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGpTpnT8wrkdRkeF1itm4WZbGg7DBfhmi3nu15inyHuRAiBC3%2FrBXJT9DFBPwws3RsmYzyK7URzQ0MUT9olJ4L50NSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMkou9%2Fz78FW7HnIQvKtwDmh%2F34YeVqJYhGvx7bVWk4ljCSLfBRyy8w6Ptc1WfsWhteElhz2X06UySqVJFwoSYDaDW%2BgBSWRNaI6JtRcSdsR2axWEXbLlbx3C%2F69fCrkk3OE9x2K8UVmlQ0E3oDTePlv48Boxu4KFj5brvSDrEziENWWNboeGC%2B9xAR3G6Vv5KyQTvTt2sd9I44s%2BZNHIj6qw%2BAUFy2QzfaP8ayMjjpKxbAkmWNxp9cjhU7pv2Fwgi0enWozu4%2B2SknbZaymKmw4eVOykMEMcDHcdyx0II%2FhfFsjygsTHY%2Buzctq5%2F51y44EQLCkJdtvAZuU3kuuHpBLr0wciSCRZO4PJCNbrP4jN0cq9YhKgxk77v1hmin9tgTSPDH9C5ErZooQBriZRRGY28B%2FtKkn0Uz%2BUldwuCLNKIN7U5ZFiiJui%2FVp8z8zheIsgAVKrtoff6Y1Q%2BxmTnu%2FjczXhdrtWa6Nr6ceWMPnuUUNfrgy2v4YdqIWrPGcPVgBl3BKj4C06RYMWUidsDiP4W83skiLQs7v%2FzKCowyUgYt0V%2Bc1h04PdV5kR8LJdVsFmM%2Bc1P0KBQJWcWscGfp%2Bd%2FieXXB89i1dmSsKnNixslZn7OWfaNFb%2ByzSQl9IJPWxFvVWhq6RkGnhcw2L3CyQY6pgEG9pJI4cSWYrPlWsGVQB7G%2BtTVUblmMbJk6GVvc49ef%2B8CSeHPJgTcqR9myv9dRFbDuhqsEwj04P4%2BVNCSIOBkZ0llL%2BQ1qQNVfHXuksh3Z4gtGnF2KFMyPvlkQv%2BtWSMhAmf4rztc1C2riWzN%2Bb5dypS3VthjBQGptmrBuBLKnTV%2BV1aVqXiIx2gQEyKLN198R2KtgRhWBzHMpdqDLnNRWeZX5Zi5&X-Amz-Signature=1acbdedac12a2c510c2a1edf392b696556995ecd4cd4e73ff2be675f1c71dac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
