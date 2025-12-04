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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPM4XGAJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF%2F2reURiQVk8SWac%2FoRKPrgPrvGcYC8VBnkPrCiAxTCAiEAisYYmE%2FNBfuQxf0qRVsHUKt4CKSLqlTTDK0o7VGntwEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPDJn3BtrUE7o%2BIa6yrcA%2Fttu1ALi5B5xP%2BFg9LZNJmT9Z9zKWfE1VrLaA3n53XJgf5hKKh5cqiFAd35U9UA1l8XdRG%2FsEnb09n6tOhckt6IC1rOmkrOOn%2FtjKCQ0ROtamK4AhHu6TroHcV42lYN%2FvAT7dKTzgghpavD1UDCfqw1jX%2FyijOW5Qeew7zSbtjQTCHmmiToMdfwbDaGHVTklJ%2FR0mxfKr3GUOlqK8IZ9w%2BYNtrHEH62y437lr5jzVmApsS4xW2A6GdRfsm4b3kHQ5YZEMcQ3PKw40GQbO8q7x0H5y85z%2BrR%2FKmbz3iATucruGNuDeFuXgQS1uB%2Feriz%2F%2Fo3rGQN3XtjYWII6On2IJetwYzI7rzpX1u02i2WVYxqgrXa5D3rABblUY%2Fx83yn8%2FUuHp5CU6UARuUJOF6%2FP4rQ%2Fylex1qi16zyTyNlPwHrr6xz05rTFJ3ClPDEE%2FakgIFsU3CwvongbEXVR6BGEc6Jw2hu8kFyNThxnQs8LpMp1GkfW8cNIIftT%2BISA%2BRStyYuYb5D34%2FiRZU1w4OyUVMbVOTPfnXA0oYoT8yLtdDCCzJiyzhOXMwZS9iI4tOqSdFJO1%2FGNkmHRFFr3%2BHbsPhpE8VhZ2ODufmkG9COyULgcWueDjeLf1p9SLOZMOqtxMkGOqUBgCKPnwTO95SswFy4MkYi8RtBUCmC3yLgRRkBFkn0FS7BIXbBVYZM%2B7xa%2Fp5AyCPbb00D8NInCMd5s6OT4m1kbSe3m38awe6q6795NbZEnNkmItpzCyIT%2FI%2F9grTLVSuYn%2Fw2kBqOmmnkx6fdvJubc8U9VyIgy%2FZE%2F%2BvfSkcbj25j4F%2FdR3HqCUD%2BWIEORY7I%2BwHVBVjKNWaKjDo9LWSks3DAorHT&X-Amz-Signature=7fe83ed46b6adcc0ad43414d925d628ba860bc80c036a804f1759f035775a9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPM4XGAJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF%2F2reURiQVk8SWac%2FoRKPrgPrvGcYC8VBnkPrCiAxTCAiEAisYYmE%2FNBfuQxf0qRVsHUKt4CKSLqlTTDK0o7VGntwEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPDJn3BtrUE7o%2BIa6yrcA%2Fttu1ALi5B5xP%2BFg9LZNJmT9Z9zKWfE1VrLaA3n53XJgf5hKKh5cqiFAd35U9UA1l8XdRG%2FsEnb09n6tOhckt6IC1rOmkrOOn%2FtjKCQ0ROtamK4AhHu6TroHcV42lYN%2FvAT7dKTzgghpavD1UDCfqw1jX%2FyijOW5Qeew7zSbtjQTCHmmiToMdfwbDaGHVTklJ%2FR0mxfKr3GUOlqK8IZ9w%2BYNtrHEH62y437lr5jzVmApsS4xW2A6GdRfsm4b3kHQ5YZEMcQ3PKw40GQbO8q7x0H5y85z%2BrR%2FKmbz3iATucruGNuDeFuXgQS1uB%2Feriz%2F%2Fo3rGQN3XtjYWII6On2IJetwYzI7rzpX1u02i2WVYxqgrXa5D3rABblUY%2Fx83yn8%2FUuHp5CU6UARuUJOF6%2FP4rQ%2Fylex1qi16zyTyNlPwHrr6xz05rTFJ3ClPDEE%2FakgIFsU3CwvongbEXVR6BGEc6Jw2hu8kFyNThxnQs8LpMp1GkfW8cNIIftT%2BISA%2BRStyYuYb5D34%2FiRZU1w4OyUVMbVOTPfnXA0oYoT8yLtdDCCzJiyzhOXMwZS9iI4tOqSdFJO1%2FGNkmHRFFr3%2BHbsPhpE8VhZ2ODufmkG9COyULgcWueDjeLf1p9SLOZMOqtxMkGOqUBgCKPnwTO95SswFy4MkYi8RtBUCmC3yLgRRkBFkn0FS7BIXbBVYZM%2B7xa%2Fp5AyCPbb00D8NInCMd5s6OT4m1kbSe3m38awe6q6795NbZEnNkmItpzCyIT%2FI%2F9grTLVSuYn%2Fw2kBqOmmnkx6fdvJubc8U9VyIgy%2FZE%2F%2BvfSkcbj25j4F%2FdR3HqCUD%2BWIEORY7I%2BwHVBVjKNWaKjDo9LWSks3DAorHT&X-Amz-Signature=a30c16cbb4db93f9278bf04034298e0fdf65401d805bd01686adf2234281e8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
