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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVK54MN5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVH3J2s9R6b3JbBYq3x%2FTBM6lsw4dwBElEe5t2tSsS5AiBOh9DZCaqwH6JYcnK6lP5HlIRSDJqxdM%2BsIIXz1JmYqCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhdllG56AXuH6xaYKtwDIbPQOmbzO4wuH70wc%2FKTxAs99wAx2cZK5cSz%2BCTGKH7d7tizDSejQJyfvjFfBa6dbbUtnFYnESwzBfLATRkGT9gNNoH19IFV8WWST3mBt0IO5ra54c7s4DajXMZdhlpr1xb15A2YDqbqI4I%2F%2B1sP6Qppf4z2zrZQuT1bCuqjIIV4DnZgfLfqLCEPES1RF3jXUU2dAngh4pBZbPg7zsnuSAWldtKY5mxtm4WZLkU3Euati97CyxIl4nI8wHFRVQSiVP6hgcWBvcsI%2BWpx3on28qkPuXcYEpRFp0AERHT%2B4yU9kTID8cv%2F5AALva%2FcpzD3dkB6k%2BSWYNTocM2bV6ZN%2FIIQLMRzisv71%2BUUaiX%2FqKkYI9x8Undm7KhxRB23Wox%2Fro1ARbJ2UQ5Ua3YBw6xdGwQ2tcr6ZC4%2Bd6EKVCEb%2FNvf4aHsvOnFcVIMqqKQO1d7s3GcEM6waLtaEvYLezz9p6LiC42%2B1XuyyIc62T3DHQCerID7tMDxTnjVxUrRY2%2FX%2F6zmpwuwKL%2FhmJsaMFo%2B7WafoDxAE4XZ1NwFZXFU0nqjbPyPTnyeh4hgVZX5sZ88GagG4sJri9vemYAK%2BuWdebfx0hQgynPCTTPELCzhkqWcyW%2Ff4uKmRwqrGHkw37PWyQY6pgHWXFJQ0OJc%2By%2F%2FIboJjV06BzGqTck5TffdGwZ2D9PvLy3yxmJnsSD6JCVIbWr2M5Br6ZxGuMqvFQuD2PNWyCl0SdJiIacBvy%2BJM9M2xyzZJaC821c5c%2BXEF1A3kUKGftfFIlquAanNkp%2B7w5FKQgP5G5Ay0N5%2BVrziSnJotQsa8QtJwW2NTrEICjbfl%2B93EZ1p7fhGkrD4jR8Br9IhNLKs4hqyvxsh&X-Amz-Signature=4e0cea442568c6e5cb995cb47cce22e37d447ed4df20426519874a91295cd44d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVK54MN5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVH3J2s9R6b3JbBYq3x%2FTBM6lsw4dwBElEe5t2tSsS5AiBOh9DZCaqwH6JYcnK6lP5HlIRSDJqxdM%2BsIIXz1JmYqCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhdllG56AXuH6xaYKtwDIbPQOmbzO4wuH70wc%2FKTxAs99wAx2cZK5cSz%2BCTGKH7d7tizDSejQJyfvjFfBa6dbbUtnFYnESwzBfLATRkGT9gNNoH19IFV8WWST3mBt0IO5ra54c7s4DajXMZdhlpr1xb15A2YDqbqI4I%2F%2B1sP6Qppf4z2zrZQuT1bCuqjIIV4DnZgfLfqLCEPES1RF3jXUU2dAngh4pBZbPg7zsnuSAWldtKY5mxtm4WZLkU3Euati97CyxIl4nI8wHFRVQSiVP6hgcWBvcsI%2BWpx3on28qkPuXcYEpRFp0AERHT%2B4yU9kTID8cv%2F5AALva%2FcpzD3dkB6k%2BSWYNTocM2bV6ZN%2FIIQLMRzisv71%2BUUaiX%2FqKkYI9x8Undm7KhxRB23Wox%2Fro1ARbJ2UQ5Ua3YBw6xdGwQ2tcr6ZC4%2Bd6EKVCEb%2FNvf4aHsvOnFcVIMqqKQO1d7s3GcEM6waLtaEvYLezz9p6LiC42%2B1XuyyIc62T3DHQCerID7tMDxTnjVxUrRY2%2FX%2F6zmpwuwKL%2FhmJsaMFo%2B7WafoDxAE4XZ1NwFZXFU0nqjbPyPTnyeh4hgVZX5sZ88GagG4sJri9vemYAK%2BuWdebfx0hQgynPCTTPELCzhkqWcyW%2Ff4uKmRwqrGHkw37PWyQY6pgHWXFJQ0OJc%2By%2F%2FIboJjV06BzGqTck5TffdGwZ2D9PvLy3yxmJnsSD6JCVIbWr2M5Br6ZxGuMqvFQuD2PNWyCl0SdJiIacBvy%2BJM9M2xyzZJaC821c5c%2BXEF1A3kUKGftfFIlquAanNkp%2B7w5FKQgP5G5Ay0N5%2BVrziSnJotQsa8QtJwW2NTrEICjbfl%2B93EZ1p7fhGkrD4jR8Br9IhNLKs4hqyvxsh&X-Amz-Signature=6b67132d38e7710d6d3fc708be6a02afac44ef5e4ce13f8c123cf98cc6e8ccef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
