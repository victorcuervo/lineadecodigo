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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBQ6DLO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICCwRjb9RA1%2F5YrJfVl47RTvZOlyb5B9LD8vRlgyoRWZAiAl%2Fb75gy1V9yVPr4YUeQlwE7qYF0VZUpb5yTAPIJtRaSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMDp2VmWLYUBHOuWm9KtwDjl4l5NRUgVfO32RGQ%2FaYcC35YRCY8tkCOyhBwXNNxOBjRSaWxC%2F2ajmrMoG%2BR70Zw4kmfMwvwa%2FS6iIU5c1VJ9svVpFjzDv5jngGCkpaTFJ%2B%2Bw%2FCEIFKsZUE9DCU1owWKrCllf8BO9uZySePQQP3eO597t%2FSQPJ57wMGfLaaLg55cs17baIWkPKbwUVZEovrCbQbEjGYbooaUIO3x6WODwhABRTHzyknwy8r9O%2FFeQTCRhCfNRiAR8fyi2pGXSKtlHwrHflYeZ4kQBQmVQ1VeqqP24N3qLojThAATXoNbdr5fCn3oTYBinlYScJAkI1HxWmEuOrkYXsmj0wzwzxWZSB6D31kWscNTQJmF7Bh7R7Rt5nDagQXJV0YqGh%2FwKP0nROyuAs5uBD0Y5OyVjoluphB90oAmKj4k92mDL2NgJxuJQa%2BsgGMckFsOk72pD398Up3Wn8c5Mpo9i6pynno3JKrjD0bBIQmRGhoDsHvYDVlunYnD%2Bzs25qH%2F97ZRY5f%2BnEqFl4EJWUyHY%2FiLhN%2FdMjkiWU2ZZsY1ReQUfpJSW4GDwZ41i9rAdScFVlheDsEWXtUafE84H4uD%2BWJbcsZxEAjNhmdag3ihqcIbwtQg7S%2B7rqCggZkBVK5oLIw9oTFyQY6pgEx4oU6NMkGTNiRUCMMiVf5HiiKAtIusi7HqA10FNC1EZHlcNUQjyQSgSSoomXsqk3SAFJqXlyhJhoYVaDqy3JgUwixDHx0i9zmx%2F1MvZtVJ7ikW7QLyL5gWJ3rWAz4e29fc0WU%2FrEQTVqx30fmM6u3HtzZdOpNan2hLdk7AOVoCf7aIakCfVXwcKGrh8%2BztEs%2F1y0dliJhVT0%2BvE6VDvrHabL6Fkyy&X-Amz-Signature=0003d166fcaef6b9706a4f80b1be0f0855f8ba78137e75b02780180bf2c41bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBQ6DLO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICCwRjb9RA1%2F5YrJfVl47RTvZOlyb5B9LD8vRlgyoRWZAiAl%2Fb75gy1V9yVPr4YUeQlwE7qYF0VZUpb5yTAPIJtRaSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMDp2VmWLYUBHOuWm9KtwDjl4l5NRUgVfO32RGQ%2FaYcC35YRCY8tkCOyhBwXNNxOBjRSaWxC%2F2ajmrMoG%2BR70Zw4kmfMwvwa%2FS6iIU5c1VJ9svVpFjzDv5jngGCkpaTFJ%2B%2Bw%2FCEIFKsZUE9DCU1owWKrCllf8BO9uZySePQQP3eO597t%2FSQPJ57wMGfLaaLg55cs17baIWkPKbwUVZEovrCbQbEjGYbooaUIO3x6WODwhABRTHzyknwy8r9O%2FFeQTCRhCfNRiAR8fyi2pGXSKtlHwrHflYeZ4kQBQmVQ1VeqqP24N3qLojThAATXoNbdr5fCn3oTYBinlYScJAkI1HxWmEuOrkYXsmj0wzwzxWZSB6D31kWscNTQJmF7Bh7R7Rt5nDagQXJV0YqGh%2FwKP0nROyuAs5uBD0Y5OyVjoluphB90oAmKj4k92mDL2NgJxuJQa%2BsgGMckFsOk72pD398Up3Wn8c5Mpo9i6pynno3JKrjD0bBIQmRGhoDsHvYDVlunYnD%2Bzs25qH%2F97ZRY5f%2BnEqFl4EJWUyHY%2FiLhN%2FdMjkiWU2ZZsY1ReQUfpJSW4GDwZ41i9rAdScFVlheDsEWXtUafE84H4uD%2BWJbcsZxEAjNhmdag3ihqcIbwtQg7S%2B7rqCggZkBVK5oLIw9oTFyQY6pgEx4oU6NMkGTNiRUCMMiVf5HiiKAtIusi7HqA10FNC1EZHlcNUQjyQSgSSoomXsqk3SAFJqXlyhJhoYVaDqy3JgUwixDHx0i9zmx%2F1MvZtVJ7ikW7QLyL5gWJ3rWAz4e29fc0WU%2FrEQTVqx30fmM6u3HtzZdOpNan2hLdk7AOVoCf7aIakCfVXwcKGrh8%2BztEs%2F1y0dliJhVT0%2BvE6VDvrHabL6Fkyy&X-Amz-Signature=aa9dd04bb03ba8803018ab32943ee73bcea0a7cd24680cc5143d589df7735e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
