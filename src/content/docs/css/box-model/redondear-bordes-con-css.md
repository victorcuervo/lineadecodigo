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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPQUZYL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJio2rT6PuCce%2FEjb3Rdwe2GGdwov%2BOHUzUfdnqPViJgIgX5wyjuH5vOIuY1qW6bSYXgYX9JOuUUclE%2FkHrWbbVCIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKU9Pk2yUZlcSKK5QSrcAzB01dkaHXv5tAkNr9rKwDJmzQ7gXVfNJED1s2wHLzq0vop2oiiOOgLlQlZj4%2Bx7dOBj%2FIl%2FTixKgCrWhnwy7YqE32CuEBHu0TL1DvxrEGOwcasxFmp7D15J5%2FHOb%2Bcz%2B01N0TKDS17icwbqEcrVfaFqWWVzdJDlgwpvlZAgbknPxx%2F5zsaFPtfgsGgMR0XnwPGHwWJ6U17%2FC2435Ri5B6GhmE8OWCzdgvK2EwZoMbdl3%2Fluw4hB4OAyPLtnl4%2FnUhPEeGFqdnEs33lGHfDoR%2BCEw%2FPjZVeJpwRQM9OMwd2lB7EBbhJ8WLXYDs%2BNlEwB0v%2FxnejkV38Kkmm6ZVcF%2BgOCdZ0h2PRAoLpSl8XezQhbIBQDOjbqCA3qU6UaLgT2%2BuHTJda4pzhUbS%2BERoI2eAVtQCMY3kYFqPp8NOk4PoZs3DeL3SWBQkvbDwJFtU9hy12gGxs7L8k1f%2Bz28ecrlFOikENC%2FRNcmaKKGGg4uSbjme%2Bz5kYeSUv%2F23WK6Wpo4p7JOMPQ%2FdFf0%2BO3SlcKGnWdOPFYVJij8WeW%2BM9KNgVGeADs6RkIsJSgY7oGARzaeCvl7SwLDGZnW8WvK9Ok4bzfyr8ZvuFWRcBox7Nlx5xijE785VSrKTNExTdXMLHOiMoGOqUBsTwzs0hOwSKRK4ujqQZHyjJwxscEZSBmSX0pcyzUflixb5Oc5KrmZTH%2Fu1d%2BLloOb6nb4RzFVAfAu4FMW25jpsBU2KGQLSmLWP3x5NAGe05ZGPhUfzTiYmBff%2F0Q5toA2VUksUDi4r1oVcoajnkWHX5Cj6IIZh0sL24OD%2FeyvqgJIK5NZXvTmjRMNquOrtF0oitfRma8ennhKEQB8PeJSswCJtMX&X-Amz-Signature=638c0ed8ed9d60da8ff18bc9783fdf8ac9c42eb7d9cb7f3a22e408bd7ef7d698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPQUZYL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJio2rT6PuCce%2FEjb3Rdwe2GGdwov%2BOHUzUfdnqPViJgIgX5wyjuH5vOIuY1qW6bSYXgYX9JOuUUclE%2FkHrWbbVCIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKU9Pk2yUZlcSKK5QSrcAzB01dkaHXv5tAkNr9rKwDJmzQ7gXVfNJED1s2wHLzq0vop2oiiOOgLlQlZj4%2Bx7dOBj%2FIl%2FTixKgCrWhnwy7YqE32CuEBHu0TL1DvxrEGOwcasxFmp7D15J5%2FHOb%2Bcz%2B01N0TKDS17icwbqEcrVfaFqWWVzdJDlgwpvlZAgbknPxx%2F5zsaFPtfgsGgMR0XnwPGHwWJ6U17%2FC2435Ri5B6GhmE8OWCzdgvK2EwZoMbdl3%2Fluw4hB4OAyPLtnl4%2FnUhPEeGFqdnEs33lGHfDoR%2BCEw%2FPjZVeJpwRQM9OMwd2lB7EBbhJ8WLXYDs%2BNlEwB0v%2FxnejkV38Kkmm6ZVcF%2BgOCdZ0h2PRAoLpSl8XezQhbIBQDOjbqCA3qU6UaLgT2%2BuHTJda4pzhUbS%2BERoI2eAVtQCMY3kYFqPp8NOk4PoZs3DeL3SWBQkvbDwJFtU9hy12gGxs7L8k1f%2Bz28ecrlFOikENC%2FRNcmaKKGGg4uSbjme%2Bz5kYeSUv%2F23WK6Wpo4p7JOMPQ%2FdFf0%2BO3SlcKGnWdOPFYVJij8WeW%2BM9KNgVGeADs6RkIsJSgY7oGARzaeCvl7SwLDGZnW8WvK9Ok4bzfyr8ZvuFWRcBox7Nlx5xijE785VSrKTNExTdXMLHOiMoGOqUBsTwzs0hOwSKRK4ujqQZHyjJwxscEZSBmSX0pcyzUflixb5Oc5KrmZTH%2Fu1d%2BLloOb6nb4RzFVAfAu4FMW25jpsBU2KGQLSmLWP3x5NAGe05ZGPhUfzTiYmBff%2F0Q5toA2VUksUDi4r1oVcoajnkWHX5Cj6IIZh0sL24OD%2FeyvqgJIK5NZXvTmjRMNquOrtF0oitfRma8ennhKEQB8PeJSswCJtMX&X-Amz-Signature=df0aeacd540bf2bb01ea4267e628c8cb3f15b5002ec902af07afc7f248ed4cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
