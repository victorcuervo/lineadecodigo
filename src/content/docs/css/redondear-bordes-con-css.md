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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD245TOS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0GKFSy09DRSuVWEhX1izotvAv6lli7%2BgvVWpqiHJnAwIgLzEe0YoL%2B8WqgRVJpGub4W8TsTTF1sYNF%2BHcRcwXFeQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNIXbTLMmj48U2RYCrcAwndII40RKOyXX1KYwZqt2GMIM5ab7f7P%2FJDDIWyGHpafrUXtHy5sxdndHxRyBSHnxjV5853RGLhD6uKCGk3Rh2Sn2kwu2jsjjDb50oJ51pSBj40iTXP%2BlMUlrfzSGBahZsCX%2B07Po8ps3ceoWBwG3dYfztbHlWJDs%2B905oGgjWc0%2F1EfHBerIYvy8AgMKSXAbk2gd2aya%2FtwaqS%2FHDSH7bQESR85eu8EuiytanOuBUZPlWRZN8X%2BayHrpVHPXxL1W9lk5gRA%2FbRMzxWlbWVSputrROnAgCpH6IFOBOAdW%2FbcgQL85JfDZcqbsj%2BPC7q5dudiPbG2EjxjjlEAfeTkUCm%2FaClzb1NyVyYkrvxki55MZSY8fAbJtDFKS09GVQxUDlWh1CUYHWR%2FXzzPSBe2V4tT%2BTjEQc7kErvQL17Rha%2FeRFQlcR3J13hGrBoMu3px0BITOY%2BdkxaXCoY8wS3cZY%2FP2d1lbdyGL0e9tkp4polbOO6ACp%2FGqw9%2Bp6bKJzljRPyVB97aJLuhJCbfmQEnSFL%2FRQ7RVQWMcCMKUmOYgJzslyHhpbt910h1ndiUIqaPH3hcrG%2Fa6Jtwdc%2BezGxEH3hqR9KfA1wtd0dmRQKyhDQNcbjLlUuvTysXl7XMKTQ2ckGOqUBfoYyOwXvAd7iNMi1zshzsznN7sYaJT%2BVFkBMdjBlU%2BpdWoatRvn4syRa75PwHtsIkS94i7%2Bxf2TQ16iSYM%2FvQmrwxuovXGLYq7DfP7Ot3mICxmOtIMHe20fwskTrY2Mj76j7bOpZtFJX%2F2frjXkT29aOI7xG%2BiNlmUO0Pg%2BobJ9U7%2BKspuOA%2FnCQejXLfrJf6Gfw15ztwceykM3gmfrEnxTKBkoK&X-Amz-Signature=4013c420011a2f8be280d096dfb9318a905f192a86f6bfbd77ae97b3653467c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD245TOS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0GKFSy09DRSuVWEhX1izotvAv6lli7%2BgvVWpqiHJnAwIgLzEe0YoL%2B8WqgRVJpGub4W8TsTTF1sYNF%2BHcRcwXFeQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNIXbTLMmj48U2RYCrcAwndII40RKOyXX1KYwZqt2GMIM5ab7f7P%2FJDDIWyGHpafrUXtHy5sxdndHxRyBSHnxjV5853RGLhD6uKCGk3Rh2Sn2kwu2jsjjDb50oJ51pSBj40iTXP%2BlMUlrfzSGBahZsCX%2B07Po8ps3ceoWBwG3dYfztbHlWJDs%2B905oGgjWc0%2F1EfHBerIYvy8AgMKSXAbk2gd2aya%2FtwaqS%2FHDSH7bQESR85eu8EuiytanOuBUZPlWRZN8X%2BayHrpVHPXxL1W9lk5gRA%2FbRMzxWlbWVSputrROnAgCpH6IFOBOAdW%2FbcgQL85JfDZcqbsj%2BPC7q5dudiPbG2EjxjjlEAfeTkUCm%2FaClzb1NyVyYkrvxki55MZSY8fAbJtDFKS09GVQxUDlWh1CUYHWR%2FXzzPSBe2V4tT%2BTjEQc7kErvQL17Rha%2FeRFQlcR3J13hGrBoMu3px0BITOY%2BdkxaXCoY8wS3cZY%2FP2d1lbdyGL0e9tkp4polbOO6ACp%2FGqw9%2Bp6bKJzljRPyVB97aJLuhJCbfmQEnSFL%2FRQ7RVQWMcCMKUmOYgJzslyHhpbt910h1ndiUIqaPH3hcrG%2Fa6Jtwdc%2BezGxEH3hqR9KfA1wtd0dmRQKyhDQNcbjLlUuvTysXl7XMKTQ2ckGOqUBfoYyOwXvAd7iNMi1zshzsznN7sYaJT%2BVFkBMdjBlU%2BpdWoatRvn4syRa75PwHtsIkS94i7%2Bxf2TQ16iSYM%2FvQmrwxuovXGLYq7DfP7Ot3mICxmOtIMHe20fwskTrY2Mj76j7bOpZtFJX%2F2frjXkT29aOI7xG%2BiNlmUO0Pg%2BobJ9U7%2BKspuOA%2FnCQejXLfrJf6Gfw15ztwceykM3gmfrEnxTKBkoK&X-Amz-Signature=512aba54ca5ebe622d8c26adabdca867522846cf367df7db6d05166cd9df173e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
