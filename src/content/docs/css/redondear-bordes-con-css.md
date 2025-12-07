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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTR6D55%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmU18APO%2BS0h6qV03xfOfXe2ZL7kgJmEV1cik2BF9ELgIgRhrLl9yMsKnRxxE7l9dEb7LvRA8tJ4dQ8ecMw7JqYn8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwakR%2Bpizj23UdISrcA5UgaGn6rC5scrAhCUb9MUh3PFeiGsFR0E8I6XUIaDCVf65fz7Mw3EV5wq%2BijJOFfW6Eg1a%2FiiwuEn7izwX89XSGQaRELGRoSI7ocW8SbmtzyOxTh%2F2dHCeyksaNVyiPhlTzR7X5Ub1UOJSMV3W5VdO4k48wpAvPKrrIdX4pauTGgIC9YW5aEGX98m6%2BRQs2cajMpKJcL9vOVHIYIn%2FDeRpU7O6u0DqLqtN5KptdR0ab%2FmmYd%2FXmimq6AOfmLfPzNdxIO43ANVT7bRUgCK4uI%2Fe%2BXNzhA1rm4xdpuphNyRX5hskctky0fZ1Vhcdk8qGgWwJN2zIZykBThiTgykmb57ovZAa8XbwAfWv5kRK1149mLqQ2iRnLcMv20TmMqJ7krEWSYWrtqwStoGFvG3vpam2qRW%2FT6zaHOR%2BGGI6MtYuX7bp0D5Qz9guScJRL%2B9m3YSM2BCq4mWNnKOysuIogGE%2FCCe0cMFyhrLYUWC%2BmH3c2xM9XH5%2BDItIP3q7cV1GMqfLZ28oS8BkQte2WaYbe%2FHHh61pxMf0qUYpUNXXMMvQXYGjVNnEJK3mq7gPDVS5Uawpus0hc1OvqFuZ1bnrDwQ5vg1AomLVTpazoILYx%2FQTu0mnKtvoI6zof6mEsMJai1MkGOqUBKQSYW4rAMtOpue3JC0%2Bmach4q26ck9MjJ2p%2F9QmbpOcEaumUDGHpV2A3dNCu2qJ%2F6trp7RzclwOwLEYJwMOSLy4QmVY6xppUBmsxTR6%2BFBwTfBH%2BNDkj2oUSUqBpVmkE0OzM4x5ofUSoSCRBWZbfcWYkwpSVQ9ObWFqlS5laLQ2nS4QFp0EI84i%2BeQLlw27JrhiRLTWlQso8mv2adfyzmLXkTYaW&X-Amz-Signature=c45ddcf9e79affa3213506fbc73fed98617465dbf4e6f7a80890189020caa006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTR6D55%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmU18APO%2BS0h6qV03xfOfXe2ZL7kgJmEV1cik2BF9ELgIgRhrLl9yMsKnRxxE7l9dEb7LvRA8tJ4dQ8ecMw7JqYn8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwakR%2Bpizj23UdISrcA5UgaGn6rC5scrAhCUb9MUh3PFeiGsFR0E8I6XUIaDCVf65fz7Mw3EV5wq%2BijJOFfW6Eg1a%2FiiwuEn7izwX89XSGQaRELGRoSI7ocW8SbmtzyOxTh%2F2dHCeyksaNVyiPhlTzR7X5Ub1UOJSMV3W5VdO4k48wpAvPKrrIdX4pauTGgIC9YW5aEGX98m6%2BRQs2cajMpKJcL9vOVHIYIn%2FDeRpU7O6u0DqLqtN5KptdR0ab%2FmmYd%2FXmimq6AOfmLfPzNdxIO43ANVT7bRUgCK4uI%2Fe%2BXNzhA1rm4xdpuphNyRX5hskctky0fZ1Vhcdk8qGgWwJN2zIZykBThiTgykmb57ovZAa8XbwAfWv5kRK1149mLqQ2iRnLcMv20TmMqJ7krEWSYWrtqwStoGFvG3vpam2qRW%2FT6zaHOR%2BGGI6MtYuX7bp0D5Qz9guScJRL%2B9m3YSM2BCq4mWNnKOysuIogGE%2FCCe0cMFyhrLYUWC%2BmH3c2xM9XH5%2BDItIP3q7cV1GMqfLZ28oS8BkQte2WaYbe%2FHHh61pxMf0qUYpUNXXMMvQXYGjVNnEJK3mq7gPDVS5Uawpus0hc1OvqFuZ1bnrDwQ5vg1AomLVTpazoILYx%2FQTu0mnKtvoI6zof6mEsMJai1MkGOqUBKQSYW4rAMtOpue3JC0%2Bmach4q26ck9MjJ2p%2F9QmbpOcEaumUDGHpV2A3dNCu2qJ%2F6trp7RzclwOwLEYJwMOSLy4QmVY6xppUBmsxTR6%2BFBwTfBH%2BNDkj2oUSUqBpVmkE0OzM4x5ofUSoSCRBWZbfcWYkwpSVQ9ObWFqlS5laLQ2nS4QFp0EI84i%2BeQLlw27JrhiRLTWlQso8mv2adfyzmLXkTYaW&X-Amz-Signature=f602ef9b4f53d45ef1f3ee725626cc0a4ae61e470a6af465d5f84ff359fad828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
