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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STU4FEE5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuIcpdfk0nuSUzbkJ1FCz4apXOh%2BU%2FA%2FYzFqVZZSJspQIhAO%2BzZuzWUfDNSo4rYt9zTEFTooRPiMTtw6HfjiuIMqF7KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7Rxt4VbG8X4e68FMq3AO9RWzGHfzp%2Fn8TomXccJPQzC5GrwyvQE7T2zQPpQguRJHFdvdf%2BJcknzAqkrBXcFEgTvprli5tBpnaQEE9Opl6firIiSzA4Kjbz3sziHh7r66P6g%2BYwBfcYt7v19MxRe%2BytWjWTAekFgU7b%2BXZc0NAi00lQdrYLkbgFvwK29h68UICv%2FUqGOoP5NydwaQXQAO%2F%2BJYmYzFnKVJ164hGGTckOYkzTrYOF9YJ2PwoXTLB%2FqmsduV5iPK5xfA8RdIAl4w2%2FGMBunJdbU1myJ3sYpY00os008V76hX0kqhb0d3FTnn7klWIPw7BW03N09%2BritnqldQjoynQcc46%2BocfITFf21CoF%2BJHAhBPlZvwkO0VArgc8YoiXx4LFIz%2Fuu3MnxM6R0RlvF%2FlACv%2FaDtPf8L5RDaSPqE5SISJ6kveeI3i%2FCmwssNkMl6%2BqBOpBMDyPCyKRM2s6CHt%2FziZbFhtIcTlyPdzK9N%2FFR6VXY8cqIWjb1GxGVU9asQrzZHoryeFr8bjH8XY81T3ev8c00tduvpC9S1rgt%2BKUOtXOVSQQgKbllUdH7xsQ8x3Qj6%2FvSERxpK%2FRFtEZkkD7zuDI2%2FFDyg8WBGrewz9yrrYRC%2F9TFwR9bZMff0XLkm1nRlG9TDs%2F4rKBjqkAS5xWD12RaCcY%2Bw7TwePJ7jyn5pz2h%2FXg0p1z8GJa8vOGf0yjvjeDglEasoE46PqGyy4Hyw4fvLxa8OJLdQuAQFU3V2NkVTfpKhDV4dmVMm46vMclO8I8bLsoDWd3aQgWvPad5C627ECBcgo6FdZOYdExExr%2BPLTy4A0I8yH2lJ3pxn2vAW9IG2QpNUlizELmz3dM307JwCVbhhnPqRIN7HDx6ea&X-Amz-Signature=1520cf988149f2b917f6bfcc113defc4577200f3a4e0ddd8b6eec555c12a0a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STU4FEE5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuIcpdfk0nuSUzbkJ1FCz4apXOh%2BU%2FA%2FYzFqVZZSJspQIhAO%2BzZuzWUfDNSo4rYt9zTEFTooRPiMTtw6HfjiuIMqF7KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7Rxt4VbG8X4e68FMq3AO9RWzGHfzp%2Fn8TomXccJPQzC5GrwyvQE7T2zQPpQguRJHFdvdf%2BJcknzAqkrBXcFEgTvprli5tBpnaQEE9Opl6firIiSzA4Kjbz3sziHh7r66P6g%2BYwBfcYt7v19MxRe%2BytWjWTAekFgU7b%2BXZc0NAi00lQdrYLkbgFvwK29h68UICv%2FUqGOoP5NydwaQXQAO%2F%2BJYmYzFnKVJ164hGGTckOYkzTrYOF9YJ2PwoXTLB%2FqmsduV5iPK5xfA8RdIAl4w2%2FGMBunJdbU1myJ3sYpY00os008V76hX0kqhb0d3FTnn7klWIPw7BW03N09%2BritnqldQjoynQcc46%2BocfITFf21CoF%2BJHAhBPlZvwkO0VArgc8YoiXx4LFIz%2Fuu3MnxM6R0RlvF%2FlACv%2FaDtPf8L5RDaSPqE5SISJ6kveeI3i%2FCmwssNkMl6%2BqBOpBMDyPCyKRM2s6CHt%2FziZbFhtIcTlyPdzK9N%2FFR6VXY8cqIWjb1GxGVU9asQrzZHoryeFr8bjH8XY81T3ev8c00tduvpC9S1rgt%2BKUOtXOVSQQgKbllUdH7xsQ8x3Qj6%2FvSERxpK%2FRFtEZkkD7zuDI2%2FFDyg8WBGrewz9yrrYRC%2F9TFwR9bZMff0XLkm1nRlG9TDs%2F4rKBjqkAS5xWD12RaCcY%2Bw7TwePJ7jyn5pz2h%2FXg0p1z8GJa8vOGf0yjvjeDglEasoE46PqGyy4Hyw4fvLxa8OJLdQuAQFU3V2NkVTfpKhDV4dmVMm46vMclO8I8bLsoDWd3aQgWvPad5C627ECBcgo6FdZOYdExExr%2BPLTy4A0I8yH2lJ3pxn2vAW9IG2QpNUlizELmz3dM307JwCVbhhnPqRIN7HDx6ea&X-Amz-Signature=97f867ef78bab3d87ce2678bb258b5c9b7c6bf9c113bfa684abdec7490957d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
