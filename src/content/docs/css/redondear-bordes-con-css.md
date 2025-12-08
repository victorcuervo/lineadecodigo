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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6RX3HOD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2HY8w6OZNTfpjZeAVoYNz3GtE0KVo4pOVFxDfSjcnFAiEAp2Nt11feLKQIyusR3oZgVCXw3mtfEmGLGK%2FhZtxWlDsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArldHGhsDQtMvQ3SCrcA%2BokUFpfWExuHQ2ntjTzRLLGqEonLyyXLGWYdhT8FyNVmG5oNPUDdk%2FY54O%2FCxKaiOhDSeZbx09aZFwG4Ova%2B%2B7VIiH1ynbmWXrbrchD6SUBQ30UePZl0mZ6Bth6sdosspr6fjJGdctt%2FXe1VNA3jv15ahY9dvOr%2F5j7iEOwocj5g35RnrXAdbRT84iFeozTloZHGM9OLxewV%2BxHBpyIYOxfyU6iBVJKSCeNKq8e%2BMwOsth0vUU%2BqMivZtVMQ7XCmGZR5GrNBmXsMa7j3HSTn0ArdrC0i3HzKzxSMTUu5reXZTe1IZ4bzzZs0BIh2JKv5%2FRujL6rPNX9wflnwrkzFvuepI5eD3TVyfpWynbCgoF%2B4QdI3JQVWnYefvMUcS7lvIpC6nIvGwEIqWBNCDE3FVBzloKbwusXDY4ApOR76Oqrvdle2Xv%2Fq%2Bmb7mX9jQ%2BcRys4Z1Le4YWMzxjzvOlzh0n%2F8maN%2BZVArZEngnnyMuUVKszljfoD4gFbgUbTm49LFFibMyCPOVB44EVbd2FKPdZuHFPwSfQaGKii10hxMJ0BC9RRxmtZvBSNvP70uYo8gGqVm%2FC0svTOSKNSaR4Reqmk8xhHscekKCvgYE%2FvN08FRu5k7tKHv748h4GcMITt2ckGOqUByZfPt66SO5k%2FKgSL4Cqk8kZn9cdg3hMpVPvXdcGQTxaofgO5t%2F0FkrX82tRXHg1PN8ptmQZ0yfiV0uD%2Fxgy3%2F8DIWo0G4br5XH4HuxUdxukG5%2FVapTbTRMyO66miTIwr9EVdkzm%2F9tbWzcE%2BlDAWZ9SjSN%2BAGOQTp8vHDrzL%2B9ygTKgAtlOwx6y8L3efckq8bz3tDzN440%2Bqh4F0a55iY2DGD6pY&X-Amz-Signature=f14497ddc4a4aa41639a240e06b7403e1bf24eb5fb2e937ebe7030e157ae909a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6RX3HOD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2HY8w6OZNTfpjZeAVoYNz3GtE0KVo4pOVFxDfSjcnFAiEAp2Nt11feLKQIyusR3oZgVCXw3mtfEmGLGK%2FhZtxWlDsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArldHGhsDQtMvQ3SCrcA%2BokUFpfWExuHQ2ntjTzRLLGqEonLyyXLGWYdhT8FyNVmG5oNPUDdk%2FY54O%2FCxKaiOhDSeZbx09aZFwG4Ova%2B%2B7VIiH1ynbmWXrbrchD6SUBQ30UePZl0mZ6Bth6sdosspr6fjJGdctt%2FXe1VNA3jv15ahY9dvOr%2F5j7iEOwocj5g35RnrXAdbRT84iFeozTloZHGM9OLxewV%2BxHBpyIYOxfyU6iBVJKSCeNKq8e%2BMwOsth0vUU%2BqMivZtVMQ7XCmGZR5GrNBmXsMa7j3HSTn0ArdrC0i3HzKzxSMTUu5reXZTe1IZ4bzzZs0BIh2JKv5%2FRujL6rPNX9wflnwrkzFvuepI5eD3TVyfpWynbCgoF%2B4QdI3JQVWnYefvMUcS7lvIpC6nIvGwEIqWBNCDE3FVBzloKbwusXDY4ApOR76Oqrvdle2Xv%2Fq%2Bmb7mX9jQ%2BcRys4Z1Le4YWMzxjzvOlzh0n%2F8maN%2BZVArZEngnnyMuUVKszljfoD4gFbgUbTm49LFFibMyCPOVB44EVbd2FKPdZuHFPwSfQaGKii10hxMJ0BC9RRxmtZvBSNvP70uYo8gGqVm%2FC0svTOSKNSaR4Reqmk8xhHscekKCvgYE%2FvN08FRu5k7tKHv748h4GcMITt2ckGOqUByZfPt66SO5k%2FKgSL4Cqk8kZn9cdg3hMpVPvXdcGQTxaofgO5t%2F0FkrX82tRXHg1PN8ptmQZ0yfiV0uD%2Fxgy3%2F8DIWo0G4br5XH4HuxUdxukG5%2FVapTbTRMyO66miTIwr9EVdkzm%2F9tbWzcE%2BlDAWZ9SjSN%2BAGOQTp8vHDrzL%2B9ygTKgAtlOwx6y8L3efckq8bz3tDzN440%2Bqh4F0a55iY2DGD6pY&X-Amz-Signature=f57d24e7de8acc5e312f18d1c137039c27b7e3e2ffe59c7e5ba46575cba7c220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
