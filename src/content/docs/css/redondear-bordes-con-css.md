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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHQEGFS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGghtykRhJnL6SbhXklFZfwuXXTqahYuJFY5fmlS9eodAiEAwSSLaBoqLnG%2FZIijbLpH8s%2FTbQNqpbeS%2B55fBlANggwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPI3W%2FCImCbL6Nv7aSrcA4NPFUNEWcjOVRX7LiM8rwY22ymj5hbeKHrIG5g1Hkce02McszjOnFaDpN7NZ7u9rRNhrjcMoxf9BqxT%2Bsk8MiL5h2ecOF0DtfsyOqJzHzZk0S5bABwcR%2BG9j2vQMMDL0xReZCA%2FY%2Bs2gMrRbgDuaRC%2BNDqkRIjT%2BBMxfN69rZMucqXwW1Sf5SXnz6BGarccXsjZ9AwtHFL%2Fb4iRXjPRvsskrvg%2F6SI5rec1aJO4t1BDSgaDkZXPZXb6z8i7EWK5%2F1ek33bjFnlketzVL4lvoa4JQ9QILT1LrJN8ys%2FlIW%2FwQjqsAOUV0nggSHglXhyCRK6MDx4PLqqHY8nowtyz0%2B638Gf7OZMXmQYv6FrJwp65YVOPMoxpUgWFNrrN5m7lgBkFHI%2FFqK0PTzgNrrIS4s8FDek%2FpO%2Book4heydKGuKYacByl7MuRVR3DXx1oGs%2FAT6aKMVrBUSRHzD5HAxuaB4F2qitE6xf56q8VrsL16vccwioQW9myhMoNC3zng6YI7w5gCRO1A%2FYjONBeh9teXKKsKhXNRrxP20R9wxSe4Px9CBdYEQSaoK%2BJhhN5hE59FnUmfJmim1yqCNB7Gm%2FaKcCqtMVS9yMLc%2FrcswTYTGvcF5C9hvaL38AlEfSMMPzy8kGOqUBxsYLohNjnIt4drpmYuiAssgeb0I9bIfuyNaPV1LXp%2Ff3yL5F9wg9tfxaLnKzF5NyDMeuZGLPLGrpINtx2l5zUJFnPWiZT8LMNPecI%2F2VWGBa%2Fq8%2F6bf7KML8fGJ4JCpdmIRi68H0ofGQWZKI2yLQO2LLwFYG%2BTailUgk8yEmwpEqiGneb8RtB0QmqMidtE0XIz5TssUSnRL5veG70qw0J8icUao3&X-Amz-Signature=78eb103b1f93638a1e71455021a20cb74c75a028a6f3b8ac761404cd3617a92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHQEGFS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGghtykRhJnL6SbhXklFZfwuXXTqahYuJFY5fmlS9eodAiEAwSSLaBoqLnG%2FZIijbLpH8s%2FTbQNqpbeS%2B55fBlANggwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPI3W%2FCImCbL6Nv7aSrcA4NPFUNEWcjOVRX7LiM8rwY22ymj5hbeKHrIG5g1Hkce02McszjOnFaDpN7NZ7u9rRNhrjcMoxf9BqxT%2Bsk8MiL5h2ecOF0DtfsyOqJzHzZk0S5bABwcR%2BG9j2vQMMDL0xReZCA%2FY%2Bs2gMrRbgDuaRC%2BNDqkRIjT%2BBMxfN69rZMucqXwW1Sf5SXnz6BGarccXsjZ9AwtHFL%2Fb4iRXjPRvsskrvg%2F6SI5rec1aJO4t1BDSgaDkZXPZXb6z8i7EWK5%2F1ek33bjFnlketzVL4lvoa4JQ9QILT1LrJN8ys%2FlIW%2FwQjqsAOUV0nggSHglXhyCRK6MDx4PLqqHY8nowtyz0%2B638Gf7OZMXmQYv6FrJwp65YVOPMoxpUgWFNrrN5m7lgBkFHI%2FFqK0PTzgNrrIS4s8FDek%2FpO%2Book4heydKGuKYacByl7MuRVR3DXx1oGs%2FAT6aKMVrBUSRHzD5HAxuaB4F2qitE6xf56q8VrsL16vccwioQW9myhMoNC3zng6YI7w5gCRO1A%2FYjONBeh9teXKKsKhXNRrxP20R9wxSe4Px9CBdYEQSaoK%2BJhhN5hE59FnUmfJmim1yqCNB7Gm%2FaKcCqtMVS9yMLc%2FrcswTYTGvcF5C9hvaL38AlEfSMMPzy8kGOqUBxsYLohNjnIt4drpmYuiAssgeb0I9bIfuyNaPV1LXp%2Ff3yL5F9wg9tfxaLnKzF5NyDMeuZGLPLGrpINtx2l5zUJFnPWiZT8LMNPecI%2F2VWGBa%2Fq8%2F6bf7KML8fGJ4JCpdmIRi68H0ofGQWZKI2yLQO2LLwFYG%2BTailUgk8yEmwpEqiGneb8RtB0QmqMidtE0XIz5TssUSnRL5veG70qw0J8icUao3&X-Amz-Signature=88d7b8dedf1266f068dec192ea3543eee3db50e31839808854b73b3bfa99d91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
