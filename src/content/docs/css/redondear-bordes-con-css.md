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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WBT3AJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFt2T4Us1kcXXKCyw9YjUcgHxMmY1LwTdtMW6%2BRfuhinAiEAxU4pLoy8qhUgOAhOalhNGPpLTvvHd7Qc5DTfcZJb9%2BYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7KqsXT03BaQg8MxyrcAxHvNr3jrsZAabIAmDLctCLouBD7W%2BuE6tIRbEnki7XUw%2BJ4V3Px7jKXCpMG%2Bpfb3fTqiLrwg4WZRbIuY5C7ViV2tjH%2BAEW6zvyP1AUhxZu7rpPYP6CfgYNQM04ckpDKTz%2B8792zbM5FOyT203XviRzKgTmWEjKdGTF76HHC2IO4AKvsB%2BYpv3kLC7dz%2BdYMCYmqUmC1ZfGSEtcSwsNggGBs%2Bf4wv0aM%2FNpHNitTEtaJxpgR272z2uXGZQ%2FLXm9QprgHNQOUa1W4QC72CJHtzrAa5fnXlbr6YheXzh0kn3jmVo%2BqILa1S9IL5oHU2rZIQvIQDleW0oAdHlmJ33JKvxKvO6rCgupstZExi23uGM3AQaLuKYZ%2FP4%2FyKoYOlCU7Ix8464SNY48htzrnlDmc6VHE0%2FhrRpE3I8h6D6Y4c5u10f2vhrzSaFHVukzDp0s2%2FxGYGSPSqUi7V1sD0iPfK6UXT%2Fxde8%2Bxw5KuTW79fXrRtwlR%2B%2Bo1VAcKMl9O8OGQdvi6BVzhGIyqu6lrMcaU6bLRViG5wGbiJM4SnbPTQhk4LV%2FDChKslx0IuG8NhN3PCO7olca1NuE9hE0JxCe7alTRlhX8ORp%2FqHyVZJMFacxDvwE64ucoZk8APVrcML%2BQ28kGOqUBHwwn20ClhXXUIu6beHS2HCu1qg0a%2BRo0WU7PX0Y78ERgsrmkww7h2qDTyoQCMN%2BBfIwGW5Rr8WLwnsTk4KRWbeOXdR0teFc%2B%2FxNerdxGsA1A1W52EAJrUjpR3wammYTfcjDlnFR8rjtfOP%2FiGai6qH3NDnejnlq4bB3sr%2FOLKUUsIXjWn60pCWf6KC2J1tNqd9QMAAlB0y20DEpjlJpbRER9aCXN&X-Amz-Signature=607ca1b3b5fa67aeae96199772a2551bd1f8e5f41177e35c1525fccae5a8a238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WBT3AJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFt2T4Us1kcXXKCyw9YjUcgHxMmY1LwTdtMW6%2BRfuhinAiEAxU4pLoy8qhUgOAhOalhNGPpLTvvHd7Qc5DTfcZJb9%2BYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7KqsXT03BaQg8MxyrcAxHvNr3jrsZAabIAmDLctCLouBD7W%2BuE6tIRbEnki7XUw%2BJ4V3Px7jKXCpMG%2Bpfb3fTqiLrwg4WZRbIuY5C7ViV2tjH%2BAEW6zvyP1AUhxZu7rpPYP6CfgYNQM04ckpDKTz%2B8792zbM5FOyT203XviRzKgTmWEjKdGTF76HHC2IO4AKvsB%2BYpv3kLC7dz%2BdYMCYmqUmC1ZfGSEtcSwsNggGBs%2Bf4wv0aM%2FNpHNitTEtaJxpgR272z2uXGZQ%2FLXm9QprgHNQOUa1W4QC72CJHtzrAa5fnXlbr6YheXzh0kn3jmVo%2BqILa1S9IL5oHU2rZIQvIQDleW0oAdHlmJ33JKvxKvO6rCgupstZExi23uGM3AQaLuKYZ%2FP4%2FyKoYOlCU7Ix8464SNY48htzrnlDmc6VHE0%2FhrRpE3I8h6D6Y4c5u10f2vhrzSaFHVukzDp0s2%2FxGYGSPSqUi7V1sD0iPfK6UXT%2Fxde8%2Bxw5KuTW79fXrRtwlR%2B%2Bo1VAcKMl9O8OGQdvi6BVzhGIyqu6lrMcaU6bLRViG5wGbiJM4SnbPTQhk4LV%2FDChKslx0IuG8NhN3PCO7olca1NuE9hE0JxCe7alTRlhX8ORp%2FqHyVZJMFacxDvwE64ucoZk8APVrcML%2BQ28kGOqUBHwwn20ClhXXUIu6beHS2HCu1qg0a%2BRo0WU7PX0Y78ERgsrmkww7h2qDTyoQCMN%2BBfIwGW5Rr8WLwnsTk4KRWbeOXdR0teFc%2B%2FxNerdxGsA1A1W52EAJrUjpR3wammYTfcjDlnFR8rjtfOP%2FiGai6qH3NDnejnlq4bB3sr%2FOLKUUsIXjWn60pCWf6KC2J1tNqd9QMAAlB0y20DEpjlJpbRER9aCXN&X-Amz-Signature=01e047b13304af9e0fa2bc84799cc9baf71fa6bdaf6bb606645acecd10c72733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
