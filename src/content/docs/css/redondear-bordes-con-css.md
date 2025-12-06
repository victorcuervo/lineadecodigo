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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TIHRIFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bvb5pr2UGvKP%2F6x5Zl4Ckro5bAAe%2FdDXiVWv8W0%2FvxQIhAJegaAtNby%2By7%2BkQBq6KAoUzBWomamtd41V44igiI1buKv8DCHoQABoMNjM3NDIzMTgzODA1IgxVEnpY70GY3Ms0Mikq3ANs9xbBhPIVAFPTJpzW4SXc%2BEAUuo%2FZkTfdEQ67LZ%2B7UyayVmiwkBtwfe5AT1CSmLwBj4DCdgKQ6P%2FnL9VBKGfGuyBNqOarNFvDaXeHH3spirAVQxmeZkKy3rq1Jw4iqM5K9c%2B875C4KM5MtTlIiT64fn2toSmWSoP0OFg8jQfwpTTvqpKIiVGzFKSrSJlKUsL%2Bd9B7z9Ov8dbY3C5spKzwjr595o0isFebpMSmxSP%2FtleKkD2M8boQzSkuzq8IfkO4O%2BpAypg8Vt2hDZK8R681Hfxt4sPGS5Ryd9fsSyTPxEMtzZHtY3yQOWzTUI3wFn0t4CuEyL7HF2puZulmH4f%2B8BlI3gZLqgmUkVJzv%2F4z7YJySmi%2BRU3uZtt5NqPO%2Bc4VtYe8yNs0h31KWCtOWo6%2F%2F%2BMBWvXOdJEjNNp2jn%2BR7BXl6IfNi6gtm6Q5zUy9ZyGuNFyTn77U%2F0nemU7QVWaCvxbskQyLvmn3lAp%2Fcwxa38GdqAyJ%2BQoVBqVKPIi4gk%2Fo8piL%2FBc%2FdJRU61KKBRLlYL%2BkkdW7c3unS6MKfB7VshgPOuRh9h9%2BYZDfHcljvyMKDavqt0NewbHjjWqYrWgshKj0QFJeVRyIg5H7eEul1ZMsPVDPUOMWUi3oLTDVy9HJBjqkAZ%2Bjk9h45MA0snBDIvzhkjii5Q%2F4F5JfBBKLqPxOl%2F5PxP8OSPV3GJzbACir%2BYsEOaQBrTCd5mpL5Y46%2F4VrDpa4fbclnHWbEE88c55MCNR8wTKPDd9JLRZJpKAMzMudnStQov4LG0HnYBZbyhrAK9EFdfi34TIL8L%2FZ6Dp%2BCWb2HCbwQp1Rlb%2FvqmqoRwNmXPjlMBzEr64rCcPWiD9o3YPfmaoI&X-Amz-Signature=541589efa3562bc58ff7960ce9dfe455e4b6e92fa827a1657d28775700de4123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TIHRIFO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bvb5pr2UGvKP%2F6x5Zl4Ckro5bAAe%2FdDXiVWv8W0%2FvxQIhAJegaAtNby%2By7%2BkQBq6KAoUzBWomamtd41V44igiI1buKv8DCHoQABoMNjM3NDIzMTgzODA1IgxVEnpY70GY3Ms0Mikq3ANs9xbBhPIVAFPTJpzW4SXc%2BEAUuo%2FZkTfdEQ67LZ%2B7UyayVmiwkBtwfe5AT1CSmLwBj4DCdgKQ6P%2FnL9VBKGfGuyBNqOarNFvDaXeHH3spirAVQxmeZkKy3rq1Jw4iqM5K9c%2B875C4KM5MtTlIiT64fn2toSmWSoP0OFg8jQfwpTTvqpKIiVGzFKSrSJlKUsL%2Bd9B7z9Ov8dbY3C5spKzwjr595o0isFebpMSmxSP%2FtleKkD2M8boQzSkuzq8IfkO4O%2BpAypg8Vt2hDZK8R681Hfxt4sPGS5Ryd9fsSyTPxEMtzZHtY3yQOWzTUI3wFn0t4CuEyL7HF2puZulmH4f%2B8BlI3gZLqgmUkVJzv%2F4z7YJySmi%2BRU3uZtt5NqPO%2Bc4VtYe8yNs0h31KWCtOWo6%2F%2F%2BMBWvXOdJEjNNp2jn%2BR7BXl6IfNi6gtm6Q5zUy9ZyGuNFyTn77U%2F0nemU7QVWaCvxbskQyLvmn3lAp%2Fcwxa38GdqAyJ%2BQoVBqVKPIi4gk%2Fo8piL%2FBc%2FdJRU61KKBRLlYL%2BkkdW7c3unS6MKfB7VshgPOuRh9h9%2BYZDfHcljvyMKDavqt0NewbHjjWqYrWgshKj0QFJeVRyIg5H7eEul1ZMsPVDPUOMWUi3oLTDVy9HJBjqkAZ%2Bjk9h45MA0snBDIvzhkjii5Q%2F4F5JfBBKLqPxOl%2F5PxP8OSPV3GJzbACir%2BYsEOaQBrTCd5mpL5Y46%2F4VrDpa4fbclnHWbEE88c55MCNR8wTKPDd9JLRZJpKAMzMudnStQov4LG0HnYBZbyhrAK9EFdfi34TIL8L%2FZ6Dp%2BCWb2HCbwQp1Rlb%2FvqmqoRwNmXPjlMBzEr64rCcPWiD9o3YPfmaoI&X-Amz-Signature=3d9f61b86e07d3c0b58834437d3865feb80b231ccb3ef4234774df8d496feb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
