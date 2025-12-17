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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CWY4HM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCim4aR0wBSARixGQD5ZuD0OO1p9kzQzO%2FMostdMuY2QIhAI8HpzlRG58NFdtxOYEVV%2FIWpXB%2BUvuJP2JAzWIhrnhiKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZ7Ql05v7ui7%2FEvSsq3AOP0T2NjLr8xJN0xuWO%2BRftEoGF3NRXT7%2F220%2BztwusXjgI46f4skeWLxcGI2z738it1zK43I7x9DQRqUeST1h2V5jziku2loJnKLnZIx8FGD8aU06x%2B%2BP38JCfk%2FveS9m%2FsJun7sgK7l1sofV2zAqdtQMKL8LUj5F9oi5S0ADQbDym59sfSq%2FfFjRoTrHQqv%2FyJYuFVGBi3FKuz2ckDb3y%2BZU4mDjxGb%2FLkkiTzzMUzrOpXKKmMYx9yywwFuvTtbyrjN6NBIsScW6HIRr9bqteuyBTRA21tU7l08TdRifJcDyf%2B407vMJ6HL9OY0d7%2FgXMbEp4rEbvjyyV06qUlmwZLEimop1JItgM9BDAvOdAwqmcEkq2gOya8Vgfsp49mPHIa7MdfeiMd%2BnVZ%2FPLnyBD5BUyr%2FV4hIcaFf1QeL7f%2B9soyyYjc02x3jU3sesw9Vo3cVR3FvEi5bEHJYeeDlXiXhBx6YuCUrtCJohYFT3BtxEy29T3v7bj2gVvnM%2F8LORJVY7bTxhWFChXI8d6sTCrdAdm23YujRbuZcAZG9nNtg3pIq69w4Pga0yHLisEbOh%2BmSGosy67qk0L7Jq%2F0SZ6KOvfOVFujZyZLjQdsB5wwZmp7RLukRho8sa8UzDRg4jKBjqkAdFZT40KeIKed99jRJ1yBn%2BtMUnRT0aZ6nskKZy%2BQbO4g9lC%2FknhM%2F4ITIcHADayZWdN2UjOULrp5cEcVdbrVmzj7BzXI0tUW90kQ40pXvMiPv%2FdPio7akphuqbGIm7e%2FusjXdzmLv8BK%2F2ifngOIxYfHl7KWUj7O%2FFdH28rUV%2BeJepzlyPrRY9CfeJlam%2F9OAHgAGNdZHrl6T7CmC5%2B0uQSuzN%2F&X-Amz-Signature=712bd71d5b4f0cea00c3334693e50c38b5b2d91e23ff44e1105defe3a2e58aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CWY4HM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCim4aR0wBSARixGQD5ZuD0OO1p9kzQzO%2FMostdMuY2QIhAI8HpzlRG58NFdtxOYEVV%2FIWpXB%2BUvuJP2JAzWIhrnhiKv8DCHIQABoMNjM3NDIzMTgzODA1IgwZ7Ql05v7ui7%2FEvSsq3AOP0T2NjLr8xJN0xuWO%2BRftEoGF3NRXT7%2F220%2BztwusXjgI46f4skeWLxcGI2z738it1zK43I7x9DQRqUeST1h2V5jziku2loJnKLnZIx8FGD8aU06x%2B%2BP38JCfk%2FveS9m%2FsJun7sgK7l1sofV2zAqdtQMKL8LUj5F9oi5S0ADQbDym59sfSq%2FfFjRoTrHQqv%2FyJYuFVGBi3FKuz2ckDb3y%2BZU4mDjxGb%2FLkkiTzzMUzrOpXKKmMYx9yywwFuvTtbyrjN6NBIsScW6HIRr9bqteuyBTRA21tU7l08TdRifJcDyf%2B407vMJ6HL9OY0d7%2FgXMbEp4rEbvjyyV06qUlmwZLEimop1JItgM9BDAvOdAwqmcEkq2gOya8Vgfsp49mPHIa7MdfeiMd%2BnVZ%2FPLnyBD5BUyr%2FV4hIcaFf1QeL7f%2B9soyyYjc02x3jU3sesw9Vo3cVR3FvEi5bEHJYeeDlXiXhBx6YuCUrtCJohYFT3BtxEy29T3v7bj2gVvnM%2F8LORJVY7bTxhWFChXI8d6sTCrdAdm23YujRbuZcAZG9nNtg3pIq69w4Pga0yHLisEbOh%2BmSGosy67qk0L7Jq%2F0SZ6KOvfOVFujZyZLjQdsB5wwZmp7RLukRho8sa8UzDRg4jKBjqkAdFZT40KeIKed99jRJ1yBn%2BtMUnRT0aZ6nskKZy%2BQbO4g9lC%2FknhM%2F4ITIcHADayZWdN2UjOULrp5cEcVdbrVmzj7BzXI0tUW90kQ40pXvMiPv%2FdPio7akphuqbGIm7e%2FusjXdzmLv8BK%2F2ifngOIxYfHl7KWUj7O%2FFdH28rUV%2BeJepzlyPrRY9CfeJlam%2F9OAHgAGNdZHrl6T7CmC5%2B0uQSuzN%2F&X-Amz-Signature=47560d78d2cacfa344feea95b321fd1ce398942f43cf8bdc1bee6c84cd4d89c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
