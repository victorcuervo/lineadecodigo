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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUCFZDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAu%2BTrCYoAe1PN%2FYl%2BvApEnEOqbS39Mi4v9d0YspoNpAIgSdXEomV7NrVxX1OMKLsnCpDz2pNubQA4JCuF0gLnoH4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQA%2FKrUIIPR%2BJlNCircAzx8MXwsZ27e0e%2BsoLs%2BpZA7Qw5De5AUneoPbxQpISF0QDaTrOmQrjmON5DhrKk2L4Om%2FsNAKq3mkqh%2BeQw5bi%2F0U7s3wNvpIY46wZ3t7oT5gNkTKYC9Ycldj43Sl4haFaK4HVjmwSnlJDCgQYlRlHu330z%2FOh56qjk0u0Wax02gj4xEN59Z3Fxx97Bi7mb1KFpzqS%2Fg3FxWM3o6e0gFEmR82XgJTsyQOUBuTazbD8jkmlJ7M571cK0voxGd5xTaaI9vERS%2F7J1frUrve7TEmkJtATDtlyhyrrrA3EHbDlOjEzV%2FD%2B886U8c%2BWowJgKyTiFh5vymNdY7O6SwBeNyF%2F2beiX59MwvGTjuzp6yxJNU8wZy0QeOALme7mFWmCuGHQRbY%2FqPbJCiA3w8VQVbwRUVnZayZRY2Kux1TeWycUDAtBMg%2Fzn95FijQtLTLQmm1e5jfSD0drpc75if7ejVvFt0Srln0HYccSxwfMlVRM9Kf5ZtbKyaKanPdjChYREHi76WmtrYYI2a1MU7WYKd%2BQwlPIlbcZHFHraQl9P%2FIC7%2F82%2BKAC5dmxV7%2B0FZ%2B6bC%2FP%2FfD0hdLbOZGvTgicwJ7uu8QipaLohxrPWIC8ACfVB64s5yJz8CQ9sUkgvSMO2KjMoGOqUBog9ttO7ySPuD3hFMkMM3KJddRHLDCpwMKpn1LO70B8uJRO6EeCHxljs0b37Fg27Fo7dX%2FvPiDCexkQ3kME2denkYIZrq5necLtWWzZEibPzGp%2Bh%2BkgVcsYfocCdXFMaXtQuhFadKNA5TRkvkB1y5I%2FOcgd4WmM%2F3OEMyK5bt9Ycpnmi23aexsbSCXeQdjx8nmZnrhWnRUZnMsWPCZskilpv8TYoh&X-Amz-Signature=16ef6f8cf047bb697196cc5c5a87d8f914861834bb9a474f77e2f9fe21eb3e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUCFZDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAu%2BTrCYoAe1PN%2FYl%2BvApEnEOqbS39Mi4v9d0YspoNpAIgSdXEomV7NrVxX1OMKLsnCpDz2pNubQA4JCuF0gLnoH4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQA%2FKrUIIPR%2BJlNCircAzx8MXwsZ27e0e%2BsoLs%2BpZA7Qw5De5AUneoPbxQpISF0QDaTrOmQrjmON5DhrKk2L4Om%2FsNAKq3mkqh%2BeQw5bi%2F0U7s3wNvpIY46wZ3t7oT5gNkTKYC9Ycldj43Sl4haFaK4HVjmwSnlJDCgQYlRlHu330z%2FOh56qjk0u0Wax02gj4xEN59Z3Fxx97Bi7mb1KFpzqS%2Fg3FxWM3o6e0gFEmR82XgJTsyQOUBuTazbD8jkmlJ7M571cK0voxGd5xTaaI9vERS%2F7J1frUrve7TEmkJtATDtlyhyrrrA3EHbDlOjEzV%2FD%2B886U8c%2BWowJgKyTiFh5vymNdY7O6SwBeNyF%2F2beiX59MwvGTjuzp6yxJNU8wZy0QeOALme7mFWmCuGHQRbY%2FqPbJCiA3w8VQVbwRUVnZayZRY2Kux1TeWycUDAtBMg%2Fzn95FijQtLTLQmm1e5jfSD0drpc75if7ejVvFt0Srln0HYccSxwfMlVRM9Kf5ZtbKyaKanPdjChYREHi76WmtrYYI2a1MU7WYKd%2BQwlPIlbcZHFHraQl9P%2FIC7%2F82%2BKAC5dmxV7%2B0FZ%2B6bC%2FP%2FfD0hdLbOZGvTgicwJ7uu8QipaLohxrPWIC8ACfVB64s5yJz8CQ9sUkgvSMO2KjMoGOqUBog9ttO7ySPuD3hFMkMM3KJddRHLDCpwMKpn1LO70B8uJRO6EeCHxljs0b37Fg27Fo7dX%2FvPiDCexkQ3kME2denkYIZrq5necLtWWzZEibPzGp%2Bh%2BkgVcsYfocCdXFMaXtQuhFadKNA5TRkvkB1y5I%2FOcgd4WmM%2F3OEMyK5bt9Ycpnmi23aexsbSCXeQdjx8nmZnrhWnRUZnMsWPCZskilpv8TYoh&X-Amz-Signature=a7823748f7eda73c036229e9856462f0fb14188eae0c754126464e0904a13d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
