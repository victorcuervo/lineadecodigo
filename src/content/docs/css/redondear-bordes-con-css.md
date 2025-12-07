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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6BOFFP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9uHghi46JSH8dOvppkQFnrAd9e5p9PMKDNBYOvL0e6wIgJcL%2BjzG6tbqZnKHHQsxXbRUQQKGojIVF4DXjB89RrW8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf%2Fn2Io7a2Tcssf6ircA%2BdnQk4NZ%2FMZX9F7a2lZLgCQAbCZoFOt2SEjFZwc7piAoyJqUVLcZgJJbxX1Kb0DwoyIomMe88SuQl%2Bxq6S6qM5p8rJxgMr4ubLxSLA6fzWkVcsmuSeVQ2V1TRvNAdRC55Mf6H0duE01it2BcOzIhENT%2Fyw92mmuP1R01Z4BRvvUSuBxk8m1AQIvUMsA7Y4%2FEOpqFm8rdnYVhS36AMLfa95t0vSh%2BraBy%2BecrfnA5dZ%2F851rfwByOkv0f%2BRkLIyN0Ty43liO2WhDWVrozSInvZxOTw7EbjRI67L7tmbmJjg%2F54%2Bh7NBfOqe0MbiWEPMC2Fl%2F%2Fd2DriJYfUbhdZoiu4VTTl18lXLhMtHlXLFQWzhLScVkFPe2aNUkeEE5NrvgWs0lW0EoZNur%2BHbvhFB%2B2gAAX9W%2Bgurm1oaeutEQ%2BOs843k3zUiTkRyU5cga2qyMt4yFrAqI%2FGGM1PDG19IjBowuJS4SriUHEpNUi5ohJnULpi3IVIp%2BaGBzzX%2B2TOucBv2osKEjAC4010fLGdzMPwDAMCJubeV6Yunb2SBn3MuYAJ7Lw5Rdj%2FVGDwZKUTXnQlmSoZbgvKj3%2FA1nvcNr9%2Beh7tmEEmJm0dx%2Fcb2x%2BpjyFBDLfPWGdzML%2FxuTMLaZ1ckGOqUBX7ap7iMiGIAQQMOu%2B0dh2yimc3DjtW%2FIOp8I7f3wUt5lWCNokNPNwYv0c8o9tPkLzfZbZ6QSG%2FVMq088rzqlRkAMRmal9Bczzqywvp4tRGS4ak%2FzhE5VO9O45w6Z6CHVfj0jVdvk4sjh1yfyY4ityEmvI21nNVpB2RZ2asm1n2Nj04OijWedoWL7pLcZOcCv1Zl%2BfR5ZyzSa3R5GXr1yt9fMZnI8&X-Amz-Signature=391ccbe194604ee46e3080e6cc6fb653667e6ad14ba80864149cb3383f82a1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6BOFFP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9uHghi46JSH8dOvppkQFnrAd9e5p9PMKDNBYOvL0e6wIgJcL%2BjzG6tbqZnKHHQsxXbRUQQKGojIVF4DXjB89RrW8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf%2Fn2Io7a2Tcssf6ircA%2BdnQk4NZ%2FMZX9F7a2lZLgCQAbCZoFOt2SEjFZwc7piAoyJqUVLcZgJJbxX1Kb0DwoyIomMe88SuQl%2Bxq6S6qM5p8rJxgMr4ubLxSLA6fzWkVcsmuSeVQ2V1TRvNAdRC55Mf6H0duE01it2BcOzIhENT%2Fyw92mmuP1R01Z4BRvvUSuBxk8m1AQIvUMsA7Y4%2FEOpqFm8rdnYVhS36AMLfa95t0vSh%2BraBy%2BecrfnA5dZ%2F851rfwByOkv0f%2BRkLIyN0Ty43liO2WhDWVrozSInvZxOTw7EbjRI67L7tmbmJjg%2F54%2Bh7NBfOqe0MbiWEPMC2Fl%2F%2Fd2DriJYfUbhdZoiu4VTTl18lXLhMtHlXLFQWzhLScVkFPe2aNUkeEE5NrvgWs0lW0EoZNur%2BHbvhFB%2B2gAAX9W%2Bgurm1oaeutEQ%2BOs843k3zUiTkRyU5cga2qyMt4yFrAqI%2FGGM1PDG19IjBowuJS4SriUHEpNUi5ohJnULpi3IVIp%2BaGBzzX%2B2TOucBv2osKEjAC4010fLGdzMPwDAMCJubeV6Yunb2SBn3MuYAJ7Lw5Rdj%2FVGDwZKUTXnQlmSoZbgvKj3%2FA1nvcNr9%2Beh7tmEEmJm0dx%2Fcb2x%2BpjyFBDLfPWGdzML%2FxuTMLaZ1ckGOqUBX7ap7iMiGIAQQMOu%2B0dh2yimc3DjtW%2FIOp8I7f3wUt5lWCNokNPNwYv0c8o9tPkLzfZbZ6QSG%2FVMq088rzqlRkAMRmal9Bczzqywvp4tRGS4ak%2FzhE5VO9O45w6Z6CHVfj0jVdvk4sjh1yfyY4ityEmvI21nNVpB2RZ2asm1n2Nj04OijWedoWL7pLcZOcCv1Zl%2BfR5ZyzSa3R5GXr1yt9fMZnI8&X-Amz-Signature=7baee7c15fa37d2fbf3cc65414f0ea3af008749e674905612fe0c236c000f65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
