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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNX5AROU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWkb4UW2%2FmCYUnBfhAdylu3WIJaizHAwirHHho41sVuwIhAMB%2Bt2to7PHL8oJuPQXSYHmr0WEiLOH3zy4nu38xvSTTKv8DCGAQABoMNjM3NDIzMTgzODA1IgySZL8bDUBDg3AToOAq3AOc3oOkKwUJWmOiJqYOZn40nz%2BuUHPloQ6EEswBi0VBAwb4Rs0NMHJD3Oa8uDIER%2B5XkbxCztvkNjUuKK4SOjSLE8HTac3Nc6h45SVW%2FqoW5rjHnsYRsQTOTwj4dvQ8HvKYMv%2BfJkfQjg%2BH17FO4ljvGPItlB95U2G1mW9Bo2ayEdrSZNXNcC6nreqKTAJYdhWXzSSjYO3pl3lRg06AFsSSzAZ%2F%2BdtGPuJ27TUFn8PTO1NzSo2YnGHi%2FP%2FAI3Afbj1V1D%2FfSNDqOIW5SxaprGRtomf9LUvZX4PPRPIITPPWhUnakSLPPMjybdzX3FKysTC0%2FBan3PHd%2BdNdQ%2FKBrofEqaI%2Bg2d7y4dIiITGIdjzXL3Cky9UqgLF2uqUDbgMY%2FJjSk0XUnMphSgnFGyN0c4svYaP2PD6ccxmMN%2BQ58%2FpHbuhHs%2FTdo1HcbHTZB%2FJ2q8e26C1EHgYTWhR2UYbjHzsTSjbcTy1EO6p8PtJrkGmYfD69QaP4xP8okzcZP47GQQBOGKcnXfPZfqraIYIeumCV3CbT9p6wNMp06wvcptjggQkdadXzGRhZrPKKvu%2FiBsir2MkUQFUNoV2riLDTFQhokgBt9ClsNPYEL%2BE%2FwJLb0KHdpAXLpJPMiIxRjC%2B4cvJBjqkAUFya3Af3c4xUgY6SCGC0BwRJ4DcKxE%2BbjjVlkGnbU6T2O9mTFpBwSQN5NjVkQ2ZclARAuI3eq%2F4TrltUeID%2Bb0NVN14leBJz0NihKGVjuqxV8sLIdRhy6VAPVPK1bo8IZnwDHRklbpg6BMpSp2ilXWzByiU67RCwlG2qYwfiDFClw%2FFE%2BwLxHD3BchGbQydzBwogvF4uO4GU35itGXAUqhMfV%2Bi&X-Amz-Signature=a685d115b8ea1d55939b5abba8cd93022613a891fd4a4731a6d91c6277b3c6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNX5AROU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWkb4UW2%2FmCYUnBfhAdylu3WIJaizHAwirHHho41sVuwIhAMB%2Bt2to7PHL8oJuPQXSYHmr0WEiLOH3zy4nu38xvSTTKv8DCGAQABoMNjM3NDIzMTgzODA1IgySZL8bDUBDg3AToOAq3AOc3oOkKwUJWmOiJqYOZn40nz%2BuUHPloQ6EEswBi0VBAwb4Rs0NMHJD3Oa8uDIER%2B5XkbxCztvkNjUuKK4SOjSLE8HTac3Nc6h45SVW%2FqoW5rjHnsYRsQTOTwj4dvQ8HvKYMv%2BfJkfQjg%2BH17FO4ljvGPItlB95U2G1mW9Bo2ayEdrSZNXNcC6nreqKTAJYdhWXzSSjYO3pl3lRg06AFsSSzAZ%2F%2BdtGPuJ27TUFn8PTO1NzSo2YnGHi%2FP%2FAI3Afbj1V1D%2FfSNDqOIW5SxaprGRtomf9LUvZX4PPRPIITPPWhUnakSLPPMjybdzX3FKysTC0%2FBan3PHd%2BdNdQ%2FKBrofEqaI%2Bg2d7y4dIiITGIdjzXL3Cky9UqgLF2uqUDbgMY%2FJjSk0XUnMphSgnFGyN0c4svYaP2PD6ccxmMN%2BQ58%2FpHbuhHs%2FTdo1HcbHTZB%2FJ2q8e26C1EHgYTWhR2UYbjHzsTSjbcTy1EO6p8PtJrkGmYfD69QaP4xP8okzcZP47GQQBOGKcnXfPZfqraIYIeumCV3CbT9p6wNMp06wvcptjggQkdadXzGRhZrPKKvu%2FiBsir2MkUQFUNoV2riLDTFQhokgBt9ClsNPYEL%2BE%2FwJLb0KHdpAXLpJPMiIxRjC%2B4cvJBjqkAUFya3Af3c4xUgY6SCGC0BwRJ4DcKxE%2BbjjVlkGnbU6T2O9mTFpBwSQN5NjVkQ2ZclARAuI3eq%2F4TrltUeID%2Bb0NVN14leBJz0NihKGVjuqxV8sLIdRhy6VAPVPK1bo8IZnwDHRklbpg6BMpSp2ilXWzByiU67RCwlG2qYwfiDFClw%2FFE%2BwLxHD3BchGbQydzBwogvF4uO4GU35itGXAUqhMfV%2Bi&X-Amz-Signature=9526fddf4ecd3efeea6d3ad318f9f6c4ace7c43ab5d6551d78ebe98bd568377c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
