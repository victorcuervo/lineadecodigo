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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOUEAT2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs3axCdZ8ALUqn0t%2Fq6DJ%2FQWdF1SoWa4ZvXo24f22uCAiEAjIJSbEVlj%2Bxy2jE1RHMJ9jVdN54rQvsYXUU%2FD0y134Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHpjBctXfrm3SVMmlircA0xkb1g4h5oaMvuIQa%2FLwQo6lEinusbaD3KvL7Mbs5A1dCbeu%2BD16aGpociawO1M%2BZEUfmHJ6zMKEqmgbnEUw1EGxT9QpWlNhj%2BwwVoTTxr2CoWh0qD%2BniCx%2FviveTUa%2F9hB5EOVwdJfnDcH%2FHIeranLQ7%2BMCpglOWHQ4%2Fg6zaVdP2P7GQ9byVLFsNqdFBZwsUnZ9%2BVoDy6miiUYMAlldt0JRB45L%2BqQl%2FUvxZAGOkZwd3xOq9LgCnayySysIulF4jbv3GQa9qTzUYb2trjiM2j%2B%2FtbRZ5goTNt4tnum%2Bm6fwc4kDaRq8t6eZaUX5JVG1lzNJhKbhe5IjQQr%2FtfbRDjHzIKCpyjaT6r4FK4ByTlfT3L1%2BYA1Qm4gIwUHEFZZlCDegjElR6EoIJ384Vd8j5rLj%2BMCTEaqRF1w6yX%2FxttP4zK2Y8EugQeppPv7YxlSu2wkB7OuBjjEOxw4EDFk%2BOTYOmMwN141RXb2IhEWNhL%2BlZQ449pb1OIohfgRlUaRPspGb7M%2BTaresOFcZDJJTPa1rd9Gvif5Gc6SIcpbgkhwTN27Sj1jd5dnXp5XHyqWkE7MyIhdV9d%2FPXdETT8JNunjcVi%2FGU025POdPsDoH5OacR2oxMF32DUm1q%2FMMO38y8kGOqUB5zJhz9Toru5DigfaOWW7hMQhUAKomsLn0ItfiTlriB3vQe8uxKqgv5jPatLYeS4hH1cojtEX2uztsxVG46ElNji4kZPLGTVo8Wz8SpGYJrGTW%2Fymay6AO52TxnW0x2YV0CLSjNzHpetQ53yqwIH8ChFkGI9VINJ7Y1X5et%2BTAY9yZHkftQWS%2BymDcgDiDx9x26TOYdSJ3Q6q9IQCUsWfNUy1A1A0&X-Amz-Signature=ae8d20f4782b85bf00fe98a6b75e7f2f79a033c0468521f4957ad54e2f8bc3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOUEAT2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs3axCdZ8ALUqn0t%2Fq6DJ%2FQWdF1SoWa4ZvXo24f22uCAiEAjIJSbEVlj%2Bxy2jE1RHMJ9jVdN54rQvsYXUU%2FD0y134Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHpjBctXfrm3SVMmlircA0xkb1g4h5oaMvuIQa%2FLwQo6lEinusbaD3KvL7Mbs5A1dCbeu%2BD16aGpociawO1M%2BZEUfmHJ6zMKEqmgbnEUw1EGxT9QpWlNhj%2BwwVoTTxr2CoWh0qD%2BniCx%2FviveTUa%2F9hB5EOVwdJfnDcH%2FHIeranLQ7%2BMCpglOWHQ4%2Fg6zaVdP2P7GQ9byVLFsNqdFBZwsUnZ9%2BVoDy6miiUYMAlldt0JRB45L%2BqQl%2FUvxZAGOkZwd3xOq9LgCnayySysIulF4jbv3GQa9qTzUYb2trjiM2j%2B%2FtbRZ5goTNt4tnum%2Bm6fwc4kDaRq8t6eZaUX5JVG1lzNJhKbhe5IjQQr%2FtfbRDjHzIKCpyjaT6r4FK4ByTlfT3L1%2BYA1Qm4gIwUHEFZZlCDegjElR6EoIJ384Vd8j5rLj%2BMCTEaqRF1w6yX%2FxttP4zK2Y8EugQeppPv7YxlSu2wkB7OuBjjEOxw4EDFk%2BOTYOmMwN141RXb2IhEWNhL%2BlZQ449pb1OIohfgRlUaRPspGb7M%2BTaresOFcZDJJTPa1rd9Gvif5Gc6SIcpbgkhwTN27Sj1jd5dnXp5XHyqWkE7MyIhdV9d%2FPXdETT8JNunjcVi%2FGU025POdPsDoH5OacR2oxMF32DUm1q%2FMMO38y8kGOqUB5zJhz9Toru5DigfaOWW7hMQhUAKomsLn0ItfiTlriB3vQe8uxKqgv5jPatLYeS4hH1cojtEX2uztsxVG46ElNji4kZPLGTVo8Wz8SpGYJrGTW%2Fymay6AO52TxnW0x2YV0CLSjNzHpetQ53yqwIH8ChFkGI9VINJ7Y1X5et%2BTAY9yZHkftQWS%2BymDcgDiDx9x26TOYdSJ3Q6q9IQCUsWfNUy1A1A0&X-Amz-Signature=3d990995670b3a3c2669ceef0325fa1322b19cded844885f0b44b39a25e2ee17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
