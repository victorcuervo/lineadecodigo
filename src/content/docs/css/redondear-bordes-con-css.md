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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XAVR46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl2DdtGCK3EgKAaORjte66ahJWYQheqnVtu1rf4oznYAiBHo0dWEp9ciRKqDhD9NnMUqCIbSGmPpGHrjF6Zh9BqxCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRXLNufGlxBp6cXClKtwDfbWXuPpAff%2BQvEGTYGd6%2F9BxijmCb0%2BmvRQ108tZiCXafZS8ho2kgBVR3FOS%2BImoxiYPqGZuST7yzghCTcwIhp4IJBIdVY2GyligYKteP6xck7L9TJdJpst9ttgbkV9BqgOEStKvFgNZRaJ5fL65Gc0NqiPpajjvNne6FUWUnRX0ibGDlJDEL6jZ7bgFnRGztMn9MxBzK6HcKoOLuk6QEMJBDqz4cLEX7QH39%2F2EoFeubB0KG1y5j%2F9xLYqF4Y1IAZRz7GfGy3uOs9WQuxph1rL33z2ex6L2Cbd6NwzkEdWhfX9brzQSFqDHuc2ie1rHpr8oS43QPB1L8%2Benn3J8%2F1YBTkbn62QMDZykAmQf%2B%2FkuP3MoRN0Z5BXcVSlQUs9ehYdsu9Yt6s0djtZBXyAt5XYyYcjntGR6OumlVLbIRlSGRDjJTco%2BIxRfRyPbB37L%2FE%2FLGbyLENqiiTeq5K8H%2FJjFIUKY%2BfQ2aslVwYTMIThMw2J7XWo8m%2BX1WjkLlC36iier%2FOtsJSVmCbkXHmhRIjKLNP1EQUiKx6UgFRsKCmSM6nC%2F0eIkFCdilOc61sdIiiozGZZ3Vu1w9MF3sFkSooKUmpKtXQ%2FIgrPs3PNaZSheMvF6Jc573KZRIhowrozIyQY6pgF5uA8QPX0eDbhYLqkwXKlRl%2Bld0Dgfa03efOZYQLkOFbiFASxt5Vo0nx8lvH9WlwXoZncjB3XkXDOMGZKD8i2%2B8QloozZNVRkWl%2FKy%2BE4dIWIhhivmO916XuTZ7gC9mEy083NcJXRzYOkkpSybeF4SSfbIwVUDWSK93y7AMqN5e0bhWK5FBazsv%2BitceO%2BCl%2FAuIe1L%2FnEz85nqPF98BndvJzTxs%2Fc&X-Amz-Signature=2a8367dfd9595107e9c2b723e60d03422bb2c3eaae72c0da52a4dc49c46d6adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XAVR46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl2DdtGCK3EgKAaORjte66ahJWYQheqnVtu1rf4oznYAiBHo0dWEp9ciRKqDhD9NnMUqCIbSGmPpGHrjF6Zh9BqxCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRXLNufGlxBp6cXClKtwDfbWXuPpAff%2BQvEGTYGd6%2F9BxijmCb0%2BmvRQ108tZiCXafZS8ho2kgBVR3FOS%2BImoxiYPqGZuST7yzghCTcwIhp4IJBIdVY2GyligYKteP6xck7L9TJdJpst9ttgbkV9BqgOEStKvFgNZRaJ5fL65Gc0NqiPpajjvNne6FUWUnRX0ibGDlJDEL6jZ7bgFnRGztMn9MxBzK6HcKoOLuk6QEMJBDqz4cLEX7QH39%2F2EoFeubB0KG1y5j%2F9xLYqF4Y1IAZRz7GfGy3uOs9WQuxph1rL33z2ex6L2Cbd6NwzkEdWhfX9brzQSFqDHuc2ie1rHpr8oS43QPB1L8%2Benn3J8%2F1YBTkbn62QMDZykAmQf%2B%2FkuP3MoRN0Z5BXcVSlQUs9ehYdsu9Yt6s0djtZBXyAt5XYyYcjntGR6OumlVLbIRlSGRDjJTco%2BIxRfRyPbB37L%2FE%2FLGbyLENqiiTeq5K8H%2FJjFIUKY%2BfQ2aslVwYTMIThMw2J7XWo8m%2BX1WjkLlC36iier%2FOtsJSVmCbkXHmhRIjKLNP1EQUiKx6UgFRsKCmSM6nC%2F0eIkFCdilOc61sdIiiozGZZ3Vu1w9MF3sFkSooKUmpKtXQ%2FIgrPs3PNaZSheMvF6Jc573KZRIhowrozIyQY6pgF5uA8QPX0eDbhYLqkwXKlRl%2Bld0Dgfa03efOZYQLkOFbiFASxt5Vo0nx8lvH9WlwXoZncjB3XkXDOMGZKD8i2%2B8QloozZNVRkWl%2FKy%2BE4dIWIhhivmO916XuTZ7gC9mEy083NcJXRzYOkkpSybeF4SSfbIwVUDWSK93y7AMqN5e0bhWK5FBazsv%2BitceO%2BCl%2FAuIe1L%2FnEz85nqPF98BndvJzTxs%2Fc&X-Amz-Signature=95a1b77b91133925b7c9062ca4a727e492df9faade1d0a63345f7ed503f0ed24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
