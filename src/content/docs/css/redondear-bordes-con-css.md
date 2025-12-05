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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4JREF5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdZEo%2B9hcLDl2u823LcXUDFtbBhz4myq2kokIzj7G6uAiEAvSc6%2BVbh7WSQ5lR52RFKAPG6g4t3v7Kg39YPdYppTw8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDiHE4YZlgUNX5FLYircA91aFzjc6FaYkxPYrlZ7PA8HK%2BoFs3AhRPQSLUYfo%2FG7gDhZXl1VYt%2FeHij6uf5Y4%2BijU7hZwZFH7S8BaT8HoiC7LRm7W8sYPRzlVwaC3oiu%2BiQyq8wk%2BP5zF5AdUynSsREPeTuDgCj5D14xBAoHGVb7250hfTHO4P87KjiCKtQRH%2BMiwNI6gIh2jabzh7UryVzaR1Bo8tSNrvjutW%2BuE0wam0W%2FeNfuGsLFa9ChTUwzK%2BbawJ91DLsJn33wCTIGyJspaitsUpHKjHf6I4yApy%2FHqxSIAsPA362m4M7UuwP7wYOqcTRSdc6%2BwigCf7GX48dSEYlHNzEaWBc34HQxRke%2FLwhd8eHI1bqrA%2FQsQEwwKawIktJajcJ2VgnBPS6O%2B7X87LdZWEmmJUwTYI6Lid1daGCqsMYIWGHKa0MDafEA%2BTfLH8bBRc6ZI0uye2clotTVFKzkOMrydcDe%2B61elwMmynqj%2FOFdE8Hu9pZdZW2pHI%2Fi5QSmsO9W%2F1BjOGA2wkI0Uup3vNQ%2FaZyxpx9ki5atWsUCxraw0iCZCbz0FA7NOYMZfqkzY%2BuD0ohZsd1B0x1kIdQZgT1jceuarMcpU5z%2Br9hpCeIEWafA7IZuXd4DWDQ9p%2F5pCYls9p1LMK35y8kGOqUBvAkg7ZUdqw0jIjEcbgTHexPmcrZklB%2FvmpxSESLB1e7KBKU6vk9hkjcv5%2ByDXcyME9KQwkbCN0I4r9TNdAU%2BhawIqwR0iSpplpJQFIB1DaXyQSBLg3JYoYOTLw%2FXpHfbhaSjIeGM5PUCCY%2FA0306%2BFQTG0doZr0dVPMbsBS0JqOyJO8HN4cfN4mAx0i8LmG2Hg7aFCYrPvBTLQjkdZQNB0CP9ew%2B&X-Amz-Signature=44faa8918e5f4e794bf950222ab812ba5f0514856df250e25b90491d489cf220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4JREF5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdZEo%2B9hcLDl2u823LcXUDFtbBhz4myq2kokIzj7G6uAiEAvSc6%2BVbh7WSQ5lR52RFKAPG6g4t3v7Kg39YPdYppTw8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDiHE4YZlgUNX5FLYircA91aFzjc6FaYkxPYrlZ7PA8HK%2BoFs3AhRPQSLUYfo%2FG7gDhZXl1VYt%2FeHij6uf5Y4%2BijU7hZwZFH7S8BaT8HoiC7LRm7W8sYPRzlVwaC3oiu%2BiQyq8wk%2BP5zF5AdUynSsREPeTuDgCj5D14xBAoHGVb7250hfTHO4P87KjiCKtQRH%2BMiwNI6gIh2jabzh7UryVzaR1Bo8tSNrvjutW%2BuE0wam0W%2FeNfuGsLFa9ChTUwzK%2BbawJ91DLsJn33wCTIGyJspaitsUpHKjHf6I4yApy%2FHqxSIAsPA362m4M7UuwP7wYOqcTRSdc6%2BwigCf7GX48dSEYlHNzEaWBc34HQxRke%2FLwhd8eHI1bqrA%2FQsQEwwKawIktJajcJ2VgnBPS6O%2B7X87LdZWEmmJUwTYI6Lid1daGCqsMYIWGHKa0MDafEA%2BTfLH8bBRc6ZI0uye2clotTVFKzkOMrydcDe%2B61elwMmynqj%2FOFdE8Hu9pZdZW2pHI%2Fi5QSmsO9W%2F1BjOGA2wkI0Uup3vNQ%2FaZyxpx9ki5atWsUCxraw0iCZCbz0FA7NOYMZfqkzY%2BuD0ohZsd1B0x1kIdQZgT1jceuarMcpU5z%2Br9hpCeIEWafA7IZuXd4DWDQ9p%2F5pCYls9p1LMK35y8kGOqUBvAkg7ZUdqw0jIjEcbgTHexPmcrZklB%2FvmpxSESLB1e7KBKU6vk9hkjcv5%2ByDXcyME9KQwkbCN0I4r9TNdAU%2BhawIqwR0iSpplpJQFIB1DaXyQSBLg3JYoYOTLw%2FXpHfbhaSjIeGM5PUCCY%2FA0306%2BFQTG0doZr0dVPMbsBS0JqOyJO8HN4cfN4mAx0i8LmG2Hg7aFCYrPvBTLQjkdZQNB0CP9ew%2B&X-Amz-Signature=1fdb9026151f090694327aafa44ae7c9a09a81022466790c95ca9ea9b89ac358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
