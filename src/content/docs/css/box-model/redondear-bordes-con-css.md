---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV55Q2GS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoZ0SiGR37QjQ5g7tae98dk1zLdNFFRGzxM8TTlasZnAiBUZW8pjBisrKGbCs1PP9htCr9js7r5DA5E7Ex5tWDHiCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ5HsiDCzfuSL5VspKtwDYub56ow1GQ91kEAGtIVVjtaKKh7a1N%2FbvMNaS5nHT1Mqvgl%2FiG9xlz6RGuuI3etlag14POTEvtS3zEbIrLmuQW7RkjDaOvLOOSRUsVMuknT6VPB%2BedXWoy1s64z%2FLbkbbGK3j%2FoiwaqDuqJPLuJkuajAOrkmuuYW0ZbNR%2BWGWCLR9slLg9wEE5yfNGI9pQ8wa1NoylBylTWYcDyZFpJgsB1nASyYyiJ9mQofeLGVoYrrr7Vs4TWCzfRHDkwJbX1oFwP%2BfrQmjAsfnBwgdrH7XpGNODYyHp1Q5bgtZ7c0PiKln5GAfS4Kk1Mc1LKaJaAR7mwwJGupfUdnLvX3JQzxf9vJ8sU2QdmbewSQIMpBVHf6nQwdLzdYsYcrtfN0rAbQ1HHGcwOFkWpgVRvtEL%2FKDCrZFy3O3DYw%2F43hRRcsIKvwCm5KGBtA0aP%2BYvN6TuQivKRqk8%2FFaUmPjiXKn5VtAdsaflieEHicgp%2Fy3NI0Xv4nJdb4cpNGXjQ91v3eKF5Ti9jQdHVBhv%2FwX4vmsHPKdx14sl5VQ%2FVlnBWqnblc0i83a%2BOxavRdqAYWlGrRQYGo7yheHCJkoBHfp25S6tdX6C4ELFK5a141g1fVNZ2vVSMQQh7qeaYblMgDSCwwsoyMygY6pgF9nYvqBWmt4fVITnvHFgzaNIADv3bCSWHiYB3i%2BkuTmmUUJlACLdRu3Psf%2B0QRxwaqHGt4lfVvi3K8vP40v%2BcH8pfWJT3M67Vwlaz%2FwHEF185rmtR4O%2FcEQ0FWyLNuA5a7gdWoy6WhCF%2Bu3wXs2UyIl70fTsmKH6YAfq1dpRFXpdwG6S52FnU6t%2B46RdQWRMC3HaCbWGnZABZ%2B3bJp%2Bb1BNd6ga1DV&X-Amz-Signature=982496bf7d11af613b9f44e7448d7c60818a09fdcbe879aa60895232fc35a3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV55Q2GS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoZ0SiGR37QjQ5g7tae98dk1zLdNFFRGzxM8TTlasZnAiBUZW8pjBisrKGbCs1PP9htCr9js7r5DA5E7Ex5tWDHiCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ5HsiDCzfuSL5VspKtwDYub56ow1GQ91kEAGtIVVjtaKKh7a1N%2FbvMNaS5nHT1Mqvgl%2FiG9xlz6RGuuI3etlag14POTEvtS3zEbIrLmuQW7RkjDaOvLOOSRUsVMuknT6VPB%2BedXWoy1s64z%2FLbkbbGK3j%2FoiwaqDuqJPLuJkuajAOrkmuuYW0ZbNR%2BWGWCLR9slLg9wEE5yfNGI9pQ8wa1NoylBylTWYcDyZFpJgsB1nASyYyiJ9mQofeLGVoYrrr7Vs4TWCzfRHDkwJbX1oFwP%2BfrQmjAsfnBwgdrH7XpGNODYyHp1Q5bgtZ7c0PiKln5GAfS4Kk1Mc1LKaJaAR7mwwJGupfUdnLvX3JQzxf9vJ8sU2QdmbewSQIMpBVHf6nQwdLzdYsYcrtfN0rAbQ1HHGcwOFkWpgVRvtEL%2FKDCrZFy3O3DYw%2F43hRRcsIKvwCm5KGBtA0aP%2BYvN6TuQivKRqk8%2FFaUmPjiXKn5VtAdsaflieEHicgp%2Fy3NI0Xv4nJdb4cpNGXjQ91v3eKF5Ti9jQdHVBhv%2FwX4vmsHPKdx14sl5VQ%2FVlnBWqnblc0i83a%2BOxavRdqAYWlGrRQYGo7yheHCJkoBHfp25S6tdX6C4ELFK5a141g1fVNZ2vVSMQQh7qeaYblMgDSCwwsoyMygY6pgF9nYvqBWmt4fVITnvHFgzaNIADv3bCSWHiYB3i%2BkuTmmUUJlACLdRu3Psf%2B0QRxwaqHGt4lfVvi3K8vP40v%2BcH8pfWJT3M67Vwlaz%2FwHEF185rmtR4O%2FcEQ0FWyLNuA5a7gdWoy6WhCF%2Bu3wXs2UyIl70fTsmKH6YAfq1dpRFXpdwG6S52FnU6t%2B46RdQWRMC3HaCbWGnZABZ%2B3bJp%2Bb1BNd6ga1DV&X-Amz-Signature=659f81b73b2fbc8e8affa1c21df0fd45ccffbd26a1efb6cf8fc728824b5d950f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
