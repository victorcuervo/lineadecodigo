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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GJSERI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGZqgnpI6cof47eQgtQ358wRYvSvhL%2FJNPldB%2BAIApgIhAKT1lAPJFO4ipmp6cZ5XQE5BmmKz87MRPt71YKVamzoxKv8DCGgQABoMNjM3NDIzMTgzODA1Igw0Cfkc7q3SIWTiW3oq3AOhFIjAikjJS8ag12pj%2F8a8LNbK%2B3J2YcPnbNvbVQnWrhk1ecglKbMz9q0Gp5ji3p030DwY%2BvCA%2Fn4YSgHW4x6gEv8RirIh7anrVJTrFKsxFeAIwtgVZGmt7%2BXyKyO1VsuxKSIIBRXf2C10YB%2B2IWwuWLHVYQHGOexvqKTsSDrqfbzBMxiOgSfNrGW%2FQIeAEEhdtiS4cjnT1cFcXuS2YtCEVnhGJsBzwVyLlr4lrPha%2FEKHX9wBkxoEto9bhHcnPqABmSgvl3qQw5IzEb7mzzYOzYaPs5U3LGE3LVleq4XCiVt0pq3tCRcKzk%2FVToYzMV51Tvthxhz%2BE5cEKRAwbXzDsx%2BddNkLXuEvqXahin3bSSHMsCAaZYBKPri2eXUIUkdhUORphkl9kIkiCxp5l2y%2FGThe6mpl59%2BF0iObTL0dZihxock3T1pwDhAUC4nioFvzrrwUL6h9y4z817rGlse0ReKG7maIDi7Xptggc35ORiSwEQtE9FmqdmdcH8TdfBEX5xl99rXwFxiAgB0TkUL7PUu0max5eP2fhG%2Fl2WyknBN2L5eJ2SWcDjNGV4OujYk5k20FPP1ezw8OzGeQjl1N5kXhIcjQPIrqrByZMiHoRYdb2ef%2FyzXlrOHvVjCmxs3JBjqkAQpdbb2sL4UYHGpARnChHjKzX4MSk21emUt%2FsHAmos5%2FnA2%2BAeKaqT759ZSELv1x730CQeh%2FcQ0uUfllFX%2BQIsgCnf92ewtnwtU3%2FAHl9XIfqtGjit8Pq5ga8U9xigPsvonrPuctv3J%2BUaBZj1JZ5KDNIWkqeorRKdoU9bP%2B7RB8YUjyi3hbibtrnu7ZgcjBYTg37WVf8aFp3JpC0McI%2BHC1V0j2&X-Amz-Signature=c8717cb21476977808b8f61eeb1b9267427921d737d2aed6f9f31c9dc063fe1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GJSERI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGZqgnpI6cof47eQgtQ358wRYvSvhL%2FJNPldB%2BAIApgIhAKT1lAPJFO4ipmp6cZ5XQE5BmmKz87MRPt71YKVamzoxKv8DCGgQABoMNjM3NDIzMTgzODA1Igw0Cfkc7q3SIWTiW3oq3AOhFIjAikjJS8ag12pj%2F8a8LNbK%2B3J2YcPnbNvbVQnWrhk1ecglKbMz9q0Gp5ji3p030DwY%2BvCA%2Fn4YSgHW4x6gEv8RirIh7anrVJTrFKsxFeAIwtgVZGmt7%2BXyKyO1VsuxKSIIBRXf2C10YB%2B2IWwuWLHVYQHGOexvqKTsSDrqfbzBMxiOgSfNrGW%2FQIeAEEhdtiS4cjnT1cFcXuS2YtCEVnhGJsBzwVyLlr4lrPha%2FEKHX9wBkxoEto9bhHcnPqABmSgvl3qQw5IzEb7mzzYOzYaPs5U3LGE3LVleq4XCiVt0pq3tCRcKzk%2FVToYzMV51Tvthxhz%2BE5cEKRAwbXzDsx%2BddNkLXuEvqXahin3bSSHMsCAaZYBKPri2eXUIUkdhUORphkl9kIkiCxp5l2y%2FGThe6mpl59%2BF0iObTL0dZihxock3T1pwDhAUC4nioFvzrrwUL6h9y4z817rGlse0ReKG7maIDi7Xptggc35ORiSwEQtE9FmqdmdcH8TdfBEX5xl99rXwFxiAgB0TkUL7PUu0max5eP2fhG%2Fl2WyknBN2L5eJ2SWcDjNGV4OujYk5k20FPP1ezw8OzGeQjl1N5kXhIcjQPIrqrByZMiHoRYdb2ef%2FyzXlrOHvVjCmxs3JBjqkAQpdbb2sL4UYHGpARnChHjKzX4MSk21emUt%2FsHAmos5%2FnA2%2BAeKaqT759ZSELv1x730CQeh%2FcQ0uUfllFX%2BQIsgCnf92ewtnwtU3%2FAHl9XIfqtGjit8Pq5ga8U9xigPsvonrPuctv3J%2BUaBZj1JZ5KDNIWkqeorRKdoU9bP%2B7RB8YUjyi3hbibtrnu7ZgcjBYTg37WVf8aFp3JpC0McI%2BHC1V0j2&X-Amz-Signature=d10abb358d61534c6aa079691c5b286056199bce8b72d31855688e467c69fe04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
