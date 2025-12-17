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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZWV3FL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVWFRfQYJF5G5D9MbeCDFWy9FHVACC4O%2FriyV81OQcCAiEA0cyIFL5RTMypQV1ckfQfH9lzQiY8JgAFy65Jj2qFWeIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2G%2FWy5u6n55ONzryrcA%2F%2Bz%2FKyGfWticjE%2BaII2SsEoC53tXHV8cwws9mJQCI0wWh1H9b2edSk4dHARtdrgeXHcJcZx5twcdmyqu9FnD1qF6GzVnN7nJtv5DQWmNRl4SuvJ4pvqj%2BvKKwQZHPci6RA0ZguqY89In%2BAC1eIwgTEIuh8qQXxEaM3FgwhsYJoYswlxp%2FVNFdeMGw%2FwlEYK3rsR%2FN2ABsSLKsY1X1U5xNYL67WZTj2nfNA0KIiyq1RB4rtBY3%2BZ4ztPH%2Fq%2BK6QzO9h4wZoGMPf9w7u8DjBfH%2FYrB2ojDnPi8uKS6aO0ht9RZpaHpgFHUjTclB2I3lrFiTHLx1cpZU0UpmSzVbfffOEu2RlXMeVvx96HZTqcSRNyk3vsCJUmzubIYrA2VpedJiwYrVIPDoqcs5UGkE0Bdg7Ag%2Fvm382xahq1t71m2q3MA%2BJt3VNxRALl0Pm0HcUHnme1xv%2BfJuvKWbYjXErfPLJgDS2GGbJDBQmqtaNZpKnS0l1dDNiUaPZhh6Esb2U6qA40dJoXRgCDjZgq107vM6eIIMFemSGyGqDUR9jziUB4Aprv9p7QoBN4l3M7ksGaN7edWJ5tV%2FpMkqndR3Ot1WWYPNXNWuQkAMSP3VvTieEkQFnRpB4QZlPFzuDpMNuei8oGOqUBWbl0as3ZEbK2wZw1IlNWYpv%2BQyMr8iF5xZn%2FUhj1g0I%2FLsaGw%2BOUjNMY8ZkmUDzrGI7Kg32TnvH0vCme5jWGZ5TcF0gFmEykmSC%2FCyNQfUrcC6glTHV0r5%2BSymcf7xUEGeSd20bbwb0ozu%2BYKMN%2Fswo6mUyhAWcbBotnEEJHwLgCzvaO9Jd7Oqlgr%2FFMlhq60AufGC7qLv4F05E1dVALFL1FFDcR&X-Amz-Signature=50b7863e7192306ea7e2e739cb9946521ab9abd9af685da0f68c8395e7fe49a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZWV3FL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVWFRfQYJF5G5D9MbeCDFWy9FHVACC4O%2FriyV81OQcCAiEA0cyIFL5RTMypQV1ckfQfH9lzQiY8JgAFy65Jj2qFWeIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2G%2FWy5u6n55ONzryrcA%2F%2Bz%2FKyGfWticjE%2BaII2SsEoC53tXHV8cwws9mJQCI0wWh1H9b2edSk4dHARtdrgeXHcJcZx5twcdmyqu9FnD1qF6GzVnN7nJtv5DQWmNRl4SuvJ4pvqj%2BvKKwQZHPci6RA0ZguqY89In%2BAC1eIwgTEIuh8qQXxEaM3FgwhsYJoYswlxp%2FVNFdeMGw%2FwlEYK3rsR%2FN2ABsSLKsY1X1U5xNYL67WZTj2nfNA0KIiyq1RB4rtBY3%2BZ4ztPH%2Fq%2BK6QzO9h4wZoGMPf9w7u8DjBfH%2FYrB2ojDnPi8uKS6aO0ht9RZpaHpgFHUjTclB2I3lrFiTHLx1cpZU0UpmSzVbfffOEu2RlXMeVvx96HZTqcSRNyk3vsCJUmzubIYrA2VpedJiwYrVIPDoqcs5UGkE0Bdg7Ag%2Fvm382xahq1t71m2q3MA%2BJt3VNxRALl0Pm0HcUHnme1xv%2BfJuvKWbYjXErfPLJgDS2GGbJDBQmqtaNZpKnS0l1dDNiUaPZhh6Esb2U6qA40dJoXRgCDjZgq107vM6eIIMFemSGyGqDUR9jziUB4Aprv9p7QoBN4l3M7ksGaN7edWJ5tV%2FpMkqndR3Ot1WWYPNXNWuQkAMSP3VvTieEkQFnRpB4QZlPFzuDpMNuei8oGOqUBWbl0as3ZEbK2wZw1IlNWYpv%2BQyMr8iF5xZn%2FUhj1g0I%2FLsaGw%2BOUjNMY8ZkmUDzrGI7Kg32TnvH0vCme5jWGZ5TcF0gFmEykmSC%2FCyNQfUrcC6glTHV0r5%2BSymcf7xUEGeSd20bbwb0ozu%2BYKMN%2Fswo6mUyhAWcbBotnEEJHwLgCzvaO9Jd7Oqlgr%2FFMlhq60AufGC7qLv4F05E1dVALFL1FFDcR&X-Amz-Signature=4a192e7a92a99f31c4a92cf18fd939f3e32e74e6d9b09546cb7d1ceeed3e463c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
