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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAPLJJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID59rVG6ShXC%2BC0MPUxpEKQrKbuVbHLXfkugXSBlg659AiBKXSIfBPEModh2e%2BmtYSCeCZZDvh0SEbrjJhyxKOF%2FOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMOZQQ6xAhlsSqOzC9KtwDmUEyHWYM7O2owqJ%2F3EXhPLJxYWQvTbWVZ3gc7W%2FoAQs3R0d0UvFtFGj9P9IAxiyPcMh4AukwICML4KYWlvSOh%2FUnEZhHQAnGfc3jsFCo2gPeFCrcOnXpKpzTJnkUsGkfKpoq0FQD3%2FDsE85rJxuTDxEac2Rm0F%2FBwgxxweDJD3y%2B886gNDGXFHkcthZcOJQD5aXewXJ6N%2BWWYL35mAvGXtNz7B8ystPgHyvl7%2Fg4WBMg%2B0IcofG2Z48cVAEKPhfQkyMiC23FmD9QTPuNJElQmr9nOn4jIa%2FCciSs15vxLotiuRMbNHSsoO3DlhWrYj0h1PpAQHbx99isArof6mlGZcKf3uj%2FvJaXDO39oqWtYOU6FX9C81kkXmKL65PH3jrcpiP64ctm%2BnoS%2F2DtprnbCS0VSlL4dp5X9teDvuK0NsSjcr8lF7xR6EqvccCLyCpduqxmRl1B94u485eQPbmoGexEy2o2LgbtdjbBaNLA%2BfhB1ihUJN7JqH6tboTS8McK2Q9xMqSvYUGYGTGpB2vkw4K0P5vQruzRqzr94lNAcyG8AS4K0YrxTjmSKj9RWAcR7ZqSEUC1xpfAeXHHEe869dCLDmVceSEsEBSE6P4d9ow%2BTkegeNxdm%2BhigyQw7sXRyQY6pgEmBKU1NSUiVUYGcDg80guPPTdkRjD8Qg5f7%2BNFQOB8QvjWDnztUyNsnlTABEg%2FkSPgClGvzxwbsRd3t%2FX4vNAkGikc8uUvFx2JAaLn7jLmF%2FKHrA5i6mniTJ2Jz%2FyPu7rd1%2F9ZIara%2Fnidis9fxWdJB9Fw%2FWGA9GoDhV8vGL%2B6Z1WH7x1C8mf7KFpYtWaWfu2W9O5Rxmcc7DrqywLzaV2nWYvgFoGI&X-Amz-Signature=0838a25527ad8e6cd657d5db65ecad0758a12797734fc0c8e22e6def5925241d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAPLJJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID59rVG6ShXC%2BC0MPUxpEKQrKbuVbHLXfkugXSBlg659AiBKXSIfBPEModh2e%2BmtYSCeCZZDvh0SEbrjJhyxKOF%2FOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMOZQQ6xAhlsSqOzC9KtwDmUEyHWYM7O2owqJ%2F3EXhPLJxYWQvTbWVZ3gc7W%2FoAQs3R0d0UvFtFGj9P9IAxiyPcMh4AukwICML4KYWlvSOh%2FUnEZhHQAnGfc3jsFCo2gPeFCrcOnXpKpzTJnkUsGkfKpoq0FQD3%2FDsE85rJxuTDxEac2Rm0F%2FBwgxxweDJD3y%2B886gNDGXFHkcthZcOJQD5aXewXJ6N%2BWWYL35mAvGXtNz7B8ystPgHyvl7%2Fg4WBMg%2B0IcofG2Z48cVAEKPhfQkyMiC23FmD9QTPuNJElQmr9nOn4jIa%2FCciSs15vxLotiuRMbNHSsoO3DlhWrYj0h1PpAQHbx99isArof6mlGZcKf3uj%2FvJaXDO39oqWtYOU6FX9C81kkXmKL65PH3jrcpiP64ctm%2BnoS%2F2DtprnbCS0VSlL4dp5X9teDvuK0NsSjcr8lF7xR6EqvccCLyCpduqxmRl1B94u485eQPbmoGexEy2o2LgbtdjbBaNLA%2BfhB1ihUJN7JqH6tboTS8McK2Q9xMqSvYUGYGTGpB2vkw4K0P5vQruzRqzr94lNAcyG8AS4K0YrxTjmSKj9RWAcR7ZqSEUC1xpfAeXHHEe869dCLDmVceSEsEBSE6P4d9ow%2BTkegeNxdm%2BhigyQw7sXRyQY6pgEmBKU1NSUiVUYGcDg80guPPTdkRjD8Qg5f7%2BNFQOB8QvjWDnztUyNsnlTABEg%2FkSPgClGvzxwbsRd3t%2FX4vNAkGikc8uUvFx2JAaLn7jLmF%2FKHrA5i6mniTJ2Jz%2FyPu7rd1%2F9ZIara%2Fnidis9fxWdJB9Fw%2FWGA9GoDhV8vGL%2B6Z1WH7x1C8mf7KFpYtWaWfu2W9O5Rxmcc7DrqywLzaV2nWYvgFoGI&X-Amz-Signature=11f3719b18d724143dedd8006dc65b4d9ee5b31d18a7ed2f56818f57ab04fb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
