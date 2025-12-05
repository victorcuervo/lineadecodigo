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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNH2CB7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCGDIBJAkFSjAb%2Blq4PdwRbY4ed6Biq9VYHBI%2FKz7YDAiEAzHFh9ozSEiteBfJMkrWc5%2FACqYPncxjkt45gRuzOhA4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBeGFjm8oBKS0EFtpyrcA%2BAwWbxqw5GUuOE47X8AkeNxPpcfaKkpvTDKnvAA5O06AiIWl9N96BTOKjyX7mxyAYMa0BzxmZySmYkwKw58CqXMgPVLVUuBW71F37ZtiWUVKUUJeJuA0d7UNcRz4sZ5axvLDx5oa6D9DdqoMzUkeem6ZimFmycw5hAZEopk3r4%2F%2BRNc6%2B7zO9zD4XNmXz9EXe9oUHpAKqkbhK3oEF5jHUbpqTazMZF6CGdQ%2FdENDHwGBLJXe1Gq0T%2Bbh6hA%2F%2BEc3maFQguQeCzOu8ONmgRc9xXMgcekmTj3LYoKKT2Bar6umjW0q8%2BzN3AUgLvC2yJXI9DOE7mqcSORYC1aa3%2BWU8gfVTfmdmURL9lWnj7SSTPLZ1HWkrckdG9Ji%2Bg0LfllNQeGzcOaI%2B1IhoemHQigGNGV8ZlvRtzsWBObMiORolof5m3D2ziWY7soIfvh6rd1ckpjAYFf2MwQfy8G3EBbxgcNdIrOo4xgMvFyuozs6mueIhJsn61FVBKWNkJQBs1C6l7Zy1TjDqKw4BQOc4a6VyqPXvj9qd%2FFtfj6LQmVXIt72TafZUXa8wt%2B7brhhnqgdfOGRsheESSc8%2BIr2IDlO6fHCRwgsWLxTLbgHhL1R%2Bn%2Fa6ABvUkmuJ8HEY3OMNiMyMkGOqUBc8a8VyLzZtTPtcj3M%2B1E1eiRF5rrz1vTFjlpng3%2BN9794SlvwEybkzHWKMt4c5Sc5bh2Eda7dOahkLSHHJEEnwt%2FuU%2F3tT0HniEsNckxHUno3%2F0e1q2pPtcPgErKjKipSznaBCpsCvOjJgD45gPvpLkKow1qMKfgsn%2FlcMYUp56D7mf7JhhLIvMsC6RLLc%2FFqJjRqNLBrUPqfsUGVNRXKlMYgieI&X-Amz-Signature=52fba6c65d47d5dcedde613c709818a0342b24c9aa32c1d040a83db2e4030386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNH2CB7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCGDIBJAkFSjAb%2Blq4PdwRbY4ed6Biq9VYHBI%2FKz7YDAiEAzHFh9ozSEiteBfJMkrWc5%2FACqYPncxjkt45gRuzOhA4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBeGFjm8oBKS0EFtpyrcA%2BAwWbxqw5GUuOE47X8AkeNxPpcfaKkpvTDKnvAA5O06AiIWl9N96BTOKjyX7mxyAYMa0BzxmZySmYkwKw58CqXMgPVLVUuBW71F37ZtiWUVKUUJeJuA0d7UNcRz4sZ5axvLDx5oa6D9DdqoMzUkeem6ZimFmycw5hAZEopk3r4%2F%2BRNc6%2B7zO9zD4XNmXz9EXe9oUHpAKqkbhK3oEF5jHUbpqTazMZF6CGdQ%2FdENDHwGBLJXe1Gq0T%2Bbh6hA%2F%2BEc3maFQguQeCzOu8ONmgRc9xXMgcekmTj3LYoKKT2Bar6umjW0q8%2BzN3AUgLvC2yJXI9DOE7mqcSORYC1aa3%2BWU8gfVTfmdmURL9lWnj7SSTPLZ1HWkrckdG9Ji%2Bg0LfllNQeGzcOaI%2B1IhoemHQigGNGV8ZlvRtzsWBObMiORolof5m3D2ziWY7soIfvh6rd1ckpjAYFf2MwQfy8G3EBbxgcNdIrOo4xgMvFyuozs6mueIhJsn61FVBKWNkJQBs1C6l7Zy1TjDqKw4BQOc4a6VyqPXvj9qd%2FFtfj6LQmVXIt72TafZUXa8wt%2B7brhhnqgdfOGRsheESSc8%2BIr2IDlO6fHCRwgsWLxTLbgHhL1R%2Bn%2Fa6ABvUkmuJ8HEY3OMNiMyMkGOqUBc8a8VyLzZtTPtcj3M%2B1E1eiRF5rrz1vTFjlpng3%2BN9794SlvwEybkzHWKMt4c5Sc5bh2Eda7dOahkLSHHJEEnwt%2FuU%2F3tT0HniEsNckxHUno3%2F0e1q2pPtcPgErKjKipSznaBCpsCvOjJgD45gPvpLkKow1qMKfgsn%2FlcMYUp56D7mf7JhhLIvMsC6RLLc%2FFqJjRqNLBrUPqfsUGVNRXKlMYgieI&X-Amz-Signature=0bf5874ef35e476704f211ba800a4bd572318bfb2e40926a1bd85927e4c60220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
