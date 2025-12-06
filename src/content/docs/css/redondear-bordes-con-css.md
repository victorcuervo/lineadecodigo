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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQOMRO2M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrBWlNe95Q7oD2DEtEUU0%2F86MRmnskN65JRl8X7vjM4QIga1W1ZVrqVmWXxhT1W%2BrVFIjmczeIZfKM9OBoKPyPaJwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIrNK0Jb2fHMHuoHfCrcAwJjzSTEBZiyVb9AC2wVyewa9vOtvHUZXARY%2BMu7wICllmGbCTjW3upR%2B7vwCUIRhUASgBycCJy7VwXszdYWDKSEZdqQbaH0rlDxyNGsM5FOyyYrzXlgzmPyrALtEUpDughiUQnTDG1v%2FmPopPAqEBLTl74sx3K4K2r29sN9yFMOk4xi1fhIVm7QeQ8kQ6vEvqSWqOo%2B33FgTn84iXQF6y1POT4VprM66ktukgahY4ao%2F3%2FLQ9Qbgek3z9aXyG6eWadg2n8t4fMqL4mdrcz7V%2BoB%2Fgx%2BYPW2hKHziNIrEhsaYUgVlZnONhFtU4quhxK5%2F5XhZD9e7AlyW%2BHpa9h1FkiakMFKrtxm0D5nkgSUq7qin6Rh30wVlZlcK%2BpiO6%2F3iKrsRlUBBpPbhxDXka%2BZn%2BEEEJBxsa43X8uVjTGyUG3lT4VcF8iAFZ%2FCDVsSfEcfutUX1XXohemNxPrc6xBZjxAhLgMVcuVa6DqqFEO0rOz%2BEPhSZH1nR%2FukucekQP8dXNDRxyTbfVcORm2caZZ11D99JQJzINRY35rskFWVd8ZXmy5EfHnFr1n3w2qMQ%2BUBmLpG0m4x81w0wJxZpuNRCBvy90q%2Fbg2%2B9ZfEzgq606ByBpNkFhu5zzxyUBrkMLDDzskGOqUB6Cpi6LB7%2FIpAS9ypOaqe%2FN8o8L2JbgFba30f7FNsvP3Kdij%2B%2Bz7uU7OVm4LFK9pOKBn7lHPyP31RnA2%2FizKoSbdiwRWSrLBbod%2BZh9s5uNi0AVkWVYaPHxSm9azpfNc7ts4i6A9RnYz3OhDhgniWtpLNAAGRnOcu8K6Nba75sNE6PQYta1hdA04nzm4AXD2QhDHZ9lPNQqoDf34IocA69ui5iKwS&X-Amz-Signature=d0fca0d355887744c9a1ae7b54274547acf95ac9c07d9bf4dee8a4c873b40bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQOMRO2M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrBWlNe95Q7oD2DEtEUU0%2F86MRmnskN65JRl8X7vjM4QIga1W1ZVrqVmWXxhT1W%2BrVFIjmczeIZfKM9OBoKPyPaJwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIrNK0Jb2fHMHuoHfCrcAwJjzSTEBZiyVb9AC2wVyewa9vOtvHUZXARY%2BMu7wICllmGbCTjW3upR%2B7vwCUIRhUASgBycCJy7VwXszdYWDKSEZdqQbaH0rlDxyNGsM5FOyyYrzXlgzmPyrALtEUpDughiUQnTDG1v%2FmPopPAqEBLTl74sx3K4K2r29sN9yFMOk4xi1fhIVm7QeQ8kQ6vEvqSWqOo%2B33FgTn84iXQF6y1POT4VprM66ktukgahY4ao%2F3%2FLQ9Qbgek3z9aXyG6eWadg2n8t4fMqL4mdrcz7V%2BoB%2Fgx%2BYPW2hKHziNIrEhsaYUgVlZnONhFtU4quhxK5%2F5XhZD9e7AlyW%2BHpa9h1FkiakMFKrtxm0D5nkgSUq7qin6Rh30wVlZlcK%2BpiO6%2F3iKrsRlUBBpPbhxDXka%2BZn%2BEEEJBxsa43X8uVjTGyUG3lT4VcF8iAFZ%2FCDVsSfEcfutUX1XXohemNxPrc6xBZjxAhLgMVcuVa6DqqFEO0rOz%2BEPhSZH1nR%2FukucekQP8dXNDRxyTbfVcORm2caZZ11D99JQJzINRY35rskFWVd8ZXmy5EfHnFr1n3w2qMQ%2BUBmLpG0m4x81w0wJxZpuNRCBvy90q%2Fbg2%2B9ZfEzgq606ByBpNkFhu5zzxyUBrkMLDDzskGOqUB6Cpi6LB7%2FIpAS9ypOaqe%2FN8o8L2JbgFba30f7FNsvP3Kdij%2B%2Bz7uU7OVm4LFK9pOKBn7lHPyP31RnA2%2FizKoSbdiwRWSrLBbod%2BZh9s5uNi0AVkWVYaPHxSm9azpfNc7ts4i6A9RnYz3OhDhgniWtpLNAAGRnOcu8K6Nba75sNE6PQYta1hdA04nzm4AXD2QhDHZ9lPNQqoDf34IocA69ui5iKwS&X-Amz-Signature=d3af42c042ed14e1d53d543a9d997bd5659907e3c4a30c13e479e30972ce3746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
