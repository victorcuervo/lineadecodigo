---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNPWQGX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Blp8ZC3AZaXWbL9%2BYXaznQYjVzQEP26NXrv5lfkR6eAiBc9MBrKnZLXwWPQtVjhwp2eAMtJSogt9yQtW23m1ATrSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMTgAjZJTL8W0DC3OBKtwD%2F5HoVvuHk0egmiOhLYkao8k1%2FUt7mU1IjNP8rjU6zuvHCxuGof8qq7gx7ef0AW2xDOoZvN34MILuBFOPRFdP2v9OpWhFF8QpUoRK1O9buBgGy614wqbyLO%2BfE5DxlNW3wEM4UsOCqd5waUCoGxmjr%2Fu%2FRLoVBPPCN%2BJCO9tcqMZE74Ce4w7y6yAPVvussWvUUxEvNl%2Fl4C8RXaF5RXPoKUa7oaPf5i6wqfSp2XHd2vdbkvDXU9b6fd7TYlAHlQfI0s75d7ZXSf%2Bg8BksKBMysoZ0jNpX%2FFymdXcrXqJzgFWxv1SH%2BjAHPExqxs%2BOdKfgCiJWQOOvmeYbINfiarsy1ZrmWa4TnpaDIYfLQH9vnQWxm%2FWQhuO8ch07ATa7rLlT5%2BNq4XkAzskgV%2FKQKmY1jSUbxDLvASrVJbwsekkBZ9bSIWhMoFc63QHWXAdg6hedmYN5tSHI7GIQ7uxehDb0U0O7YiymdIK8f4qvVYARr9EzkF5cX0k8U5A%2BDOpdF%2FwMxPmKwk9lQh9fy2eli0s21OKfy2sx0LBpc%2FWoK8hEDhP3Udcc2TWvQqNTDUcGQepdNQQ7EFOBKnjDIMc4HdQ8KSJn%2BVerBFWKZtL%2Bowsome98jEIvMmYUACYd7oAw%2BLGIygY6pgH1eWsO15EZm2PJ5zx2T%2F8hSD8K1vHn19ZURcSWPcpCTMXU5bjrZoSe4MjRXiI1wk%2Bapz%2FyEfsbwBXrMHunYjNjruSm1M0JN2sVOGB%2BLIqXeb3NrDp4%2FCg1m5DWOnvpOD5DX3WKh3Bh0wrK6dZH270jlO2pkgEpD1uYAGlzuMJ0PrVh%2F%2FmPEjnWRHBIr54IxUeJF13KjTcdRZp0oW8RRJvNqxxszdXq&X-Amz-Signature=73e3bdb67ac63b0ab060e3380ebe36a115f3771f7b912f65d13e6c72b90e8e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNPWQGX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Blp8ZC3AZaXWbL9%2BYXaznQYjVzQEP26NXrv5lfkR6eAiBc9MBrKnZLXwWPQtVjhwp2eAMtJSogt9yQtW23m1ATrSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMTgAjZJTL8W0DC3OBKtwD%2F5HoVvuHk0egmiOhLYkao8k1%2FUt7mU1IjNP8rjU6zuvHCxuGof8qq7gx7ef0AW2xDOoZvN34MILuBFOPRFdP2v9OpWhFF8QpUoRK1O9buBgGy614wqbyLO%2BfE5DxlNW3wEM4UsOCqd5waUCoGxmjr%2Fu%2FRLoVBPPCN%2BJCO9tcqMZE74Ce4w7y6yAPVvussWvUUxEvNl%2Fl4C8RXaF5RXPoKUa7oaPf5i6wqfSp2XHd2vdbkvDXU9b6fd7TYlAHlQfI0s75d7ZXSf%2Bg8BksKBMysoZ0jNpX%2FFymdXcrXqJzgFWxv1SH%2BjAHPExqxs%2BOdKfgCiJWQOOvmeYbINfiarsy1ZrmWa4TnpaDIYfLQH9vnQWxm%2FWQhuO8ch07ATa7rLlT5%2BNq4XkAzskgV%2FKQKmY1jSUbxDLvASrVJbwsekkBZ9bSIWhMoFc63QHWXAdg6hedmYN5tSHI7GIQ7uxehDb0U0O7YiymdIK8f4qvVYARr9EzkF5cX0k8U5A%2BDOpdF%2FwMxPmKwk9lQh9fy2eli0s21OKfy2sx0LBpc%2FWoK8hEDhP3Udcc2TWvQqNTDUcGQepdNQQ7EFOBKnjDIMc4HdQ8KSJn%2BVerBFWKZtL%2Bowsome98jEIvMmYUACYd7oAw%2BLGIygY6pgH1eWsO15EZm2PJ5zx2T%2F8hSD8K1vHn19ZURcSWPcpCTMXU5bjrZoSe4MjRXiI1wk%2Bapz%2FyEfsbwBXrMHunYjNjruSm1M0JN2sVOGB%2BLIqXeb3NrDp4%2FCg1m5DWOnvpOD5DX3WKh3Bh0wrK6dZH270jlO2pkgEpD1uYAGlzuMJ0PrVh%2F%2FmPEjnWRHBIr54IxUeJF13KjTcdRZp0oW8RRJvNqxxszdXq&X-Amz-Signature=89ee9f7e20a4875eb5dfb2c4c7922a56e18fe27a2be3ca7f3fee721251e78e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
