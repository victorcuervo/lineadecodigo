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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EQGACD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxssO23E6rsGsv6ABrhusc25vV0itfSssOHIeDMoJdHAIgS8JFpf33ZsulAnN9OUwQyPPXXtTJGKvz3w8x4IDbTdwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7GU42ODXOYG44PpCrcAzYluWDn2IM3V6jwJDJE9HTkYtBfwHr5R%2BKU3YXZmOz5CxDVQitkB42AcqpgCwk0TNIvnluJgOYC9NQZXlo8fAWYm6mIIe1nr%2BWk%2F5qQhnsNa1ppgVxOkmVXG6pywWMqPcclso52pj%2F6VZiY5fwKRgB%2FhkQKjz0lpWmkOEUSY99smFgLNiLusBT3EiPnJ6CIa3Bceh7inILfdAGrCZsQyAx07WLGWrN1shvWkzsbTaJUjJr3zXPcPHrtHMJZmpAUIvHmf3NwAtnFY09Rj9J%2FBrsISFyqpepqWx0vHVSx%2FMlhSoQ55xf2R1NlHaPQGiLIJ6%2FIIHz%2FA3%2BPMJssvlUWuNCXqb7vfR1iavpqtt5N0PNoeCVrZU%2FaGmA1SM7I%2F7cqmgNJsq%2FVXGqJQQYOhvkyU4Olxk8CKeFakvY8G81S%2BBaIEa0B3BZVjGhxzYvGTg3TTzfDbZMgHCzfUifr1X9rdJVDG60CBEJ7%2FmL015sGMkyas%2BJcr39RntUqUKEG%2Fzy9jFKJCPOTLAKmHJNuSynLJ5BvgVf8bATtj1EXgcOLfJmbKuM%2BladAfRKzqL%2FFCjoOm2Pk2bE9GpK4IZo%2FT2m0az%2BpKEM2yGZC%2B259G11Lh7OHizTheII8xHJF%2F9uAMKD90skGOqUBYiNVTmZrdio%2FARYqxsLn7uvXufb0bvgqoFNGsO%2BU0jcFrFHG%2BVN2FauVYapsIF6i5pkkfu6TCrnzTBdN5XGhh8CSSRBXh84nQCqvL6s1wiuRiBslmHaDkaLJixyLqJMcSTbSHj4MUw1IiI%2FMQoW5zfdk9tLdG2BnV5ObLrWktOjJwcCuTdJh0dO5EeTEjQTFF4xdzvyjlRnX%2FXfMSREKDEI20HFx&X-Amz-Signature=afc48e7e0f00fb73b8ae7487fe2ba689ff34659992c62d6756c2b27e1abe7cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EQGACD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxssO23E6rsGsv6ABrhusc25vV0itfSssOHIeDMoJdHAIgS8JFpf33ZsulAnN9OUwQyPPXXtTJGKvz3w8x4IDbTdwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7GU42ODXOYG44PpCrcAzYluWDn2IM3V6jwJDJE9HTkYtBfwHr5R%2BKU3YXZmOz5CxDVQitkB42AcqpgCwk0TNIvnluJgOYC9NQZXlo8fAWYm6mIIe1nr%2BWk%2F5qQhnsNa1ppgVxOkmVXG6pywWMqPcclso52pj%2F6VZiY5fwKRgB%2FhkQKjz0lpWmkOEUSY99smFgLNiLusBT3EiPnJ6CIa3Bceh7inILfdAGrCZsQyAx07WLGWrN1shvWkzsbTaJUjJr3zXPcPHrtHMJZmpAUIvHmf3NwAtnFY09Rj9J%2FBrsISFyqpepqWx0vHVSx%2FMlhSoQ55xf2R1NlHaPQGiLIJ6%2FIIHz%2FA3%2BPMJssvlUWuNCXqb7vfR1iavpqtt5N0PNoeCVrZU%2FaGmA1SM7I%2F7cqmgNJsq%2FVXGqJQQYOhvkyU4Olxk8CKeFakvY8G81S%2BBaIEa0B3BZVjGhxzYvGTg3TTzfDbZMgHCzfUifr1X9rdJVDG60CBEJ7%2FmL015sGMkyas%2BJcr39RntUqUKEG%2Fzy9jFKJCPOTLAKmHJNuSynLJ5BvgVf8bATtj1EXgcOLfJmbKuM%2BladAfRKzqL%2FFCjoOm2Pk2bE9GpK4IZo%2FT2m0az%2BpKEM2yGZC%2B259G11Lh7OHizTheII8xHJF%2F9uAMKD90skGOqUBYiNVTmZrdio%2FARYqxsLn7uvXufb0bvgqoFNGsO%2BU0jcFrFHG%2BVN2FauVYapsIF6i5pkkfu6TCrnzTBdN5XGhh8CSSRBXh84nQCqvL6s1wiuRiBslmHaDkaLJixyLqJMcSTbSHj4MUw1IiI%2FMQoW5zfdk9tLdG2BnV5ObLrWktOjJwcCuTdJh0dO5EeTEjQTFF4xdzvyjlRnX%2FXfMSREKDEI20HFx&X-Amz-Signature=2d220265ffe4b925f33a376b625b7ee8168504cd19136a9253fa2d559d9b93ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
