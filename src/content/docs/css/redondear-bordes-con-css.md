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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YFWTNDI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoTpxXuVjxDA72KUivXk0BIOolnoOcM0wT85vSDmhWkAiBR3CxECvQeyNcX45IY15gelRCUmG2LqeGx1wMqejCwZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMGdGq8aP%2BjJ4EpY4%2BKtwDmoAbRsTS6LpfD2IjOSPDq7NWVyZvlgNcDth12FuwXBmdlxFpOu9wCTIAJPSOyAnI0Du5fO%2B7dbWdzhckRG5ZenfhaFj3QLV3hhMubtAERXI8okSqHJ6GYQX4YTf009RuHHx%2BxJSVe9qA9nbI9meE8eiOxZ1I98ZgSekcTdRpynlnyso%2FU1z33h%2BkSWDw8%2BkjnXwmP5O3fZZN6oxNzpDqO4guX%2F0AFCz8WCBSnGxdi3MRrhO46lySKDwjWqLrZcri6x0FdGt4PdTfuS1mmOllqwoaPeniukHKm6Ny5JEkkJZFB%2BNNDwKbcCxdTJkszgfKHSh5Xno3WAC16zjby43XavoxhIX0lulCp9YHduEkXdoqZxcbOVsAwncjkmfWCaNMz4aL5Vq5dVnGswSzTjyrS%2FEd8qqpSFZenzYYgQh%2FC0zFZlUeWJLPVTTZ51s9P0LFJ6JwxsaxlPUA8mPT6bjZOtMqCv8QHsgQoo0Z6ipSYLEaArNnS%2F1SPKM3WgM6Eit5aT9XgC7nqEXBpwNFD%2BKgMxvsp6fTfVl2Df1edFnNWbwGXD4j%2Ba3ecoFXP1L1uQxLZnp0vPp0tlJnvwlG4mfSZGHlp9u6o4XvygoUsomEiuNerB7N5ciy9EWuL%2FswiN7OyQY6pgFXId3PTfAdWwwva1H4lR7y5nEnBOLKtPXEr%2FMLKdSphzB5Lal5XZgIh8Y6rfCrA5XBRfIMSC3US0PAfGSQEEZMl%2BzhrnYTsvIeHd0AMWmKsvekiErO2vnTpgvwR%2BH0X714%2FLvzTESTVXX6eW3KNMfXf33e7eioPQmwTjpCKYlkkNcrJ81do56wj6f8f%2FJ1RnUV9yuA%2Bg8ZaJ538mKO9FNtYtvejNj%2F&X-Amz-Signature=67855af7e4fbaa249eb75d85c94ca3d1341e677b83c8b7bb7f2d4b6c720a54b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YFWTNDI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoTpxXuVjxDA72KUivXk0BIOolnoOcM0wT85vSDmhWkAiBR3CxECvQeyNcX45IY15gelRCUmG2LqeGx1wMqejCwZCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMGdGq8aP%2BjJ4EpY4%2BKtwDmoAbRsTS6LpfD2IjOSPDq7NWVyZvlgNcDth12FuwXBmdlxFpOu9wCTIAJPSOyAnI0Du5fO%2B7dbWdzhckRG5ZenfhaFj3QLV3hhMubtAERXI8okSqHJ6GYQX4YTf009RuHHx%2BxJSVe9qA9nbI9meE8eiOxZ1I98ZgSekcTdRpynlnyso%2FU1z33h%2BkSWDw8%2BkjnXwmP5O3fZZN6oxNzpDqO4guX%2F0AFCz8WCBSnGxdi3MRrhO46lySKDwjWqLrZcri6x0FdGt4PdTfuS1mmOllqwoaPeniukHKm6Ny5JEkkJZFB%2BNNDwKbcCxdTJkszgfKHSh5Xno3WAC16zjby43XavoxhIX0lulCp9YHduEkXdoqZxcbOVsAwncjkmfWCaNMz4aL5Vq5dVnGswSzTjyrS%2FEd8qqpSFZenzYYgQh%2FC0zFZlUeWJLPVTTZ51s9P0LFJ6JwxsaxlPUA8mPT6bjZOtMqCv8QHsgQoo0Z6ipSYLEaArNnS%2F1SPKM3WgM6Eit5aT9XgC7nqEXBpwNFD%2BKgMxvsp6fTfVl2Df1edFnNWbwGXD4j%2Ba3ecoFXP1L1uQxLZnp0vPp0tlJnvwlG4mfSZGHlp9u6o4XvygoUsomEiuNerB7N5ciy9EWuL%2FswiN7OyQY6pgFXId3PTfAdWwwva1H4lR7y5nEnBOLKtPXEr%2FMLKdSphzB5Lal5XZgIh8Y6rfCrA5XBRfIMSC3US0PAfGSQEEZMl%2BzhrnYTsvIeHd0AMWmKsvekiErO2vnTpgvwR%2BH0X714%2FLvzTESTVXX6eW3KNMfXf33e7eioPQmwTjpCKYlkkNcrJ81do56wj6f8f%2FJ1RnUV9yuA%2Bg8ZaJ538mKO9FNtYtvejNj%2F&X-Amz-Signature=aaade4e6f029ead870da4673fb2782534883ee79d1e5786d3142bc9831ddbf19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
