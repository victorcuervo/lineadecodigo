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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3DGRJJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPCHR%2BrzxvJLrFZXxMsS3nglVHECH7s61zki%2FrMczoDAiB6dD8zjDcKueJUhIHdqYvZHR3WAc%2BJW6luuC%2BdnPGcGiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oi7qh3WYGcX5TgpKtwDZ%2FO22tfhYPolSZqkZ9gI%2F1nyhkvzvlPUptUjszGikYTJ9ariRlth6eiOn6pxBEJx6%2FWnjtYepssTaKgg9NGTIVXZ3nl22MlUmy9ugrEl4ebCvyZAOLzC7b8i0qtajgnb9h1KgpoItIi%2BPDk3koSbsObwQz71x3igKmIpgsw9aJ6pYx4jTvXk4NPSXed6%2FnOV6qRtpLP8iL1gu7l3bcN1fAruq8qyLo%2FAD0tT7YbqiC4EwX6oPmI%2F2wHpay4eIBiwLxX%2B93kwNWbz%2FzLgUZoSvA3P3F4Vh4swzhkuLkIWSspmRqvY93TNvDmyhmRXwSjT7d5J73wDvDp6sEK6mc%2F3re6SisAhW5p%2FkJeH139tQ5z4zp%2BLOq3AitFDiaxk3mrwg6z%2FJVBw%2BDptTmj06cMgvmHl8virRg8zSXJEO87tN725yRf2ZGlqJkO4teqi1UjZNwZ0m8OfEtj6XweiKAr%2FOIRoDYIf5YVHF5Op8%2FAyn2Um%2BpKk3uhvospuqaHZWE26r9jCOeVvrmGXFN8BWYn9j5FIWgKGNhjkgcHqueZROPjj6aoygmq6wRwuQTcPOeVob7PlFTtGKxTb6Vek%2B7TyyXLBiUgDwn0vGPd9%2BrLUV0D%2Bq6WjR4SvG7pjRckwuaCLygY6pgFdg0Qr1xOA%2BpbMCGiNYKgLh1KO1YHGpTw%2B8T74F87fO1me7S0sWZeVqEbpxLjldydBdDVHlq29qddnj5BgLeb11IRFauDJs7atRp%2FGxF5nOxCwg6ITUTOJQtNyGinOlj6UQDUByzlPIfGG0GJdkdfFefKd8%2F0IU7kLFSkTRHOu8uhXosaZXIgjvYR%2FY3qIduRrQnNXMh5PTCRkJuxEtKSpLiW4Eeb%2F&X-Amz-Signature=883606d43f86072d26302958ee407aceffe571b46c38f32e9ed10e07845dc8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3DGRJJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPCHR%2BrzxvJLrFZXxMsS3nglVHECH7s61zki%2FrMczoDAiB6dD8zjDcKueJUhIHdqYvZHR3WAc%2BJW6luuC%2BdnPGcGiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Oi7qh3WYGcX5TgpKtwDZ%2FO22tfhYPolSZqkZ9gI%2F1nyhkvzvlPUptUjszGikYTJ9ariRlth6eiOn6pxBEJx6%2FWnjtYepssTaKgg9NGTIVXZ3nl22MlUmy9ugrEl4ebCvyZAOLzC7b8i0qtajgnb9h1KgpoItIi%2BPDk3koSbsObwQz71x3igKmIpgsw9aJ6pYx4jTvXk4NPSXed6%2FnOV6qRtpLP8iL1gu7l3bcN1fAruq8qyLo%2FAD0tT7YbqiC4EwX6oPmI%2F2wHpay4eIBiwLxX%2B93kwNWbz%2FzLgUZoSvA3P3F4Vh4swzhkuLkIWSspmRqvY93TNvDmyhmRXwSjT7d5J73wDvDp6sEK6mc%2F3re6SisAhW5p%2FkJeH139tQ5z4zp%2BLOq3AitFDiaxk3mrwg6z%2FJVBw%2BDptTmj06cMgvmHl8virRg8zSXJEO87tN725yRf2ZGlqJkO4teqi1UjZNwZ0m8OfEtj6XweiKAr%2FOIRoDYIf5YVHF5Op8%2FAyn2Um%2BpKk3uhvospuqaHZWE26r9jCOeVvrmGXFN8BWYn9j5FIWgKGNhjkgcHqueZROPjj6aoygmq6wRwuQTcPOeVob7PlFTtGKxTb6Vek%2B7TyyXLBiUgDwn0vGPd9%2BrLUV0D%2Bq6WjR4SvG7pjRckwuaCLygY6pgFdg0Qr1xOA%2BpbMCGiNYKgLh1KO1YHGpTw%2B8T74F87fO1me7S0sWZeVqEbpxLjldydBdDVHlq29qddnj5BgLeb11IRFauDJs7atRp%2FGxF5nOxCwg6ITUTOJQtNyGinOlj6UQDUByzlPIfGG0GJdkdfFefKd8%2F0IU7kLFSkTRHOu8uhXosaZXIgjvYR%2FY3qIduRrQnNXMh5PTCRkJuxEtKSpLiW4Eeb%2F&X-Amz-Signature=c1139fa7c0eded6f5e657c934681e03f377ea1d3b2c585218f62968eea78b124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
