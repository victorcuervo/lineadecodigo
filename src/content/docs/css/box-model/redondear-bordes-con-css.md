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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GIQ2DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLVtI3ZFwvdQOxf26rKSWNPcq4LQrDvlPGSCBJQWlVzAiBNQlgZvaQQTvXJAO4ttY0fyRdNUEKrfMBckSH6YxN3kiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRelyuKR2BU1cHjfPKtwD8Rxdg%2BUWFnqHI8jsOYDgEzmC32RDfrXcE6S%2Bdq4Ck68uL%2FSDzn%2FvYsR6MNFcQMMbw5lK9wQEdllKS26g9QUV09aIgwqVRwZw2cEdU3VLBVlniLx1AZnj%2FI2W%2FJK7R7X6QjNJMR9SDrQYXgMMBpqhVIWXg0OBRqTbS9enDXzRABiDTCXPJEwOF6qqemEi3lpIONiKCMa0ccxXx%2B28enU%2Bqon2jXbTOea4QiSTm%2FletIMwHPnQYHhLw1u6xtCMhJ66mDDje4T6GQSXlu%2BPh9UgvzPY56oae4DsKdrRLkbPBO1kRW69xK5qSRrryj6fAZr%2BkNDGqu6LKlJsXcN9s9KjS5lR4TN%2FjPbHFpHU2pvjlrKB8wfCccGF1srGhEVx2xOmMnNIQ63ji%2FIOmYmWflmgXfaNGuNffpJ6uBWMnXutBt9VCGLkgjNRhb%2FXGkpeLO8Z7qLQceQH1%2F8jVrgxCPcy94KFX6t5XgpZ%2FzEfKhzB6pnBuwOOcR7ICDLuy4hJs2xkbuQW0rGdggDfhe8n0PCUzCqbcVWyJpSrjuKonsl33eXAPhrekZuIa9H2ph5%2BW2DzraWZdoqOz4Ff3ABd2kUnR30aqbuhyYevTGVx08FfidyQH5WhtBFRcrpFT%2FkwnKCLygY6pgG9XNvSi29Kuats2LzCSwLfFFKNFfxl8QlH7NyBD%2BHhvo4X4sHEkUetpLaYwoyNbYhAYgqPsY2uHXfRofDLM6b0rd5UYMJ5VmVDirCeT%2FLj1RaEHqFgsMQbu5BprxIwSJnRlzKKVfFOKdIq5JfB%2F5wF%2BvM%2BozReT3ELVDCgZZ4RnWbEpEL9a%2BwEK2hlVY4f6imWq9Qeec6PIWqbm4qm7N3pytfxQmHU&X-Amz-Signature=94a395d41df0c57e5f1af1ec06b06ddcd539182959dddde2c3f4625445c7d12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GIQ2DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLVtI3ZFwvdQOxf26rKSWNPcq4LQrDvlPGSCBJQWlVzAiBNQlgZvaQQTvXJAO4ttY0fyRdNUEKrfMBckSH6YxN3kiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRelyuKR2BU1cHjfPKtwD8Rxdg%2BUWFnqHI8jsOYDgEzmC32RDfrXcE6S%2Bdq4Ck68uL%2FSDzn%2FvYsR6MNFcQMMbw5lK9wQEdllKS26g9QUV09aIgwqVRwZw2cEdU3VLBVlniLx1AZnj%2FI2W%2FJK7R7X6QjNJMR9SDrQYXgMMBpqhVIWXg0OBRqTbS9enDXzRABiDTCXPJEwOF6qqemEi3lpIONiKCMa0ccxXx%2B28enU%2Bqon2jXbTOea4QiSTm%2FletIMwHPnQYHhLw1u6xtCMhJ66mDDje4T6GQSXlu%2BPh9UgvzPY56oae4DsKdrRLkbPBO1kRW69xK5qSRrryj6fAZr%2BkNDGqu6LKlJsXcN9s9KjS5lR4TN%2FjPbHFpHU2pvjlrKB8wfCccGF1srGhEVx2xOmMnNIQ63ji%2FIOmYmWflmgXfaNGuNffpJ6uBWMnXutBt9VCGLkgjNRhb%2FXGkpeLO8Z7qLQceQH1%2F8jVrgxCPcy94KFX6t5XgpZ%2FzEfKhzB6pnBuwOOcR7ICDLuy4hJs2xkbuQW0rGdggDfhe8n0PCUzCqbcVWyJpSrjuKonsl33eXAPhrekZuIa9H2ph5%2BW2DzraWZdoqOz4Ff3ABd2kUnR30aqbuhyYevTGVx08FfidyQH5WhtBFRcrpFT%2FkwnKCLygY6pgG9XNvSi29Kuats2LzCSwLfFFKNFfxl8QlH7NyBD%2BHhvo4X4sHEkUetpLaYwoyNbYhAYgqPsY2uHXfRofDLM6b0rd5UYMJ5VmVDirCeT%2FLj1RaEHqFgsMQbu5BprxIwSJnRlzKKVfFOKdIq5JfB%2F5wF%2BvM%2BozReT3ELVDCgZZ4RnWbEpEL9a%2BwEK2hlVY4f6imWq9Qeec6PIWqbm4qm7N3pytfxQmHU&X-Amz-Signature=b770f214c4c37151b350a68e4a7fa23299b105d41e06b9ba2cb71850079ad32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
