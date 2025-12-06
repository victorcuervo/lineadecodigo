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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N6VEUMD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fq82foSdH06XtTg1NY9bGYMhk%2F86VlYh5PzFJY%2F9eNQIhAOvkF0ZtVNi1a8oZwv3yOLuRBdXukiXkSBmlI7uyLijkKv8DCGkQABoMNjM3NDIzMTgzODA1IgzE5fHOPGHmuC7xKhIq3AOVJuqMvFKrMHCPyLD2i%2FXthvpGxlYACVM16rwBXKFqryHZvp57r6p9OUajLdHC5yXReZbHXVOoiWFddyrgnKuWhD9FuTqWDLJxAY5o0NyTaWyxf5ivrVQthR%2BqVuJwSI1hFKIBXLEVbztcRLty%2F6XKZB%2F0lhAkeQ%2FOvkRxYJ37kTLwZg0LxPbpj6abRd0E5MqkI54hyIm9Zfi146MdXev6cr3x7o9BaCoRj4GP%2FFDHwSApLJ00d6m7CbkalwjlFRo59ZB3xyU0UAp1D%2FflRLLzYZxqO31QVMbawriIWFwp6OjrL1Pe945B6gSUXlVtZbxtWxWaERvO09qN2odEeQhlZdk3M6hM41gMKkdNIvjkwmLb6iBoj7LUX%2FNKKYbwPGRjsjDnAnBtr%2BXTIiXie%2Fn30ZEXFJ4uRor%2FY2nIyWCex3ND3fSsw%2B%2FvACW4xWxNInEN%2F4Sv%2B5jvWfQfkd%2FSkNEgVHJv4h0MErxzK66zSCb3zWhbh1%2BRFgOtsYe2ctBjnvg0GD%2Fki3tOsLezi2p71gcsfLsZ911vAMgvNy2z0%2FSeyMe1dmPU8bR1dSBLKqNRfNvwnLEZ3xP2UixKJk%2BHpGByBvmjrtaeUKWwMU%2FZH5WTGcL9Tc471qAWs5L5iDC16M3JBjqkAb2aPnVTcWh4oKrDNYQSgWaBW5uStMakS%2BK6Fs4T7u6TowTrsHhofIURCcIJNUvkHC9KsRgxwIKQzWGUPpDqfE44FODUlVnXzKCWnNzUzCE0DTzScgU%2BM17fCORJ1NLnoTRhCD4LJjpQKfAfFMZv0pgHqtJUNGC4zdpuAZCKnemsoSXyaAVCn7qm0BIgO5GNV3lxKLylO3m50midCSR4wJ%2FcMbJQ&X-Amz-Signature=c4467ee92526acec78062f0512daaa48294ba5d5eb6cd8d28d8fa2ca4a6ab745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N6VEUMD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fq82foSdH06XtTg1NY9bGYMhk%2F86VlYh5PzFJY%2F9eNQIhAOvkF0ZtVNi1a8oZwv3yOLuRBdXukiXkSBmlI7uyLijkKv8DCGkQABoMNjM3NDIzMTgzODA1IgzE5fHOPGHmuC7xKhIq3AOVJuqMvFKrMHCPyLD2i%2FXthvpGxlYACVM16rwBXKFqryHZvp57r6p9OUajLdHC5yXReZbHXVOoiWFddyrgnKuWhD9FuTqWDLJxAY5o0NyTaWyxf5ivrVQthR%2BqVuJwSI1hFKIBXLEVbztcRLty%2F6XKZB%2F0lhAkeQ%2FOvkRxYJ37kTLwZg0LxPbpj6abRd0E5MqkI54hyIm9Zfi146MdXev6cr3x7o9BaCoRj4GP%2FFDHwSApLJ00d6m7CbkalwjlFRo59ZB3xyU0UAp1D%2FflRLLzYZxqO31QVMbawriIWFwp6OjrL1Pe945B6gSUXlVtZbxtWxWaERvO09qN2odEeQhlZdk3M6hM41gMKkdNIvjkwmLb6iBoj7LUX%2FNKKYbwPGRjsjDnAnBtr%2BXTIiXie%2Fn30ZEXFJ4uRor%2FY2nIyWCex3ND3fSsw%2B%2FvACW4xWxNInEN%2F4Sv%2B5jvWfQfkd%2FSkNEgVHJv4h0MErxzK66zSCb3zWhbh1%2BRFgOtsYe2ctBjnvg0GD%2Fki3tOsLezi2p71gcsfLsZ911vAMgvNy2z0%2FSeyMe1dmPU8bR1dSBLKqNRfNvwnLEZ3xP2UixKJk%2BHpGByBvmjrtaeUKWwMU%2FZH5WTGcL9Tc471qAWs5L5iDC16M3JBjqkAb2aPnVTcWh4oKrDNYQSgWaBW5uStMakS%2BK6Fs4T7u6TowTrsHhofIURCcIJNUvkHC9KsRgxwIKQzWGUPpDqfE44FODUlVnXzKCWnNzUzCE0DTzScgU%2BM17fCORJ1NLnoTRhCD4LJjpQKfAfFMZv0pgHqtJUNGC4zdpuAZCKnemsoSXyaAVCn7qm0BIgO5GNV3lxKLylO3m50midCSR4wJ%2FcMbJQ&X-Amz-Signature=d53d3baf0f9a8c8fb13f3f2b73d476ca1d865fbab7586763b0e490afcb1def91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
