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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2I7HVS6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMr3PAQIfA%2FsEz5K5Qq77MIppbrFo5zJtz0Pn8OkQO7QIhAIViHveRhBc2kgdj7TfHDMj1EwDJ8XSkAn5FOCFYTFssKv8DCHIQABoMNjM3NDIzMTgzODA1IgwyKrS6SNZiG%2Bbsl50q3AOeMepVeaxSZ5niWrKCr1QZhDL4eeCQFJd0CudIyGxCSyu5i2%2F9L3OsWiPgrEONDTOVsFEjQRlMrm%2FQ4ncwWeFa6oVdlkAGUnhqHsJmXSIUe3jfXlMw7j2telj7xTa1hXzSS2k4ADHnLYO%2FwzBNqtBXtekngELn%2FLnb5Tb0YKX1FAx3jwYfgUK4C9vt2UpqGdgW6MqwxlaDNcskYjBi1SXBEfDQgq1yoO5FbtBWX%2FQTGpABgLNC%2BsYhbFC72vWI2bODk646I3G5HaMkXDE0vKwGuU3swU0UC4sSA1pNBd4Bg9nqXcHtPS7IWauVk4upEH2xEUDJFTbZPRRFqv2uDdaFm8T2ffRnhcoECLAJMn8jAyPNj5lDWXOtr%2Bu15lXttRiS0PHaq0PIyKwJyIafo9fmjn3aYukm5rb6qEZVUdwYtXH4%2BxhhKWze8crYOR7aLIURq3gWMWRDKk8aSKUvu04l9p187fxfvvWUzf5VowZc3Me5eyUjNHve%2BYFEA2T5DsOfGDIjbVCBsis6bHESOYQPY7VYkdvCbbQuGuqteB0OJ5QNWINTsGtNkkPWA5POjRXf5j4ydpynxeFCLjC9PsUnwx9h1LoJ9KmY2A8yKBqxCEQIw6alzSPzNuAm2DDL%2BofKBjqkAe5tZhf%2FMlTAb9rSP%2B%2BiTz0k3PKn8bZbK0gQ61nKEaOPoI2M3P2iuMRYMvqGre4YPeeo1OuAv1iU3tzRaQ3P7RgSh2zE9xhpj4VYexme5QoyWYge2AGqadxhfF62mzta1xerJVLN2wF6DryWuTrsa7iLlR5OLiV98tG%2BNfuHW60KpCn8D5MxH3OMjemZCjsDtiz0K9HCEdgZT5lWP0m%2Fx0VHvSWQ&X-Amz-Signature=b0eefd486c756abbf0a3229b3ce6a1632a1fa2032aa1a8cc176b3c395387723b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2I7HVS6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMr3PAQIfA%2FsEz5K5Qq77MIppbrFo5zJtz0Pn8OkQO7QIhAIViHveRhBc2kgdj7TfHDMj1EwDJ8XSkAn5FOCFYTFssKv8DCHIQABoMNjM3NDIzMTgzODA1IgwyKrS6SNZiG%2Bbsl50q3AOeMepVeaxSZ5niWrKCr1QZhDL4eeCQFJd0CudIyGxCSyu5i2%2F9L3OsWiPgrEONDTOVsFEjQRlMrm%2FQ4ncwWeFa6oVdlkAGUnhqHsJmXSIUe3jfXlMw7j2telj7xTa1hXzSS2k4ADHnLYO%2FwzBNqtBXtekngELn%2FLnb5Tb0YKX1FAx3jwYfgUK4C9vt2UpqGdgW6MqwxlaDNcskYjBi1SXBEfDQgq1yoO5FbtBWX%2FQTGpABgLNC%2BsYhbFC72vWI2bODk646I3G5HaMkXDE0vKwGuU3swU0UC4sSA1pNBd4Bg9nqXcHtPS7IWauVk4upEH2xEUDJFTbZPRRFqv2uDdaFm8T2ffRnhcoECLAJMn8jAyPNj5lDWXOtr%2Bu15lXttRiS0PHaq0PIyKwJyIafo9fmjn3aYukm5rb6qEZVUdwYtXH4%2BxhhKWze8crYOR7aLIURq3gWMWRDKk8aSKUvu04l9p187fxfvvWUzf5VowZc3Me5eyUjNHve%2BYFEA2T5DsOfGDIjbVCBsis6bHESOYQPY7VYkdvCbbQuGuqteB0OJ5QNWINTsGtNkkPWA5POjRXf5j4ydpynxeFCLjC9PsUnwx9h1LoJ9KmY2A8yKBqxCEQIw6alzSPzNuAm2DDL%2BofKBjqkAe5tZhf%2FMlTAb9rSP%2B%2BiTz0k3PKn8bZbK0gQ61nKEaOPoI2M3P2iuMRYMvqGre4YPeeo1OuAv1iU3tzRaQ3P7RgSh2zE9xhpj4VYexme5QoyWYge2AGqadxhfF62mzta1xerJVLN2wF6DryWuTrsa7iLlR5OLiV98tG%2BNfuHW60KpCn8D5MxH3OMjemZCjsDtiz0K9HCEdgZT5lWP0m%2Fx0VHvSWQ&X-Amz-Signature=1fe264bd57f1b8fec80e0bec26e22ad0c480132bc92f7e7d69d91958d5338e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
