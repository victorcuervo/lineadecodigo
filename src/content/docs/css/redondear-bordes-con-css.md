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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK7URKZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG12ZdOx0XSORxB7SdviwZGd2UHDZpetxqtQDiAx%2BxjPAiAaZlJx4Kjh4q5f%2F4wKOgUPAaD%2BFGug5a1ecmQK7fOxxyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgIUf2Q4XIchqh5EKtwDL83lT%2FvVnEwpGbvNuXuHobsQgjoS%2FWXUJTFzj6P%2FgxSw9SQOHJEc9wqTGEr3WL4J1iUlnlowO2bclFIAMNwaA4kRvzETNi5gIrauP9TShbbnIymr%2FOMfKXXWi4nnUCuJhf6PS8gI%2BA7rN5UtVDSldF0D3fTopqzsPeG1jg8rgqbgRMQXEFaEXc1H7WJDIs0G3%2F8XayFaAoKSWcDAleIfdei9Efks0DnDGhdQ4ULS3WYgj2FPP1Cb7sZB257%2BTZfPJ9dlg0HcpywJlDkhQaoJySNaIpobEJ8GPRs%2FpUbAw%2B4VW9bUyqDPslbGOgTjWk0LvoxLjykaKP7S8CFuGsK5aq%2BMnhHgfaNHLqoJp0t4otUqz2Y4jZJmzuC7zQqq0124l1ISS1IvoG%2FYq%2Ba9GhMGLW%2B56tCTcA7Y7g5kliomyJidKpPHrrVEs3FagBlEdFpGtovASAM4ctdxr1skFis5npmHEzYwD4hGc%2BCvtwlVmCOxqR%2B55AZQk8K6i7%2FBbiHOQvRz3xb%2Bwasiq%2Bf%2FQP1Gy9%2Ft1oDKYvrD95f8JC1OOkuKeX9RESBDXFgh3jG3VrqOgJm62DYgrMUfhbx769kTkQkqtiKY74KeETj89Lca3Brb4PuFZVnkoytM3EswpZ7UyQY6pgErMtYMbSuPF3%2FjWhYw1iSHKmi02I%2FXm53EaZu%2F9ZB4dezAwCvGAkR6ifsBJD79qv9jWXDXqY7bKxMPru8gP0YUy75WERBLITjmsGq8kBHsMXOu3KquZ%2BB7fG4hDn5D9T39AGq2oPj%2Ffzwg%2FkztN2LAISnYxU4NgLaQEADXW2dssC%2B%2FTrvbLMd3SOdbhkqcG14Qpq4mc4lUFQd1JnO4JMXrGrLzAana&X-Amz-Signature=c5b413c07994f928c95add960f43729c02fa1a565b570561db55591cb012fa94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK7URKZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG12ZdOx0XSORxB7SdviwZGd2UHDZpetxqtQDiAx%2BxjPAiAaZlJx4Kjh4q5f%2F4wKOgUPAaD%2BFGug5a1ecmQK7fOxxyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgIUf2Q4XIchqh5EKtwDL83lT%2FvVnEwpGbvNuXuHobsQgjoS%2FWXUJTFzj6P%2FgxSw9SQOHJEc9wqTGEr3WL4J1iUlnlowO2bclFIAMNwaA4kRvzETNi5gIrauP9TShbbnIymr%2FOMfKXXWi4nnUCuJhf6PS8gI%2BA7rN5UtVDSldF0D3fTopqzsPeG1jg8rgqbgRMQXEFaEXc1H7WJDIs0G3%2F8XayFaAoKSWcDAleIfdei9Efks0DnDGhdQ4ULS3WYgj2FPP1Cb7sZB257%2BTZfPJ9dlg0HcpywJlDkhQaoJySNaIpobEJ8GPRs%2FpUbAw%2B4VW9bUyqDPslbGOgTjWk0LvoxLjykaKP7S8CFuGsK5aq%2BMnhHgfaNHLqoJp0t4otUqz2Y4jZJmzuC7zQqq0124l1ISS1IvoG%2FYq%2Ba9GhMGLW%2B56tCTcA7Y7g5kliomyJidKpPHrrVEs3FagBlEdFpGtovASAM4ctdxr1skFis5npmHEzYwD4hGc%2BCvtwlVmCOxqR%2B55AZQk8K6i7%2FBbiHOQvRz3xb%2Bwasiq%2Bf%2FQP1Gy9%2Ft1oDKYvrD95f8JC1OOkuKeX9RESBDXFgh3jG3VrqOgJm62DYgrMUfhbx769kTkQkqtiKY74KeETj89Lca3Brb4PuFZVnkoytM3EswpZ7UyQY6pgErMtYMbSuPF3%2FjWhYw1iSHKmi02I%2FXm53EaZu%2F9ZB4dezAwCvGAkR6ifsBJD79qv9jWXDXqY7bKxMPru8gP0YUy75WERBLITjmsGq8kBHsMXOu3KquZ%2BB7fG4hDn5D9T39AGq2oPj%2Ffzwg%2FkztN2LAISnYxU4NgLaQEADXW2dssC%2B%2FTrvbLMd3SOdbhkqcG14Qpq4mc4lUFQd1JnO4JMXrGrLzAana&X-Amz-Signature=52da74665878f8496410d0b6f4ca7b662819eef7ef1e9e68257aab0dc7885fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
