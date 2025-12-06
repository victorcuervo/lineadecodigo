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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YU3IMG6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4EFMUO15iTaDZOknudPDQMrqxfRffXPU2pqnDqfWIEAiEA0LodrczNOweYcCshCaE7NhRrN9iCeNBMWldoAx5hiZsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAadBxBjkskis2dchSrcA0GNeKhGkJeJni9TVpQZBNng8Qf8m7hIOi9J1MZX0Z0RY%2FvXRDJbC7sNfBP5exL7%2FlcSyTyqIketp8tjP9w3I7DoR0eERAoZBmwGn2e1cDFOzaMp2RKCZ%2BIQvpWD50eS%2FejENf6zfzaRmJjG5wfHgN7V5e5ph7nPfbuH32%2BumGzCp1nU78IkCvAkOzV4Su2VX2%2FhLcE1XBAJxBbgvPhdwhysLBnV%2Ff7LRRKSTgihcMUFFxvzlG09gmz1UkzFCt3b3%2FmwHTHgbogHCdC1VOwmaivAtW5YW8XJy%2Bs57oTpCU%2FmkR9nY5tsiHK1EFip4EDv8Ip0yyvtuMNgr2K8Y1q5LoCkmVNodLf8mg6rXkemnm0OPtAoaTe2ga6RGHim3PMVJB7d%2F1mnwVKev98PmMJ44X05zcQ%2FE1iRbklNYaz2L7dh2HQiXQzP7HsBVIXtio7ACPg0WghMD3LRvWxhvT4OH1FjiQkMLiNtqFpkWut3QTPQidAHQvSM8tLJ%2FBLrdD0I8mcUzMzkBmByDFMVjr%2BS4IuTNFUklqqRrY3PNrxmbXetR5LkX14vX9J8FZ8geEw0Z6c3%2B%2B5y5O10ixvI1ugr4vTig3F9mYAvcfzEyP5GES6wWzW0JUDGT4btRkCaMLmK0MkGOqUBI3soPn%2FlCGlGHV%2F1hodr8uRCEm%2F1C0YuDzSAlXPfjNku0yOAFJ8we8%2FAO7oP8YY7kqvsyM%2BUyZR7tNORTbhhqcWRNkSV%2BFgIzpoW%2FSNUiDoxH%2F98hNH8nD2db%2BAiZWWhtT1XrQ4ACn9nEicS0o9HEZtPAt65u%2FfygEh96PeZ%2FiZF1bSXfD2ap2CRlUYRJnZ5R3CQoCgQyeHaJr%2FMegGQvo04VP2E&X-Amz-Signature=4713b4c88b9ee2321cc04c3513a3e211e11b5ea4a6f884a845bcece9ffd16fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YU3IMG6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4EFMUO15iTaDZOknudPDQMrqxfRffXPU2pqnDqfWIEAiEA0LodrczNOweYcCshCaE7NhRrN9iCeNBMWldoAx5hiZsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAadBxBjkskis2dchSrcA0GNeKhGkJeJni9TVpQZBNng8Qf8m7hIOi9J1MZX0Z0RY%2FvXRDJbC7sNfBP5exL7%2FlcSyTyqIketp8tjP9w3I7DoR0eERAoZBmwGn2e1cDFOzaMp2RKCZ%2BIQvpWD50eS%2FejENf6zfzaRmJjG5wfHgN7V5e5ph7nPfbuH32%2BumGzCp1nU78IkCvAkOzV4Su2VX2%2FhLcE1XBAJxBbgvPhdwhysLBnV%2Ff7LRRKSTgihcMUFFxvzlG09gmz1UkzFCt3b3%2FmwHTHgbogHCdC1VOwmaivAtW5YW8XJy%2Bs57oTpCU%2FmkR9nY5tsiHK1EFip4EDv8Ip0yyvtuMNgr2K8Y1q5LoCkmVNodLf8mg6rXkemnm0OPtAoaTe2ga6RGHim3PMVJB7d%2F1mnwVKev98PmMJ44X05zcQ%2FE1iRbklNYaz2L7dh2HQiXQzP7HsBVIXtio7ACPg0WghMD3LRvWxhvT4OH1FjiQkMLiNtqFpkWut3QTPQidAHQvSM8tLJ%2FBLrdD0I8mcUzMzkBmByDFMVjr%2BS4IuTNFUklqqRrY3PNrxmbXetR5LkX14vX9J8FZ8geEw0Z6c3%2B%2B5y5O10ixvI1ugr4vTig3F9mYAvcfzEyP5GES6wWzW0JUDGT4btRkCaMLmK0MkGOqUBI3soPn%2FlCGlGHV%2F1hodr8uRCEm%2F1C0YuDzSAlXPfjNku0yOAFJ8we8%2FAO7oP8YY7kqvsyM%2BUyZR7tNORTbhhqcWRNkSV%2BFgIzpoW%2FSNUiDoxH%2F98hNH8nD2db%2BAiZWWhtT1XrQ4ACn9nEicS0o9HEZtPAt65u%2FfygEh96PeZ%2FiZF1bSXfD2ap2CRlUYRJnZ5R3CQoCgQyeHaJr%2FMegGQvo04VP2E&X-Amz-Signature=02db600023be74b37b652ab23a61311e63852979f659a7e704e18a2e62df5071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
