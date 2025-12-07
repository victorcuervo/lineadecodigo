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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6625DNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHssqWj6tm9Fc4JqU4VR6L%2BwE%2B5q9ve4eGB0GWu3ILIAiEAw3CHrLx33gG8wp26FTo6UhxIxDy5gESiQ20KH%2Fu5KHQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgQ1oEeutkHeDk%2FmSrcA6bWFnlI2f0CS18i0F3lEeTTZLcgHPJsvQKLqztuQ6tJlH58UHdHImVFAUMiQlU4MBOKfLoB1vc8mf8hjpnIkAZUDLTir3L%2FcsmM47141HFPti%2Fg3j%2FXgGfhOs0sDG%2BpW6U2EtflodXgbo4BzyF7c7YSIRJe8wQMcF1Bu5KTrHDR8TB8hXc54CTNdxlgq1WU2jf6BoP7C5xF4OoH1c87qd%2FfNr3jYzE6EL79%2Bh9WatBUqGAw7NWDXnudyAsXs5Uc1iOZUgTK0PGeXxKRjAHOqOhAuTQpKG0GZDIscOkasRTXR1AHBOYHlI%2BUoC5HBDgAfpLVP8NJl5aV5DGpXiHdY2bAOMwIta5I6855Pu3vj8aWWVsMRVLd5d8UVi3%2FNxINxA99gFPSv7UOURBtgkD7erIZeSIy1FNE35Fcg2hq0iNBTXwvER06D%2BD8gMMMx4HAJm5XMDKv30afpoo0qQqlvhhwDn0AEVqgZAJj464xUC7fB1lNOJ7klX3jcp%2Ba8ppdbHCxL4owxchXyeGJQsPDGYOJRzAgFLfryRZ%2FPiTAUgHR66tR7sWyyiWjw3qr2Tc%2FsEokHvgGOEz4xq4Ta%2BKofdJwAZ85arirjDKBHUeSOuUmZ7DrzuFThnzye%2BshMM6%2F1skGOqUBL3Yf8NFTce0rYnPODqTNf6ydQ9ulSO59wYHQIYRE%2B7rOQcGL3dK72hX%2FTKgXZoZAvgnjdWuNIIjE%2FIvxRqrNbghPbdX8Dr63Nx7JkqQSAxCzB9UVz44X1HQVRA49lm9yfcWDwiyeT5S1hvG1nNkuULRkI0KF7eahb93Ne8rWvjcUzJfbonPfltrjupwctG9aSaMUJfYOR9OnlzQNR9Cf%2FNh5kT7N&X-Amz-Signature=d2f0a93b28ce08119f6f868bdd286d0e7b633073ff91825a3778769bcb44dffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6625DNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHssqWj6tm9Fc4JqU4VR6L%2BwE%2B5q9ve4eGB0GWu3ILIAiEAw3CHrLx33gG8wp26FTo6UhxIxDy5gESiQ20KH%2Fu5KHQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgQ1oEeutkHeDk%2FmSrcA6bWFnlI2f0CS18i0F3lEeTTZLcgHPJsvQKLqztuQ6tJlH58UHdHImVFAUMiQlU4MBOKfLoB1vc8mf8hjpnIkAZUDLTir3L%2FcsmM47141HFPti%2Fg3j%2FXgGfhOs0sDG%2BpW6U2EtflodXgbo4BzyF7c7YSIRJe8wQMcF1Bu5KTrHDR8TB8hXc54CTNdxlgq1WU2jf6BoP7C5xF4OoH1c87qd%2FfNr3jYzE6EL79%2Bh9WatBUqGAw7NWDXnudyAsXs5Uc1iOZUgTK0PGeXxKRjAHOqOhAuTQpKG0GZDIscOkasRTXR1AHBOYHlI%2BUoC5HBDgAfpLVP8NJl5aV5DGpXiHdY2bAOMwIta5I6855Pu3vj8aWWVsMRVLd5d8UVi3%2FNxINxA99gFPSv7UOURBtgkD7erIZeSIy1FNE35Fcg2hq0iNBTXwvER06D%2BD8gMMMx4HAJm5XMDKv30afpoo0qQqlvhhwDn0AEVqgZAJj464xUC7fB1lNOJ7klX3jcp%2Ba8ppdbHCxL4owxchXyeGJQsPDGYOJRzAgFLfryRZ%2FPiTAUgHR66tR7sWyyiWjw3qr2Tc%2FsEokHvgGOEz4xq4Ta%2BKofdJwAZ85arirjDKBHUeSOuUmZ7DrzuFThnzye%2BshMM6%2F1skGOqUBL3Yf8NFTce0rYnPODqTNf6ydQ9ulSO59wYHQIYRE%2B7rOQcGL3dK72hX%2FTKgXZoZAvgnjdWuNIIjE%2FIvxRqrNbghPbdX8Dr63Nx7JkqQSAxCzB9UVz44X1HQVRA49lm9yfcWDwiyeT5S1hvG1nNkuULRkI0KF7eahb93Ne8rWvjcUzJfbonPfltrjupwctG9aSaMUJfYOR9OnlzQNR9Cf%2FNh5kT7N&X-Amz-Signature=f01be45c1abfafba14d733f672e5cddb8885c1276ce194ec4c68f3c8511304d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
