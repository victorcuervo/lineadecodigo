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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHWT5BY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvdDDA3cU40f3VpUmtdiAUmpDWbSnOdvz1MVwXvZC%2BtQIhAIg0X21SBwvy19NGFmMi56Fece9jTf6D34tl6APaUckxKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3pca90NfDbDmDdeQq3AMbMjZZLoWfbY18mNKPiYYoidCU%2BygOc9CD7mxkygK6oDP1iCTZ%2FAngYQLzGErQoNKjlDPxuz9%2FavdCUPLLKBoUqe%2BlP4YaLpR%2Bbk7n4fZLl4lXK1h5oVpBpnV3SWTUpigfAG7CU8rclFADlaNKWppgeB57sZPPDjKXbW25WsFpzSyjVVy4AcN3a8uCnwLWtHVqFaC9p213%2BQ8MJtC0UWt3pq1fS1hhnqDxcl%2BJjTrSfKA4vrslsOeiMuf56VZs5XndQ5HfDnu7xL87RvK4AxbJNynJqqXDm0fYUOmM8N5Bf%2FpT668ZmMCC1inBNWvRUnBHxUqwiKcKAmgLE8btclj8q3rylBgphLbGthIH6QGkx3aPSJ0mLBWLH2ZT%2Bk64TJGCh6uWNStuoTdt5wDJUDFTwQOBVXv2yp3vHpdJd7v4VFcSZe5WXqes80QzakpPq0tfObC2R0g92zoBrEvWP%2B7A2Jx0HqWFLiALSaXufvYy8sHDCCcjA63kVW%2FF8DtSvKmiZgyyCYJlJrnLpeTuFcIo3%2F5VY6Srvu1wPXhtuKtxpf5wklL7yuDS7UxeSXxmctx3TH2LkD%2Fo6XUCsiH1t6pmVW1f2ZaOH5KOMS3ItMoc%2Fv%2Bb2OP7GXoU%2FzKu8jCxwNbJBjqkAWUtZSkA4bpWo4BHY0XRdgOscMpeCYvl1GH5Zw%2FWrWIleNR3TkmqUjMJYIQ5NUiJdWVh0HX5v3S7yuA9FodH1srI8k4uux8hgfdN9pDgc2Xy54g8IUFnZ5aVyCUxMVrg5jxPQsvjF3ExmCFiQiRngE3ZuuQdtMq98FgcFPqR0T7%2B2coBG4Pr%2FmG%2FpiWUkr3uyUSytkCsbFUaEGi6PobGELGxDDeR&X-Amz-Signature=549e3a4abc134180a0a075d1ea19457151fae6a817873f01bb4f3af3acc366f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHWT5BY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvdDDA3cU40f3VpUmtdiAUmpDWbSnOdvz1MVwXvZC%2BtQIhAIg0X21SBwvy19NGFmMi56Fece9jTf6D34tl6APaUckxKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3pca90NfDbDmDdeQq3AMbMjZZLoWfbY18mNKPiYYoidCU%2BygOc9CD7mxkygK6oDP1iCTZ%2FAngYQLzGErQoNKjlDPxuz9%2FavdCUPLLKBoUqe%2BlP4YaLpR%2Bbk7n4fZLl4lXK1h5oVpBpnV3SWTUpigfAG7CU8rclFADlaNKWppgeB57sZPPDjKXbW25WsFpzSyjVVy4AcN3a8uCnwLWtHVqFaC9p213%2BQ8MJtC0UWt3pq1fS1hhnqDxcl%2BJjTrSfKA4vrslsOeiMuf56VZs5XndQ5HfDnu7xL87RvK4AxbJNynJqqXDm0fYUOmM8N5Bf%2FpT668ZmMCC1inBNWvRUnBHxUqwiKcKAmgLE8btclj8q3rylBgphLbGthIH6QGkx3aPSJ0mLBWLH2ZT%2Bk64TJGCh6uWNStuoTdt5wDJUDFTwQOBVXv2yp3vHpdJd7v4VFcSZe5WXqes80QzakpPq0tfObC2R0g92zoBrEvWP%2B7A2Jx0HqWFLiALSaXufvYy8sHDCCcjA63kVW%2FF8DtSvKmiZgyyCYJlJrnLpeTuFcIo3%2F5VY6Srvu1wPXhtuKtxpf5wklL7yuDS7UxeSXxmctx3TH2LkD%2Fo6XUCsiH1t6pmVW1f2ZaOH5KOMS3ItMoc%2Fv%2Bb2OP7GXoU%2FzKu8jCxwNbJBjqkAWUtZSkA4bpWo4BHY0XRdgOscMpeCYvl1GH5Zw%2FWrWIleNR3TkmqUjMJYIQ5NUiJdWVh0HX5v3S7yuA9FodH1srI8k4uux8hgfdN9pDgc2Xy54g8IUFnZ5aVyCUxMVrg5jxPQsvjF3ExmCFiQiRngE3ZuuQdtMq98FgcFPqR0T7%2B2coBG4Pr%2FmG%2FpiWUkr3uyUSytkCsbFUaEGi6PobGELGxDDeR&X-Amz-Signature=4a5fc342bf6a9fffc1092f98ee556c4b18c659d35e0bd8b5dffabb2f45ccbdb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
