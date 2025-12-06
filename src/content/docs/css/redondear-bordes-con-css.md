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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDXYQGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV2wvTqC9VfKe1ev3t2PMXChoUyWT8yAy5ea0g8K01fwIhAK2wifFsGu2BP4Af11VHwQRBJQtZlN9OuNY8cg4PNOemKv8DCHEQABoMNjM3NDIzMTgzODA1IgzZ6TWCCG4X5z%2FG6U4q3AOPYVKl5Pww1%2B1VNW3MApGNpHAbP3Cqiz9l3PE11XuthPH%2FmocKG6QqMX0nq0CFiTXtqJk6jpqmsLPjSb0GPRsxeqyTcDmhjvfPf4KqdZhMnk5RHdQzE1FoSmkluPmmXq%2F71HldEyHLCtRyXKPSKaeovqllXntkt3CPFujJtR9Zb8OY6pXjfizMKXPeCI522cOLyLXVXpzYZwXXhFHkwQy%2F4EGb9Hghd%2FZ4Ow7s8kmFFNiCwSNT7UYKqtsYulR1DLUSh5GgShM8UScn7hM%2F%2FzYkOEwd9meRAgOuEPg43sJGR98njOrgJFEXq3QZyxjKLBJauz6%2BEFJBoj0DY9hsHSJcmVUVW0AJrRHrbEBnsruqB4ZV1hDfmdbc2wOoqamP9S2qtMK6mQHjgpzIneG%2Fcy44x5OBmGKUW6JrppirNEglR2GRL2amm74ZbRh5%2BASFuZToaWqHKQGoYWNkubHmWj45Qw4ZWZVtQ%2Fcna%2FUl95osc2ICueH4%2FuEPShY8lSu5yL%2F%2BkpwEjErBmbs2g55zU%2FRb386h36eVzsyA9Q9yUALBOqnKvZFaRId1j%2B4ucfK0B21j2aAIRggZwLS%2FJ6equkDwCUOCxRG1Tcm8QGG5r2Ss%2Bax92HTV41TXcUHU%2BTDsvM%2FJBjqkAcGujtN%2BJoYqAx711SFpVv9WklMzUyqkSi9MqNMBbcVop3suPowiyTYJth9u0H1GwPNLaUU5QrOMp8O1bhA%2BR33jW6E6trRQmV%2FDy6qdbv8hCTMlr3Guw9bQ4WciK6YlsNuGF0gZ57cjMiVbXq2sVBllLCqYcl2csB92%2BKBoupLvB%2FDc2U%2B1zr0phT52oRwLZ3ny0p1oZZw8bKxImjuGwY%2FbCVBD&X-Amz-Signature=39ea55f53cfcfc51b8759163e3be7fe1ad64c187c6ce8569ddd587c0dab16f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDXYQGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV2wvTqC9VfKe1ev3t2PMXChoUyWT8yAy5ea0g8K01fwIhAK2wifFsGu2BP4Af11VHwQRBJQtZlN9OuNY8cg4PNOemKv8DCHEQABoMNjM3NDIzMTgzODA1IgzZ6TWCCG4X5z%2FG6U4q3AOPYVKl5Pww1%2B1VNW3MApGNpHAbP3Cqiz9l3PE11XuthPH%2FmocKG6QqMX0nq0CFiTXtqJk6jpqmsLPjSb0GPRsxeqyTcDmhjvfPf4KqdZhMnk5RHdQzE1FoSmkluPmmXq%2F71HldEyHLCtRyXKPSKaeovqllXntkt3CPFujJtR9Zb8OY6pXjfizMKXPeCI522cOLyLXVXpzYZwXXhFHkwQy%2F4EGb9Hghd%2FZ4Ow7s8kmFFNiCwSNT7UYKqtsYulR1DLUSh5GgShM8UScn7hM%2F%2FzYkOEwd9meRAgOuEPg43sJGR98njOrgJFEXq3QZyxjKLBJauz6%2BEFJBoj0DY9hsHSJcmVUVW0AJrRHrbEBnsruqB4ZV1hDfmdbc2wOoqamP9S2qtMK6mQHjgpzIneG%2Fcy44x5OBmGKUW6JrppirNEglR2GRL2amm74ZbRh5%2BASFuZToaWqHKQGoYWNkubHmWj45Qw4ZWZVtQ%2Fcna%2FUl95osc2ICueH4%2FuEPShY8lSu5yL%2F%2BkpwEjErBmbs2g55zU%2FRb386h36eVzsyA9Q9yUALBOqnKvZFaRId1j%2B4ucfK0B21j2aAIRggZwLS%2FJ6equkDwCUOCxRG1Tcm8QGG5r2Ss%2Bax92HTV41TXcUHU%2BTDsvM%2FJBjqkAcGujtN%2BJoYqAx711SFpVv9WklMzUyqkSi9MqNMBbcVop3suPowiyTYJth9u0H1GwPNLaUU5QrOMp8O1bhA%2BR33jW6E6trRQmV%2FDy6qdbv8hCTMlr3Guw9bQ4WciK6YlsNuGF0gZ57cjMiVbXq2sVBllLCqYcl2csB92%2BKBoupLvB%2FDc2U%2B1zr0phT52oRwLZ3ny0p1oZZw8bKxImjuGwY%2FbCVBD&X-Amz-Signature=01bf57b0f082cb4611ad42bc4d29abdd8da07866cf06a54c6b4c5999063bd486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
