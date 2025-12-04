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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OJDPCF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICFVQ2F0ublESFKJNUVCa%2Bbblr55ytMGBtNEwXGrzJJ%2BAiAuKcPZ094NNFSDIft9VqozdbeIu6cXBTQCKBaIBdgcqir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMNKYsOW4gsc%2BihGnGKtwDBrEllO6QrO7f8piHQd1Vi0rrhhPZ0x0ek%2FHLU3OIEU2bwb4yN1k4ijj2%2BsW5VAtBQJ14yH4C%2FRi7KaYjD%2BEpFVO1KYUOG6R7qoasxlcwSXx9b1tXbp3B5tK92t7ujjf2dtuWL9HcNUKrDhTJXUW8eAE12gU8QtUAZCbcdNDAcrzwUhP9Mb1TQJMVUUGhuks6pipSOf5YKZe%2FkkRUi9BhljuVewGwwKxEYoY%2FVaQaA0V4P9JK8UOcfur6KCW0fzUlZi50hp7zeA6BFS%2B3m5%2FbxiK78s8v913i%2FLrE%2B6fKrEpZMlwZTOXD1zC3k8VHNJTUMujQT4HaaAdaNonJGg%2FMwQ7KPMDkkXJy2jX8wx9G9po1oHEXmM1SdRWbaAOiwAWconlVrUZyqJtcQwtDVMCiilPxsNf6gSDjNhbVxQ7skIboLDQeC%2F%2FzP502xo1JS7mMbROjAK1aKuhOJQcKK9607t6nq8BwjO%2BOqaH0gGCEQ2Xl6IYYIyWQimY%2Fx89QTUUMnxP3Hvh9hUZSmzy5QxtrUuXI3zvkU3ayvasYU6auPz6DDtM%2FVI3siL5JCENuwM5HGy8SO7vNtBm5K3y7f%2Bj5nNg%2FH4oB4f4mhRQiWta8jS6AOVJURrowSZEk6rswgefFyQY6pgE2t9w6shO1tGxCZo59zu4N75ULkrfRFghmj0I3hmYgNlaTEDfj90a7L9eDbVofMTz697rxobwJqdH9aWZpxXH8ExYSB96w2%2BTJEE5L6tl1z1eupznEwHaGP%2B0ZzmHFfRfSwNP18kJ5DA7gx8Ms1p%2FstnUy%2BWNuGUZmWmgG9zEiFiGtb%2B%2B64sfcgtDh7A9LKoMyQsmDDpGIKmlyFWG2R8TfGkXa%2BRHO&X-Amz-Signature=831e0c6434bfd35e7d58ad9b0ba41aa1d3bb95c1c4ad4b8dedafabe9e4ea9c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3OJDPCF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICFVQ2F0ublESFKJNUVCa%2Bbblr55ytMGBtNEwXGrzJJ%2BAiAuKcPZ094NNFSDIft9VqozdbeIu6cXBTQCKBaIBdgcqir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMNKYsOW4gsc%2BihGnGKtwDBrEllO6QrO7f8piHQd1Vi0rrhhPZ0x0ek%2FHLU3OIEU2bwb4yN1k4ijj2%2BsW5VAtBQJ14yH4C%2FRi7KaYjD%2BEpFVO1KYUOG6R7qoasxlcwSXx9b1tXbp3B5tK92t7ujjf2dtuWL9HcNUKrDhTJXUW8eAE12gU8QtUAZCbcdNDAcrzwUhP9Mb1TQJMVUUGhuks6pipSOf5YKZe%2FkkRUi9BhljuVewGwwKxEYoY%2FVaQaA0V4P9JK8UOcfur6KCW0fzUlZi50hp7zeA6BFS%2B3m5%2FbxiK78s8v913i%2FLrE%2B6fKrEpZMlwZTOXD1zC3k8VHNJTUMujQT4HaaAdaNonJGg%2FMwQ7KPMDkkXJy2jX8wx9G9po1oHEXmM1SdRWbaAOiwAWconlVrUZyqJtcQwtDVMCiilPxsNf6gSDjNhbVxQ7skIboLDQeC%2F%2FzP502xo1JS7mMbROjAK1aKuhOJQcKK9607t6nq8BwjO%2BOqaH0gGCEQ2Xl6IYYIyWQimY%2Fx89QTUUMnxP3Hvh9hUZSmzy5QxtrUuXI3zvkU3ayvasYU6auPz6DDtM%2FVI3siL5JCENuwM5HGy8SO7vNtBm5K3y7f%2Bj5nNg%2FH4oB4f4mhRQiWta8jS6AOVJURrowSZEk6rswgefFyQY6pgE2t9w6shO1tGxCZo59zu4N75ULkrfRFghmj0I3hmYgNlaTEDfj90a7L9eDbVofMTz697rxobwJqdH9aWZpxXH8ExYSB96w2%2BTJEE5L6tl1z1eupznEwHaGP%2B0ZzmHFfRfSwNP18kJ5DA7gx8Ms1p%2FstnUy%2BWNuGUZmWmgG9zEiFiGtb%2B%2B64sfcgtDh7A9LKoMyQsmDDpGIKmlyFWG2R8TfGkXa%2BRHO&X-Amz-Signature=d904514903f7b25b26289a7d9cb0386d2fb919ad6ace9341e577030768cdaaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
