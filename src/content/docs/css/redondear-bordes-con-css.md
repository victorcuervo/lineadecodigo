---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OXMRKB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCfYp%2BiUUKtNgqz2lbHOCnZ89QIcbXwEblOWbEP8ZUhcwIgAUuAInGu4%2Bx1XFndJ3uYzYPx%2BnCiv19hUHH5Dvxqo5Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIxqzar7a%2FqAB1bY%2BSrcA0HbpSq1y4oH3IcCVrhsZN7RUNCEjRc5pDjhxZUICMTQbSVos6OjCJTqQZpxlMDeO8pByCsaBNY7vO2bAK9vi1w%2Fm6aNj%2FLxR2Njq%2BDat39F9JKKxCMDzjFs7xoW7t95R7x%2BJU8qRk45hzit%2FNhkkq8d0OnGe4udHUsECsXLw9Fs%2FJslKQYTEBWcpLYO83au0alh5F%2FvHo8aqwEskOT%2F1Rb8m02O%2FlSMP2cLAPkKksvKuD6UQMHvEi64QGUcab%2BUnZXlFyJg812uTJzEXysDMG%2Bb%2FOtfj2t3vBIY2sI0pT4huQnGX4PriYDVhqeV0S9RL8P%2FYkXgnB26R0aoHK47Cb09YhmaL5Xb3x7uBC5D%2B5vx0kt8Z9wALMRqNnXJ4r7YNbPEqaEXTNbIL310chsmFB5t2UK6DRjThvWYNlkQgVMf0WlgATQ27QnDUPuQxipRC4JtqGjKxiLwyKyh3joPXiBkd79%2FBI1CdjrlOYGbCg7KEtFsVTeXI%2Fmr8UDAAvDPxJ2eLOJDp8UaPr%2BrllpQOo6jZV67oCi%2BC8jBQyu4KpsfBiL6m%2B1n4oWj%2FxLfVjLfUYongzBFG%2FJPOkyN47JA5IBhV6JAK4Yd0KZkYkmJW2RJurEitHENQiWfeutxMJ%2BqxckGOqUBRkM7bBDS8oTFffG4xH%2Ft97r3Mp651EOIIhLP%2FtbViQC79BaC9t08MPhgps8SopGOo9yUaHIw3ulRFCUaPW%2F8UF1%2BX7Kw%2BjWXCP5EIYSoFHuIRTu%2BQCC03CxiVdy99J5admT48uqTu9Kpu1CDyXGR%2FfPJoxMB1RG2vYS9ITQG%2FFt2l2BV1viVgUJELHtife%2FXcMetPsJsnkh8BuSYnWgKgUjvE%2Bwe&X-Amz-Signature=f5b15e986a2909a03664bcc7da11f6058475ffed8db8da8833c61ee5e9b4c61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OXMRKB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCfYp%2BiUUKtNgqz2lbHOCnZ89QIcbXwEblOWbEP8ZUhcwIgAUuAInGu4%2Bx1XFndJ3uYzYPx%2BnCiv19hUHH5Dvxqo5Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIxqzar7a%2FqAB1bY%2BSrcA0HbpSq1y4oH3IcCVrhsZN7RUNCEjRc5pDjhxZUICMTQbSVos6OjCJTqQZpxlMDeO8pByCsaBNY7vO2bAK9vi1w%2Fm6aNj%2FLxR2Njq%2BDat39F9JKKxCMDzjFs7xoW7t95R7x%2BJU8qRk45hzit%2FNhkkq8d0OnGe4udHUsECsXLw9Fs%2FJslKQYTEBWcpLYO83au0alh5F%2FvHo8aqwEskOT%2F1Rb8m02O%2FlSMP2cLAPkKksvKuD6UQMHvEi64QGUcab%2BUnZXlFyJg812uTJzEXysDMG%2Bb%2FOtfj2t3vBIY2sI0pT4huQnGX4PriYDVhqeV0S9RL8P%2FYkXgnB26R0aoHK47Cb09YhmaL5Xb3x7uBC5D%2B5vx0kt8Z9wALMRqNnXJ4r7YNbPEqaEXTNbIL310chsmFB5t2UK6DRjThvWYNlkQgVMf0WlgATQ27QnDUPuQxipRC4JtqGjKxiLwyKyh3joPXiBkd79%2FBI1CdjrlOYGbCg7KEtFsVTeXI%2Fmr8UDAAvDPxJ2eLOJDp8UaPr%2BrllpQOo6jZV67oCi%2BC8jBQyu4KpsfBiL6m%2B1n4oWj%2FxLfVjLfUYongzBFG%2FJPOkyN47JA5IBhV6JAK4Yd0KZkYkmJW2RJurEitHENQiWfeutxMJ%2BqxckGOqUBRkM7bBDS8oTFffG4xH%2Ft97r3Mp651EOIIhLP%2FtbViQC79BaC9t08MPhgps8SopGOo9yUaHIw3ulRFCUaPW%2F8UF1%2BX7Kw%2BjWXCP5EIYSoFHuIRTu%2BQCC03CxiVdy99J5admT48uqTu9Kpu1CDyXGR%2FfPJoxMB1RG2vYS9ITQG%2FFt2l2BV1viVgUJELHtife%2FXcMetPsJsnkh8BuSYnWgKgUjvE%2Bwe&X-Amz-Signature=d28c90e7e6b8a2fee338d1c905a0747e59ef6a3a9eb61e70821c227c0661cfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
