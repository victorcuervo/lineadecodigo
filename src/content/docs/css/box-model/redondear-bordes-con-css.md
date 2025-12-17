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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKA6LWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwUs5NDrRUZZgnYcpT0dUoIWLh4cwuKB3hfQCRmScdCAiA6%2FtTiNpPKIsV1KZ39QVyQIpdyU6LK5aHmu%2B3AUM9jvir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2FY1pRrNo%2FLFnN4TAKtwDZUSY36PdUATX7JDyazOSwE2szVhgXOEjwSUpSqecHMAjuwCDe6lWxpZE2BRfXssVzegQbiV%2Bb%2BL8ObLSXvta0WOpL0uESl%2F5B1nfsujWcaQlOZELFykut43Owa0PfkJGiVs2v1ijrm5Zdl1HxC6muZ%2FvxSQwvuTkQk6qtzz%2FeVVy4ETu6BFmFwn7g8JE8lWv8ki1oPGPG%2F6zSqwKXSuN5PCkLUHvEAqEZggcgFYkMVJ7OTo4ZDo0Uv97QmI17T6lmrfX2YTRrL%2BgQx%2BG%2BtRa0%2F6k0xejQx2QJtci%2BEramNb9vJ4hcVAlEzbwHZySRYZyi8hhBrX8j7ZZmNiUrg%2BuLyZdHBiRnaUrDoKq67sLSEp%2Bc%2BVQQhe%2F1JLCLmdn7M7qBVH0auTtdks0AE%2BBiair7Z8b9hVTp6rGu4OdJkXtH7dcn6puejsT4TAuPorH3WLfoFo8NFBRiX2dJtTqUULAJyanOi9675%2BuMef%2FqaEOCO4KG8ZmOW991SW2KQzHBO3nsH9IySnwN0s71ajujagM3v0Iju4E2wJeaC%2FKSB7Hmh5ymB%2B95dawlZqTHdIMvLCFwURWvJXg7%2FCsk%2FeYEgzfDzHqjyfd8Zwp1PKBhG6dgjwkj%2FUsKsNMsLlMgy0ws9KJygY6pgEx0yXu2j0XmXcFCw5QuPYvqV17drYTLGGF1Z8moqXb36xcQli%2Fu91WjHQaR4MNzKxnA%2F%2BXOp9sFIEhmVg%2FVdzfLG0JXqrVn2kSzGAngRsHXMO2DXECHhjHz7Nj1Ghgn%2Bzv1xOFxb0DNPE7%2F%2FBiIBcLkD6Q4SXmK5SX4F4eVjTlfqWD1bcbNMJwO4aHE7CvyINfYekichYwelh2KqKTbhXuj8MvKd%2FG&X-Amz-Signature=75f45977506d899d24728a9b8930db9cc9214df56a95e8427e6f25292057f45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKA6LWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwUs5NDrRUZZgnYcpT0dUoIWLh4cwuKB3hfQCRmScdCAiA6%2FtTiNpPKIsV1KZ39QVyQIpdyU6LK5aHmu%2B3AUM9jvir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2FY1pRrNo%2FLFnN4TAKtwDZUSY36PdUATX7JDyazOSwE2szVhgXOEjwSUpSqecHMAjuwCDe6lWxpZE2BRfXssVzegQbiV%2Bb%2BL8ObLSXvta0WOpL0uESl%2F5B1nfsujWcaQlOZELFykut43Owa0PfkJGiVs2v1ijrm5Zdl1HxC6muZ%2FvxSQwvuTkQk6qtzz%2FeVVy4ETu6BFmFwn7g8JE8lWv8ki1oPGPG%2F6zSqwKXSuN5PCkLUHvEAqEZggcgFYkMVJ7OTo4ZDo0Uv97QmI17T6lmrfX2YTRrL%2BgQx%2BG%2BtRa0%2F6k0xejQx2QJtci%2BEramNb9vJ4hcVAlEzbwHZySRYZyi8hhBrX8j7ZZmNiUrg%2BuLyZdHBiRnaUrDoKq67sLSEp%2Bc%2BVQQhe%2F1JLCLmdn7M7qBVH0auTtdks0AE%2BBiair7Z8b9hVTp6rGu4OdJkXtH7dcn6puejsT4TAuPorH3WLfoFo8NFBRiX2dJtTqUULAJyanOi9675%2BuMef%2FqaEOCO4KG8ZmOW991SW2KQzHBO3nsH9IySnwN0s71ajujagM3v0Iju4E2wJeaC%2FKSB7Hmh5ymB%2B95dawlZqTHdIMvLCFwURWvJXg7%2FCsk%2FeYEgzfDzHqjyfd8Zwp1PKBhG6dgjwkj%2FUsKsNMsLlMgy0ws9KJygY6pgEx0yXu2j0XmXcFCw5QuPYvqV17drYTLGGF1Z8moqXb36xcQli%2Fu91WjHQaR4MNzKxnA%2F%2BXOp9sFIEhmVg%2FVdzfLG0JXqrVn2kSzGAngRsHXMO2DXECHhjHz7Nj1Ghgn%2Bzv1xOFxb0DNPE7%2F%2FBiIBcLkD6Q4SXmK5SX4F4eVjTlfqWD1bcbNMJwO4aHE7CvyINfYekichYwelh2KqKTbhXuj8MvKd%2FG&X-Amz-Signature=98c7c4a12dfdb717d794662991bde112ebb26d261c8cd0498c82428719b70954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
