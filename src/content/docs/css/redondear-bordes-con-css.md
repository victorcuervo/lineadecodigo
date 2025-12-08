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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHYE4NI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhQRjLt7qH0SnoRE9g5W7e4KnFjWYWKsgcDqhr8Kn9wIhAO2KQHMJ9UngOafLtQSKRCK%2BjVhOxzfk%2BYkfsjOOP%2Ff4KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY0MzFU2LKqnYIeAkq3AP2Lfbr1a2RaqtUtLoU52m%2FLY%2FCN43gsM11BGrcMHO3MvpJWq7eYjl%2FJcIzIILh0TleQFVS%2FVVXhVVZptt%2FRdj9pH8r4BiNJ6kVZnIKzVhXzA0%2BOenNuDBYwxlMAv2Jbo9c3lK1LE%2F00%2F5Jz%2Fp%2FSckpQ7IwqPk8gg0XnugDvYMb%2FogOCSyoQVGuRlgBKJi2vdXxP6XWYqRbdN3U7aWkjDHo4S4d%2FqflRMEnCc66F5zfoFaqqY8OhDmI%2F6AAy1BtiMtSXrHylMXfUvMUa0aGhmfp1LSdAS0uajnDaTKU4GaKt1FW0xDE7JStPk0nz9OM%2F%2FXenliTcDuVSqtbFGmJhrBcGC%2FdwJTn1e%2BMdCA4%2F4380QxfHt17NyGJFWKQsLAQDfeAJAGGHswQKIrQgKMmjl%2Flqyq%2BISj23ZuYgb2APKd%2F30HeWO46mEKT%2FxiI3bG7akfbiOq7sV%2BKtssxvmcZ6lgIjSBj7qtHWxEYh6UD6eJDLS6eR%2Bl26F4vUmuT6ySLf77KphX0A7%2Fgr%2BJP5DiSvx8OZ%2FJFByqjb1twGBa1Ie7z4gZgsz6sVwaJXdTXG6gXrR9IspmgsHXqCGon%2FJCIkUkGrkKWMgNderhxqNEKBufAgVL5ko9FK%2FxmRvGCSzDr7dnJBjqkAdkWf0cqtmr6STk8DMothklBGx04U1h7cOLK%2Fd6X2vHa56qW9zaY7EqV5MQfPkW8YgP14qDlvNt%2B3ptYQZW3X%2BOGlEo5%2Bm7U5QAv%2FD4laUpfOyoobK7HzzLlw3160HCTNo9%2BWdgBqBFQpPwz0GaUy4LZKXi9YBFjjXEq0EhWEjWOui6HIaW7xPY4%2FvdncDG6bZWpPCRG6vNttDuVYk1yKu9%2FoqI0&X-Amz-Signature=cda8a7b521ff58e9fea632e409645aa6db9e49b5c4354569f554ac56bb3751c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHYE4NI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhQRjLt7qH0SnoRE9g5W7e4KnFjWYWKsgcDqhr8Kn9wIhAO2KQHMJ9UngOafLtQSKRCK%2BjVhOxzfk%2BYkfsjOOP%2Ff4KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY0MzFU2LKqnYIeAkq3AP2Lfbr1a2RaqtUtLoU52m%2FLY%2FCN43gsM11BGrcMHO3MvpJWq7eYjl%2FJcIzIILh0TleQFVS%2FVVXhVVZptt%2FRdj9pH8r4BiNJ6kVZnIKzVhXzA0%2BOenNuDBYwxlMAv2Jbo9c3lK1LE%2F00%2F5Jz%2Fp%2FSckpQ7IwqPk8gg0XnugDvYMb%2FogOCSyoQVGuRlgBKJi2vdXxP6XWYqRbdN3U7aWkjDHo4S4d%2FqflRMEnCc66F5zfoFaqqY8OhDmI%2F6AAy1BtiMtSXrHylMXfUvMUa0aGhmfp1LSdAS0uajnDaTKU4GaKt1FW0xDE7JStPk0nz9OM%2F%2FXenliTcDuVSqtbFGmJhrBcGC%2FdwJTn1e%2BMdCA4%2F4380QxfHt17NyGJFWKQsLAQDfeAJAGGHswQKIrQgKMmjl%2Flqyq%2BISj23ZuYgb2APKd%2F30HeWO46mEKT%2FxiI3bG7akfbiOq7sV%2BKtssxvmcZ6lgIjSBj7qtHWxEYh6UD6eJDLS6eR%2Bl26F4vUmuT6ySLf77KphX0A7%2Fgr%2BJP5DiSvx8OZ%2FJFByqjb1twGBa1Ie7z4gZgsz6sVwaJXdTXG6gXrR9IspmgsHXqCGon%2FJCIkUkGrkKWMgNderhxqNEKBufAgVL5ko9FK%2FxmRvGCSzDr7dnJBjqkAdkWf0cqtmr6STk8DMothklBGx04U1h7cOLK%2Fd6X2vHa56qW9zaY7EqV5MQfPkW8YgP14qDlvNt%2B3ptYQZW3X%2BOGlEo5%2Bm7U5QAv%2FD4laUpfOyoobK7HzzLlw3160HCTNo9%2BWdgBqBFQpPwz0GaUy4LZKXi9YBFjjXEq0EhWEjWOui6HIaW7xPY4%2FvdncDG6bZWpPCRG6vNttDuVYk1yKu9%2FoqI0&X-Amz-Signature=86ef8f35fee1db2cbafe194194075843e07d5358f5b216045a6c4c8f09298f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
