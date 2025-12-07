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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMILNKZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXSHRBgP%2BZVAGjaVh7RdWVOJemX3Q0dt42NqT88bFPqAiEAm%2BoPv9Wf52cIg1JszTaMPASuBqz9ARol%2BaKvTNfZ218qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbW5hTUt%2Bf1YRc70yrcA8y%2Ba1OcME3OW1jvBY9lNb%2FD7pERKhPqnufxp81Vr%2BxR0tRJOLVAwNEQ7DgvkduPmD6w%2BnZ19zFmzOk6A5sbVQ8phLXUjDolfTkd9fLW1nE2yEdqEYHF2aFoMQU0rCo3fNX5qNndSdF%2BQGr9Vz7bcxyRTUS6eqNk6Ry8THIsXNKOz%2BCjDtY5UB4MDiaqOwf73CUXzqU%2BZYlxmdsWrnXhyrPKqcf74h9eTzyXRUsou95EQ5ZMNAIKFyzyuqzcE8t9LoYCgqIliRPVD0u%2Fx5O0%2B%2F%2Bqq2VTmxP%2FzQbvS%2FMpllMCwdM9aCyCoxJYdb4q%2Bx8vRnXkZICUH%2FR3psqWv5eR6u57fUHaFDxV5PB6w2n912eswOmgP2L8%2Fj50NULrSovRLiy4v4HIauyLTk8jSNnElXNKZSLTpGbQsUZgUpzRwuJeJ7S9zARd%2F32YHeWTcJnJHX%2FGgSJZc%2FXAgC2E%2BLkgw6lUQPrnh4QuHEP2UiJaWl5z3xM1eDMhYElq4n51dUgLRKIc%2Fplmbaz%2BGbBqlEXhu9sU%2FLVy0%2FMqWaYS4NFZhPlKaCSu8eQjR%2FMBmL7CqcsOIUvmdC1n3HlUL6SrSLHymo4ImeEoQcQxI1trEdhM8PyQmllklvsDuLTAY3ZeMISa1ckGOqUBgPIU1ZXFNcmVm%2FJJbRY4bBtoI0HxXaeVK%2FkovoubeQhjZEtRn6kaYNPtEoq67jL1kKC2SMZLP4h%2BQmRIoke8ehfCz173TDP93sa5TPofiClxsdOqkIPeDX5bc3bTGpI8k7kAuMME4JnTwh4M7NHB8m0HNMwFWQohYRUXCqqDh27mUYAXoPQAEZR0wddPwePFmgea0oaZ5qhRirnOaQ3DIXGXoPCN&X-Amz-Signature=5b8c73f2455f99a30ae6c9de24777a9f747bc5ba9f54440a70c9a4729b8f3ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMILNKZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXSHRBgP%2BZVAGjaVh7RdWVOJemX3Q0dt42NqT88bFPqAiEAm%2BoPv9Wf52cIg1JszTaMPASuBqz9ARol%2BaKvTNfZ218qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbW5hTUt%2Bf1YRc70yrcA8y%2Ba1OcME3OW1jvBY9lNb%2FD7pERKhPqnufxp81Vr%2BxR0tRJOLVAwNEQ7DgvkduPmD6w%2BnZ19zFmzOk6A5sbVQ8phLXUjDolfTkd9fLW1nE2yEdqEYHF2aFoMQU0rCo3fNX5qNndSdF%2BQGr9Vz7bcxyRTUS6eqNk6Ry8THIsXNKOz%2BCjDtY5UB4MDiaqOwf73CUXzqU%2BZYlxmdsWrnXhyrPKqcf74h9eTzyXRUsou95EQ5ZMNAIKFyzyuqzcE8t9LoYCgqIliRPVD0u%2Fx5O0%2B%2F%2Bqq2VTmxP%2FzQbvS%2FMpllMCwdM9aCyCoxJYdb4q%2Bx8vRnXkZICUH%2FR3psqWv5eR6u57fUHaFDxV5PB6w2n912eswOmgP2L8%2Fj50NULrSovRLiy4v4HIauyLTk8jSNnElXNKZSLTpGbQsUZgUpzRwuJeJ7S9zARd%2F32YHeWTcJnJHX%2FGgSJZc%2FXAgC2E%2BLkgw6lUQPrnh4QuHEP2UiJaWl5z3xM1eDMhYElq4n51dUgLRKIc%2Fplmbaz%2BGbBqlEXhu9sU%2FLVy0%2FMqWaYS4NFZhPlKaCSu8eQjR%2FMBmL7CqcsOIUvmdC1n3HlUL6SrSLHymo4ImeEoQcQxI1trEdhM8PyQmllklvsDuLTAY3ZeMISa1ckGOqUBgPIU1ZXFNcmVm%2FJJbRY4bBtoI0HxXaeVK%2FkovoubeQhjZEtRn6kaYNPtEoq67jL1kKC2SMZLP4h%2BQmRIoke8ehfCz173TDP93sa5TPofiClxsdOqkIPeDX5bc3bTGpI8k7kAuMME4JnTwh4M7NHB8m0HNMwFWQohYRUXCqqDh27mUYAXoPQAEZR0wddPwePFmgea0oaZ5qhRirnOaQ3DIXGXoPCN&X-Amz-Signature=3c74eb15dcf838290900f8a5ff60bbf4b9005e9231d014d351295503312cff14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
