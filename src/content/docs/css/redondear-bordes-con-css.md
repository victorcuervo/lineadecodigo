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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774OHLV4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2B86LxQmxHJMjk6rA5Bc0Ek7WTGyzx4ka0%2BmfoNnO4wIgJNTs7iFSH50e9F1nAe5jn0NShP%2B8u7EwPBkt6Vh5yDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESb%2B0TjRKUGTK3oXyrcAwfB9psm05MwKiZy%2Fb8kho5zO099PXH8LrA2%2FDa%2BL8wp6xx%2FUhYYPeXBrJtjQqq%2FcX2xVi2gutepH24dgQjnRDwMNevWfk6w51QnJ6e%2B4GiShU8xWU%2FFNFIjyHI2943RUnv8CAjAJiin8PogL5TbvlWXLMuXJiDYtd%2FBHtz086GKqB5T%2BhTWi54bWrqv2lhQ4mYXKCmrLIGT70xekpkEA5qo3NEqSDsa3CiBByZa9ieMx9Yv9%2B2Go0yZr9Kde234Lvvio5JfrIPhkL7839DvOXgTeZMD8HActD8hjC6WJcJWUx%2BOoShMjCFV5sCh3slJWbMiZUPrXixsjtE%2BU7pBvHFOh6tq5NQZewvLZUTSGZ0V71PSz6rEpZCgmKyqrQ7mP2L8foCHygXpcNtpqPX4%2Bg0WE%2F9P%2BRHgnUt%2Ff07C3xCF3fC5BTOK6RzDvAa7IlnG1cqR3p2IUSX27o%2FssmQt33G3c37Xv9OFDe20MGRuhpOPMJBcDUQ2dIo4joYvKxgNtBQum2j90%2F2sA6I1nwaYQQq3fDb1aOmTv8apY2%2BuRMv76IUH2N2sg3MFQXFMcs55RZ912tMIqeAP%2BCWDbxZ1J5tA19lRvu0%2FNUj2b92u90t6nm0sRSvx5LNca5reMK7%2B0skGOqUB8yI1t7wUD3eWzjFU%2F3d8nBivccD1FEo4qSuNOCekPOOWH%2FmdYg9Q40EZXoMYBWgdllnFInMZTbsCs4sYEa1%2BGVE4JACBEbX6I2kfQRwXcoLP8Nd5O4usrqpeGpn44xi83qcHydIDrOiE6kPqgFDyRiBtNqzalZ%2BfxO3hYSpbYdLujntdwsBwkDZAyZ%2Bf3uM9%2BIH8CM1jQfb4bqrd0oixQYR1ZxR3&X-Amz-Signature=98c946f1bc79722e7ba6c42421c90d0a11430a23b4ff9c5a9770d3d8ceabe1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774OHLV4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2B86LxQmxHJMjk6rA5Bc0Ek7WTGyzx4ka0%2BmfoNnO4wIgJNTs7iFSH50e9F1nAe5jn0NShP%2B8u7EwPBkt6Vh5yDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESb%2B0TjRKUGTK3oXyrcAwfB9psm05MwKiZy%2Fb8kho5zO099PXH8LrA2%2FDa%2BL8wp6xx%2FUhYYPeXBrJtjQqq%2FcX2xVi2gutepH24dgQjnRDwMNevWfk6w51QnJ6e%2B4GiShU8xWU%2FFNFIjyHI2943RUnv8CAjAJiin8PogL5TbvlWXLMuXJiDYtd%2FBHtz086GKqB5T%2BhTWi54bWrqv2lhQ4mYXKCmrLIGT70xekpkEA5qo3NEqSDsa3CiBByZa9ieMx9Yv9%2B2Go0yZr9Kde234Lvvio5JfrIPhkL7839DvOXgTeZMD8HActD8hjC6WJcJWUx%2BOoShMjCFV5sCh3slJWbMiZUPrXixsjtE%2BU7pBvHFOh6tq5NQZewvLZUTSGZ0V71PSz6rEpZCgmKyqrQ7mP2L8foCHygXpcNtpqPX4%2Bg0WE%2F9P%2BRHgnUt%2Ff07C3xCF3fC5BTOK6RzDvAa7IlnG1cqR3p2IUSX27o%2FssmQt33G3c37Xv9OFDe20MGRuhpOPMJBcDUQ2dIo4joYvKxgNtBQum2j90%2F2sA6I1nwaYQQq3fDb1aOmTv8apY2%2BuRMv76IUH2N2sg3MFQXFMcs55RZ912tMIqeAP%2BCWDbxZ1J5tA19lRvu0%2FNUj2b92u90t6nm0sRSvx5LNca5reMK7%2B0skGOqUB8yI1t7wUD3eWzjFU%2F3d8nBivccD1FEo4qSuNOCekPOOWH%2FmdYg9Q40EZXoMYBWgdllnFInMZTbsCs4sYEa1%2BGVE4JACBEbX6I2kfQRwXcoLP8Nd5O4usrqpeGpn44xi83qcHydIDrOiE6kPqgFDyRiBtNqzalZ%2BfxO3hYSpbYdLujntdwsBwkDZAyZ%2Bf3uM9%2BIH8CM1jQfb4bqrd0oixQYR1ZxR3&X-Amz-Signature=a94bd07334f9006449d631e35fca9aae36fe3375ecc69f53222bf50c1804c95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
