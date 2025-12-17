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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGK5TIA2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTyDa4KWaLbF29m7mQJBYp9KqPphhA44LQ2cB%2Bq4KIkAiBup0J860evJlTlQQvx%2Bz9ZaxlFW2syIMSv0jw6LPe0gSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMGmMJaj9UVmonPtISKtwDHD2q4AvgBjmYwwO3THAkHTjgd4%2Bohq2vSGnPaQH%2FYAnM7rFjUFi0k%2F%2BFBFdqYBjwt2DBW914zE6jLifUDGZbwNM%2Bv6xu7z8obfywJlINKF4Or%2FbbRuBKc7n29xoh0qaDGtRFIaITMISbJe%2FkOSQx0YVjYDNtCcxyUDD2oKhtTEsChaIt%2BXDAIJpZ2BiuyMX%2BbRZGK6FEmqgO3Xu6%2FfI9pmOtALeANDGXbO9%2BnEjxw98eViQrLN0u%2FvmyS1L9erGodW6wLEAJiE9rNpVUQ9Ku2KpJ37TtHjCEVFJdbtVJLVLi7LAGNJsW2X%2FsvF2el5aCAy4NPfVt1Ehllu64tGQy8vyO5vj%2FzwyJ2fLC%2B6Evk38UpQ7QwNMPiW76RkNoZ4XURkfXgVE4aJn4XU8x8Ahl3ENBIb4%2BegZnsk0tiy47%2FMOq3fuLfEIQEwCYipBQbhbG5qhCSayuODs1rg2o2gRtlVbB5owhFhEBu%2Bj2zYqCrrsXJ6X3Xg0mttENBuTd4OXi%2BK4YRFjFp295d52InERR66VfULB6WYEu23XebrD3KqnRZfWXTwApTd9tjEWWuu8CVRF0nUC2%2BGf99A%2B6SVmYhs1LxDlB%2BziqjQ6ITnm8TlhwO%2FhkFfCYLjaLjBwwt8aKygY6pgGaaniGAWTJ1gvTOhaQnmcwkeOaKdJPX2F3V59XHQftpDVGvCrXKU1M242QCFAumc%2FlqIsKehdKZCgxdwCmkrY%2FShIp2d0GsyRT7MQzDat2bQdx5NYKKTBvgXvjfa1l5WHeY8mgWYM5wqxUZIcxkXF6XeRjZn2cW%2F0aDgU774miJdtb8tgTNR%2BBDpHISfov8lJFpPcD86%2B564kVZCiNRIpuwPBFu5rc&X-Amz-Signature=45b4fb5a2910abcab070d559fe2d9daec16a49a620d7216e3aae06457c5291b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGK5TIA2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTyDa4KWaLbF29m7mQJBYp9KqPphhA44LQ2cB%2Bq4KIkAiBup0J860evJlTlQQvx%2Bz9ZaxlFW2syIMSv0jw6LPe0gSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMGmMJaj9UVmonPtISKtwDHD2q4AvgBjmYwwO3THAkHTjgd4%2Bohq2vSGnPaQH%2FYAnM7rFjUFi0k%2F%2BFBFdqYBjwt2DBW914zE6jLifUDGZbwNM%2Bv6xu7z8obfywJlINKF4Or%2FbbRuBKc7n29xoh0qaDGtRFIaITMISbJe%2FkOSQx0YVjYDNtCcxyUDD2oKhtTEsChaIt%2BXDAIJpZ2BiuyMX%2BbRZGK6FEmqgO3Xu6%2FfI9pmOtALeANDGXbO9%2BnEjxw98eViQrLN0u%2FvmyS1L9erGodW6wLEAJiE9rNpVUQ9Ku2KpJ37TtHjCEVFJdbtVJLVLi7LAGNJsW2X%2FsvF2el5aCAy4NPfVt1Ehllu64tGQy8vyO5vj%2FzwyJ2fLC%2B6Evk38UpQ7QwNMPiW76RkNoZ4XURkfXgVE4aJn4XU8x8Ahl3ENBIb4%2BegZnsk0tiy47%2FMOq3fuLfEIQEwCYipBQbhbG5qhCSayuODs1rg2o2gRtlVbB5owhFhEBu%2Bj2zYqCrrsXJ6X3Xg0mttENBuTd4OXi%2BK4YRFjFp295d52InERR66VfULB6WYEu23XebrD3KqnRZfWXTwApTd9tjEWWuu8CVRF0nUC2%2BGf99A%2B6SVmYhs1LxDlB%2BziqjQ6ITnm8TlhwO%2FhkFfCYLjaLjBwwt8aKygY6pgGaaniGAWTJ1gvTOhaQnmcwkeOaKdJPX2F3V59XHQftpDVGvCrXKU1M242QCFAumc%2FlqIsKehdKZCgxdwCmkrY%2FShIp2d0GsyRT7MQzDat2bQdx5NYKKTBvgXvjfa1l5WHeY8mgWYM5wqxUZIcxkXF6XeRjZn2cW%2F0aDgU774miJdtb8tgTNR%2BBDpHISfov8lJFpPcD86%2B564kVZCiNRIpuwPBFu5rc&X-Amz-Signature=8a551a7fa11d62c12ea8bcc82423098b0e8126becd6ff6b87453f2a0c63ec361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
