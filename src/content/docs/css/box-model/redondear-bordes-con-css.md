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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXZYCMZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuq91I1umFRkPXjBvDKp0kMBFeRnNCMU8rOmKNZm2mogIhANH4CNsXm%2BOzjbAB3pACwQt5z4ue04yb3S7UkWCUWzq4KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXZDb9prycMIrxHBIq3AMbL3vDTvFAfTQIv%2FAZ5EyTiEDbMWjiKeawNr07qmYWU1Kuio%2BxW%2BiWNT3J5yB7ICC4%2BSuZNMhH0cvy6s%2FXrBDsjSTMFEKciOK9kYezKTRAsB2qU6dDeHB7CyIe%2FRH7J1E8ZSW0%2FSIaaDoNQtaYnYZOin3VqE2J0QoqoFKBksuIwIbBqR%2BH7bNuTnYAoumM4bV602fyfuLGGL6ZcHtMnWkce9aWAFqXREwDLDwnyxuU%2BFCQRyGuPbdddUWZXYj6hY%2FIOov744Mv1JugRPBiANYkY%2BNLecEQOtwVeOgbUSe4von5ZRyQURonSteKtjcOlnFfpVYuQCV5VZZKmP%2F7ykMrj21s2KFUfKuYgkAMa%2B%2BxT0ROySI39xJHTGi9ayiA7jOQ3Hmoj7T5sAJgjlKG0hp%2BZvGUd3CHqVGbv0kvQt%2BZHTEhMbHIyukMxKYsosEyzf5Gx3JXl7wQ2nck%2B64arsL1y8MFNm2Q%2BoKb1zo59sw1IK52D%2F2Kx6VKdTfhdCt%2BZBM2cqSxRvWEXLuX%2FbgYQ8EUCr8%2FlNUosHhI9%2F4pf0ADX9IIXtu9CJH53IHYrTP48zHBHAQaRGOltRD9E%2Bfv7XXPh5g5gcu7BQKINu34VgvxsseinmhiR1yqFx55ujDTrYzKBjqkAViUoqqBYLQ7GCmcplt2B9vyA8PInJ%2FYgCGau2LCxJdn8wJ%2Bc5e5Ytjau0uKCpwfgGR5h7t96MmeR7JCGhVjUgGqZVy7aDgJCOMWV67%2BNbjixHd37hjNadYWmi6Y9TFdhHlvDug%2BXQ0ZRHHCDfLbHOLIJQASujClE5aU5nt9dy9oE28rSTx76ZW%2BObpvwjV4Tny1khiReu3uFEpmnHu5JpsybRHl&X-Amz-Signature=27f8c03997c59b120b4543d65a85d0d1f9802d5ea983c03e4816b1ce330a275b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXZYCMZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuq91I1umFRkPXjBvDKp0kMBFeRnNCMU8rOmKNZm2mogIhANH4CNsXm%2BOzjbAB3pACwQt5z4ue04yb3S7UkWCUWzq4KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXZDb9prycMIrxHBIq3AMbL3vDTvFAfTQIv%2FAZ5EyTiEDbMWjiKeawNr07qmYWU1Kuio%2BxW%2BiWNT3J5yB7ICC4%2BSuZNMhH0cvy6s%2FXrBDsjSTMFEKciOK9kYezKTRAsB2qU6dDeHB7CyIe%2FRH7J1E8ZSW0%2FSIaaDoNQtaYnYZOin3VqE2J0QoqoFKBksuIwIbBqR%2BH7bNuTnYAoumM4bV602fyfuLGGL6ZcHtMnWkce9aWAFqXREwDLDwnyxuU%2BFCQRyGuPbdddUWZXYj6hY%2FIOov744Mv1JugRPBiANYkY%2BNLecEQOtwVeOgbUSe4von5ZRyQURonSteKtjcOlnFfpVYuQCV5VZZKmP%2F7ykMrj21s2KFUfKuYgkAMa%2B%2BxT0ROySI39xJHTGi9ayiA7jOQ3Hmoj7T5sAJgjlKG0hp%2BZvGUd3CHqVGbv0kvQt%2BZHTEhMbHIyukMxKYsosEyzf5Gx3JXl7wQ2nck%2B64arsL1y8MFNm2Q%2BoKb1zo59sw1IK52D%2F2Kx6VKdTfhdCt%2BZBM2cqSxRvWEXLuX%2FbgYQ8EUCr8%2FlNUosHhI9%2F4pf0ADX9IIXtu9CJH53IHYrTP48zHBHAQaRGOltRD9E%2Bfv7XXPh5g5gcu7BQKINu34VgvxsseinmhiR1yqFx55ujDTrYzKBjqkAViUoqqBYLQ7GCmcplt2B9vyA8PInJ%2FYgCGau2LCxJdn8wJ%2Bc5e5Ytjau0uKCpwfgGR5h7t96MmeR7JCGhVjUgGqZVy7aDgJCOMWV67%2BNbjixHd37hjNadYWmi6Y9TFdhHlvDug%2BXQ0ZRHHCDfLbHOLIJQASujClE5aU5nt9dy9oE28rSTx76ZW%2BObpvwjV4Tny1khiReu3uFEpmnHu5JpsybRHl&X-Amz-Signature=cddb70d2fd9da39e7ca3a3665a09403b4ff841e83756695f06737440e9bdd63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
