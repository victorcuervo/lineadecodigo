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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5P4VP7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxrJjQeII0h6tulwjxo3Px7CvLrUoamRlRSo9MJYuAYQIhAN4VjuvN5EuJ5V0xbzL%2FQN2X03mkX8mQ3hWgNkceCZK5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxSn9zHBkBm8ShxU9sq3AN05Kek%2FvgUwCw2tTmYoKC2bRpLkV0iR8U%2Fm2lpqpSdFQguXA9jiPgrO7yp4qhGXP%2FUNeGd%2Bm7ga%2FMed3PMsKV0yzYwHYwuv%2B4t83VozwNjo0lkJqkLaRAagsuFfMcFC9mqhzSpm7pU72LqaF3%2F%2B12SGoU3tKCk530ZmHIarfeUE5v9c7lVmQD8Bz%2Fovef94qZlUA1jrqJNQX195dP0xvnaqPR5rwCMDXl1mTmk1Cxe5xuBJr0e4v1xXB00%2FVJVwd3kxcmUlHYljypx8sr4LJo1yMZ5nN1V1J79utZIfcT5cmHtuh1cKyKawzIInarEtlwyJRvZjxE2%2FjZDOJUD%2F82t%2FNe%2FYmYSwhF8jQYCgw%2BLEgsfVvE9oDmFDdxBNZyzJ9B3AF9tIyF1lQL5A3rq%2BZxUkeJdWGt6kgo7gZMnNXkF9dOhttW53ejpvlTivtOO37hiVcO7X7fbK58s6w2i5vCbILt473InBlbiR%2Bj65z2D9BwZ%2F6cEwkfPMDQKO4ZHajArScXW9cZgjWXQmK%2Flqw7CODAOORzrzpN0ZyxG5Q6JFggW7Altonur4VhxyJ6jFsx%2BX5fzEhKCGd4jk8H134c4islRiPR37UG5BrOCIj9Nhq4xdWpRdQ5XD1n8QjC2xdHJBjqkAWpLHbMM7YMiRYEglZpY79%2B5nSc8dl6jTrscCmp9sJoaBlSCCXbQS0Ao83LL%2Fva44k7QN9dNFHF%2FzRoXVILoZvrqctSzYRbvUllc1vzTEb4hYu3OOKmNW6HdGIlhwSai%2FwJ1l9CroX9Zp2F3RkACfdEXYv0sVyC2jKCUuZPHHeCxfgiU3YdnkaIDfENxSZIqreI0EPn1AfzkbojQlC%2FnUnG0F3T2&X-Amz-Signature=a1051a41d560ab29bde1fcf8da01fd4248f64fb6fc5612140422e91ea38d6f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5P4VP7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxrJjQeII0h6tulwjxo3Px7CvLrUoamRlRSo9MJYuAYQIhAN4VjuvN5EuJ5V0xbzL%2FQN2X03mkX8mQ3hWgNkceCZK5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxSn9zHBkBm8ShxU9sq3AN05Kek%2FvgUwCw2tTmYoKC2bRpLkV0iR8U%2Fm2lpqpSdFQguXA9jiPgrO7yp4qhGXP%2FUNeGd%2Bm7ga%2FMed3PMsKV0yzYwHYwuv%2B4t83VozwNjo0lkJqkLaRAagsuFfMcFC9mqhzSpm7pU72LqaF3%2F%2B12SGoU3tKCk530ZmHIarfeUE5v9c7lVmQD8Bz%2Fovef94qZlUA1jrqJNQX195dP0xvnaqPR5rwCMDXl1mTmk1Cxe5xuBJr0e4v1xXB00%2FVJVwd3kxcmUlHYljypx8sr4LJo1yMZ5nN1V1J79utZIfcT5cmHtuh1cKyKawzIInarEtlwyJRvZjxE2%2FjZDOJUD%2F82t%2FNe%2FYmYSwhF8jQYCgw%2BLEgsfVvE9oDmFDdxBNZyzJ9B3AF9tIyF1lQL5A3rq%2BZxUkeJdWGt6kgo7gZMnNXkF9dOhttW53ejpvlTivtOO37hiVcO7X7fbK58s6w2i5vCbILt473InBlbiR%2Bj65z2D9BwZ%2F6cEwkfPMDQKO4ZHajArScXW9cZgjWXQmK%2Flqw7CODAOORzrzpN0ZyxG5Q6JFggW7Altonur4VhxyJ6jFsx%2BX5fzEhKCGd4jk8H134c4islRiPR37UG5BrOCIj9Nhq4xdWpRdQ5XD1n8QjC2xdHJBjqkAWpLHbMM7YMiRYEglZpY79%2B5nSc8dl6jTrscCmp9sJoaBlSCCXbQS0Ao83LL%2Fva44k7QN9dNFHF%2FzRoXVILoZvrqctSzYRbvUllc1vzTEb4hYu3OOKmNW6HdGIlhwSai%2FwJ1l9CroX9Zp2F3RkACfdEXYv0sVyC2jKCUuZPHHeCxfgiU3YdnkaIDfENxSZIqreI0EPn1AfzkbojQlC%2FnUnG0F3T2&X-Amz-Signature=3baccfc2ea99794f7f54f09b4e5ee67746d140d91521abeada925a9537cc3d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
