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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6Z2QFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvByXmfzNg29NBsfNvz%2Fm3SgTqGyCosrJoR9QmdVLVgAiEApckYXtcOd2bqX2GukNf%2FA%2B%2B8t6o%2B8dGPyOpowgL%2B2loqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXrgqf0q4dHXqY31SrcA4sNqc1axgp0ddJmOVos5o7EvnwlXrJK0jsW5BDPzg%2Bub%2FXLO%2FWL4%2FQH5iKPxJlmrHl6Bewf%2FT3G5XGJ99hSKZM3oVPoxvZdCJoevhR98Xm0zLGJ5ITs8wOKJ4BhCggwx6%2B0MMWZkWDTXViWo4VUNNSBqDXj83U3vkEYEzP%2F6k2kK8gCpi8bPR9PwStGd5UUDmTcNi1f1s73GBk50LJ0KNCTYgerYaZAfWpWUtq42Kc7et3y64xVo%2FESM2e8hZ7B5ZdLmwCpt%2F0ke%2BDiQCqeViakhTz3vcRpA4ru%2BmAMBLIwNf8utddPOCLfDZvsSox%2FLvED2PZDcjNCEHeuofMDPTwelKdrh6BH7A1n7gpA6asNdBeX1R5G%2BsoQt50eBAjV7l6sq9rDeg9Jp3ayzy6m4U7mYF8lvZPGmwz22Utjx%2FoMpaoBEc4UBZaPh1vjZX8kJL9bzq66dtCdSFeFsJp4rJgvFWNVzzwqdSlVbaRsEfqYTFs2AUp7FEeK7o%2FQgvwdPCZVacJRj87nCLpMfK9xMvP%2B%2FZ8hUJRfgSZC0qjl5gfr%2FwHamXa1LqpqRk3Vs%2BVZV4rylrfej1PdB01CKnVPURioXUjzyBvfnFRxugPY5ooMZJXYpuXR3dyplzQFMKufi8oGOqUBlGOhfy4%2Fo4H2Zy6CNoS6ZVLeNQf59gZuMMXKhbQ1%2FU0pc7D%2FHZwCaYaylmgHC71KKysKgsG2mglFecHIUpHsSJLChJo3fini5c8oRw51Hy8jswrRprhltUhr10DOhWPfHFz1QxHywY7tFiw75gHL10vnKUpS3xW6CjlUrnZO4e2KnftxT%2BTjW%2BW9UJ45fxlVUSDsMfuSQ3Bz2kXgCZg5evWO7WjE&X-Amz-Signature=54f0c2f0c4d9335fd7f74a99a99e3175d2a65b78892ab3bddf66314695f54cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6Z2QFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvByXmfzNg29NBsfNvz%2Fm3SgTqGyCosrJoR9QmdVLVgAiEApckYXtcOd2bqX2GukNf%2FA%2B%2B8t6o%2B8dGPyOpowgL%2B2loqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXrgqf0q4dHXqY31SrcA4sNqc1axgp0ddJmOVos5o7EvnwlXrJK0jsW5BDPzg%2Bub%2FXLO%2FWL4%2FQH5iKPxJlmrHl6Bewf%2FT3G5XGJ99hSKZM3oVPoxvZdCJoevhR98Xm0zLGJ5ITs8wOKJ4BhCggwx6%2B0MMWZkWDTXViWo4VUNNSBqDXj83U3vkEYEzP%2F6k2kK8gCpi8bPR9PwStGd5UUDmTcNi1f1s73GBk50LJ0KNCTYgerYaZAfWpWUtq42Kc7et3y64xVo%2FESM2e8hZ7B5ZdLmwCpt%2F0ke%2BDiQCqeViakhTz3vcRpA4ru%2BmAMBLIwNf8utddPOCLfDZvsSox%2FLvED2PZDcjNCEHeuofMDPTwelKdrh6BH7A1n7gpA6asNdBeX1R5G%2BsoQt50eBAjV7l6sq9rDeg9Jp3ayzy6m4U7mYF8lvZPGmwz22Utjx%2FoMpaoBEc4UBZaPh1vjZX8kJL9bzq66dtCdSFeFsJp4rJgvFWNVzzwqdSlVbaRsEfqYTFs2AUp7FEeK7o%2FQgvwdPCZVacJRj87nCLpMfK9xMvP%2B%2FZ8hUJRfgSZC0qjl5gfr%2FwHamXa1LqpqRk3Vs%2BVZV4rylrfej1PdB01CKnVPURioXUjzyBvfnFRxugPY5ooMZJXYpuXR3dyplzQFMKufi8oGOqUBlGOhfy4%2Fo4H2Zy6CNoS6ZVLeNQf59gZuMMXKhbQ1%2FU0pc7D%2FHZwCaYaylmgHC71KKysKgsG2mglFecHIUpHsSJLChJo3fini5c8oRw51Hy8jswrRprhltUhr10DOhWPfHFz1QxHywY7tFiw75gHL10vnKUpS3xW6CjlUrnZO4e2KnftxT%2BTjW%2BW9UJ45fxlVUSDsMfuSQ3Bz2kXgCZg5evWO7WjE&X-Amz-Signature=78c67d23d657ad45b12c99b68fac1b29e9b4582edae806dec5f668174bfa808c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
