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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPDVI2U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3qXdEMM%2Fo3Lptrh2hbNBJ2foy2rCoo%2FZhus9Hkd%2F77gIhAK9oJXiBLyvfguYv6tQuUkRzva0pKY%2F7llpLL7wr%2FBuxKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNoIkFo5twq%2BIb2Jwq3AOaF56A%2FOo81G7APLfXZ39z%2BSWe%2FtFJsfhT0AMTfEVLCRIC2qm4uodzpSVhhqcMAjI%2F5BOfs9zype05nki1LKwqNU0zhMHZOfz3mI%2Bo%2BnE474tAObX6YoQthZ1wA2CLVIuB3zObaDe5urSKrY1%2FYFlshgnRnKh%2BIK%2B36DWzM5GmIaeq7llkHGXMBQPl2w1hij%2Flz8jKVsoYeRCM8E795cqo2B0vDgzMgRgFGxSYqPnJQ8unCd2bov54AQw0NtESphTOeMogFO2ke3izA0X%2FR2D3iuZkOD7znUazTku5n6MzZUrhxbq95mZaNI%2F3asyMkKBeZXvE71mt1kGbZzlufXmnm7JKlVSs%2FwjQ19wwXC19FIbZPlixjR1TZ9XDADCsRf9rg13BqXf7s2Yo1YFVVEryX3SrzaWe0KcpCLYbtkpOv7BhFYNSRf%2FWsGlnTMy02t%2Bp4xmOi86ELnyRoCoDSRDn7Vx0RsUf%2B8wzez%2BJ4FS5uAr98tyFzA9px56St5a5TIjygm2Puz2YIqrFvfp8D6GhxIdy0Ydnbgk1x7NlTXxVSsIgy7puVAvG%2BJRgvE3rZIHX%2F320tp%2BonOQ5NKkQKiMSbMQoEBZuuvhfpzvLATPIMdfIwIZ5hIUUEwOu7zC3yt7JBjqkAXpAT%2FzMaPikEgCeOE4pvDU4fvEmM1te4hq0SpVCWQkfQTLbYeJjeO%2Bmxld%2FTnp0GtboVG9rQ%2BWqfBaW3099xYJbLsf9gcR6WA1erQzZHYO2Wlyz0rSbMI0UuCgUEhZL9LZ%2F6AgXW6uPV2Wp%2FjM5ZuwXvxvTipvtwZCm%2Bqe19L78JUzaPwkzS75HTLyA3ePErRjtYlh3hpDm0NFS2N56%2BgRKKzsQ&X-Amz-Signature=6c28135c7f7999ff4e70d2744fb70984fec6699a14dfb480ac95fb1d322d87c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPDVI2U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3qXdEMM%2Fo3Lptrh2hbNBJ2foy2rCoo%2FZhus9Hkd%2F77gIhAK9oJXiBLyvfguYv6tQuUkRzva0pKY%2F7llpLL7wr%2FBuxKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNoIkFo5twq%2BIb2Jwq3AOaF56A%2FOo81G7APLfXZ39z%2BSWe%2FtFJsfhT0AMTfEVLCRIC2qm4uodzpSVhhqcMAjI%2F5BOfs9zype05nki1LKwqNU0zhMHZOfz3mI%2Bo%2BnE474tAObX6YoQthZ1wA2CLVIuB3zObaDe5urSKrY1%2FYFlshgnRnKh%2BIK%2B36DWzM5GmIaeq7llkHGXMBQPl2w1hij%2Flz8jKVsoYeRCM8E795cqo2B0vDgzMgRgFGxSYqPnJQ8unCd2bov54AQw0NtESphTOeMogFO2ke3izA0X%2FR2D3iuZkOD7znUazTku5n6MzZUrhxbq95mZaNI%2F3asyMkKBeZXvE71mt1kGbZzlufXmnm7JKlVSs%2FwjQ19wwXC19FIbZPlixjR1TZ9XDADCsRf9rg13BqXf7s2Yo1YFVVEryX3SrzaWe0KcpCLYbtkpOv7BhFYNSRf%2FWsGlnTMy02t%2Bp4xmOi86ELnyRoCoDSRDn7Vx0RsUf%2B8wzez%2BJ4FS5uAr98tyFzA9px56St5a5TIjygm2Puz2YIqrFvfp8D6GhxIdy0Ydnbgk1x7NlTXxVSsIgy7puVAvG%2BJRgvE3rZIHX%2F320tp%2BonOQ5NKkQKiMSbMQoEBZuuvhfpzvLATPIMdfIwIZ5hIUUEwOu7zC3yt7JBjqkAXpAT%2FzMaPikEgCeOE4pvDU4fvEmM1te4hq0SpVCWQkfQTLbYeJjeO%2Bmxld%2FTnp0GtboVG9rQ%2BWqfBaW3099xYJbLsf9gcR6WA1erQzZHYO2Wlyz0rSbMI0UuCgUEhZL9LZ%2F6AgXW6uPV2Wp%2FjM5ZuwXvxvTipvtwZCm%2Bqe19L78JUzaPwkzS75HTLyA3ePErRjtYlh3hpDm0NFS2N56%2BgRKKzsQ&X-Amz-Signature=5718ed16df4058d32b0fd7a16b818632510ad575770cc3186e3cdf45c6d7e152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
