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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIIPUIP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpgRm1gQ7ESnxowh5ZyCq6hjtdiciisIHT9cI5vqJo%2BAIhANtJpzg4RWq1RKLMSuuCAG4PCeNRrfhG043XXeMHyb1XKv8DCHYQABoMNjM3NDIzMTgzODA1IgxY%2B5yj%2Bcdgbu28Ikoq3AMogFDXCkSJdectugfbFRjLWp0IriIU7kr2isjNcI1jbJAfMtrbp9xkfuVayT5c49vKYJ5IN77mkK6toGD1v3z3X912ma9jEuM3r7M%2Fa7iG208i0Lu01Vv80Fz2qxPuBMHe3Frp8MasGX%2BqIHx7DLKjgn4x%2FJatzkFBP087sfxhwJ%2BD0uQzkkGYyZdBiW8YQx32WMU5pcyteAVQ6kUF%2Bn8PGHeyHaWehk8MvQHFYY3zPtxNN3VCZkmKi8UQU3Hj0418oWpYz%2B4Ky35DyNREKK9Wg%2B7gIQNjtStFE2%2FgIEaa6wqJIurZlsRfOnfTBvrkvBj0PV1BYquKKWOnVw8ehOpF1stTKmyu7TNU69L0LhNnYmUTUE6SYIyeYE4M6nB8cKPDni4iN5e%2Bq1ERRcyLSgZ1GjU%2BztR9WtQVgY62M2CXnjuQruiHEjoQbaGJNgnLmSy5HGVN0OJ%2B39yUiU58XCglAIvGyMh7KyZi4uf47HxkxvfmyKavGKRDvXNYbVn7m65VdOYHEug%2BsUNR%2Frb2kbZDebSbEIO8bVJAsIWQm5Zjc5VZ%2B6u1%2Bj6NtEcj1Ym5LqB3PUZp%2FQiNY9mvoY6REpflrXYuFS3ZSdV7BCf%2B62gi%2Bb%2BWRJKAk3GIYXGhATCc6YjKBjqkAf%2F8m1PNokExen88COM2WQU%2FfWrlDIlvcaKZ%2FbT%2FXh13L9iJusBFKKuDkg3Ao4T363oFjN6GV2WG4zmCI0furdlZOq6YTeA26Bj0CVsZQfDVU7SoLMZONFZeEAyTGnTS48zjBWev4svbjx0o33D4RipVjhJUcn5%2F9qfBTjG8qMX0Ofj1dUK28yys9v7VygCoUs0xxRnA7xI2hTUp9rurg8Mlz5mp&X-Amz-Signature=492a7f56bb9f1258d28afa8b7ea89ca76954a4286994281e49681b1a1f2dc6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIIPUIP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpgRm1gQ7ESnxowh5ZyCq6hjtdiciisIHT9cI5vqJo%2BAIhANtJpzg4RWq1RKLMSuuCAG4PCeNRrfhG043XXeMHyb1XKv8DCHYQABoMNjM3NDIzMTgzODA1IgxY%2B5yj%2Bcdgbu28Ikoq3AMogFDXCkSJdectugfbFRjLWp0IriIU7kr2isjNcI1jbJAfMtrbp9xkfuVayT5c49vKYJ5IN77mkK6toGD1v3z3X912ma9jEuM3r7M%2Fa7iG208i0Lu01Vv80Fz2qxPuBMHe3Frp8MasGX%2BqIHx7DLKjgn4x%2FJatzkFBP087sfxhwJ%2BD0uQzkkGYyZdBiW8YQx32WMU5pcyteAVQ6kUF%2Bn8PGHeyHaWehk8MvQHFYY3zPtxNN3VCZkmKi8UQU3Hj0418oWpYz%2B4Ky35DyNREKK9Wg%2B7gIQNjtStFE2%2FgIEaa6wqJIurZlsRfOnfTBvrkvBj0PV1BYquKKWOnVw8ehOpF1stTKmyu7TNU69L0LhNnYmUTUE6SYIyeYE4M6nB8cKPDni4iN5e%2Bq1ERRcyLSgZ1GjU%2BztR9WtQVgY62M2CXnjuQruiHEjoQbaGJNgnLmSy5HGVN0OJ%2B39yUiU58XCglAIvGyMh7KyZi4uf47HxkxvfmyKavGKRDvXNYbVn7m65VdOYHEug%2BsUNR%2Frb2kbZDebSbEIO8bVJAsIWQm5Zjc5VZ%2B6u1%2Bj6NtEcj1Ym5LqB3PUZp%2FQiNY9mvoY6REpflrXYuFS3ZSdV7BCf%2B62gi%2Bb%2BWRJKAk3GIYXGhATCc6YjKBjqkAf%2F8m1PNokExen88COM2WQU%2FfWrlDIlvcaKZ%2FbT%2FXh13L9iJusBFKKuDkg3Ao4T363oFjN6GV2WG4zmCI0furdlZOq6YTeA26Bj0CVsZQfDVU7SoLMZONFZeEAyTGnTS48zjBWev4svbjx0o33D4RipVjhJUcn5%2F9qfBTjG8qMX0Ofj1dUK28yys9v7VygCoUs0xxRnA7xI2hTUp9rurg8Mlz5mp&X-Amz-Signature=feb89fba07beb86a668e4e72610de571b96f7d764295c45a73b0bfcc7a372270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
