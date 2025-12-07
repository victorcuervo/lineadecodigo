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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G6OUIX5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsXU9noqlbhlKd7ZVqjMR2FZx8mzuiNxzrkK%2BDzunwGAiAh8G00E7xCz9yr%2BBokqZYode5jZbHNyM4TAI9MADY%2BjSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B29EE2t8OtGVYJCRKtwDPFS66g2IGAAhEynlLS%2BqH7o%2BVXfa8dHMD9cyAt2c0OQBzz5cTeyo2RQjgC55yYdkACXmT%2Bome4C2OvP0GOMHvWZ8qcNbnVb%2FsKxReKPXnjng6QD8PIcN5ad6u03%2FBCqmmkt65tb1mfTYM7F%2FhjvMuWDIdriGWPxcM5%2FIxEzeVaQNbbIrAMDWyyg5Juv9lSQRZGVa2z9hkMCkdAPzN0kFlvruMXla8PIn86Bp22BPFCgsHa8IK6zAWICcsHAkF4YZZs1CdeFdrRti4%2FUzHzjpyD1aDzy2I5Q8aYYnQw7TnljMsuTeKvqtQe%2Fp6KupAbTOUg6Y056IbS9kNp90MMfPnnQ4HyFiTq3CY82C9vzQAB6M0rQVzqc8Zy9fvrp%2Bo3uaVVSoaqlSvEJQyjKD%2Fw7ahoyg6rvawf4jRKHOe%2F5M%2Fkhwxn4Q%2FtHIDGs0ekA%2BVlEVK5kB9KS1cqN6foj73LIOOKbSWpR5jKZRIIeWYoyZgkVg9JFU2auUhp6vgQ7EkdUpbhGQlnlDpjFupg8X3gOgAgazjb5BkFjKEKNKDdtpolPLcCidJJuB%2Bv14NdM6%2BksF4DBy%2FL1N8TSsIvhmJ6aurCx895lNz5fcJ9afdwgk33vbIipKzYkmieMfhPowjKHUyQY6pgEJBDhfaxP5uNFqpcFflSXnsxIa9ix%2B0knlp4ThbNoD9w%2BZ3KIMEBBmIezdueAM3HjGLAAtzi8nZTciuo1FHzNVl5kLmP%2FFvNzEVYfdQ888o5NG%2FOAe9SIFK8vDvSkmJI3F%2BN1NJHFXko%2B2owoOkT7BT3rK65sxVDRw9iL33mfm%2BBIdEeChZ%2Fl4IxM8GxL2Dl2HOtNLgiZdny8LvhvcEY3ZzdvMP0TS&X-Amz-Signature=c4214dd5eb9db457711f0872667d143929c96610d1b34ec1b6e7ed4afa7eaa65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G6OUIX5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsXU9noqlbhlKd7ZVqjMR2FZx8mzuiNxzrkK%2BDzunwGAiAh8G00E7xCz9yr%2BBokqZYode5jZbHNyM4TAI9MADY%2BjSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B29EE2t8OtGVYJCRKtwDPFS66g2IGAAhEynlLS%2BqH7o%2BVXfa8dHMD9cyAt2c0OQBzz5cTeyo2RQjgC55yYdkACXmT%2Bome4C2OvP0GOMHvWZ8qcNbnVb%2FsKxReKPXnjng6QD8PIcN5ad6u03%2FBCqmmkt65tb1mfTYM7F%2FhjvMuWDIdriGWPxcM5%2FIxEzeVaQNbbIrAMDWyyg5Juv9lSQRZGVa2z9hkMCkdAPzN0kFlvruMXla8PIn86Bp22BPFCgsHa8IK6zAWICcsHAkF4YZZs1CdeFdrRti4%2FUzHzjpyD1aDzy2I5Q8aYYnQw7TnljMsuTeKvqtQe%2Fp6KupAbTOUg6Y056IbS9kNp90MMfPnnQ4HyFiTq3CY82C9vzQAB6M0rQVzqc8Zy9fvrp%2Bo3uaVVSoaqlSvEJQyjKD%2Fw7ahoyg6rvawf4jRKHOe%2F5M%2Fkhwxn4Q%2FtHIDGs0ekA%2BVlEVK5kB9KS1cqN6foj73LIOOKbSWpR5jKZRIIeWYoyZgkVg9JFU2auUhp6vgQ7EkdUpbhGQlnlDpjFupg8X3gOgAgazjb5BkFjKEKNKDdtpolPLcCidJJuB%2Bv14NdM6%2BksF4DBy%2FL1N8TSsIvhmJ6aurCx895lNz5fcJ9afdwgk33vbIipKzYkmieMfhPowjKHUyQY6pgEJBDhfaxP5uNFqpcFflSXnsxIa9ix%2B0knlp4ThbNoD9w%2BZ3KIMEBBmIezdueAM3HjGLAAtzi8nZTciuo1FHzNVl5kLmP%2FFvNzEVYfdQ888o5NG%2FOAe9SIFK8vDvSkmJI3F%2BN1NJHFXko%2B2owoOkT7BT3rK65sxVDRw9iL33mfm%2BBIdEeChZ%2Fl4IxM8GxL2Dl2HOtNLgiZdny8LvhvcEY3ZzdvMP0TS&X-Amz-Signature=eb58eb3e792a3e2521799923ebc34c0abe7db12b2e8a9a1f75c91ffcd863c8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
