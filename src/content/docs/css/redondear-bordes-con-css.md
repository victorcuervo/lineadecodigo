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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULGMCFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcEjfrJy5rqszH%2F0RLFw%2FiuqOVvUFbJpgMS%2B5m2XY7twIhAKgfFNS4ksPpG8yNIQR7QPombesUJD4Pz8Nj7lxNk7ohKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybQFsBG%2F3xiSoThpgq3ANXbFvGn4HhK6AIKZVvmKqrssZZp2vTlnARfel8amK%2BhBwpZead32Ni2AvQYi5%2FUjPd7OpbW0H39qSna8SXXyLzxmPoPEMTzTHnJI6Avmf9MSGuupL3FVz1qAwMyMBTDaQg7zLm98%2BPAPH%2BAvFmSMLBGmcEgTFn9isIEx4hatBfGDJjZSaP309m5LkRMhSERjcBskY6K2QrNqjk0So6eIw4HKlE%2BJbuUnsypPIYckMB%2BkGsAFENEMn4eJd%2FZsnsE7Oi3SIDUCSHOycHkgHww6Fl%2Bzs5KJaidPqhvLmLN6JxgRHxrbiyPSHF6TsQyuGd76%2B4Sl5khqgLTO%2B0wQNw6v%2FfqSgr8j%2FE0zk%2FTH3wTXXkStituIfOAZJKHZ5%2FoVJV2cfV1idSMIG3cTe56Zx6eLnFhwbHVCJ0H6RwgfQ37aPUUJ9D6N%2BW5AlMpKRWub9%2FR3vkCTzGa%2FPMS1STd6K%2FGFaSZrkyW2OAOaJjatdaCeF%2B0FcbyhJMxkYnkMev3zfCrdlkXzduRn7V4rVJAnnVgAU3I%2Fg6LmtoSD09ThYkJifG52x5EsXh%2Fns9MsrlbN5dByGRo9jZZ8t4pILEj6hsIxkOEW9SgggixM2%2F90UNiScFF83Jo2kXvkGmujJo3zCe7dnJBjqkAUF1NK2SM8qcXlHEC0%2B0JW4eGUTpHzHNEy4B3g9eN2TDI01hRgViQLqWhJf2ahlmJIFiG4oLGnq%2FQrGpSZExBp4WCcSG7kul3UGoHkqin%2BkCLotGLgRyq7iVbk0Ipnm9e7PC8QoWeBqMVqUQYctqZit7d%2FL8mH1%2FwMlZqX9dV5g2aT2FqgZaraDVoeehhgy%2Fdf2efHkZ43esHNIYeivoQGrIHMGp&X-Amz-Signature=e32faf1c3a02aa0dcbd1ef91994e58b6706f50cd5c76a229315884bdd57af890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULGMCFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcEjfrJy5rqszH%2F0RLFw%2FiuqOVvUFbJpgMS%2B5m2XY7twIhAKgfFNS4ksPpG8yNIQR7QPombesUJD4Pz8Nj7lxNk7ohKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybQFsBG%2F3xiSoThpgq3ANXbFvGn4HhK6AIKZVvmKqrssZZp2vTlnARfel8amK%2BhBwpZead32Ni2AvQYi5%2FUjPd7OpbW0H39qSna8SXXyLzxmPoPEMTzTHnJI6Avmf9MSGuupL3FVz1qAwMyMBTDaQg7zLm98%2BPAPH%2BAvFmSMLBGmcEgTFn9isIEx4hatBfGDJjZSaP309m5LkRMhSERjcBskY6K2QrNqjk0So6eIw4HKlE%2BJbuUnsypPIYckMB%2BkGsAFENEMn4eJd%2FZsnsE7Oi3SIDUCSHOycHkgHww6Fl%2Bzs5KJaidPqhvLmLN6JxgRHxrbiyPSHF6TsQyuGd76%2B4Sl5khqgLTO%2B0wQNw6v%2FfqSgr8j%2FE0zk%2FTH3wTXXkStituIfOAZJKHZ5%2FoVJV2cfV1idSMIG3cTe56Zx6eLnFhwbHVCJ0H6RwgfQ37aPUUJ9D6N%2BW5AlMpKRWub9%2FR3vkCTzGa%2FPMS1STd6K%2FGFaSZrkyW2OAOaJjatdaCeF%2B0FcbyhJMxkYnkMev3zfCrdlkXzduRn7V4rVJAnnVgAU3I%2Fg6LmtoSD09ThYkJifG52x5EsXh%2Fns9MsrlbN5dByGRo9jZZ8t4pILEj6hsIxkOEW9SgggixM2%2F90UNiScFF83Jo2kXvkGmujJo3zCe7dnJBjqkAUF1NK2SM8qcXlHEC0%2B0JW4eGUTpHzHNEy4B3g9eN2TDI01hRgViQLqWhJf2ahlmJIFiG4oLGnq%2FQrGpSZExBp4WCcSG7kul3UGoHkqin%2BkCLotGLgRyq7iVbk0Ipnm9e7PC8QoWeBqMVqUQYctqZit7d%2FL8mH1%2FwMlZqX9dV5g2aT2FqgZaraDVoeehhgy%2Fdf2efHkZ43esHNIYeivoQGrIHMGp&X-Amz-Signature=042e27d852e081d5e09dc04eccc708b5fbf00fd983a468df8f57f9035fa0f9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
