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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7V3ZFYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDEMT9Rcpgc6gbf%2F62HRr47C5eYPyuSnWuES6TpWJ7a%2BAiAEK6elvz1O%2FExosBa1KfITa9pyM4ePNTeOJGNUbc8sFyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMKBFYOj4Fu13%2FU%2BggKtwD%2Bn7BIDaTyHyOzTtDkMsSr%2B5m8LrdAXWbx9M2SYdQzr6rJrVREO1KATQ4tSLYmOVKxArMtUyG4Ui4OGo2bCFDoXxVObUrsl88KVf58c6JtFNUTmaOM6qhvxxz6Jz%2F3%2F64jxpAbshOLkH9vxDpF9GU4GAGeKGT%2FJoy7YHy5M1YjdGjEDmgVpQ9H%2FpM40JJ7FcweH46Vpz1gWkoi9EVR6kK1IMFx3%2FXcGfkTsPkjJh1Blw5OGhjMRwxr7MEwKFdDwyVQzYR1sozKNBNj%2BN5QclSVjN6Ub12TsgiTQzQ4exnbi7WVSSJSbgTjSIWzvINmHMOgRjMi0kowNQ3Cip1OH3ybZXq8aMMHeIA9XUaNuDU5ekEiCtZdHwWjOAgcKM9svY8RUTNF2YoRmoIvOLc%2FoKp8wrkM9NNZt8KDcqWIXz%2Bj5cDmDAbKb%2Buc0EqCBWto6A4XgGif3wJUIE3KLXjBYi%2FBQe6dDrASX%2FCpSeppXQVhUxRWxtQDd6faFpxvknACboVqHoPvUk6J3T6rbSufdbGiB4Pk0KKK%2FMFmocYPOyrOAv%2F57AooJXVKByRiy%2FtB06W3U%2BGH50pJSRCU15GYBx%2B3cjF33GdufrPB%2FWSO0HkkDdGCSgI%2Bxm5SXx3NEUw%2F%2BjEyQY6pgFWXJZl7hrTLmJPBVpDWXK%2BOTs%2BCxKQzV4ettwTz%2FeQ0%2BpXIIUcXtXa6AhPXoNPKPpP763DaSXHmgqRr%2Bk6Vm2ps8Ped%2B%2Fk0xAEZDGLM%2BtXX7Wz2Ou8jwalPkDLhDejTW8A8UM9D9UJDjbGIVORqUnMaEtC1WFblg9UKsF1IdikEFQok3Tlk96hPGiLUtINl9Xqf5bzAC22MrUCQ1yTsbxsOF4m5PlU&X-Amz-Signature=da05233256f2e82d490cf3af255357c17e5db54cda82ac6b7810b1ae0904e55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7V3ZFYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDEMT9Rcpgc6gbf%2F62HRr47C5eYPyuSnWuES6TpWJ7a%2BAiAEK6elvz1O%2FExosBa1KfITa9pyM4ePNTeOJGNUbc8sFyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMKBFYOj4Fu13%2FU%2BggKtwD%2Bn7BIDaTyHyOzTtDkMsSr%2B5m8LrdAXWbx9M2SYdQzr6rJrVREO1KATQ4tSLYmOVKxArMtUyG4Ui4OGo2bCFDoXxVObUrsl88KVf58c6JtFNUTmaOM6qhvxxz6Jz%2F3%2F64jxpAbshOLkH9vxDpF9GU4GAGeKGT%2FJoy7YHy5M1YjdGjEDmgVpQ9H%2FpM40JJ7FcweH46Vpz1gWkoi9EVR6kK1IMFx3%2FXcGfkTsPkjJh1Blw5OGhjMRwxr7MEwKFdDwyVQzYR1sozKNBNj%2BN5QclSVjN6Ub12TsgiTQzQ4exnbi7WVSSJSbgTjSIWzvINmHMOgRjMi0kowNQ3Cip1OH3ybZXq8aMMHeIA9XUaNuDU5ekEiCtZdHwWjOAgcKM9svY8RUTNF2YoRmoIvOLc%2FoKp8wrkM9NNZt8KDcqWIXz%2Bj5cDmDAbKb%2Buc0EqCBWto6A4XgGif3wJUIE3KLXjBYi%2FBQe6dDrASX%2FCpSeppXQVhUxRWxtQDd6faFpxvknACboVqHoPvUk6J3T6rbSufdbGiB4Pk0KKK%2FMFmocYPOyrOAv%2F57AooJXVKByRiy%2FtB06W3U%2BGH50pJSRCU15GYBx%2B3cjF33GdufrPB%2FWSO0HkkDdGCSgI%2Bxm5SXx3NEUw%2F%2BjEyQY6pgFWXJZl7hrTLmJPBVpDWXK%2BOTs%2BCxKQzV4ettwTz%2FeQ0%2BpXIIUcXtXa6AhPXoNPKPpP763DaSXHmgqRr%2Bk6Vm2ps8Ped%2B%2Fk0xAEZDGLM%2BtXX7Wz2Ou8jwalPkDLhDejTW8A8UM9D9UJDjbGIVORqUnMaEtC1WFblg9UKsF1IdikEFQok3Tlk96hPGiLUtINl9Xqf5bzAC22MrUCQ1yTsbxsOF4m5PlU&X-Amz-Signature=e538430cdd5629b86380b16d8a272e6e03f745760aaddd39a74dec41c196b1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
