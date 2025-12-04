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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVQI7TE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDYdfl8KE2ayoVN7fN0Z06sz0f5HrJUUCLL3n6TuD2YGgIgaPnSqeQ4xNue9IfY930gjqijWjnUa37UkfaKNA7Ohbwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPbkgAUz9tDKWz3EzCrcA5oM0VFpPzXHSkf0Wdx7Ib4Pk3eypGMH%2Fi8Io81jYrUcEyEMb3HzGSIkRmh16ZIBYXqoQsXpxm3dULpG%2BffSrCJf6lP97VCIvjjvmQUYf9tUxXBoZ3nIiifeTmLwPMfEFyIr7ubxJgVaknjgQ4gYO498T8WVjWDtAlvaJuUus%2BIjDgQpJN3zpEXeqOc3dtXZ%2Ft1v5cHdH%2F0g4VKmk1VFTmEIsiqesdq7RXcLgVIQ3ILbZT17s8LnSc30AUIrVhgtYNiiAsYihN1ygGiO%2BNhYxNBjAy6scpUQT17dw0zngYyM%2BGJvTYFsT5YSIKdLogtOqbecF1UUAhrbhjPmUD4fsF4h9E8kQi1r8Wqrq0yrbzyR4yG49iGc6%2BWE6hjZLU%2FyUJnLVj3m%2Fu%2B1M9u2T86NxhowLLk6lDGS6d9GeepJFjo%2FYsckmUpu9wAz%2FnGuXMOYJlST7eYv8wJsBWFla5lKxrhHSLiHC1PYasPUjKNiFAICVPxzTlXbAaNk4%2BjyTgqB1bWUXVEt7r5vniOpLYDp%2BnZ3dB8o9z80yYuboCrKx096neYl2kziePk2k886gLl4J82%2F4rCR5qpqQSUfTrYDJaRopT5A2Udh5ULkqVvRwYsxYWs5XdDe3W0THeroMJeGxckGOqUByUE4uAxJHrdK7RkaQ%2BXBWhpfV5jl4WGk%2FkYI%2FOIAXhAQcXbzPAzCiQWubMJwMcr6ci5mG3CrMgLBEpvDWqRMTVAB%2BD0ZCYlcqXLP4MPbglaEgZZoQ1IPUnZ7IZHnTPayzz7wYMJcGTHz3MjBxunSaxN5akdbTI7sBMuGrLUxqVXDwSk%2FDdfC1WWz7f8mhCnG6fwoWN%2F4dDaxw5Pn5p1qBCGnOAGV&X-Amz-Signature=66a8da6e9f15b7e091c44897459507b9cb97d13855036679d8e6e66da492c9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVQI7TE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDYdfl8KE2ayoVN7fN0Z06sz0f5HrJUUCLL3n6TuD2YGgIgaPnSqeQ4xNue9IfY930gjqijWjnUa37UkfaKNA7Ohbwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPbkgAUz9tDKWz3EzCrcA5oM0VFpPzXHSkf0Wdx7Ib4Pk3eypGMH%2Fi8Io81jYrUcEyEMb3HzGSIkRmh16ZIBYXqoQsXpxm3dULpG%2BffSrCJf6lP97VCIvjjvmQUYf9tUxXBoZ3nIiifeTmLwPMfEFyIr7ubxJgVaknjgQ4gYO498T8WVjWDtAlvaJuUus%2BIjDgQpJN3zpEXeqOc3dtXZ%2Ft1v5cHdH%2F0g4VKmk1VFTmEIsiqesdq7RXcLgVIQ3ILbZT17s8LnSc30AUIrVhgtYNiiAsYihN1ygGiO%2BNhYxNBjAy6scpUQT17dw0zngYyM%2BGJvTYFsT5YSIKdLogtOqbecF1UUAhrbhjPmUD4fsF4h9E8kQi1r8Wqrq0yrbzyR4yG49iGc6%2BWE6hjZLU%2FyUJnLVj3m%2Fu%2B1M9u2T86NxhowLLk6lDGS6d9GeepJFjo%2FYsckmUpu9wAz%2FnGuXMOYJlST7eYv8wJsBWFla5lKxrhHSLiHC1PYasPUjKNiFAICVPxzTlXbAaNk4%2BjyTgqB1bWUXVEt7r5vniOpLYDp%2BnZ3dB8o9z80yYuboCrKx096neYl2kziePk2k886gLl4J82%2F4rCR5qpqQSUfTrYDJaRopT5A2Udh5ULkqVvRwYsxYWs5XdDe3W0THeroMJeGxckGOqUByUE4uAxJHrdK7RkaQ%2BXBWhpfV5jl4WGk%2FkYI%2FOIAXhAQcXbzPAzCiQWubMJwMcr6ci5mG3CrMgLBEpvDWqRMTVAB%2BD0ZCYlcqXLP4MPbglaEgZZoQ1IPUnZ7IZHnTPayzz7wYMJcGTHz3MjBxunSaxN5akdbTI7sBMuGrLUxqVXDwSk%2FDdfC1WWz7f8mhCnG6fwoWN%2F4dDaxw5Pn5p1qBCGnOAGV&X-Amz-Signature=f81b5b31b5ba7740f973a0b786ed6bf86be6eca76bc92eee76bac20e07e12543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
