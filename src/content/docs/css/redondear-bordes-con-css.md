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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ32EJ2B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNpYGgBVtPwp2G3qwXyHMJpkyjRxifmqL0LXj8FMJAPAiEA7mqenpeZ5mnlxiDeJkAdF0FD4R1UwovUnsi%2F2fYb2vEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKDw34SNwUJUCohNcircA1l%2BdXOefwZGiaiszQP63hHARLDWG8BqzZNAMNgVrfULPzu2bQIv4vkJV6e9vC29j0nu7QuDYjXbCZG7CXA6z5VsL5RXJr3jliIRflgyf7moLp1vCRGsg28crDcju%2BxHVrzdBhqbp2Jz96f2k75L1O2CGpEseAnYxE5OvYrnQ%2Bf4ISnsQO2v37oP%2B79NY1ccO4yK9wCTDLXSrW6LvFqQg1fHpGTm6vOGGx3MzV%2BG6lEmq2JxPryA5oACsxV%2BRTHn6RZ3okw7A6noKmBWkJbU6BzxSljNCXh4qVv%2FjGUa%2FShv8ZJGaJUaci91%2BgRRZ6jjmjZT0BneAdSTFDVK02hoKhf27yLpIIi6fzFhBRel%2FJc%2FtUBZ5f9Gv91%2Fg%2FwAziqCDA2MDCcz74YvRyjt9TR7jeIqwCL9sQFbxkrepMO0npG9cqE6bQwVtO%2FsqaRs5QAnwAS90TR9eC6erozH8ERpbYS324oYoVyq6EWcusnqFD3LCdFEJ7nvyPH1uizTvHcxW3T31W7BxqNkXY79v3UYAprIjxpXmPo%2FCO9s40eorhg0EwhgSSzG06lwtgH40UVj4R3vbXIGWR0ylcW%2BeY%2BVTfe7%2FKs%2FpOjiLYgc7FiiyEyip0HmgLcOSWmK800pMJ7uy8kGOqUB0a93BJ0jAXaBPtIiGnHV39XjuNgBOypRsJDQpXukOxQkafzSRv%2BlCqhSJF2KFJEBho1%2FxMN2zOG29l6L3se6X9z6GpsUrqtYOHGAWz%2BbzoTn643hjBchCEQLy%2FRaxDWDFPaCUkCjepUtMeta5QgyS7BLQWoR1xKj5huCHilONj4u54CeA5q%2BADEOK7cR%2FJdiKRXd3OlaLEje4gwcBbYw5jGfM%2FM0&X-Amz-Signature=baedf6b8aff0f18692b24e8527fbbe10ff02aaa6c24aff482938d617e18d61d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ32EJ2B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNpYGgBVtPwp2G3qwXyHMJpkyjRxifmqL0LXj8FMJAPAiEA7mqenpeZ5mnlxiDeJkAdF0FD4R1UwovUnsi%2F2fYb2vEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKDw34SNwUJUCohNcircA1l%2BdXOefwZGiaiszQP63hHARLDWG8BqzZNAMNgVrfULPzu2bQIv4vkJV6e9vC29j0nu7QuDYjXbCZG7CXA6z5VsL5RXJr3jliIRflgyf7moLp1vCRGsg28crDcju%2BxHVrzdBhqbp2Jz96f2k75L1O2CGpEseAnYxE5OvYrnQ%2Bf4ISnsQO2v37oP%2B79NY1ccO4yK9wCTDLXSrW6LvFqQg1fHpGTm6vOGGx3MzV%2BG6lEmq2JxPryA5oACsxV%2BRTHn6RZ3okw7A6noKmBWkJbU6BzxSljNCXh4qVv%2FjGUa%2FShv8ZJGaJUaci91%2BgRRZ6jjmjZT0BneAdSTFDVK02hoKhf27yLpIIi6fzFhBRel%2FJc%2FtUBZ5f9Gv91%2Fg%2FwAziqCDA2MDCcz74YvRyjt9TR7jeIqwCL9sQFbxkrepMO0npG9cqE6bQwVtO%2FsqaRs5QAnwAS90TR9eC6erozH8ERpbYS324oYoVyq6EWcusnqFD3LCdFEJ7nvyPH1uizTvHcxW3T31W7BxqNkXY79v3UYAprIjxpXmPo%2FCO9s40eorhg0EwhgSSzG06lwtgH40UVj4R3vbXIGWR0ylcW%2BeY%2BVTfe7%2FKs%2FpOjiLYgc7FiiyEyip0HmgLcOSWmK800pMJ7uy8kGOqUB0a93BJ0jAXaBPtIiGnHV39XjuNgBOypRsJDQpXukOxQkafzSRv%2BlCqhSJF2KFJEBho1%2FxMN2zOG29l6L3se6X9z6GpsUrqtYOHGAWz%2BbzoTn643hjBchCEQLy%2FRaxDWDFPaCUkCjepUtMeta5QgyS7BLQWoR1xKj5huCHilONj4u54CeA5q%2BADEOK7cR%2FJdiKRXd3OlaLEje4gwcBbYw5jGfM%2FM0&X-Amz-Signature=bcff0294d08b9bc230c2b8185cd1ce37cbae3fbd77614348384bc79ff02c4c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
