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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6SPKEW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV%2BqJBYo0esF9JkIvHZwgc91jVswU1XtCTofrCN8gW9AiEAx0O5fmPqDqhlSrUnUL1Mu4vDrwb68bzB4cyC8IIpkkEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG0jEvxfrKYPGoNVQCrcA%2Fyq5H2aLa4RbQ%2FqCnmKbkY%2Fq1kISz2Bus8Qq%2FEFkoy7RAqVq0BMIxBAmt1fp17bsVy06YoShQeSX%2B28WVfbkfCB1KDO2N6bU%2Bcu%2Be%2FjJNA7VQZiRqMhRU4nfUCgtwebym0sp7xDUzWNFYLem8z2TDcSO6odxj%2B6aDKlPrSrFbJhDkMelmE4AyQ2uCfgYtZ1nSkC9lKuV9ydgYQ%2BchjSTs6Sbog9LV8aE0KCZmX%2FiSPUdnF1UDkuc1d2jTz9pG5gjsjhltfyUF0ot8VGwnVQiryIHuaUsA8pNoGxw4tFtwUre1fjEdZVRN3176Zoi2p%2BVNh0xhOrssB22nv6XPNB3Nlm2S6XqQsdb7FfevP7SRVqoB7j%2BNj6YeaYHKpkRHdltZNQUhpHDFgSBHcCmbiJsAGHtNaBWZ0RCwi%2Bfy21qZnBAdHIo5%2BfNuicUff31GRflTrM19deO37enNtCg%2FB9lpEblZFwAFC12QlIrVkOgvqUZ%2FxMyA%2F4YtZZAzMF7NbCtLEQYH8b%2Fj3pFE5n%2B9ZXtdCXf756xADks5IWTAkLt%2BpcESrr48nR1NvTB2ie8Sx5jyNyawY%2FeGhPPeyBpo1RJZ%2F%2BcjLOs%2FuT5DDaielhd%2Fn85XEy%2BzxWz1%2FIzS7AMKrH0ckGOqUBxzppEuvOlmrX%2Bve41v5PlG0thFXPyB6jkPnpZW1hNbqN1wdSeczJ4g%2F1lJF9R2N0ChLbUZxEcOzeJFTrcEIt6yOJ89aKx2Mg%2Ba%2BcQydD1vIWN2Y8kAyBJDMb08MvL7o9iADbvlyrZ2XYuWBP9ciCnhGpRyDOzhocSK1FBkXcLZHVKbgEEYH8WdFpPnChBZSPlY58mPnnmLp4dCUuUupyAj027y3e&X-Amz-Signature=6757ba9c4aac1fcb8cc5ddc4a1fcb409adcbf5f1ac62ba9dbcdffa63997c424d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6SPKEW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV%2BqJBYo0esF9JkIvHZwgc91jVswU1XtCTofrCN8gW9AiEAx0O5fmPqDqhlSrUnUL1Mu4vDrwb68bzB4cyC8IIpkkEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG0jEvxfrKYPGoNVQCrcA%2Fyq5H2aLa4RbQ%2FqCnmKbkY%2Fq1kISz2Bus8Qq%2FEFkoy7RAqVq0BMIxBAmt1fp17bsVy06YoShQeSX%2B28WVfbkfCB1KDO2N6bU%2Bcu%2Be%2FjJNA7VQZiRqMhRU4nfUCgtwebym0sp7xDUzWNFYLem8z2TDcSO6odxj%2B6aDKlPrSrFbJhDkMelmE4AyQ2uCfgYtZ1nSkC9lKuV9ydgYQ%2BchjSTs6Sbog9LV8aE0KCZmX%2FiSPUdnF1UDkuc1d2jTz9pG5gjsjhltfyUF0ot8VGwnVQiryIHuaUsA8pNoGxw4tFtwUre1fjEdZVRN3176Zoi2p%2BVNh0xhOrssB22nv6XPNB3Nlm2S6XqQsdb7FfevP7SRVqoB7j%2BNj6YeaYHKpkRHdltZNQUhpHDFgSBHcCmbiJsAGHtNaBWZ0RCwi%2Bfy21qZnBAdHIo5%2BfNuicUff31GRflTrM19deO37enNtCg%2FB9lpEblZFwAFC12QlIrVkOgvqUZ%2FxMyA%2F4YtZZAzMF7NbCtLEQYH8b%2Fj3pFE5n%2B9ZXtdCXf756xADks5IWTAkLt%2BpcESrr48nR1NvTB2ie8Sx5jyNyawY%2FeGhPPeyBpo1RJZ%2F%2BcjLOs%2FuT5DDaielhd%2Fn85XEy%2BzxWz1%2FIzS7AMKrH0ckGOqUBxzppEuvOlmrX%2Bve41v5PlG0thFXPyB6jkPnpZW1hNbqN1wdSeczJ4g%2F1lJF9R2N0ChLbUZxEcOzeJFTrcEIt6yOJ89aKx2Mg%2Ba%2BcQydD1vIWN2Y8kAyBJDMb08MvL7o9iADbvlyrZ2XYuWBP9ciCnhGpRyDOzhocSK1FBkXcLZHVKbgEEYH8WdFpPnChBZSPlY58mPnnmLp4dCUuUupyAj027y3e&X-Amz-Signature=38e760885a2fc3863b0ab5c8e3a8211d3eca284c9b29695a741798b60e685d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
