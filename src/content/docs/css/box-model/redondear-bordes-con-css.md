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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2ELWYE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDReHjNDaJnIpZK7ZDfnJz4zBBJV3UvsgGq2hRIGSid0AIhAOv3a%2FTiwmyU5FqcVFmRFMnGAOB0WxpKYlE7YoZo22uvKv8DCHYQABoMNjM3NDIzMTgzODA1IgwQBu2TltIT1G%2F7TiYq3AM5zdd0xNILQvwoF7GMqrjS4%2FVVAjUVPeDjI8AQe157aBzLBEpJiN68FdIIeDMq2OslS5X6L1%2FgrtBjUO%2Fbtqg68IMAe6SuTqjMRKX03ntgSHO0REra9oV0GbrC%2FCkM1IjDR8UNDrLW66M5U1tWedbXGqnZf%2FxVWQrNh9wzAVXc5LKUQTtMP%2FKtNHTUdzBfx1kR9%2BqSLVQybnGRFhwc7xBt3rYOYK2rXFXVuwKl6SfoqVXNtWzmqvaMYQSYe0zJUwbhkhXd5nuxSbh8F%2B8DmZ6UHYJ6scklWlXNkIz1iyCdgrrQ9%2Fo9Ol4n1lKj0hahi9t66f%2Fu2PIhcuJ5HU3GUzwoB7o%2Bbat4dVdiyRU1akOOiU5gd2TdNjCxgnXv9tO6hC92e3nI11T0W4uWqEUX5JNK%2BbgW4uQFtkUVPSIOy%2FG8lf4yBzg9yoOEE8Em0eVJ5HbP31pcRz5aMIbTlOGO%2Bsx5y3MaIRGUP96fyaJlxc6eLh3nc%2FEvEEECRfG%2FfVFms%2F7Jzoz%2FperXF1GLgwYElw3uDZqzWzPgHwo69ZqzsPIgMALbjzSYOi0pTJ%2FRVOZmhAfKTTnek72HVSBN5Weu%2Bxb4jNczaAkY2UrSKgBWCEFsbr2xhPo9ZnBWCO8%2FiDD56YjKBjqkAYbpDHTqyudSMCLAPYtHpf8YxDIKp7tUZzPHAenPsmMwnUGQAWHH7FI3POj0fFSqev8gehwXGhdxfQ7oW2sccmL5%2FQGoDkLcLwb9djC1TWkgwvaFFm68Nb0f9SZLF76pLq%2FSeXVbXwpewQE9mRZ3NK6J8PPe8i6pz3PIaqB41nOI2WfUsc3RbbehoZ%2FtuXnL8zjrVyt1ahn7QkBLrJt%2BPzg365Do&X-Amz-Signature=3274b9f7c9a19d0f3b5b9e56844bb00f46bbbb44266a1caf8f5affe177c9f710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2ELWYE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDReHjNDaJnIpZK7ZDfnJz4zBBJV3UvsgGq2hRIGSid0AIhAOv3a%2FTiwmyU5FqcVFmRFMnGAOB0WxpKYlE7YoZo22uvKv8DCHYQABoMNjM3NDIzMTgzODA1IgwQBu2TltIT1G%2F7TiYq3AM5zdd0xNILQvwoF7GMqrjS4%2FVVAjUVPeDjI8AQe157aBzLBEpJiN68FdIIeDMq2OslS5X6L1%2FgrtBjUO%2Fbtqg68IMAe6SuTqjMRKX03ntgSHO0REra9oV0GbrC%2FCkM1IjDR8UNDrLW66M5U1tWedbXGqnZf%2FxVWQrNh9wzAVXc5LKUQTtMP%2FKtNHTUdzBfx1kR9%2BqSLVQybnGRFhwc7xBt3rYOYK2rXFXVuwKl6SfoqVXNtWzmqvaMYQSYe0zJUwbhkhXd5nuxSbh8F%2B8DmZ6UHYJ6scklWlXNkIz1iyCdgrrQ9%2Fo9Ol4n1lKj0hahi9t66f%2Fu2PIhcuJ5HU3GUzwoB7o%2Bbat4dVdiyRU1akOOiU5gd2TdNjCxgnXv9tO6hC92e3nI11T0W4uWqEUX5JNK%2BbgW4uQFtkUVPSIOy%2FG8lf4yBzg9yoOEE8Em0eVJ5HbP31pcRz5aMIbTlOGO%2Bsx5y3MaIRGUP96fyaJlxc6eLh3nc%2FEvEEECRfG%2FfVFms%2F7Jzoz%2FperXF1GLgwYElw3uDZqzWzPgHwo69ZqzsPIgMALbjzSYOi0pTJ%2FRVOZmhAfKTTnek72HVSBN5Weu%2Bxb4jNczaAkY2UrSKgBWCEFsbr2xhPo9ZnBWCO8%2FiDD56YjKBjqkAYbpDHTqyudSMCLAPYtHpf8YxDIKp7tUZzPHAenPsmMwnUGQAWHH7FI3POj0fFSqev8gehwXGhdxfQ7oW2sccmL5%2FQGoDkLcLwb9djC1TWkgwvaFFm68Nb0f9SZLF76pLq%2FSeXVbXwpewQE9mRZ3NK6J8PPe8i6pz3PIaqB41nOI2WfUsc3RbbehoZ%2FtuXnL8zjrVyt1ahn7QkBLrJt%2BPzg365Do&X-Amz-Signature=15d578610d614b7de3bffa0bd2caf1a7828e95358e1d4479029ed9024f25311a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
