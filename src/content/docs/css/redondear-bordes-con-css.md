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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFVTDXV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgYMMqvaozJ7jLb0Td6%2B69O%2FBfYZIxKjUYAKdmSxcAcgIhAPGZyeljFpJsycmkcVr%2FCoaKOUhXDb66ZrnYSQXaOWTPKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrgUEjitqn2UBhH7cq3AN6%2FWjk%2BuMzGw5KD%2Fea4LQJrDCqhlcF9SRQGqxRI78nJ2c9j2fBR0Gnn%2BQktDbZUbRsF64L5ubKny6xCxGeaqSLE6zlM8gkBC6nxgNOOGmldIExsdJ7Z%2Fg2Zq0WZugGa%2BpC4tO%2FcbirbPKrfGlps7q%2BV1j3LiX0DEjNURucB%2ByWqKL%2FQsiaQtySCYmLht7Q5Czp%2Bx0d%2Bqyy8UcZjRrsUPeqC%2BOwy3udwx87ruN6Bs%2FBXHtU7qgMzX0kMYqcHYF99ds55a6X4QDneKeSDn3EYJP2QHg0lMjR2KzLg0%2BkgjlonTeeX7rw%2BQ5y1%2FYgbT6m7tNkRBd4nRc6i4qcqpG85QfCyDyZcqhmxVuSVuFQXZV74PpyPf%2F0rgiy02%2BiThWHabC%2BBAuSc3SViHvYrG4nKRLtz6LK7QGXb7qX%2BMjO3kISRLxMaxYWIdIsY1zSpi51d0wHGQSuB0mliqcXQkflH6EI14YuCxbFuap0H6su%2BTNf%2F4l5Ci95SHjXbpYBf12pb67jPAERSTezthDd6Np2pN5uBDuqfVfXLwJXcfIYBPB%2BgtEEldlg7hciuURbVEkSEIxVciqJr%2BFHv68k6fG1vzneIUi2Ych6xL1BeAau4UekKNo5GwCB1r2TuiicuTDd5NvJBjqkAR15blKVZBnui3P9rtOJBv5VJLqAz%2Bxw9HqciH4W6YUyhw9g170lamC2X6W6y8yh749lUWOSe1U3b26YKKF3wzdO%2B96keAwIQP8Kj1pFd0TYA5rV9Zw8BIKlh13gkYjpoaY64CgR5%2BkoofGAMEpCSNgjZg6iuqPu6BxDWCU6fXmznMvj6NIWWOk%2BO2HUDnco6YHCYP1r255BlVGPuNtpFjL4cCTv&X-Amz-Signature=a3468ec0a23bf9aabcf022801308562644325efafb446e177b8bddf3bc14e7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFVTDXV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgYMMqvaozJ7jLb0Td6%2B69O%2FBfYZIxKjUYAKdmSxcAcgIhAPGZyeljFpJsycmkcVr%2FCoaKOUhXDb66ZrnYSQXaOWTPKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrgUEjitqn2UBhH7cq3AN6%2FWjk%2BuMzGw5KD%2Fea4LQJrDCqhlcF9SRQGqxRI78nJ2c9j2fBR0Gnn%2BQktDbZUbRsF64L5ubKny6xCxGeaqSLE6zlM8gkBC6nxgNOOGmldIExsdJ7Z%2Fg2Zq0WZugGa%2BpC4tO%2FcbirbPKrfGlps7q%2BV1j3LiX0DEjNURucB%2ByWqKL%2FQsiaQtySCYmLht7Q5Czp%2Bx0d%2Bqyy8UcZjRrsUPeqC%2BOwy3udwx87ruN6Bs%2FBXHtU7qgMzX0kMYqcHYF99ds55a6X4QDneKeSDn3EYJP2QHg0lMjR2KzLg0%2BkgjlonTeeX7rw%2BQ5y1%2FYgbT6m7tNkRBd4nRc6i4qcqpG85QfCyDyZcqhmxVuSVuFQXZV74PpyPf%2F0rgiy02%2BiThWHabC%2BBAuSc3SViHvYrG4nKRLtz6LK7QGXb7qX%2BMjO3kISRLxMaxYWIdIsY1zSpi51d0wHGQSuB0mliqcXQkflH6EI14YuCxbFuap0H6su%2BTNf%2F4l5Ci95SHjXbpYBf12pb67jPAERSTezthDd6Np2pN5uBDuqfVfXLwJXcfIYBPB%2BgtEEldlg7hciuURbVEkSEIxVciqJr%2BFHv68k6fG1vzneIUi2Ych6xL1BeAau4UekKNo5GwCB1r2TuiicuTDd5NvJBjqkAR15blKVZBnui3P9rtOJBv5VJLqAz%2Bxw9HqciH4W6YUyhw9g170lamC2X6W6y8yh749lUWOSe1U3b26YKKF3wzdO%2B96keAwIQP8Kj1pFd0TYA5rV9Zw8BIKlh13gkYjpoaY64CgR5%2BkoofGAMEpCSNgjZg6iuqPu6BxDWCU6fXmznMvj6NIWWOk%2BO2HUDnco6YHCYP1r255BlVGPuNtpFjL4cCTv&X-Amz-Signature=0cf5267e2f50c0141c61438722a50df3fecf8d5453cbb7317beb9cef640142aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
