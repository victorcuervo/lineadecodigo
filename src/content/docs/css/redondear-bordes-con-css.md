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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667II2ASWU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYk1TJ7h3uVApIKsgKlqrp7wf0yIXsh%2BVdRCaX0zFfKAiEApilSFmhk8InmMZCpZlnJpf4Qy9pLBvSagrb2lyd9Dukq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEzgkqBFzIUiTd%2F5pCrcA3QRWCb9PmLS2GGgssv17vO2lar51YTYc1d3pqdShY5Mdk0HxFmp%2FbJN0n4tZu01H4Px%2FKQjV1jvZDKlM0PB6KOOJ%2BJVssK26ijX6WTmG%2FcV1WdL6z3o63fPsN3dZiwm2ZMY3vQKN1VtsmcYkDgMAFsZMAwkZL6xhny7e5zIUNJX17olT42itIlfnNViXGCqrP%2BNqmKTt31wWHqoJQofSuzc%2FdnBol%2Be5OrXBRe%2Fca34tQN%2FK3uJZv9vt%2FxdtblpmfTViI3YDGix6NNnMA78mRqXc4VN%2BUpFcYWDBBzUokrD8X2fcNs21Q3PSMgG%2BP1ozjAh9z8pB7nFBR7igD5txzzP%2Bw4vj2sajYw0JF%2Bss0Ia5%2BCmedITn768Lc2hEJu27E1ropNk135cyBHFi4WVyJaAPtkX5u8iZ51HScOV3M4RL5gOQqFvp2fbWpzTzrAehNjUNetjqXDk%2BG3TztK9%2F9q1HSvRc%2FXp6HCEGCap80fzKzdmlVClBuGlQ7lPrkZo1vCjgZViWrkjjA%2Fh1O3xG8F%2BcXdkQaUjrM24wtM%2FsVEKcorplT2u4HEraAKQvA7WMcr%2B6N40qfFBZypc2IlUBmYU8dqjzE23SlAVGwuL07XloJz%2Ft2N2awxZ624fMKKMyMkGOqUB6gmSIffYISBWHwR7%2BNFe1%2BQAPDNOp1zUvXJE94V6nUABUUtIrdUnuE25CGAFhckzW%2Fn%2BeVs5gRaCkGK0z%2Bd1YcDIjAU2kiySV32PNsXbYHEuxNVhLapwI7haLJ92Fwgspo1dQfw45mfWLHL5IlNp1Q8UBf8LZfC108BpbwuhK%2BcICS08UhWbW4ZMk92q0YxnjgwTinKz7u7tB8bdWT%2Fw4acyRhtR&X-Amz-Signature=9690b23c79f1083c9f6cb515445dc754854357175bfe4e025bd6bb9a79b72e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667II2ASWU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYk1TJ7h3uVApIKsgKlqrp7wf0yIXsh%2BVdRCaX0zFfKAiEApilSFmhk8InmMZCpZlnJpf4Qy9pLBvSagrb2lyd9Dukq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEzgkqBFzIUiTd%2F5pCrcA3QRWCb9PmLS2GGgssv17vO2lar51YTYc1d3pqdShY5Mdk0HxFmp%2FbJN0n4tZu01H4Px%2FKQjV1jvZDKlM0PB6KOOJ%2BJVssK26ijX6WTmG%2FcV1WdL6z3o63fPsN3dZiwm2ZMY3vQKN1VtsmcYkDgMAFsZMAwkZL6xhny7e5zIUNJX17olT42itIlfnNViXGCqrP%2BNqmKTt31wWHqoJQofSuzc%2FdnBol%2Be5OrXBRe%2Fca34tQN%2FK3uJZv9vt%2FxdtblpmfTViI3YDGix6NNnMA78mRqXc4VN%2BUpFcYWDBBzUokrD8X2fcNs21Q3PSMgG%2BP1ozjAh9z8pB7nFBR7igD5txzzP%2Bw4vj2sajYw0JF%2Bss0Ia5%2BCmedITn768Lc2hEJu27E1ropNk135cyBHFi4WVyJaAPtkX5u8iZ51HScOV3M4RL5gOQqFvp2fbWpzTzrAehNjUNetjqXDk%2BG3TztK9%2F9q1HSvRc%2FXp6HCEGCap80fzKzdmlVClBuGlQ7lPrkZo1vCjgZViWrkjjA%2Fh1O3xG8F%2BcXdkQaUjrM24wtM%2FsVEKcorplT2u4HEraAKQvA7WMcr%2B6N40qfFBZypc2IlUBmYU8dqjzE23SlAVGwuL07XloJz%2Ft2N2awxZ624fMKKMyMkGOqUB6gmSIffYISBWHwR7%2BNFe1%2BQAPDNOp1zUvXJE94V6nUABUUtIrdUnuE25CGAFhckzW%2Fn%2BeVs5gRaCkGK0z%2Bd1YcDIjAU2kiySV32PNsXbYHEuxNVhLapwI7haLJ92Fwgspo1dQfw45mfWLHL5IlNp1Q8UBf8LZfC108BpbwuhK%2BcICS08UhWbW4ZMk92q0YxnjgwTinKz7u7tB8bdWT%2Fw4acyRhtR&X-Amz-Signature=f37cafc3537d842c0e8caf2006989f961db61ae20d608891d994e39c73be7c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
