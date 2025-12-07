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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBSE5EW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2B%2BGYEFGJvhfSlxIfFsMW63ycxaDbrOb4nWy%2BgU2fzAIgLMttzpC5oBIyYCMY%2Fz2vRgee9bA1sKt2ivZcsV8iS98qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx6PhaiUj59ORlH2CrcAyUhm8H%2FMXs4y%2B2Zq8fqLXFML4M0uzh2CURjGhwJw77rRlN34vbMot8Q8vYIK6A5ZuwY6PG60ARv%2Bib44aVPgjCYcgACpkMbbCL5nitkupkXU1zWsYaqM84g2HJHhkvOw5aRzpW%2BzT2hHf9gGMz9muOd2WhBd42ZW1XAJQyf%2F2Neg18peHBDHqbhjNgge3eGH9fY%2FPnmZoK%2FeEM32h2BY9PfllCpwz%2FLA8Y9eomre7ytz1PDPOe3VVg6LF6JsF2jaqqFB7du7q2WXQv1bZLI5V2N47PLCakkS2EYC6fkN854GvwR3A7oGLSZz7FNUZIVSvBo1r4XRGHOOuly7OhtmT8CZF6oiYJwXgbYSWOyRVGWFdVg5O1EnmonVT%2BSojXih9sZkVs6OSOhJTdtsb4G5cTY04c%2FMiL8Iq7Qct9tpYLXys%2BrfE9AIGga1lkYjR0MGhA67RxjY13XTqRXZbbPSPNnPbke5RHjUF2E2yRp6tddaRY7rBNVQ2zL%2FPgk%2FVpz9iIi1JGRyIGiPOdv3G9Ao3ml%2BrFlqXCO9UA42tXrqvwjFtMeZKMMg9aR%2BDSxlshFMRCC5DX9Iv6c%2Ba%2Fw7MIn%2FT6hYNwJHoHcYfQ2s04yJLbiWqCfkmqkiQ53QAmEMMSa1ckGOqUBWzf%2FG6YcFqP1G3HNjQaAKlI0lvuLGVRZszk8xtzUGxdAN%2BFY8U8fEO7agAPPHQf4%2FDViHi0wrnIlLcoCQ14MeHtwdP4tGGEuXqokwn8QbhY3gnZKFFwSdHRdQCep199b54w1mOFY3MRZkPuhRUVpI%2BRDs9xXLT4O1IoAoo6bO7xMHfLLR0jSBqpBblzr59EVB8dkFi8k8tO5Dhd3KeyOCPrRrRhA&X-Amz-Signature=5702a97903abd5548b520586239b6fafbddc1dfcbace9192b1ce168c8ff6db76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBSE5EW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2B%2BGYEFGJvhfSlxIfFsMW63ycxaDbrOb4nWy%2BgU2fzAIgLMttzpC5oBIyYCMY%2Fz2vRgee9bA1sKt2ivZcsV8iS98qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx6PhaiUj59ORlH2CrcAyUhm8H%2FMXs4y%2B2Zq8fqLXFML4M0uzh2CURjGhwJw77rRlN34vbMot8Q8vYIK6A5ZuwY6PG60ARv%2Bib44aVPgjCYcgACpkMbbCL5nitkupkXU1zWsYaqM84g2HJHhkvOw5aRzpW%2BzT2hHf9gGMz9muOd2WhBd42ZW1XAJQyf%2F2Neg18peHBDHqbhjNgge3eGH9fY%2FPnmZoK%2FeEM32h2BY9PfllCpwz%2FLA8Y9eomre7ytz1PDPOe3VVg6LF6JsF2jaqqFB7du7q2WXQv1bZLI5V2N47PLCakkS2EYC6fkN854GvwR3A7oGLSZz7FNUZIVSvBo1r4XRGHOOuly7OhtmT8CZF6oiYJwXgbYSWOyRVGWFdVg5O1EnmonVT%2BSojXih9sZkVs6OSOhJTdtsb4G5cTY04c%2FMiL8Iq7Qct9tpYLXys%2BrfE9AIGga1lkYjR0MGhA67RxjY13XTqRXZbbPSPNnPbke5RHjUF2E2yRp6tddaRY7rBNVQ2zL%2FPgk%2FVpz9iIi1JGRyIGiPOdv3G9Ao3ml%2BrFlqXCO9UA42tXrqvwjFtMeZKMMg9aR%2BDSxlshFMRCC5DX9Iv6c%2Ba%2Fw7MIn%2FT6hYNwJHoHcYfQ2s04yJLbiWqCfkmqkiQ53QAmEMMSa1ckGOqUBWzf%2FG6YcFqP1G3HNjQaAKlI0lvuLGVRZszk8xtzUGxdAN%2BFY8U8fEO7agAPPHQf4%2FDViHi0wrnIlLcoCQ14MeHtwdP4tGGEuXqokwn8QbhY3gnZKFFwSdHRdQCep199b54w1mOFY3MRZkPuhRUVpI%2BRDs9xXLT4O1IoAoo6bO7xMHfLLR0jSBqpBblzr59EVB8dkFi8k8tO5Dhd3KeyOCPrRrRhA&X-Amz-Signature=6fced10316d1647754f642d4f88a99fb439b531c6c82d0a9c13dcb8cfc17312d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
