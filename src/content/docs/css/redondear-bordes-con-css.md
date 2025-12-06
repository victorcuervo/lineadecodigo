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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STBQWWI2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAP5YUG8vmsn8XcxwcuG5muoYlLEel202l8TTkrusRL6AiAPeAf7pXyCViS6ArcEnsWmOvvhzOinQsAoO6QOca16Uir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMB7blSXvApBQfJni9KtwDICvcomSrwXvU6Y0%2BEyaT0TrVCBJwrak0oQAj19NT88J2ecqlwDR82%2BNtdUKw%2FY1qPDvCLdkeQRxSSN6NCGKruhXluTIGtZphBVuIg1j%2F8IdCHuUHVK4T6GidEkd4zYfu%2Fg8ife3SM%2Fo5gpTGFMZqn8PinElSacpp9yK3yPKGsY%2B4qZmWoIMIxeqrrdwwMd9xSsrrISZ8On636obVydPgPdLQUtZATF%2BhrHBqDkp3Z%2BM5Ieg3bD7ghPkgRcufKhWwiGk9hgIdR8E8zlc0GR6x998t%2B5KtOJG1sXFyo%2BdUJjUb9POQWG0q2LmgCGw6JpPTxZ6s12WVpAaqjUrb3B%2BlxGcaBbZH1KjqnUipYGeWDgZliKXTv5cAi%2FIAJy%2BQrpzFLH1WLriPDyN3y85e0yVMyo02tr%2FqQY3z07TzJ0%2FmcPAFw2xxFMvaV6Aq5%2BF8G9GTIAkZgKV1KRkQzB64C943W37FsmXxG2xbGdBMclaHXae5bYV%2Blv9FA2feiPC3nszVJAazc8JYxVKXR0sdL4MofniyI1MD5s3wAIW1AT6LNg0MDyWrq9sCG2ouGRkXexjy8Zx5T8LLxmXTKjeK%2ByRWV10X3NsdimUEDjQ%2FRppxCf5eSxujZLunlDgl3Scwk8LRyQY6pgF%2FB6BYCYaHPopW3tVk8pH5071UDHtbBktDQtsgIKRREQK49Na68qQKLkEoA6Y6igP4Foa4pmrSZsNVrOwlC%2FbgRGtik%2BE2i8Rj5f6BeNf5rtAzd38fnCudgPKwl%2Fw%2BDWGlN%2BzH4LTIAfTTkUFr7bc5nLGgw842D3%2B7QeoAFKQkYrlA7PofvminJuTGqASC7NgjXh4xTus6upTqukJOD5tuBFwaiF65&X-Amz-Signature=f1738118d00665e104f592342ee6b9e06ebe72d83d34ed45327b83cc166dc4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STBQWWI2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAP5YUG8vmsn8XcxwcuG5muoYlLEel202l8TTkrusRL6AiAPeAf7pXyCViS6ArcEnsWmOvvhzOinQsAoO6QOca16Uir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMB7blSXvApBQfJni9KtwDICvcomSrwXvU6Y0%2BEyaT0TrVCBJwrak0oQAj19NT88J2ecqlwDR82%2BNtdUKw%2FY1qPDvCLdkeQRxSSN6NCGKruhXluTIGtZphBVuIg1j%2F8IdCHuUHVK4T6GidEkd4zYfu%2Fg8ife3SM%2Fo5gpTGFMZqn8PinElSacpp9yK3yPKGsY%2B4qZmWoIMIxeqrrdwwMd9xSsrrISZ8On636obVydPgPdLQUtZATF%2BhrHBqDkp3Z%2BM5Ieg3bD7ghPkgRcufKhWwiGk9hgIdR8E8zlc0GR6x998t%2B5KtOJG1sXFyo%2BdUJjUb9POQWG0q2LmgCGw6JpPTxZ6s12WVpAaqjUrb3B%2BlxGcaBbZH1KjqnUipYGeWDgZliKXTv5cAi%2FIAJy%2BQrpzFLH1WLriPDyN3y85e0yVMyo02tr%2FqQY3z07TzJ0%2FmcPAFw2xxFMvaV6Aq5%2BF8G9GTIAkZgKV1KRkQzB64C943W37FsmXxG2xbGdBMclaHXae5bYV%2Blv9FA2feiPC3nszVJAazc8JYxVKXR0sdL4MofniyI1MD5s3wAIW1AT6LNg0MDyWrq9sCG2ouGRkXexjy8Zx5T8LLxmXTKjeK%2ByRWV10X3NsdimUEDjQ%2FRppxCf5eSxujZLunlDgl3Scwk8LRyQY6pgF%2FB6BYCYaHPopW3tVk8pH5071UDHtbBktDQtsgIKRREQK49Na68qQKLkEoA6Y6igP4Foa4pmrSZsNVrOwlC%2FbgRGtik%2BE2i8Rj5f6BeNf5rtAzd38fnCudgPKwl%2Fw%2BDWGlN%2BzH4LTIAfTTkUFr7bc5nLGgw842D3%2B7QeoAFKQkYrlA7PofvminJuTGqASC7NgjXh4xTus6upTqukJOD5tuBFwaiF65&X-Amz-Signature=e4cd45b37cf0e35c10758195673123450e18aa9050bbd1a20de8d655ed1d7254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
