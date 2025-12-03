---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITE4JAC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFA%2BpxmTFXq8lrVWqazDo8aLqWAELVh1id%2BqJ9%2FyiWasAiArHAKWSDsUM5Wrq4QVDBKwUexIIu2OsYrHQtauZ%2BEPAir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMY4eenm5kvVOY3rEoKtwDg8y%2FXLdyHmj0ldEe3cKzJ6IAYAS%2BJ2b2fvLu7zPNifBXmwn9wbL96CbJF%2Bl3FwIOpdQukaqxN3Zcl5T3waC%2BqoXinNtvxEukyV1tX9J8LPr7cil1AQUihzxvVLXOidIMlG%2Fm41lqK7IUHZtbeWkFM%2F4m1jRm4Lq9aH%2BT7xQDv61s7A5MWwzUTY737KHdzVWPWcx5RrHdt0Lh6Sz36jSmQ6NwaGJoFfBwpD7DivOTaQ2uzROPIRBbf9YiVkLpv0Ud07shuvVTSDg3%2FHK6KreLO0O%2F6pSOyHzbNc%2FvB4wYoQAYrrLpb5tZeKeufe5IzsuXH520D1OOyeszQ2CDFpBKjvVVOxowWGEKBIvazZNfGB8pJvUlu0EsDwbLAV5%2FtKmslbXz7GRLrUcdagu6wtE%2FG026PQWTtiVHybfxWMgnbPtcbTMWO%2B2YCJiC5naS%2BvOAPzuwSg7%2BnWNP97fS7yk5eCvFuOJfC2U3gFCvWXOGgcADW48PsmkTJ5Ix%2Fx3yQeKoqTGQktEP0Q4PVjE4sEche%2FwPLqqw1lunHNcTb1a1nTyFSMm8lVQhYDZtQ771%2B2xKu8bSgNWYidQO1PHs%2BH%2BrzueNo5zw4LYBsT%2Ba2P7WE1T3aTUdkvQlql%2FvUoswnb3CyQY6pgEDUgt%2FYTxDgjeVTKD0Ul6BAGFf1o0FZ3Uxs91MGyWoGb76qcO0zCZTsry3AZE0JXk6%2FKMuWJAIRBhPdaPVVEQeWLs%2FMbB%2BiYmCiPlWYcTsSCM%2B12w3daa5KfK7fOyCUvXxCez1MbQxVmch5aYnVtPfsOcU5neoy3WJRrR341hj2nZZrg2trq9whKQGUeq3mvyPie%2FYj6%2Ba3L%2FhAs6IrM78nNBqo1fR&X-Amz-Signature=057f5ef4cb039f749f7266e79e74087aa222bf2d6d1cef50f91be04c6b2f4ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITE4JAC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFA%2BpxmTFXq8lrVWqazDo8aLqWAELVh1id%2BqJ9%2FyiWasAiArHAKWSDsUM5Wrq4QVDBKwUexIIu2OsYrHQtauZ%2BEPAir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMY4eenm5kvVOY3rEoKtwDg8y%2FXLdyHmj0ldEe3cKzJ6IAYAS%2BJ2b2fvLu7zPNifBXmwn9wbL96CbJF%2Bl3FwIOpdQukaqxN3Zcl5T3waC%2BqoXinNtvxEukyV1tX9J8LPr7cil1AQUihzxvVLXOidIMlG%2Fm41lqK7IUHZtbeWkFM%2F4m1jRm4Lq9aH%2BT7xQDv61s7A5MWwzUTY737KHdzVWPWcx5RrHdt0Lh6Sz36jSmQ6NwaGJoFfBwpD7DivOTaQ2uzROPIRBbf9YiVkLpv0Ud07shuvVTSDg3%2FHK6KreLO0O%2F6pSOyHzbNc%2FvB4wYoQAYrrLpb5tZeKeufe5IzsuXH520D1OOyeszQ2CDFpBKjvVVOxowWGEKBIvazZNfGB8pJvUlu0EsDwbLAV5%2FtKmslbXz7GRLrUcdagu6wtE%2FG026PQWTtiVHybfxWMgnbPtcbTMWO%2B2YCJiC5naS%2BvOAPzuwSg7%2BnWNP97fS7yk5eCvFuOJfC2U3gFCvWXOGgcADW48PsmkTJ5Ix%2Fx3yQeKoqTGQktEP0Q4PVjE4sEche%2FwPLqqw1lunHNcTb1a1nTyFSMm8lVQhYDZtQ771%2B2xKu8bSgNWYidQO1PHs%2BH%2BrzueNo5zw4LYBsT%2Ba2P7WE1T3aTUdkvQlql%2FvUoswnb3CyQY6pgEDUgt%2FYTxDgjeVTKD0Ul6BAGFf1o0FZ3Uxs91MGyWoGb76qcO0zCZTsry3AZE0JXk6%2FKMuWJAIRBhPdaPVVEQeWLs%2FMbB%2BiYmCiPlWYcTsSCM%2B12w3daa5KfK7fOyCUvXxCez1MbQxVmch5aYnVtPfsOcU5neoy3WJRrR341hj2nZZrg2trq9whKQGUeq3mvyPie%2FYj6%2Ba3L%2FhAs6IrM78nNBqo1fR&X-Amz-Signature=178b1176c0322041c25a33190290579d92e2cc23d47813d8415a00fd9650427b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
