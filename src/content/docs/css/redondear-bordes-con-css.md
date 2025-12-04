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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YWGRIW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEr%2FPeMmqjt%2FaUogmatEIN4KxemeEwDd4CbcUvRi9%2Bt6AiA1pVKwmIhuxK0gPVF8fP5w2EBVSLK8mmSsRhyeiFR0nSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMNuj64pw9GXLkMRiLKtwDzxVuRRGcDSP6U9zdF16tV5kGgvDpZSjMB2T0ubAoAGPTLLUo98SCDrec6DkOW8NE9JDVNle2WXw2IYk5VIapToZoXsrbLlQ9FitJDDxpWj7Fe0Nz%2FgARyuDMcM6MGa8gMvsoThb%2FXs94H7wxraplapwdMxDsW%2FCBFkosmXwq1HD18Bg%2FEqi54hiGqR4kfENffcrF55eINedu%2FMxDI0o6u305fuDCWxTH%2F9LWU4KjChyNWnKbtsvTyhqXKpeYqT19FrpKOV70dnRQpahtvnFHTSTg%2F7UFlQDW%2BHI%2BELuXolnBk81t7gWbQ8RKyXLR5b3%2F9a7dXb9oHdVpo103kGnYfQz5qAgnvC1bcjw6hQD2Qv5HUCwGrD5websNSz9LGF4qoTcLx2IC8adGMMIymd8GZxJ8Kdz%2F%2BhL5GGdk7qroJvS8I2RfcHeSwmM5%2BEQDxllILZlYaGdtTw%2BlZRKad8vIxbdZ4Np91tGkF7Oz62BzOPcFUoMlZV%2FKiTaHGL%2BtLA8AcZUWDwWGUe8Q1WtQ0l0Lc49qq3AqTqd%2BZzpe3AgHY%2B3Xo3MX%2Br9J9tI%2B88SYDXIw0g8jSToVSjqds1XFaqi2uVdmA227YBQuWjBb5oDZW4%2Bm0xxNd5OWxdGPBr8w0cnFyQY6pgFeK7ohlxY8oBgVpnFO5XE2SMiuWDJNlnVBkwizo0LFXWOtvE49mIkGbh%2FKO4oXASSL9M%2BkvUhQR37WcDFQfjBf8BkzsXK0PBHIUjgamXEZqaiCB8WqM8cN7KP37SbwE%2FniexZf792mS%2F%2FxOkdQIgmHFbPXldVQ300Jrjf0ePvaSWH%2BXDSkdzkbkDYOcP%2B2naAXsy8XVhwXe3sWdQkiZM4YlAXdNsGy&X-Amz-Signature=acec5f9dde35ccf0ea4f99c657d2be8688982baaf7d999e5ac9eca3260b3844f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YWGRIW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEr%2FPeMmqjt%2FaUogmatEIN4KxemeEwDd4CbcUvRi9%2Bt6AiA1pVKwmIhuxK0gPVF8fP5w2EBVSLK8mmSsRhyeiFR0nSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMNuj64pw9GXLkMRiLKtwDzxVuRRGcDSP6U9zdF16tV5kGgvDpZSjMB2T0ubAoAGPTLLUo98SCDrec6DkOW8NE9JDVNle2WXw2IYk5VIapToZoXsrbLlQ9FitJDDxpWj7Fe0Nz%2FgARyuDMcM6MGa8gMvsoThb%2FXs94H7wxraplapwdMxDsW%2FCBFkosmXwq1HD18Bg%2FEqi54hiGqR4kfENffcrF55eINedu%2FMxDI0o6u305fuDCWxTH%2F9LWU4KjChyNWnKbtsvTyhqXKpeYqT19FrpKOV70dnRQpahtvnFHTSTg%2F7UFlQDW%2BHI%2BELuXolnBk81t7gWbQ8RKyXLR5b3%2F9a7dXb9oHdVpo103kGnYfQz5qAgnvC1bcjw6hQD2Qv5HUCwGrD5websNSz9LGF4qoTcLx2IC8adGMMIymd8GZxJ8Kdz%2F%2BhL5GGdk7qroJvS8I2RfcHeSwmM5%2BEQDxllILZlYaGdtTw%2BlZRKad8vIxbdZ4Np91tGkF7Oz62BzOPcFUoMlZV%2FKiTaHGL%2BtLA8AcZUWDwWGUe8Q1WtQ0l0Lc49qq3AqTqd%2BZzpe3AgHY%2B3Xo3MX%2Br9J9tI%2B88SYDXIw0g8jSToVSjqds1XFaqi2uVdmA227YBQuWjBb5oDZW4%2Bm0xxNd5OWxdGPBr8w0cnFyQY6pgFeK7ohlxY8oBgVpnFO5XE2SMiuWDJNlnVBkwizo0LFXWOtvE49mIkGbh%2FKO4oXASSL9M%2BkvUhQR37WcDFQfjBf8BkzsXK0PBHIUjgamXEZqaiCB8WqM8cN7KP37SbwE%2FniexZf792mS%2F%2FxOkdQIgmHFbPXldVQ300Jrjf0ePvaSWH%2BXDSkdzkbkDYOcP%2B2naAXsy8XVhwXe3sWdQkiZM4YlAXdNsGy&X-Amz-Signature=2f4d95eca1c5e676bdb5f425565533c8b5a97f2f3d26b11f933e5a4219f336fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
