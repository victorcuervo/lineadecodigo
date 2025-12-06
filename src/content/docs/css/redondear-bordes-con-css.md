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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IXOSUX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFif5aZGHDGB5Ah6LZpemJoNTceuMRhAbpze0uhSV6AVAiBcW4aItL3WqfZjycFJjVWjxAIAS6l20yW8t6x9Sy%2BMfCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAbuohBe29gMw95g7KtwDjUWUWfWGzEfl45CUW314O3%2F8kaoD%2BRrXacs6Phv3bJ1KhnUGvj5%2B8zmEHMw5YPbsbH62Z678A3zByRD4nA6ndBUn3Pl%2BqSADgKUYWxLy78Fc%2Bk2KEFb4KzlBMW0Hq1jj0LhhLlUheot6xoQLw3AXq4yZS2WDSWAn0Bne7aGqUnoUWdrjdlcRfmedi2oE3HYbPXmORZOCA%2FLEm37IAtzrjLgi6RaqKquenNDapstUvAoeWS0IvfftVlGKXp%2Fe1PClq%2BtGGtBKvetJzUzQQMcdbYawMgS4rZTGxCFBHjvP1Y8ASA342V6DOz8cgzYBWaRjgqCeTMKnlMVUeklwEBhPxxAndKQq86VPKuMu0zk12NDmkHNlczl9qxTpiMd3d1rkwr%2FMI9L890fL4Xol4llIYrSXUfY14NLwDv8BrawhJwcMMw68Lmq6%2BKwTEXFcq48A%2FesGcixxrXl2zaIQbTPEGd66wy3TDBGNcxV1ba1qJ44NZ7pR0Dws9RLLje%2BYGdFlOh%2F8XZfNk5z%2BU3yqfYk9lQMGGLgFZ3nwpIisQoQOQL1p9hPKVm%2BLHhB%2FAeZ6xYwYsndcIKf2e85U%2FGONhw0%2FylxT2j9xJM%2Bo33CGu6Zl5vDyWLgE7mwMjnnm5m0w2ujNyQY6pgG57nmoRaVjp%2BVYfLCvNsGIPn8jND5keeAs3o3o4Y%2F6RzelgU9Y9WoT1iw5d%2BdJf7Se2xqPweDworu6gG1Ne2cS0GhYh%2Fu9N3NixMqy%2B8kBmdSDTD6OxEiIYgY8uAzxPz8W0bsWWZ12xaRvAxT%2BqBNM21jxyllcruSdsbgIfedRNZ3NEkFZwqs%2Fy%2Bxr4NFZh4tNZJMCcK3YUJVJJaG5YnHD%2B29g3pah&X-Amz-Signature=1799de311670686a76b967ebc75eeac5861bcbf2625d18ccd9e3ee15a0e61312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IXOSUX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFif5aZGHDGB5Ah6LZpemJoNTceuMRhAbpze0uhSV6AVAiBcW4aItL3WqfZjycFJjVWjxAIAS6l20yW8t6x9Sy%2BMfCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAbuohBe29gMw95g7KtwDjUWUWfWGzEfl45CUW314O3%2F8kaoD%2BRrXacs6Phv3bJ1KhnUGvj5%2B8zmEHMw5YPbsbH62Z678A3zByRD4nA6ndBUn3Pl%2BqSADgKUYWxLy78Fc%2Bk2KEFb4KzlBMW0Hq1jj0LhhLlUheot6xoQLw3AXq4yZS2WDSWAn0Bne7aGqUnoUWdrjdlcRfmedi2oE3HYbPXmORZOCA%2FLEm37IAtzrjLgi6RaqKquenNDapstUvAoeWS0IvfftVlGKXp%2Fe1PClq%2BtGGtBKvetJzUzQQMcdbYawMgS4rZTGxCFBHjvP1Y8ASA342V6DOz8cgzYBWaRjgqCeTMKnlMVUeklwEBhPxxAndKQq86VPKuMu0zk12NDmkHNlczl9qxTpiMd3d1rkwr%2FMI9L890fL4Xol4llIYrSXUfY14NLwDv8BrawhJwcMMw68Lmq6%2BKwTEXFcq48A%2FesGcixxrXl2zaIQbTPEGd66wy3TDBGNcxV1ba1qJ44NZ7pR0Dws9RLLje%2BYGdFlOh%2F8XZfNk5z%2BU3yqfYk9lQMGGLgFZ3nwpIisQoQOQL1p9hPKVm%2BLHhB%2FAeZ6xYwYsndcIKf2e85U%2FGONhw0%2FylxT2j9xJM%2Bo33CGu6Zl5vDyWLgE7mwMjnnm5m0w2ujNyQY6pgG57nmoRaVjp%2BVYfLCvNsGIPn8jND5keeAs3o3o4Y%2F6RzelgU9Y9WoT1iw5d%2BdJf7Se2xqPweDworu6gG1Ne2cS0GhYh%2Fu9N3NixMqy%2B8kBmdSDTD6OxEiIYgY8uAzxPz8W0bsWWZ12xaRvAxT%2BqBNM21jxyllcruSdsbgIfedRNZ3NEkFZwqs%2Fy%2Bxr4NFZh4tNZJMCcK3YUJVJJaG5YnHD%2B29g3pah&X-Amz-Signature=305af3cab8d2e9d16eb1a6555d02d6a6e75dd42f1395cf892abde0ec661ad2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
