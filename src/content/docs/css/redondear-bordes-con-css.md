---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOH3AQU2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgIhgkGPZI3%2F3rPFPzHejsb3tcHyeye%2FeaLWwtzI8ufAiA0zYRH%2FPfYiz%2BV2spONaqX29XEiFbk5fJTbzJOjoxctSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHp82s2fCMYIIPmX9KtwDJv0UuGn13jrEJnW5SF%2F48jV4WkQJz3%2BnLg7f2%2FA9AuCe7e%2B6jKLwobtDBjAhJAv294E5yjepY0%2BwiCL1WMHBNENpuSkc3V8SC4jCZNBmp8BC7jnYVVIzLYD%2FM%2BHZCIRUlcXHmGnXn3rv6QnNF7H3FYF3GJjE7EbpZf5R8cW3nh9LGmk6e0941mch9dxY88X7n5yQiDL2T5Y%2BFDBWZ0UhVjiTK%2FHH3OI4FuqPDtfX6KIKBoXsdNjFySpu6XYxVj9%2F9reyyqO1Dxg7HxvV5ezpLhKnigrCUHmjeFMJ6FXJZQnET%2B%2BVvE7SWjsJRraS8wUBNXwh8yfhzMoEQ0sQdkxqwdO0UBo0eqceFF6nttBnuWei9N%2BHHdb4T833Q7w0Flp8LWeAAuCzFCFbxRk3CWxjPbn30FhKBZlDy5tk%2F8Bgb1XVm66gE7OoWA9cHSdF7FhJz4TLTMNIM4tT2BK3SHDN2qLOJjX3ApgeYVtLPK9ZWaIdT6faJ089TI7bkc0%2FYGiTHfuY%2F6%2FCqToP7fkrHcNIPSdENAQcnd8J4mO4HK6f5zxdqNuSviiUZOA8eLFVm1bOLjrDsZfIF%2Bho1ZOs2hXjDa9LmLzum1fLOCavQyU7VaVMWrXMYrnlvZ8csuAw69vGyQY6pgGwWf2l2UT7VDqge8Ck5e9it9O7Em5DR9P8etrnRtq%2BkmE9%2FMnoaBI3WwFpCcvrGHrVw%2F%2BFHf3wJ2QiWJkzOBCX%2BR7xKP8QQEI6DPFObhZb0kBC9a8BjvhOM7uLQRoZWR%2F3TLhr0valvbxRUVO7lxfToWJ%2B7VDxO3GV08RhLq%2FUTuQ64M0yLuJDtTluZTH6UXtEZUqTyMYcyc%2B5PJ6WainyTMcZ20d%2B&X-Amz-Signature=e41a2dd24ad125ef6632ccb6376d7452436f3d8232cfbe202b4d5c163e4a5eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOH3AQU2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgIhgkGPZI3%2F3rPFPzHejsb3tcHyeye%2FeaLWwtzI8ufAiA0zYRH%2FPfYiz%2BV2spONaqX29XEiFbk5fJTbzJOjoxctSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMHp82s2fCMYIIPmX9KtwDJv0UuGn13jrEJnW5SF%2F48jV4WkQJz3%2BnLg7f2%2FA9AuCe7e%2B6jKLwobtDBjAhJAv294E5yjepY0%2BwiCL1WMHBNENpuSkc3V8SC4jCZNBmp8BC7jnYVVIzLYD%2FM%2BHZCIRUlcXHmGnXn3rv6QnNF7H3FYF3GJjE7EbpZf5R8cW3nh9LGmk6e0941mch9dxY88X7n5yQiDL2T5Y%2BFDBWZ0UhVjiTK%2FHH3OI4FuqPDtfX6KIKBoXsdNjFySpu6XYxVj9%2F9reyyqO1Dxg7HxvV5ezpLhKnigrCUHmjeFMJ6FXJZQnET%2B%2BVvE7SWjsJRraS8wUBNXwh8yfhzMoEQ0sQdkxqwdO0UBo0eqceFF6nttBnuWei9N%2BHHdb4T833Q7w0Flp8LWeAAuCzFCFbxRk3CWxjPbn30FhKBZlDy5tk%2F8Bgb1XVm66gE7OoWA9cHSdF7FhJz4TLTMNIM4tT2BK3SHDN2qLOJjX3ApgeYVtLPK9ZWaIdT6faJ089TI7bkc0%2FYGiTHfuY%2F6%2FCqToP7fkrHcNIPSdENAQcnd8J4mO4HK6f5zxdqNuSviiUZOA8eLFVm1bOLjrDsZfIF%2Bho1ZOs2hXjDa9LmLzum1fLOCavQyU7VaVMWrXMYrnlvZ8csuAw69vGyQY6pgGwWf2l2UT7VDqge8Ck5e9it9O7Em5DR9P8etrnRtq%2BkmE9%2FMnoaBI3WwFpCcvrGHrVw%2F%2BFHf3wJ2QiWJkzOBCX%2BR7xKP8QQEI6DPFObhZb0kBC9a8BjvhOM7uLQRoZWR%2F3TLhr0valvbxRUVO7lxfToWJ%2B7VDxO3GV08RhLq%2FUTuQ64M0yLuJDtTluZTH6UXtEZUqTyMYcyc%2B5PJ6WainyTMcZ20d%2B&X-Amz-Signature=f21fb846f02f17267aca017a4e93dff705d502f603f1e09c421ce1463b51216f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
