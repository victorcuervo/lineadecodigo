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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQCSVYN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFLUeWHt43H8lfbgwR7NQKBiN6JcxzLf0wmA2rYQhMgIgEXXwumK5ea1ci03lHwBpVHXpOU9P7FjGk5cdEQPwNdAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIYd7kT8MBOYt%2B9kMircA5FguUCpENgEg6yiMrZiRdon15GhYJYGFj32BNFD68R2mYXck2HefjacMnkZwDBPb6yQP496Cp%2B25RByePcbWj4eJrNG1u4Adho9BEKMakfsNrlOCWEM8bt6%2FHPdyp75W4TkVjXKnF%2BNMhQZ8NVYQFVCjToOtzeNpYsSiUIEI7quRs0OSzYQfGcDIMSHkM5Uwr2fFHgorGVlrHICQippK5uxAEd%2FE06%2FrlCzAOXMZvK1lGIkKca%2FBV6vUGkbYzPzp%2FVtU1xLnnqhbYHVtZmdFpAct5wDER2HKay40ETf1vh0reltvb0N3DaSu%2FrmiTN14FwRLSPEOh0Cmz0WCygS%2FWEsKo%2FbAr%2BS7fBXcwueUXtBsWKmMRVMPt883PJ7uQi4w7E5lehTCHZVIfafRbfGmezjfG44dzXJ0NKQSasJ5ttd0o2RLWLpC%2BkhfCL8EttYcnHCQlnkyTjldiqa23jno6pBcPdZZ%2F6N7vzdx5cpHxp4jh5zNi7Guy%2B%2FOmzjNIFhNK9pCkb2KISmElZShTcWCcLMTrQtSnHPlOUB9i%2FGIiPCk1Gx0KcgFwT4OhdLCXGvrnXPAlVuSljJa%2BBuvxT6rJJZ8uiZlT9okGPBzGKR9M9dKy9KZbVn2qInXWAQMJ%2Bm0MkGOqUBgAg8VK4aEM1AA1FsgFovXv90qoZIhnZKUNtorO6Vm4Lf6E2ls2C78T9QDatPUJ8X5mFegDdFVWr9tTPmJ43mB4CI5TGoIhcQ7RkpHwpeh9HYlXNZxXMw2SO46Ki%2F4OZgQXGMyjTkSCiNix1Z%2BKIESZe6lAaS9Mt6mymrjTWKkJKIkuOg%2FFBMw4EMSGLrCMtkwji0gJ2L5H%2B3ui0tcl80xLrBr1hi&X-Amz-Signature=7c63ff1d3b6893a2646c89f2aaa4516db6d96b57ba0e98216f36eb2351cc6219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQCSVYN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFLUeWHt43H8lfbgwR7NQKBiN6JcxzLf0wmA2rYQhMgIgEXXwumK5ea1ci03lHwBpVHXpOU9P7FjGk5cdEQPwNdAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIYd7kT8MBOYt%2B9kMircA5FguUCpENgEg6yiMrZiRdon15GhYJYGFj32BNFD68R2mYXck2HefjacMnkZwDBPb6yQP496Cp%2B25RByePcbWj4eJrNG1u4Adho9BEKMakfsNrlOCWEM8bt6%2FHPdyp75W4TkVjXKnF%2BNMhQZ8NVYQFVCjToOtzeNpYsSiUIEI7quRs0OSzYQfGcDIMSHkM5Uwr2fFHgorGVlrHICQippK5uxAEd%2FE06%2FrlCzAOXMZvK1lGIkKca%2FBV6vUGkbYzPzp%2FVtU1xLnnqhbYHVtZmdFpAct5wDER2HKay40ETf1vh0reltvb0N3DaSu%2FrmiTN14FwRLSPEOh0Cmz0WCygS%2FWEsKo%2FbAr%2BS7fBXcwueUXtBsWKmMRVMPt883PJ7uQi4w7E5lehTCHZVIfafRbfGmezjfG44dzXJ0NKQSasJ5ttd0o2RLWLpC%2BkhfCL8EttYcnHCQlnkyTjldiqa23jno6pBcPdZZ%2F6N7vzdx5cpHxp4jh5zNi7Guy%2B%2FOmzjNIFhNK9pCkb2KISmElZShTcWCcLMTrQtSnHPlOUB9i%2FGIiPCk1Gx0KcgFwT4OhdLCXGvrnXPAlVuSljJa%2BBuvxT6rJJZ8uiZlT9okGPBzGKR9M9dKy9KZbVn2qInXWAQMJ%2Bm0MkGOqUBgAg8VK4aEM1AA1FsgFovXv90qoZIhnZKUNtorO6Vm4Lf6E2ls2C78T9QDatPUJ8X5mFegDdFVWr9tTPmJ43mB4CI5TGoIhcQ7RkpHwpeh9HYlXNZxXMw2SO46Ki%2F4OZgQXGMyjTkSCiNix1Z%2BKIESZe6lAaS9Mt6mymrjTWKkJKIkuOg%2FFBMw4EMSGLrCMtkwji0gJ2L5H%2B3ui0tcl80xLrBr1hi&X-Amz-Signature=73e660c32323d2422b885edcc6fca974dea6968e5b7d68957870d3906a0b0033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
