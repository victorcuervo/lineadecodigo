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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2DH6MI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE65q84D%2B4eVu%2Bgd2Z4owcFq9w1wE7%2FkdjtPftU1pE4EAiEA5pWL7oVHE144tyKPzJw68vSTUdJ5FKKPmv0fiT%2BBhlsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObDv7v%2FxskfIYvUSircAy6FjLCtnHZ3enyO6BYrh2cbjpVJPRnEtxgmIWelatckWnXDzt%2BMPcEsju2LBg4DWysjAOrligMLCZLGocL%2FokIUsZDlFUrAQXY5%2BvyT4splfl1busOA9BsGeePGkDlc9qhU8hbb%2BoauT6aCzxQ0mUAbppoVYBrR6%2BW6Ju%2FgaV%2BmUmCtZau45HbCuZKn6Vhk1yW5iwJO2P7Zl08ff1PUaVRRotJNQbo%2BzPE7MjppRPquhNnnKwBh%2BqyFKaaVDpdWCcbJQm6VqjBxg2RmISjALBMHs1QiD6FZmnSSWn66jvxbcOx2s49hsA1HFhbXw2KBNZkIobY85n4u4ADS07YGqKoxXUD3fpaZFs8isaqIt9aBzz5dagIfakKdPb1A3GiWpoyamsyfdkbN4QS%2Fi1efcgVgOus7UczuG7KLIe8tgmxgG4zD1PZa7Vg379BoWdOZT5pr9%2FYHEY6bfeU9p%2F9I8J0lE2PH0hreGL3SPbZPGTYr6nAOachqUm4Q68nEs%2F6Q1GadkPI3qCTYo81OYhUlZEofoU3hq%2Be7uxwUZfTkCEKdfPTZci1VOy943j%2FnMeUGdx%2B0ScKarqN4gGCEcm5DMqYbCsy4a0reFn3sKSOcfXJEXI2XludHHemzK%2By6MKKgi8oGOqUB851wnD4xvaTq%2BrLkxZYPnwSYgcp0VkGRHVJpIt%2FszOhqzIDSvqanKrqnm%2FwHTUF9cqn4lEp4jjf6h7wD0L6RxyOzEFXa4FvCvLnSBhGjXpquvsMtHdPOaUwWLmwwqQ%2BkpU0wg7%2B6eeEsaBzkY2qcQHNX7Awr9ZGhVQ6axu%2BWMBuHVJZlrxleFCO3NBgcTRDZPFTZCWpsj1qGedAzDpc8310Q%2F%2BHh&X-Amz-Signature=6c9502d0eccf0257b216f9eb23b37be921e46023ac530080a869b8d85c04755c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2DH6MI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE65q84D%2B4eVu%2Bgd2Z4owcFq9w1wE7%2FkdjtPftU1pE4EAiEA5pWL7oVHE144tyKPzJw68vSTUdJ5FKKPmv0fiT%2BBhlsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObDv7v%2FxskfIYvUSircAy6FjLCtnHZ3enyO6BYrh2cbjpVJPRnEtxgmIWelatckWnXDzt%2BMPcEsju2LBg4DWysjAOrligMLCZLGocL%2FokIUsZDlFUrAQXY5%2BvyT4splfl1busOA9BsGeePGkDlc9qhU8hbb%2BoauT6aCzxQ0mUAbppoVYBrR6%2BW6Ju%2FgaV%2BmUmCtZau45HbCuZKn6Vhk1yW5iwJO2P7Zl08ff1PUaVRRotJNQbo%2BzPE7MjppRPquhNnnKwBh%2BqyFKaaVDpdWCcbJQm6VqjBxg2RmISjALBMHs1QiD6FZmnSSWn66jvxbcOx2s49hsA1HFhbXw2KBNZkIobY85n4u4ADS07YGqKoxXUD3fpaZFs8isaqIt9aBzz5dagIfakKdPb1A3GiWpoyamsyfdkbN4QS%2Fi1efcgVgOus7UczuG7KLIe8tgmxgG4zD1PZa7Vg379BoWdOZT5pr9%2FYHEY6bfeU9p%2F9I8J0lE2PH0hreGL3SPbZPGTYr6nAOachqUm4Q68nEs%2F6Q1GadkPI3qCTYo81OYhUlZEofoU3hq%2Be7uxwUZfTkCEKdfPTZci1VOy943j%2FnMeUGdx%2B0ScKarqN4gGCEcm5DMqYbCsy4a0reFn3sKSOcfXJEXI2XludHHemzK%2By6MKKgi8oGOqUB851wnD4xvaTq%2BrLkxZYPnwSYgcp0VkGRHVJpIt%2FszOhqzIDSvqanKrqnm%2FwHTUF9cqn4lEp4jjf6h7wD0L6RxyOzEFXa4FvCvLnSBhGjXpquvsMtHdPOaUwWLmwwqQ%2BkpU0wg7%2B6eeEsaBzkY2qcQHNX7Awr9ZGhVQ6axu%2BWMBuHVJZlrxleFCO3NBgcTRDZPFTZCWpsj1qGedAzDpc8310Q%2F%2BHh&X-Amz-Signature=fe0c29602df860e848c319cd2d9ddba84db60e31b4d2a27a9fcbdcee0819b9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
