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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CY2QTT2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrsVUJhWBV9Cjg%2BsJInuTBgyAsHDDQtRoC7N4M6NAPPAiB41Lnurm6NgHT5KhlSsR7FhdMI4xrJYJdVk790bHy4%2BSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMGpDsH9w3yl6B3w36KtwDKz37fvFDAW2nFDVaOcyFvhiSj9LnetGkYY9wiPfv8%2BEO%2FuI8JNDjfnh8PhnwlUr8IIpXmY%2FpuYiOcH6a75Hdrrf1Nz3ggeVn1nwfxk838RMTKMSvl8jA2CFJ7BeOxe7TSabMS9cyS9n3qg8gz2msN2wIVZn4aGmncy522HtU453IZ2dlTp3uguuBLLhQ%2F1FkRnVKY3yCNHUeXRNo%2FlkxknriVoSUaQ%2FcWr9ZIWMhC6nyZWlFpmghX1mhzq3%2FBQmSulzXMgUW%2FSs9lyWSU35K267ZErIA38CFokCh%2BwGvavSgPGJ6mdRhXmkzrv67yYPefJ8K3y0tI%2B3IZQIpyeYtQ8ZN0R5iPNO0iwNHRnfmwnKlnMnt035JLrFmOtyGs8DBBFvCmWIGfFzV9e03UwHXZDvfPgII0Pn%2FsyConl92e%2BqnrBwN%2BrhUeI6KgvSyhX8B9XGbexJHhGEdggiSXARR4o6OoO9qQgb2Q2uxNeV93g5bc05LFaZRuMmuqxJXLmyYvws1xkBDbx2RJVz1g4LFLIP4C16Qwc1xBw%2FG24JgyZaPwHJRdcDiQSBxClCCt7zAG4RrYb2wBkPnnvL8ixh2RLcANsDMMSos1TlKI6Q%2FeZMg7x4K2TvA7pSNnt4wqKbQyQY6pgFA32VtfRBUFM8p4geHf5W4t98TyAlWAJJkVvAcBNKCzQTjAS5wmm10heeHV3f0vU7TUrp0Ir%2F%2FDxOGWEJmeXW4ncVfAvScxS8GIfAbuRD4FWqhGc6VtgiqRza5Z5qMNTRrdI5EMToXl%2BSjNz277Pnz5CxaNl23J%2BYY4vk%2BBxYgZ6i46yZ9Fwq%2BwGkvB5NbCHdKU1cwWV93igkVNFRfNSTN3IKjY8qq&X-Amz-Signature=2b0c839cfde3048c45b688b833f430f02c957166a7633f5179b230744f943b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CY2QTT2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrsVUJhWBV9Cjg%2BsJInuTBgyAsHDDQtRoC7N4M6NAPPAiB41Lnurm6NgHT5KhlSsR7FhdMI4xrJYJdVk790bHy4%2BSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMGpDsH9w3yl6B3w36KtwDKz37fvFDAW2nFDVaOcyFvhiSj9LnetGkYY9wiPfv8%2BEO%2FuI8JNDjfnh8PhnwlUr8IIpXmY%2FpuYiOcH6a75Hdrrf1Nz3ggeVn1nwfxk838RMTKMSvl8jA2CFJ7BeOxe7TSabMS9cyS9n3qg8gz2msN2wIVZn4aGmncy522HtU453IZ2dlTp3uguuBLLhQ%2F1FkRnVKY3yCNHUeXRNo%2FlkxknriVoSUaQ%2FcWr9ZIWMhC6nyZWlFpmghX1mhzq3%2FBQmSulzXMgUW%2FSs9lyWSU35K267ZErIA38CFokCh%2BwGvavSgPGJ6mdRhXmkzrv67yYPefJ8K3y0tI%2B3IZQIpyeYtQ8ZN0R5iPNO0iwNHRnfmwnKlnMnt035JLrFmOtyGs8DBBFvCmWIGfFzV9e03UwHXZDvfPgII0Pn%2FsyConl92e%2BqnrBwN%2BrhUeI6KgvSyhX8B9XGbexJHhGEdggiSXARR4o6OoO9qQgb2Q2uxNeV93g5bc05LFaZRuMmuqxJXLmyYvws1xkBDbx2RJVz1g4LFLIP4C16Qwc1xBw%2FG24JgyZaPwHJRdcDiQSBxClCCt7zAG4RrYb2wBkPnnvL8ixh2RLcANsDMMSos1TlKI6Q%2FeZMg7x4K2TvA7pSNnt4wqKbQyQY6pgFA32VtfRBUFM8p4geHf5W4t98TyAlWAJJkVvAcBNKCzQTjAS5wmm10heeHV3f0vU7TUrp0Ir%2F%2FDxOGWEJmeXW4ncVfAvScxS8GIfAbuRD4FWqhGc6VtgiqRza5Z5qMNTRrdI5EMToXl%2BSjNz277Pnz5CxaNl23J%2BYY4vk%2BBxYgZ6i46yZ9Fwq%2BwGkvB5NbCHdKU1cwWV93igkVNFRfNSTN3IKjY8qq&X-Amz-Signature=f7e70d9714b3664ec40de2150a17a830d8fb56c4743177550c528a804fe956bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
