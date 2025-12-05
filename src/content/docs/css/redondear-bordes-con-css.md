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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZBHFLP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgua4G%2FYJf2U3%2BywjXRudinppd8YwK%2FA%2FOcbTsIfJnuwIhAJpTIq32zzf4SzljwVLBvZ1dLWXe2m3cp6pz%2FJSwskUnKv8DCFUQABoMNjM3NDIzMTgzODA1IgzChhcEUKstbK4E2GMq3AN2iS%2BrcCS6stl38e4aKBHg%2FTMOGRgpw5pY8VxozRxrpMoVx2ak8AjveLU2jCWYN41BKgJXnR%2FdCylJ8F3f5M6yfhDhY40QanPbcrHFg%2FYMIW8BI0yXcBH%2B8Xs4iAAoIIkcImspHz7eRtCMxFnD1%2FNRIeNFGehKhPsOQhoLLOPOqXnQ%2BzRbPVoBf0iHhuLWoctgB3%2BLzKnpnt434FMgAfHoYDfjgNU7Js0%2Fk7hNF4IVJvnMsQN%2FtewlInvqwLHLsLKOIpiC2AQyXhlDKg%2F2rsdg2COwBfhFS5HxgcTfjRsjhy2HdNuwIBEPhKJWDxtv9%2BugUbeC7FLcULmmf1YabcNm5YTDYR%2BiLjXlpuljuJPnJWIpHk9yYhcnsBTtKm5lG4YozkbHgLCuUkuu4bwam3RUMxHumFdOMYq67fzAVIL9tf%2BfHKp2yAX6NIjlJy21snuQD19epQHDBHh4L1NJUdZzijbUdCdlY%2FIdDLmS9sKllvqMgUw2ssbQpxmAXCeMD8Jmd8QNTgKQVn5SayfMXpgalZLcceYR7NOYTQwvX76QKd14Y4JUE%2FYXCXi1EfIZLA79fry%2FB%2BhKMindQjQCQgde1S1SPisnmexTzPgqxQba0z2RYX5pmrMDe2GHHjCirMnJBjqkAWcnryANJezkHv%2FYyPjuPq2yIvMD8FLa1IwS8HHoTWlqgULcM8pWyqjSZj1BYM%2FGLnh%2F7uDnnt28RDmLGA3da390vKYWUNY6FWyfZON8PdeukuOTIrGFIj5jZx0Y5UAr%2BfLqXKYuNas%2Bf%2B5FRd7UHSbsRGQ2AGI0erNKNvUrtxpBY4b6AwzSj2U8uHxnLbxzILLRBkExi5PbCQ6%2FeA5znqwKZr5h&X-Amz-Signature=f54a565378b0dc8c49e7df2d283515d523273abbc2dbaa67858280808043a86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZBHFLP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgua4G%2FYJf2U3%2BywjXRudinppd8YwK%2FA%2FOcbTsIfJnuwIhAJpTIq32zzf4SzljwVLBvZ1dLWXe2m3cp6pz%2FJSwskUnKv8DCFUQABoMNjM3NDIzMTgzODA1IgzChhcEUKstbK4E2GMq3AN2iS%2BrcCS6stl38e4aKBHg%2FTMOGRgpw5pY8VxozRxrpMoVx2ak8AjveLU2jCWYN41BKgJXnR%2FdCylJ8F3f5M6yfhDhY40QanPbcrHFg%2FYMIW8BI0yXcBH%2B8Xs4iAAoIIkcImspHz7eRtCMxFnD1%2FNRIeNFGehKhPsOQhoLLOPOqXnQ%2BzRbPVoBf0iHhuLWoctgB3%2BLzKnpnt434FMgAfHoYDfjgNU7Js0%2Fk7hNF4IVJvnMsQN%2FtewlInvqwLHLsLKOIpiC2AQyXhlDKg%2F2rsdg2COwBfhFS5HxgcTfjRsjhy2HdNuwIBEPhKJWDxtv9%2BugUbeC7FLcULmmf1YabcNm5YTDYR%2BiLjXlpuljuJPnJWIpHk9yYhcnsBTtKm5lG4YozkbHgLCuUkuu4bwam3RUMxHumFdOMYq67fzAVIL9tf%2BfHKp2yAX6NIjlJy21snuQD19epQHDBHh4L1NJUdZzijbUdCdlY%2FIdDLmS9sKllvqMgUw2ssbQpxmAXCeMD8Jmd8QNTgKQVn5SayfMXpgalZLcceYR7NOYTQwvX76QKd14Y4JUE%2FYXCXi1EfIZLA79fry%2FB%2BhKMindQjQCQgde1S1SPisnmexTzPgqxQba0z2RYX5pmrMDe2GHHjCirMnJBjqkAWcnryANJezkHv%2FYyPjuPq2yIvMD8FLa1IwS8HHoTWlqgULcM8pWyqjSZj1BYM%2FGLnh%2F7uDnnt28RDmLGA3da390vKYWUNY6FWyfZON8PdeukuOTIrGFIj5jZx0Y5UAr%2BfLqXKYuNas%2Bf%2B5FRd7UHSbsRGQ2AGI0erNKNvUrtxpBY4b6AwzSj2U8uHxnLbxzILLRBkExi5PbCQ6%2FeA5znqwKZr5h&X-Amz-Signature=16518d93ce141da59558ecdfb86b3b3367b5a1f918e4bece7ab94f28a7525055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
