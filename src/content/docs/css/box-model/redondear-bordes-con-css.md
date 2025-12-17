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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OSVBHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu3cYNFYYKZf1u9uIqDlNjA4r2CPaEGgpppuOCDGmVsAiEA%2FfKkiYjdbTsI%2B2Y21XHwMf82JD%2FYALJa6fw9rePJCA0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAoAyBbGnSrijnhqDyrcA%2Bz9LyB9Ozs%2FJ6iYcUpqyOXhr89tfL5flB9h1EJ8Swpz3iOMNIiKKJ6gzV8wbE3%2F86Xi8MSrH51XJC2%2FYlZaMp6kyeFJUxNHnGOMe6nxskbjRo%2B9uj09BozeUWvTpzHQSi5IMNYG5z6cHV%2BMlbs8uDD%2BODngxVOJ3YooQOycdKsBWc31ucLLAWzIgF29Clyk88gGYRAgWZ3ahmyQpLJw8Lnn8uWjn8VffvZE9gbSZgLg9UliMhNkBSiqSyLxatBQbKYfB%2FXG66q3j6eez4o4LlmMxDuP5oILpWc63lVHpz%2F1LVKBl6%2BKrqZqaYUvF7C5Zhcs1mVGzJXB8QrtLNY0bPr9q13YA2zL3mLvdCQwR2szVruWVrYz9kxBtlG%2FLz9HIb7sk%2B09zx2L9Jfte0BW%2FkZ54jMpgoUAxCrGcC0zKknQB6Xdit8NampFDD%2FNS1EiZJzSg%2FtHS8vW%2FYIjSp8%2F9wtOfZexpzUbfCqor57hkqhAyMQ%2BPU%2B8%2FAreBH9XdPTeqNwDyMEs7McWa%2BBkNQ%2BFH9hC7H1DHksHg4BkTBkDn%2BbPiQvRbWhiVmL2FKEVsB3dzJwamaxKANQ4uFbfuKbaaJQ9dLAiHrK2ERXtr%2F%2FUvQl7jAMmKicD%2FjjE4h3gMNbwicoGOqUBkyfsZW15CXC6HazwhtaiYsCY8G6xY97t0UTjMhKMQ%2BBx1E3kfhhV8UKIJvRsX9f6JE5LuP9TZTqyNa1TG%2BKbuQqkTXtnxNtxdSat21TyPmDSyZop4tIEAaN24MubJXQPbWwpTiu2uSwYQGA85ReTXLXimVOj1QGWfEXCnlOIUHnEnm7FBwreN6etp4P0SoB19HoFTp6Ck%2BXXC5i5MSnSyrNNsYzo&X-Amz-Signature=bf8dc958e8c0ebb9185eefcb2c8f989824eb279de976eb381070b1eaea4dd1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OSVBHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu3cYNFYYKZf1u9uIqDlNjA4r2CPaEGgpppuOCDGmVsAiEA%2FfKkiYjdbTsI%2B2Y21XHwMf82JD%2FYALJa6fw9rePJCA0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAoAyBbGnSrijnhqDyrcA%2Bz9LyB9Ozs%2FJ6iYcUpqyOXhr89tfL5flB9h1EJ8Swpz3iOMNIiKKJ6gzV8wbE3%2F86Xi8MSrH51XJC2%2FYlZaMp6kyeFJUxNHnGOMe6nxskbjRo%2B9uj09BozeUWvTpzHQSi5IMNYG5z6cHV%2BMlbs8uDD%2BODngxVOJ3YooQOycdKsBWc31ucLLAWzIgF29Clyk88gGYRAgWZ3ahmyQpLJw8Lnn8uWjn8VffvZE9gbSZgLg9UliMhNkBSiqSyLxatBQbKYfB%2FXG66q3j6eez4o4LlmMxDuP5oILpWc63lVHpz%2F1LVKBl6%2BKrqZqaYUvF7C5Zhcs1mVGzJXB8QrtLNY0bPr9q13YA2zL3mLvdCQwR2szVruWVrYz9kxBtlG%2FLz9HIb7sk%2B09zx2L9Jfte0BW%2FkZ54jMpgoUAxCrGcC0zKknQB6Xdit8NampFDD%2FNS1EiZJzSg%2FtHS8vW%2FYIjSp8%2F9wtOfZexpzUbfCqor57hkqhAyMQ%2BPU%2B8%2FAreBH9XdPTeqNwDyMEs7McWa%2BBkNQ%2BFH9hC7H1DHksHg4BkTBkDn%2BbPiQvRbWhiVmL2FKEVsB3dzJwamaxKANQ4uFbfuKbaaJQ9dLAiHrK2ERXtr%2F%2FUvQl7jAMmKicD%2FjjE4h3gMNbwicoGOqUBkyfsZW15CXC6HazwhtaiYsCY8G6xY97t0UTjMhKMQ%2BBx1E3kfhhV8UKIJvRsX9f6JE5LuP9TZTqyNa1TG%2BKbuQqkTXtnxNtxdSat21TyPmDSyZop4tIEAaN24MubJXQPbWwpTiu2uSwYQGA85ReTXLXimVOj1QGWfEXCnlOIUHnEnm7FBwreN6etp4P0SoB19HoFTp6Ck%2BXXC5i5MSnSyrNNsYzo&X-Amz-Signature=fcbbd48c88275cc02c06b206bca13b46c49c647e1501006049fabcc0e0b6cc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
